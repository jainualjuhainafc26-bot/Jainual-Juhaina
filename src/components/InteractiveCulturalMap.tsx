import { useMemo, useState } from 'react';
import { geoMercator, geoNaturalEarth1, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
import type { FeatureCollection, Geometry } from 'geojson';
import worldTopology from 'world-atlas/countries-110m.json';
import { ArrowUpRight, Compass, Globe, MapPin, Sparkles } from 'lucide-react';
import { INDIAN_STATES_AND_UTS } from '../data/indianStates';
import { WORLD_COUNTRIES } from '../data/worldCuisines';
import { getDishesByIds } from '../data/dishes';
import { DishDossier, IndiaZone } from '../types/heritage';

interface InteractiveCulturalMapProps {
  mapMode: 'world' | 'india';
  onMapModeChange: (mode: 'world' | 'india') => void;
  selectedCountryId: string;
  onSelectCountry: (countryId: string) => void;
  selectedStateId: string;
  onSelectState: (stateId: string) => void;
  onOpenDish: (dish: DishDossier) => void;
}

const INDIA_ZONES: ('All' | IndiaZone)[] = [
  'All',
  'South',
  'West',
  'North',
  'East',
  'Central',
  'Northeast',
  'Union Territories',
];

interface CountryProperties {
  name?: string;
}

export function InteractiveCulturalMap({
  mapMode,
  onMapModeChange,
  selectedCountryId,
  onSelectCountry,
  selectedStateId,
  onSelectState,
  onOpenDish,
}: InteractiveCulturalMapProps) {
  const [hoveredName, setHoveredName] = useState<string | null>(null);
  const [indiaZoneFilter, setIndiaZoneFilter] = useState<'All' | IndiaZone>('All');

  const countriesGeo = useMemo(() => {
    const topo = worldTopology as {
      type: 'Topology';
      objects: { countries: unknown };
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return feature(topo as any, topo.objects.countries as any) as unknown as FeatureCollection<
      Geometry,
      CountryProperties
    >;
  }, []);

  const worldProjection = useMemo(
    () => geoNaturalEarth1().scale(178).translate([470, 265]),
    []
  );

  const worldPathGenerator = useMemo(
    () => geoPath().projection(worldProjection),
    [worldProjection]
  );

  const indiaProjection = useMemo(
    () => geoMercator().center([82.8, 22.4]).scale(980).translate([310, 295]),
    []
  );

  const indiaPathGenerator = useMemo(
    () => geoPath().projection(indiaProjection),
    [indiaProjection]
  );

  // Filter nearby South Asian geometries for authentic India + island context
  const indiaContextFeatures = useMemo(() => {
    const allowedIds = new Set(['356', '144', '524', '064', '050', '586', '104']);
    return countriesGeo.features.filter((f) => allowedIds.has(String(f.id ?? '')));
  }, [countriesGeo]);

  const activeCountry = useMemo(
    () => WORLD_COUNTRIES.find((c) => c.id === selectedCountryId) ?? WORLD_COUNTRIES[0],
    [selectedCountryId]
  );

  const activeState = useMemo(
    () =>
      INDIAN_STATES_AND_UTS.find((s) => s.id === selectedStateId) ??
      INDIAN_STATES_AND_UTS[0],
    [selectedStateId]
  );

  const filteredIndianStates = useMemo(() => {
    if (indiaZoneFilter === 'All') return INDIAN_STATES_AND_UTS;
    return INDIAN_STATES_AND_UTS.filter((s) => s.zone === indiaZoneFilter);
  }, [indiaZoneFilter]);

  const activeCountryDishes = useMemo(
    () => getDishesByIds(activeCountry.featuredDishIds),
    [activeCountry]
  );

  const activeStateDishes = useMemo(
    () => getDishesByIds(activeState.featuredDishIds),
    [activeState]
  );

  const countryByIso = useMemo(() => {
    const map = new Map<string, (typeof WORLD_COUNTRIES)[number]>();
    WORLD_COUNTRIES.forEach((c) => map.set(c.isoNumeric, c));
    return map;
  }, []);

  return (
    <section
      id="cultural-map"
      aria-labelledby="cultural-map-heading"
      className="border-b border-[#DED6C6] bg-[#F2EDE4]/45"
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 py-14 lg:py-20">
        {/* Section Header & Dual-Atlas Workspace Switch */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#DED6C6]">
          <div className="space-y-2 max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-widest text-[#9A3412]">
              Interactive Cultural Food Atlas
            </div>
            <h2
              id="cultural-map-heading"
              className="font-serif text-3xl sm:text-4xl font-semibold text-[#1C1917]"
            >
              Travel Across Food Cultures by Country &amp; Indian State
            </h2>
            <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
              Select any highlighted country on the global map or switch into the India sub-atlas to explore all
              28 States and 8 Union Territories—uncovering famous dishes, forgotten regional recipes, local
              ingredients, and hearth techniques.
            </p>
          </div>

          {/* Interactive Mode Switcher (Allowed functional tabs) */}
          <div
            role="tablist"
            aria-label="Cultural Map Mode"
            className="inline-flex items-center p-1 bg-[#E7E0D3] border border-[#D6CEBE] self-start lg:self-auto shrink-0"
          >
            <button
              type="button"
              role="tab"
              aria-selected={mapMode === 'world'}
              onClick={() => onMapModeChange('world')}
              className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                mapMode === 'world'
                  ? 'bg-[#FBF9F5] text-[#1C1917] shadow-xs'
                  : 'text-[#57534E] hover:text-[#1C1917]'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>World Cultural Map</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={mapMode === 'india'}
              onClick={() => onMapModeChange('india')}
              className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                mapMode === 'india'
                  ? 'bg-[#FBF9F5] text-[#1C1917] shadow-xs'
                  : 'text-[#57534E] hover:text-[#1C1917]'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>India: 28 States &amp; 8 UTs</span>
            </button>
          </div>
        </div>

        {/* Main Map + Curatorial Dossier Split */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 pt-8 items-start">
          {/* Left Column: Interactive SVG Cartography + Region Index */}
          <div className="xl:col-span-7 space-y-6">
            <div className="border border-[#D6CEBE] bg-[#FBF9F5] p-3 sm:p-4">
              {/* Map Toolbar Strip */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-3 border-b border-[#E7E0D3]">
                <div className="text-xs font-mono text-[#57534E]">
                  {mapMode === 'world'
                    ? 'CARTOGRAPHY · NATURAL EARTH PROJECTION · CLICK HIGHLIGHTED REGIONS'
                    : 'CARTOGRAPHY · INDIA SUB-ATLAS · 28 STATES & 8 UNION TERRITORIES'}
                </div>
                <div className="text-xs font-medium text-[#9A3412] min-h-[18px]">
                  {hoveredName ? `Inspecting: ${hoveredName}` : 'Hover or select a marker'}
                </div>
              </div>

              {mapMode === 'world' ? (
                <div className="relative bg-[#F5F1E8] border border-[#E7E0D3] overflow-hidden">
                  <svg
                    viewBox="0 0 960 500"
                    className="w-full h-auto block select-none"
                    role="img"
                    aria-label="Interactive World Cultural Food Heritage Map"
                  >
                    <rect width="960" height="500" fill="#F4EFE4" />
                    {/* Subtle graticule horizon lines */}
                    {[125, 250, 375].map((y) => (
                      <line
                        key={y}
                        x1="0"
                        y1={y}
                        x2="960"
                        y2={y}
                        stroke="#E7DFCE"
                        strokeWidth="0.75"
                        strokeDasharray="3 4"
                      />
                    ))}

                    <g>
                      {countriesGeo.features.map((feat, idx) => {
                        const iso = String(feat.id ?? '').padStart(3, '0');
                        const archived = countryByIso.get(iso);
                        const isSelected = archived?.id === activeCountry.id;
                        const d = worldPathGenerator(feat) ?? '';
                        if (!d) return null;

                        return (
                          <path
                            key={`${iso}-${idx}`}
                            d={d}
                            fill={
                              isSelected
                                ? '#9A3412'
                                : archived
                                  ? '#C97B53'
                                  : '#E3DBC9'
                            }
                            fillOpacity={isSelected ? 0.92 : archived ? 0.72 : 0.95}
                            stroke="#FBF9F5"
                            strokeWidth={isSelected ? 1.1 : 0.6}
                            className={
                              archived
                                ? 'cursor-pointer transition-colors duration-150 hover:fill-[#9A3412]'
                                : 'transition-colors duration-150'
                            }
                            onMouseEnter={() =>
                              setHoveredName(archived?.name ?? feat.properties?.name ?? null)
                            }
                            onMouseLeave={() => setHoveredName(null)}
                            onClick={() => {
                              if (archived) {
                                onSelectCountry(archived.id);
                              }
                            }}
                          />
                        );
                      })}
                    </g>

                    {/* Clickable Country Anchor Pins */}
                    <g>
                      {WORLD_COUNTRIES.map((country) => {
                        const projected = worldProjection(country.coordinates);
                        if (!projected) return null;
                        const [cx, cy] = projected;
                        const isSelected = country.id === activeCountry.id;
                        return (
                          <g
                            key={country.id}
                            transform={`translate(${cx}, ${cy})`}
                            className="cursor-pointer"
                            onMouseEnter={() => setHoveredName(country.name)}
                            onMouseLeave={() => setHoveredName(null)}
                            onClick={() => onSelectCountry(country.id)}
                          >
                            <circle
                              r={isSelected ? 7.5 : 4.5}
                              fill={isSelected ? '#1C1917' : '#FBF9F5'}
                              stroke="#9A3412"
                              strokeWidth={isSelected ? 2.5 : 1.75}
                            />
                            {isSelected && (
                              <text
                                y={-12}
                                textAnchor="middle"
                                className="fill-[#1C1917] font-sans text-[11px] font-semibold pointer-events-none"
                                style={{ paintOrder: 'stroke', stroke: '#FBF9F5', strokeWidth: '3px' }}
                              >
                                {country.name}
                              </text>
                            )}
                          </g>
                        );
                      })}
                    </g>
                  </svg>
                </div>
              ) : (
                <div className="relative bg-[#F5F1E8] border border-[#E7E0D3] overflow-hidden">
                  <svg
                    viewBox="0 0 640 590"
                    className="w-full max-h-[540px] mx-auto block select-none"
                    role="img"
                    aria-label="Interactive Map of All 28 Indian States and 8 Union Territories"
                  >
                    <rect width="640" height="590" fill="#F4EFE4" />
                    {/* Surrounding maritime context */}
                    <g>
                      {indiaContextFeatures.map((feat, idx) => {
                        const iso = String(feat.id ?? '');
                        const isIndia = iso === '356';
                        const d = indiaPathGenerator(feat) ?? '';
                        if (!d) return null;
                        return (
                          <path
                            key={`${iso}-${idx}`}
                            d={d}
                            fill={isIndia ? '#EBE3D3' : '#E7DFCE'}
                            fillOpacity={isIndia ? 1 : 0.45}
                            stroke={isIndia ? '#A89E8A' : '#D6CEBE'}
                            strokeWidth={isIndia ? 1.25 : 0.75}
                          />
                        );
                      })}
                    </g>

                    {/* Ocean Labels */}
                    <text
                      x="110"
                      y="430"
                      className="fill-[#8B8270] font-serif italic text-[13px] pointer-events-none"
                    >
                      Arabian Sea
                    </text>
                    <text
                      x="430"
                      y="420"
                      className="fill-[#8B8270] font-serif italic text-[13px] pointer-events-none"
                    >
                      Bay of Bengal
                    </text>

                    {/* Plotted Indian States & Union Territories */}
                    <g>
                      {filteredIndianStates.map((st) => {
                        const projected = indiaProjection(st.coordinates);
                        if (!projected) return null;
                        const [cx, cy] = projected;
                        const isSelected = st.id === activeState.id;
                        const isUT = st.type === 'Union Territory';
                        return (
                          <g
                            key={st.id}
                            transform={`translate(${cx}, ${cy})`}
                            className="cursor-pointer"
                            onMouseEnter={() => setHoveredName(`${st.name} (${st.type})`)}
                            onMouseLeave={() => setHoveredName(null)}
                            onClick={() => onSelectState(st.id)}
                          >
                            {isUT ? (
                              <rect
                                x={isSelected ? -6.5 : -4.5}
                                y={isSelected ? -6.5 : -4.5}
                                width={isSelected ? 13 : 9}
                                height={isSelected ? 13 : 9}
                                fill={isSelected ? '#14532D' : '#FBF9F5'}
                                stroke={isSelected ? '#1C1917' : '#14532D'}
                                strokeWidth={isSelected ? 2.2 : 1.5}
                              />
                            ) : (
                              <circle
                                r={isSelected ? 7.5 : 5}
                                fill={isSelected ? '#9A3412' : '#FBF9F5'}
                                stroke={isSelected ? '#1C1917' : '#9A3412'}
                                strokeWidth={isSelected ? 2.2 : 1.5}
                              />
                            )}
                            {isSelected && (
                              <text
                                y={-12}
                                textAnchor="middle"
                                className="fill-[#1C1917] font-sans text-[12px] font-semibold pointer-events-none"
                                style={{ paintOrder: 'stroke', stroke: '#FBF9F5', strokeWidth: '3.5px' }}
                              >
                                {st.name}
                              </text>
                            )}
                          </g>
                        );
                      })}
                    </g>
                  </svg>
                </div>
              )}

              {/* Map Legend */}
              <div className="pt-3 flex flex-wrap items-center justify-between gap-4 text-xs text-[#57534E]">
                {mapMode === 'world' ? (
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="inline-flex items-center gap-1.5">
                      <span className="w-3 h-3 bg-[#9A3412] inline-block" /> Selected Country
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <span className="w-3 h-3 bg-[#C97B53] inline-block" /> Archived Food Culture
                    </span>
                  </div>
                ) : (
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="inline-flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full border-2 border-[#9A3412] bg-[#FBF9F5] inline-block" />{' '}
                      28 States
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <span className="w-3 h-3 border-2 border-[#14532D] bg-[#FBF9F5] inline-block" />{' '}
                      8 Union Territories
                    </span>
                  </div>
                )}

                {mapMode === 'world' && activeCountry.id === 'india' && (
                  <button
                    type="button"
                    onClick={() => onMapModeChange('india')}
                    className="font-semibold text-[#9A3412] hover:underline cursor-pointer"
                  >
                    Open India 36-Region Sub-Atlas →
                  </button>
                )}
              </div>
            </div>

            {/* Quick Selector Directory Below Map */}
            {mapMode === 'world' ? (
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-[#57534E]">
                  Archived World Regions ({WORLD_COUNTRIES.length})
                </div>
                <div className="flex flex-wrap gap-2">
                  {WORLD_COUNTRIES.map((country) => {
                    const isActive = country.id === activeCountry.id;
                    return (
                      <button
                        key={country.id}
                        type="button"
                        onClick={() => onSelectCountry(country.id)}
                        className={`px-3 py-1.5 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                          isActive
                            ? 'bg-[#9A3412] text-[#FBF9F5] border-[#9A3412]'
                            : 'bg-[#FBF9F5] text-[#1C1917] border-[#D6CEBE] hover:border-[#9A3412]'
                        }`}
                      >
                        {country.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div id="indian-states" className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#57534E]">
                    Select Any Indian State or Union Territory ({filteredIndianStates.length})
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {INDIA_ZONES.map((zone) => (
                      <button
                        key={zone}
                        type="button"
                        onClick={() => setIndiaZoneFilter(zone)}
                        className={`px-2.5 py-1 text-[11px] font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                          indiaZoneFilter === zone
                            ? 'bg-[#1C1917] text-[#FBF9F5]'
                            : 'bg-[#E7E0D3]/70 text-[#57534E] hover:text-[#1C1917]'
                        }`}
                      >
                        {zone}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1.5">
                  {filteredIndianStates.map((st) => {
                    const isActive = st.id === activeState.id;
                    return (
                      <button
                        key={st.id}
                        type="button"
                        onClick={() => onSelectState(st.id)}
                        className={`px-2.5 py-2 text-left text-xs border transition-colors truncate cursor-pointer ${
                          isActive
                            ? 'bg-[#9A3412] text-[#FBF9F5] border-[#9A3412] font-semibold'
                            : 'bg-[#FBF9F5] text-[#1C1917] border-[#DED6C6] hover:border-[#9A3412]'
                        }`}
                        title={`${st.name} (${st.type})`}
                      >
                        {st.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Curatorial Region Dossier Panel */}
          <div className="xl:col-span-5 border border-[#D6CEBE] bg-[#FBF9F5] p-6 sm:p-8 space-y-6">
            {mapMode === 'world' ? (
              <>
                <div className="pb-4 border-b border-[#E7E0D3] space-y-2">
                  <div className="flex items-center justify-between gap-4 text-xs font-mono text-[#57534E]">
                    <span>{activeCountry.regionLabel}</span>
                    <span>ISO {activeCountry.isoNumeric}</span>
                  </div>
                  <h3 className="font-serif text-3xl font-semibold text-[#1C1917]">
                    {activeCountry.name}
                  </h3>
                  <p className="text-xs text-[#57534E]">
                    Culinary Communities: {activeCountry.communities.join(' · ')}
                  </p>
                </div>

                {/* Cultural Food Story */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#9A3412]">
                    Cultural Food Story
                  </h4>
                  <p className="text-sm text-[#1C1917] leading-relaxed">
                    {activeCountry.culturalStory}
                  </p>
                </div>

                {/* Famous Traditional Dishes + Direct Dossier Links */}
                <div className="space-y-2.5 pt-2 border-t border-[#E7E0D3]">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#57534E]">
                    Traditional Dishes &amp; Full Dossiers
                  </h4>
                  <div className="space-y-2">
                    {activeCountryDishes.map((dish) => (
                      <button
                        key={dish.id}
                        type="button"
                        onClick={() => onOpenDish(dish)}
                        className="w-full flex items-center justify-between gap-3 p-3 text-left border border-[#E7E0D3] bg-[#F2EDE4]/50 hover:border-[#9A3412] hover:bg-[#F2EDE4] transition-colors cursor-pointer group"
                      >
                        <div className="min-w-0">
                          <div className="font-serif text-lg font-semibold text-[#1C1917] group-hover:text-[#9A3412] truncate">
                            {dish.traditionalName}
                          </div>
                          <div className="text-xs text-[#57534E] truncate">{dish.summary}</div>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-[#9A3412] shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Forgotten / Endangered + Local Ingredients + Cooking Methods */}
                <div className="space-y-4 pt-2 border-t border-[#E7E0D3]">
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#14532D] mb-1.5">
                      Endangered &amp; Ancestral Traditions
                    </h4>
                    {activeCountry.endangeredOrForgotten.map((item) => (
                      <div key={item.name} className="text-sm text-[#1C1917]">
                        <span className="font-semibold">{item.name}:</span>{' '}
                        <span className="text-[#57534E]">{item.note}</span>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#57534E] mb-1.5">
                      Local Ingredients
                    </h4>
                    <p className="text-sm text-[#1C1917]">
                      {activeCountry.localIngredients.join(' · ')}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#57534E] mb-1.5">
                      Traditional Cooking Methods
                    </h4>
                    <p className="text-sm text-[#1C1917]">
                      {activeCountry.cookingMethods.join(' · ')}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#57534E] mb-1.5">
                      Festival &amp; Ceremonial Foods
                    </h4>
                    {activeCountry.festivalFoods.map((ff) => (
                      <div key={ff.occasion} className="text-sm text-[#1C1917]">
                        <span className="font-semibold">{ff.occasion}</span> — {ff.dish}:{' '}
                        <span className="text-[#57534E]">{ff.context}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {activeCountry.id === 'india' && (
                  <button
                    type="button"
                    onClick={() => onMapModeChange('india')}
                    className="w-full py-3 px-4 text-xs font-semibold text-[#FBF9F5] bg-[#9A3412] hover:bg-[#7C2D12] transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>Explore All 28 Indian States &amp; 8 Union Territories</span>
                  </button>
                )}
              </>
            ) : (
              <>
                <div className="pb-4 border-b border-[#E7E0D3] space-y-2">
                  <div className="flex items-center justify-between gap-4 text-xs font-mono text-[#57534E]">
                    <span>
                      {activeState.type} · {activeState.zone}
                    </span>
                    <span>Capital: {activeState.capital}</span>
                  </div>
                  <h3 className="font-serif text-3xl font-semibold text-[#1C1917]">
                    {activeState.name}
                  </h3>
                  <p className="text-xs text-[#57534E]">
                    Communities: {activeState.communities.join(' · ')}
                  </p>
                </div>

                {/* Cultural Food Story */}
                <div className="space-y-1.5">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#9A3412]">
                    Cultural Food Story
                  </h4>
                  <p className="text-sm text-[#1C1917] leading-relaxed">
                    {activeState.culturalStory}
                  </p>
                </div>

                {/* Famous Traditional Dishes */}
                <div className="space-y-2.5 pt-2 border-t border-[#E7E0D3]">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#57534E]">
                    Famous Traditional Dishes ({activeState.famousDishes.join(', ')})
                  </h4>
                  <div className="space-y-2">
                    {activeStateDishes.map((dish) => (
                      <button
                        key={dish.id}
                        type="button"
                        onClick={() => onOpenDish(dish)}
                        className="w-full flex items-center justify-between gap-3 p-3 text-left border border-[#E7E0D3] bg-[#F2EDE4]/50 hover:border-[#9A3412] hover:bg-[#F2EDE4] transition-colors cursor-pointer group"
                      >
                        <div className="min-w-0">
                          <div className="font-serif text-lg font-semibold text-[#1C1917] group-hover:text-[#9A3412] truncate">
                            {dish.traditionalName}
                          </div>
                          <div className="text-xs text-[#57534E] truncate">{dish.summary}</div>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-[#9A3412] shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Forgotten Regional Recipes */}
                <div className="space-y-2 pt-2 border-t border-[#E7E0D3]">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#14532D] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Forgotten &amp; Regional Recipes</span>
                  </h4>
                  <div className="space-y-2">
                    {activeState.forgottenRecipes.map((rec) => (
                      <div key={rec.name} className="text-sm">
                        <span className="font-semibold text-[#1C1917]">{rec.name}:</span>{' '}
                        <span className="text-[#57534E]">{rec.note}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Local Ingredients, Festival Foods, Cooking Methods */}
                <div className="space-y-3 pt-2 border-t border-[#E7E0D3]">
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#57534E] mb-1">
                      Local Ingredients
                    </h4>
                    <p className="text-sm text-[#1C1917]">
                      {activeState.localIngredients.join(' · ')}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#57534E] mb-1">
                      Festival Foods
                    </h4>
                    <div className="space-y-1.5">
                      {activeState.festivalFoods.map((ff) => (
                        <div key={ff.festival} className="text-sm">
                          <span className="font-semibold text-[#1C1917]">{ff.festival}</span> ({ff.dish}):{' '}
                          <span className="text-[#57534E]">{ff.context}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#57534E] mb-1">
                      Traditional Cooking Methods
                    </h4>
                    <p className="text-sm text-[#1C1917]">
                      {activeState.cookingMethods.join(' · ')}
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
