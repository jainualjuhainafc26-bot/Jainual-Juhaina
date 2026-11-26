import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
}

const NAV_ITEMS = [
  { label: 'World Atlas', href: 'cultural-map' },
  { label: 'Indian States', href: 'indian-states' },
  { label: 'Discovery', href: 'cultural-discovery' },
  { label: 'Food Stories', href: 'food-is-culture' },
  { label: 'Preserve', href: 'preservation-toolkit' },
];

export function Header({ onNavigate }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = (id: string) => {
    setMobileOpen(false);
    onNavigate(id);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/95 backdrop-blur-sm border-b border-[#DED6C6]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="font-serif text-2xl font-semibold tracking-tight text-[#1C1917] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9A3412]"
        >
          Roots &amp; Hearth
        </a>

        {/* Zone 2: 5 concise single-line text links */}
        <nav
          aria-label="Primary Archive Navigation"
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#57534E]"
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => handleLinkClick(item.href)}
              className="hover:text-[#1C1917] hover:underline underline-offset-4 decoration-[#9A3412] transition-colors whitespace-nowrap shrink-0 cursor-pointer py-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9A3412]"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleLinkClick('cultural-map')}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold tracking-wide text-[#FBF9F5] bg-[#9A3412] hover:bg-[#7C2D12] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A3412]"
          >
            Explore Atlas
          </button>

          <button
            type="button"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 text-[#1C1917] border border-[#DED6C6] hover:bg-[#F2EDE4] transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[#DED6C6] bg-[#FBF9F5] px-4 py-4">
          <nav className="flex flex-col divide-y divide-[#E7E0D3]" aria-label="Mobile Navigation">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={() => handleLinkClick(item.href)}
                className="text-left py-3 text-base font-medium text-[#1C1917] hover:text-[#9A3412] transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4">
              <button
                type="button"
                onClick={() => handleLinkClick('cultural-map')}
                className="w-full py-3 px-4 text-sm font-semibold text-[#FBF9F5] bg-[#9A3412] hover:bg-[#7C2D12] transition-colors cursor-pointer"
              >
                Explore Atlas
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
