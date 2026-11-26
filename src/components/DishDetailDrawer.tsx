import { useEffect, useState } from 'react';
import { Bookmark, BookmarkCheck, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { DishDossier } from '../types/heritage';

interface DishDetailDrawerProps {
  dish: DishDossier | null;
  onClose: () => void;
  onSelectDish: (dish: DishDossier) => void;
  allDishes: DishDossier[];
  isBookmarked: boolean;
  onToggleBookmark: (dishId: string) => void;
}

export function DishDetailDrawer({
  dish,
  onClose,
  onSelectDish,
  allDishes,
  isBookmarked,
  onToggleBookmark,
}: DishDetailDrawerProps) {
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setImgError(false);
  }, [dish?.id]);

  useEffect(() => {
    if (!dish) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [dish, onClose]);

  if (!dish) return null;

  const currentIdx = allDishes.findIndex((d) => d.id === dish.id);
  const prevDish = currentIdx > 0 ? allDishes[currentIdx - 1] : null;
  const nextDish =
    currentIdx >= 0 && currentIdx < allDishes.length - 1 ? allDishes[currentIdx + 1] : null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-[#1C1917]/55 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dossier-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl h-full bg-[#FBF9F5] border-l border-[#D6CEBE] overflow-y-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Dossier Top Bar */}
        <div className="sticky top-0 z-10 bg-[#FBF9F5]/95 backdrop-blur-sm border-b border-[#DED6C6] px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs font-mono text-[#57534E] min-w-0">
            <span className="text-[#9A3412] font-medium shrink-0">{dish.accessionCode}</span>
            <span aria-hidden="true">/</span>
            <span className="truncate">
              {dish.origin.country} · {dish.origin.stateOrRegion}
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => onToggleBookmark(dish.id)}
              className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold border transition-colors cursor-pointer ${
                isBookmarked
                  ? 'bg-[#14532D] text-[#FBF9F5] border-[#14532D]'
                  : 'bg-[#F2EDE4] text-[#1C1917] border-[#C7BFA9] hover:border-[#9A3412]'
              }`}
            >
              {isBookmarked ? (
                <>
                  <BookmarkCheck className="w-3.5 h-3.5" />
                  <span>Saved to Heritage List</span>
                </>
              ) : (
                <>
                  <Bookmark className="w-3.5 h-3.5" />
                  <span>Save Dish</span>
                </>
              )}
            </button>

            <button
              type="button"
              aria-label="Close dossier"
              onClick={onClose}
              className="inline-flex items-center justify-center w-9 h-9 border border-[#C7BFA9] bg-[#FBF9F5] text-[#1C1917] hover:bg-[#F2EDE4] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main 10-Point Museum Dossier Body */}
        <div className="p-6 sm:p-10 space-y-10">
          {/* 01. Traditional Name & Origin Header */}
          <div className="space-y-4 pb-6 border-b border-[#DED6C6]">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono uppercase tracking-widest text-[#57534E]">
              <span>01. Traditional Name &amp; Origin</span>
              <span aria-hidden="true">·</span>
              <span>{dish.discoveryTags.season}</span>
              {dish.discoveryTags.isIndigenous && (
                <>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#14532D] font-semibold">Indigenous Knowledge</span>
                </>
              )}
            </div>

            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <h2
                id="dossier-title"
                className="font-serif text-4xl sm:text-5xl font-semibold text-[#1C1917] leading-tight"
              >
                {dish.traditionalName}
              </h2>
              {dish.nativeScriptName && (
                <span className="font-serif text-2xl text-[#9A3412]">
                  {dish.nativeScriptName}
                </span>
              )}
            </div>

            <p className="text-base sm:text-lg text-[#57534E] leading-relaxed max-w-2xl">
              {dish.summary}
            </p>
          </div>

          {/* Gallery Plate + Accession Metadata Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <figure className="lg:col-span-7 border border-[#DED6C6] bg-[#F2EDE4] p-2">
              <div className="aspect-[4/3] bg-[#E7E0D3] overflow-hidden">
                {!imgError ? (
                  <img
                    src={dish.image}
                    alt={dish.imageCaption}
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center p-6 text-center">
                    <span className="font-serif italic text-xl text-[#57534E]">
                      {dish.traditionalName}
                    </span>
                  </div>
                )}
              </div>
              <figcaption className="pt-2 px-1 text-xs font-serif italic text-[#57534E]">
                {dish.imageCaption}
              </figcaption>
            </figure>

            {/* 02 & 03. Region & Community Accession Metadata */}
            <dl className="lg:col-span-5 divide-y divide-[#E7E0D3] border-t border-b border-[#E7E0D3] text-sm">
              <div className="py-3">
                <dt className="text-xs font-mono uppercase tracking-wider text-[#78716C]">
                  02. Country, State &amp; Region
                </dt>
                <dd className="mt-1 font-medium text-[#1C1917]">
                  {dish.origin.country} — {dish.origin.stateOrRegion}
                </dd>
                <dd className="text-xs text-[#57534E] mt-0.5">{dish.origin.subregion}</dd>
              </div>
              <div className="py-3">
                <dt className="text-xs font-mono uppercase tracking-wider text-[#78716C]">
                  03. Cultural &amp; Community Association
                </dt>
                <dd className="mt-1 text-[#1C1917] leading-relaxed">
                  {dish.communityAssociation}
                </dd>
              </div>
              <div className="py-3">
                <dt className="text-xs font-mono uppercase tracking-wider text-[#78716C]">
                  Traditional Vessel &amp; Technique
                </dt>
                <dd className="mt-1 text-[#1C1917]">{dish.preparationAndCooking.vessel}</dd>
                <dd className="text-xs text-[#9A3412] mt-0.5">
                  {dish.preparationAndCooking.technique}
                </dd>
              </div>
              <div className="py-3">
                <dt className="text-xs font-mono uppercase tracking-wider text-[#78716C]">
                  07. Occasions &amp; Festivals
                </dt>
                <dd className="mt-1 text-[#1C1917]">
                  {dish.occasionsAndFestivals.join(' · ')}
                </dd>
              </div>
            </dl>
          </div>

          {/* 04. History & Origin (Careful, non-dogmatic historical prose) */}
          <section className="space-y-2.5 max-w-2xl">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#9A3412]">
              04. History &amp; Origin
            </h3>
            <p className="text-base text-[#1C1917] leading-relaxed first-letter:text-5xl first-letter:font-serif first-letter:font-semibold first-letter:float-left first-letter:mr-3 first-letter:mt-0.5 first-letter:text-[#9A3412]">
              {dish.historyAndOrigin}
            </p>
          </section>

          {/* 05 & 06. Traditional Ingredients + Preparation & Cooking Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-[#DED6C6]">
            <section className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#9A3412]">
                05. Traditional Ingredients
              </h3>
              <ul className="divide-y divide-[#E7E0D3] border-t border-b border-[#E7E0D3]">
                {dish.traditionalIngredients.map((ing) => (
                  <li key={ing.name} className="py-2.5">
                    <div className="text-sm font-semibold text-[#1C1917]">{ing.name}</div>
                    <div className="text-xs text-[#57534E] mt-0.5">{ing.role}</div>
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#9A3412]">
                06. Preparation &amp; Cooking Methods
              </h3>
              <ol className="space-y-3">
                {dish.preparationAndCooking.steps.map((step, index) => (
                  <li key={step} className="flex gap-3 text-sm text-[#1C1917] leading-relaxed">
                    <span className="font-mono text-xs text-[#9A3412] pt-0.5 tabular-nums shrink-0">
                      0{index + 1}.
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </section>
          </div>

          {/* 08. Cultural Symbolism & 09. Modern Evolution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-[#DED6C6]">
            <section className="space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#9A3412]">
                08. Cultural Symbolism &amp; Significance
              </h3>
              <p className="text-sm sm:text-base text-[#1C1917] leading-relaxed">
                {dish.culturalSymbolism}
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#57534E]">
                09. How It Is Changing Across Modern Generations
              </h3>
              <p className="text-sm sm:text-base text-[#1C1917] leading-relaxed">
                {dish.modernEvolution}
              </p>
              {dish.discoveryTags.endangeredContext && (
                <p className="text-xs text-[#9A3412] pt-1 font-medium">
                  Vulnerability Note: {dish.discoveryTags.endangeredContext}
                </p>
              )}
            </section>
          </div>

          {/* 10. How Younger Generations Can Preserve It */}
          <section className="p-6 border border-[#14532D]/30 bg-[#14532D]/[0.04] space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#14532D]">
              10. How Younger Generations Can Preserve This Tradition
            </h3>
            <ul className="space-y-2">
              {dish.preservationActions.map((action) => (
                <li key={action} className="text-sm text-[#1C1917] leading-relaxed flex gap-2.5">
                  <span className="text-[#14532D] font-bold" aria-hidden="true">
                    —
                  </span>
                  <span>{action}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Footer Navigation Between Dossiers */}
          <div className="pt-6 border-t border-[#DED6C6] flex flex-wrap items-center justify-between gap-4">
            {prevDish ? (
              <button
                type="button"
                onClick={() => onSelectDish(prevDish)}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#1C1917] hover:text-[#9A3412] cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous: {prevDish.traditionalName}</span>
              </button>
            ) : (
              <span />
            )}

            {nextDish && (
              <button
                type="button"
                onClick={() => onSelectDish(nextDish)}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#1C1917] hover:text-[#9A3412] cursor-pointer ml-auto"
              >
                <span>Next: {nextDish.traditionalName}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
