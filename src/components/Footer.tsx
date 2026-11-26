interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#FBF9F5] border-t border-[#DED6C6]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 py-12 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 space-y-3">
            <div className="font-serif text-2xl font-semibold text-[#1C1917]">
              Roots &amp; Hearth
            </div>
            <p className="font-serif italic text-xl text-[#9A3412]">
              “Preserving Our Roots, One Culture, One Recipe, One Generation at a Time.”
            </p>
            <p className="text-xs text-[#57534E] leading-relaxed max-w-lg">
              Curatorial Note: Food histories travel across trade routes, seasons, and oral memories.
              Where historical origins remain debated or multi-regional, this archive presents oral traditions
              alongside historical context without claiming singular ownership over shared culinary heritage.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs">
            <div className="space-y-2.5">
              <div className="font-mono uppercase tracking-wider text-[#78716C]">Atlas</div>
              <ul className="space-y-1.5 text-[#1C1917]">
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('cultural-map')}
                    className="hover:text-[#9A3412] cursor-pointer"
                  >
                    World Food Map
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('indian-states')}
                    className="hover:text-[#9A3412] cursor-pointer"
                  >
                    28 Indian States &amp; 8 UTs
                  </button>
                </li>
              </ul>
            </div>

            <div className="space-y-2.5">
              <div className="font-mono uppercase tracking-wider text-[#78716C]">Discovery</div>
              <ul className="space-y-1.5 text-[#1C1917]">
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('cultural-discovery')}
                    className="hover:text-[#9A3412] cursor-pointer"
                  >
                    By Region &amp; Community
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('cultural-discovery')}
                    className="hover:text-[#9A3412] cursor-pointer"
                  >
                    Endangered Traditions
                  </button>
                </li>
              </ul>
            </div>

            <div className="space-y-2.5">
              <div className="font-mono uppercase tracking-wider text-[#78716C]">Stewardship</div>
              <ul className="space-y-1.5 text-[#1C1917]">
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('food-is-culture')}
                    className="hover:text-[#9A3412] cursor-pointer"
                  >
                    Food Is Our Culture
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('preservation-toolkit')}
                    className="hover:text-[#9A3412] cursor-pointer"
                  >
                    Record Family Recipe
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-[#E7E0D3] flex flex-wrap items-center justify-between gap-4 text-xs text-[#78716C]">
          <span>Roots &amp; Hearth · Global Cultural Food Heritage Digital Archive</span>
          <span>Honouring regional variations &amp; indigenous culinary knowledge</span>
        </div>
      </div>
    </footer>
  );
}
