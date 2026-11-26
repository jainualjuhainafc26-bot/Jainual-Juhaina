import { useState } from 'react';
import { ArrowRight, Compass } from 'lucide-react';

interface HeroExhibitionProps {
  onExploreMap: (mode: 'world' | 'india') => void;
  onBrowseArchive: () => void;
  totalDishes: number;
}

const HERO_IMAGE = '/src/assets/images/hero_heritage_table_1795656000744.jpg';

export function HeroExhibition({
  onExploreMap,
  onBrowseArchive,
  totalDishes,
}: HeroExhibitionProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="top" className="border-b border-[#DED6C6]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 pt-10 pb-12 lg:pt-14 lg:pb-16">
        {/* Archival Curatorial Line */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono tracking-wider uppercase text-[#57534E] pb-6 border-b border-[#E7E0D3]">
          <span>Living Cultural Food Archive</span>
          <span aria-hidden="true">·</span>
          <span>28 Indian States &amp; 8 Union Territories</span>
          <span aria-hidden="true">·</span>
          <span>Global Ancestral Traditions</span>
        </div>

        {/* 2-Column Editorial Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-8 lg:pt-10 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-between gap-8">
            <div className="space-y-6">
              <p className="font-serif italic text-xl sm:text-2xl text-[#9A3412] leading-snug">
                “Preserving Our Roots, One Culture, One Recipe, One Generation at a Time.”
              </p>

              <h1 className="font-serif text-4xl sm:text-5xl xl:text-[3.6rem] font-semibold tracking-tight text-[#1C1917] leading-[1.08]">
                A Living World Archive of Traditional Food &amp; Memory
              </h1>

              <p className="text-base sm:text-lg text-[#57534E] leading-relaxed max-w-xl">
                Every traditional dish carries centuries of monsoon calendars, heirloom seeds, clay hearths,
                and community rituals. Explore how families, indigenous stewards, and regional kitchens across
                India and the world keep ancestral culinary identity alive for younger generations.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => onExploreMap('india')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-[#FBF9F5] bg-[#9A3412] hover:bg-[#7C2D12] transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A3412]"
              >
                <Compass className="w-4 h-4" />
                <span>Explore Cultural Atlas</span>
              </button>

              <button
                type="button"
                onClick={onBrowseArchive}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-[#1C1917] border border-[#C7BFA9] bg-[#F2EDE4]/60 hover:bg-[#F2EDE4] transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A3412]"
              >
                <span>Browse {totalDishes} Dish Dossiers</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col">
            <figure className="flex-1 flex flex-col border border-[#DED6C6] bg-[#F2EDE4] p-2.5">
              <div className="relative flex-1 min-h-[280px] lg:min-h-[400px] overflow-hidden bg-[#E7E0D3]">
                {!imgError ? (
                  <img
                    src={HERO_IMAGE}
                    alt="Ancestral harvest table with clay pots, brass vessels, heirloom millets, whole spices, and banana leaf meals"
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center p-8 text-center bg-gradient-to-br from-[#EFE9DD] to-[#DED6C6]">
                    <p className="font-serif italic text-xl text-[#57534E]">
                      Archival Exhibition Plate — Ancestral Clay Hearth &amp; Heirloom Grains
                    </p>
                  </div>
                )}
              </div>
              <figcaption className="pt-2.5 px-1 flex items-center justify-between gap-4 text-xs font-serif italic text-[#57534E]">
                <span>Fig. 0 — Ancestral clay pots, brass vessels, and heirloom millets prepared for community service.</span>
                <span className="font-mono not-italic text-[11px] text-[#78716C] shrink-0">PLATE I</span>
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Full-Width 4-Column Archival Scope Strip */}
        <div className="mt-10 pt-8 border-t border-[#E7E0D3] grid grid-cols-2 lg:grid-cols-4 gap-6">
          <button
            type="button"
            onClick={() => onExploreMap('india')}
            className="text-left group cursor-pointer focus-visible:outline-2 focus-visible:outline-[#9A3412]"
          >
            <div className="font-mono text-2xl sm:text-3xl font-medium text-[#1C1917] tabular-nums group-hover:text-[#9A3412] transition-colors">
              28 + 8
            </div>
            <div className="text-sm font-medium text-[#1C1917] mt-1">Indian States &amp; Union Territories</div>
            <div className="text-xs text-[#57534E] mt-0.5">Famous, forgotten &amp; festival dishes</div>
          </button>

          <button
            type="button"
            onClick={() => onExploreMap('world')}
            className="text-left group cursor-pointer focus-visible:outline-2 focus-visible:outline-[#9A3412]"
          >
            <div className="font-mono text-2xl sm:text-3xl font-medium text-[#1C1917] tabular-nums group-hover:text-[#9A3412] transition-colors">
              18+
            </div>
            <div className="text-sm font-medium text-[#1C1917] mt-1">Global Culinary Traditions</div>
            <div className="text-xs text-[#57534E] mt-0.5">Asia, Europe, Africa, Americas &amp; Levant</div>
          </button>

          <button
            type="button"
            onClick={onBrowseArchive}
            className="text-left group cursor-pointer focus-visible:outline-2 focus-visible:outline-[#9A3412]"
          >
            <div className="font-mono text-2xl sm:text-3xl font-medium text-[#1C1917] tabular-nums group-hover:text-[#9A3412] transition-colors">
              {totalDishes}
            </div>
            <div className="text-sm font-medium text-[#1C1917] mt-1">10-Point Dish Dossiers</div>
            <div className="text-xs text-[#57534E] mt-0.5">Origin, technique, symbolism &amp; preservation</div>
          </button>

          <div className="text-left">
            <div className="font-mono text-2xl sm:text-3xl font-medium text-[#1C1917] tabular-nums">
              8
            </div>
            <div className="text-sm font-medium text-[#1C1917] mt-1">Cultural Discovery Lenses</div>
            <div className="text-xs text-[#57534E] mt-0.5">Communities, seasons, festivals &amp; endangered</div>
          </div>
        </div>
      </div>
    </section>
  );
}
