import { useMemo, useState } from 'react';
import { ArrowRight, Search, X } from 'lucide-react';
import { ALL_DISHES } from '../data/dishes';
import { DishDossier, DiscoveryLens } from '../types/heritage';

interface CulturalDiscoveryProps {
  onOpenDish: (dish: DishDossier) => void;
  bookmarkedIds: string[];
}

const LENS_OPTIONS: { id: DiscoveryLens; label: string }[] = [
  { id: 'all', label: 'All Archive' },
  { id: 'country', label: 'By Country' },
  { id: 'state', label: 'By Indian State' },
  { id: 'community', label: 'By Community' },
  { id: 'festival', label: 'Festival Foods' },
  { id: 'seasonal', label: 'Seasonal Collections' },
  { id: 'indigenous', label: 'Indigenous & Ancestral' },
  { id: 'technique', label: 'Cooking Techniques' },
  { id: 'endangered', label: 'Forgotten & Endangered' },
];

export function CulturalDiscovery({ onOpenDish, bookmarkedIds }: CulturalDiscoveryProps) {
  const [activeLens, setActiveLens] = useState<DiscoveryLens>('all');
  const [subFilter, setSubFilter] = useState<string>('All');
  const [query, setQuery] = useState<string>('');
  const [visibleCount, setVisibleCount] = useState<number>(12);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  // Compute dynamic sub-filter choices based on active discovery lens
  const subFilterOptions = useMemo(() => {
    const set = new Set<string>();
    if (activeLens === 'country') {
      ALL_DISHES.forEach((d) => set.add(d.origin.country));
    } else if (activeLens === 'state') {
      ALL_DISHES.filter((d) => d.origin.country === 'India').forEach((d) =>
        set.add(d.origin.stateOrRegion)
      );
    } else if (activeLens === 'community') {
      ALL_DISHES.forEach((d) => set.add(d.discoveryTags.community));
    } else if (activeLens === 'festival') {
      ALL_DISHES.filter((d) => d.discoveryTags.festival).forEach((d) =>
        set.add(d.discoveryTags.festival!)
      );
    } else if (activeLens === 'seasonal') {
      ['Winter', 'Summer', 'Monsoon', 'Spring', 'Autumn', 'Year-round'].forEach((s) =>
        set.add(s)
      );
    } else if (activeLens === 'technique') {
      [
        'Fermentation',
        'Steaming',
        'Ember',
        'Clay',
        'Stone',
        'Smoking',
      ].forEach((t) => set.add(t));
    }
    return ['All', ...Array.from(set).sort()];
  }, [activeLens]);

  const handleLensChange = (lens: DiscoveryLens) => {
    setActiveLens(lens);
    setSubFilter('All');
    setVisibleCount(12);
  };

  const filteredDishes = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ALL_DISHES.filter((dish) => {
      // Lens filter
      if (activeLens === 'country' && subFilter !== 'All') {
        if (dish.origin.country !== subFilter) return false;
      }
      if (activeLens === 'state') {
        if (dish.origin.country !== 'India') return false;
        if (subFilter !== 'All' && dish.origin.stateOrRegion !== subFilter) return false;
      }
      if (activeLens === 'community' && subFilter !== 'All') {
        if (dish.discoveryTags.community !== subFilter) return false;
      }
      if (activeLens === 'festival') {
        if (!dish.discoveryTags.festival) return false;
        if (subFilter !== 'All' && dish.discoveryTags.festival !== subFilter) return false;
      }
      if (activeLens === 'seasonal' && subFilter !== 'All') {
        if (!dish.discoveryTags.season.toLowerCase().includes(subFilter.toLowerCase())) {
          return false;
        }
      }
      if (activeLens === 'indigenous' && !dish.discoveryTags.isIndigenous) {
        return false;
      }
      if (activeLens === 'technique' && subFilter !== 'All') {
        const techText =
          `${dish.discoveryTags.technique} ${dish.preparationAndCooking.technique} ${dish.preparationAndCooking.vessel}`.toLowerCase();
        if (!techText.includes(subFilter.toLowerCase())) return false;
      }
      if (activeLens === 'endangered' && !dish.discoveryTags.isEndangered) {
        return false;
      }

      // Search query
      if (q) {
        const haystack = [
          dish.traditionalName,
          dish.nativeScriptName ?? '',
          dish.origin.country,
          dish.origin.stateOrRegion,
          dish.communityAssociation,
          dish.summary,
          dish.discoveryTags.technique,
          dish.discoveryTags.festival ?? '',
          ...dish.traditionalIngredients.map((i) => i.name),
        ]
          .join(' ')
          .toLowerCase();
        if (!haystack.includes(q)) return false;
      }

      return true;
    });
  }, [activeLens, subFilter, query]);

  const displayedDishes = filteredDishes.slice(0, visibleCount);

  return (
    <section
      id="cultural-discovery"
      aria-labelledby="discovery-heading"
      className="border-b border-[#DED6C6] bg-[#FBF9F5]"
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 py-14 lg:py-20">
        {/* Header + Search Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#DED6C6]">
          <div className="space-y-2 max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-widest text-[#9A3412]">
              Curated Cultural Food Discovery
            </div>
            <h2
              id="discovery-heading"
              className="font-serif text-3xl sm:text-4xl font-semibold text-[#1C1917]"
            >
              Explore Traditional Dishes by Origin, Season, Ritual &amp; Craft
            </h2>
            <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
              Every dish dossier documents ten cultural dimensions—from ancestral ingredients and vessels to
              how the dish is evolving and how younger generations can keep it alive.
            </p>
          </div>

          <div className="w-full lg:w-80 shrink-0">
            <label htmlFor="archive-search" className="sr-only">
              Search dishes, states, countries, ingredients, or communities
            </label>
            <div className="relative flex items-center border border-[#C7BFA9] bg-[#F2EDE4]/50 focus-within:border-[#9A3412]">
              <Search className="w-4 h-4 text-[#57534E] ml-3 shrink-0" />
              <input
                id="archive-search"
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setVisibleCount(12);
                }}
                placeholder="Search dish, millet, festival, state..."
                className="w-full px-3 py-2.5 text-sm bg-transparent text-[#1C1917] placeholder:text-[#78716C] focus:outline-none"
              />
              {query && (
                <button
                  type="button"
                  aria-label="Clear search"
                  onClick={() => setQuery('')}
                  className="p-2 text-[#57534E] hover:text-[#1C1917] cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* 8 Interactive Discovery Lenses */}
        <div className="pt-6 space-y-4">
          <div
            role="tablist"
            aria-label="Cultural Food Discovery Lenses"
            className="flex flex-wrap gap-1.5"
          >
            {LENS_OPTIONS.map((lens) => {
              const isActive = activeLens === lens.id;
              return (
                <button
                  key={lens.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleLensChange(lens.id)}
                  className={`px-3.5 py-2 text-xs font-semibold border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#9A3412] text-[#FBF9F5] border-[#9A3412]'
                      : 'bg-[#F2EDE4]/60 text-[#57534E] border-[#DED6C6] hover:text-[#1C1917] hover:border-[#9A3412]'
                  }`}
                >
                  {lens.label}
                </button>
              );
            })}
          </div>

          {/* Secondary Sub-Filter Row when applicable */}
          {subFilterOptions.length > 1 && (
            <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#E7E0D3]">
              <span className="text-xs font-mono uppercase tracking-wider text-[#78716C] shrink-0 mr-1">
                Refine:
              </span>
              {subFilterOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => {
                    setSubFilter(opt);
                    setVisibleCount(12);
                  }}
                  className={`px-2.5 py-1 text-xs transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    subFilter === opt
                      ? 'bg-[#1C1917] text-[#FBF9F5] font-medium'
                      : 'text-[#57534E] hover:text-[#1C1917] hover:bg-[#F2EDE4]'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          )}

          {/* Results Count */}
          <div className="flex items-center justify-between text-xs font-mono text-[#57534E] pt-1">
            <span className="tabular-nums">
              SHOWING {displayedDishes.length} OF {filteredDishes.length} ARCHIVED TRADITIONS
            </span>
            {activeLens === 'endangered' && (
              <span className="text-[#9A3412] font-sans font-medium">
                Highlighting vulnerable &amp; disappearing culinary crafts
              </span>
            )}
          </div>
        </div>

        {/* Archive Card Grid (Zero-Pill Metadata, Single-Level Hairline Border) */}
        {displayedDishes.length === 0 ? (
          <div className="mt-8 p-12 border border-[#DED6C6] bg-[#F2EDE4]/40 text-center space-y-3">
            <p className="font-serif text-2xl text-[#1C1917]">
              No matching cultural dishes found in this view.
            </p>
            <p className="text-sm text-[#57534E]">
              Try clearing your search term or switching back to All Archive.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveLens('all');
                setSubFilter('All');
                setQuery('');
              }}
              className="mt-2 px-4 py-2 text-xs font-semibold text-[#FBF9F5] bg-[#9A3412] hover:bg-[#7C2D12] cursor-pointer"
            >
              Reset Discovery Filters
            </button>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedDishes.map((dish) => {
              const isBookmarked = bookmarkedIds.includes(dish.id);
              const imgFailed = failedImages[dish.id];

              return (
                <article
                  key={dish.id}
                  className="flex flex-col border border-[#DED6C6] bg-[#FBF9F5] hover:border-[#9A3412] transition-colors group"
                >
                  <button
                    type="button"
                    onClick={() => onOpenDish(dish)}
                    className="text-left flex-1 flex flex-col cursor-pointer focus-visible:outline-2 focus-visible:outline-[#9A3412]"
                  >
                    <div className="aspect-[4/3] w-full bg-[#EFE9DD] overflow-hidden border-b border-[#E7E0D3]">
                      {!imgFailed ? (
                        <img
                          src={dish.image}
                          alt={dish.imageCaption}
                          referrerPolicy="no-referrer"
                          onError={() =>
                            setFailedImages((prev) => ({ ...prev, [dish.id]: true }))
                          }
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center p-6 text-center bg-gradient-to-br from-[#EFE9DD] to-[#DED6C6]">
                          <span className="font-serif italic text-lg text-[#57534E]">
                            {dish.traditionalName}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between gap-4">
                      <div className="space-y-2.5">
                        {/* Clean Unboxed Metadata with Typographic Separators (Zero Pills!) */}
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#57534E]">
                          <span className="font-mono text-[11px] text-[#78716C]">
                            {dish.accessionCode}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span className="font-medium text-[#9A3412]">
                            {dish.origin.country === 'India'
                              ? `${dish.origin.stateOrRegion}, India`
                              : dish.origin.country}
                          </span>
                          {dish.discoveryTags.isEndangered && (
                            <>
                              <span aria-hidden="true">·</span>
                              <span className="font-medium text-[#14532D]">Vulnerable Craft</span>
                            </>
                          )}
                        </div>

                        <div>
                          <h3 className="font-serif text-2xl font-semibold text-[#1C1917] group-hover:text-[#9A3412] transition-colors leading-snug">
                            {dish.traditionalName}
                          </h3>
                          {dish.nativeScriptName &&
                            dish.nativeScriptName !== dish.traditionalName && (
                              <div className="text-xs text-[#78716C] mt-0.5">
                                {dish.nativeScriptName}
                              </div>
                            )}
                        </div>

                        <p className="text-sm text-[#57534E] leading-relaxed line-clamp-3">
                          {dish.summary}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[#E7E0D3] flex items-center justify-between text-xs">
                        <span className="text-[#57534E] truncate max-w-[65%]">
                          {dish.discoveryTags.technique}
                        </span>
                        <span className="inline-flex items-center gap-1 font-semibold text-[#9A3412] shrink-0">
                          {isBookmarked ? 'Saved · Read' : 'Read Dossier'}
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </button>
                </article>
              );
            })}
          </div>
        )}

        {/* Load More Pagination */}
        {visibleCount < filteredDishes.length && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount((c) => c + 12)}
              className="px-6 py-3 text-xs font-semibold tracking-wide text-[#1C1917] border border-[#C7BFA9] bg-[#F2EDE4] hover:border-[#9A3412] hover:text-[#9A3412] transition-colors cursor-pointer"
            >
              Load More Traditions ({filteredDishes.length - visibleCount} remaining)
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
