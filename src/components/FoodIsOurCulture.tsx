import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { DishDossier } from '../types/heritage';

interface FoodIsOurCultureProps {
  onOpenDishById: (id: string) => void;
  dishes: DishDossier[];
}

interface CultureThread {
  id: string;
  index: string;
  pillar: string;
  title: string;
  essay: string;
  quote: string;
  exampleDishId: string;
  exampleLabel: string;
  image: string;
  caption: string;
}

const THREADS: CultureThread[] = [
  {
    id: 'families',
    index: '01',
    pillar: 'Families',
    title: 'Kitchens Where Hands Remember Before Words',
    essay:
      'Long before recipes were written in grams or minutes, culinary memory lived in muscle memory—grandmothers testing the warmth of a clay tawa with their fingertips, mothers judging fermentation by scent, and children rolling dough beside them.',
    quote:
      '“Every pinch of dough carries the thumbprint of the person who shaped it for those they love.”',
    exampleDishId: 'sarva-pindi',
    exampleLabel: 'Sarva Pindi · Telangana',
    image: '/src/assets/images/ancestral_cooking_fire_1795656002500.jpg',
    caption: 'Fig. A — Wood-fired family hearths across generations.',
  },
  {
    id: 'generations',
    index: '02',
    pillar: 'Generations',
    title: 'An Unbroken Oral Bridge Across Time',
    essay:
      'When younger generations step into the kitchen to ask elders why a bean is soaked overnight or why a wooden paddle is used instead of a steel spoon, a dish stops being mere nutrition and becomes an intergenerational conversation.',
    quote:
      '“To cook an elder’s recipe is to listen to their childhood without needing a photograph.”',
    exampleDishId: 'japan-miso-soup',
    exampleLabel: 'Te-mae Miso · Japan',
    image: '/src/assets/images/world_fermentation_hearth_1795656001535.jpg',
    caption: 'Fig. B — Living microbial starters and wooden barrels passed across decades.',
  },
  {
    id: 'festivals',
    index: '03',
    pillar: 'Festivals',
    title: 'Seasonal Rhythms Written in Harvest Feasts',
    essay:
      'From Bengal’s winter Poush Pitha sweetened with six-week date-palm sap to Vietnam’s overnight Tết Bánh Chưng vigil and Mexico’s Día de los Muertos tamaladas, festivals ensure endangered seasonal techniques return every year.',
    quote:
      '“Calendar rituals act as cultural memory banks—protecting recipes too intricate for rushed weekdays.”',
    exampleDishId: 'bengali-pitha',
    exampleLabel: 'Poush Pitha · West Bengal',
    image: '/src/assets/images/hero_heritage_table_1795656000744.jpg',
    caption: 'Fig. C — Ceremonial harvest platters prepared on banana leaves.',
  },
  {
    id: 'agriculture',
    index: '04',
    pillar: 'Agriculture',
    title: 'Seed Sovereignty on the Plate',
    essay:
      'When a region forgets dishes built around pearl millet, finger millet, highland teff, black soybeans, or native Andean potatoes, farmers lose buyers for resilient, rain-fed biodiversity. Eating traditional grains sustains living seed banks.',
    quote:
      '“What disappears from our kitchens soon disappears from our fields.”',
    exampleDishId: 'kambu-koozh',
    exampleLabel: 'Kambu Koozh · Tamil Nadu',
    image: '/src/assets/images/harvest_heirloom_grains_1795656002104.jpg',
    caption: 'Fig. D — Heirloom purple rice, finger millet, kokum, and wild spices.',
  },
  {
    id: 'communities',
    index: '05',
    pillar: 'Communities',
    title: 'Collective Labour & Shared Platters',
    essay:
      'Whether neighbours in Korea gathering for autumn Kimjang, Himachali Boti chefs feeding hundreds on stitched sal leaves during a Dham, or Ethiopian friends practicing Gursha over shared injera, food weaves solitary households into community.',
    quote:
      '“Some dishes are mathematically impossible to make alone—they were invented to require neighbours.”',
    exampleDishId: 'korea-kimchi',
    exampleLabel: 'Kimjang Kimchi · Korea',
    image: '/src/assets/images/world_fermentation_hearth_1795656001535.jpg',
    caption: 'Fig. E — Communal earthenware fermentation jars.',
  },
  {
    id: 'traditions',
    index: '06',
    pillar: 'Traditions',
    title: 'Ancient Science in Clay, Ash & Smoke',
    essay:
      'Indigenous culinary systems hold quiet brilliance: Mesoamerican nixtamalization unlocking niacin in maize, Assamese Bhimkol banana-ash Khar softening tough fibres without salt, and Naga hearth smoking preserving monsoon protein.',
    quote:
      '“Before modern laboratories, grandmothers mastered chemistry with clay pots, wood ash, and time.”',
    exampleDishId: 'mexico-tamales',
    exampleLabel: 'Nixtamalized Tamales · Mexico',
    image: '/src/assets/images/ancestral_cooking_fire_1795656002500.jpg',
    caption: 'Fig. F — Stone mortar, fire, and earthen vessels.',
  },
  {
    id: 'identities',
    index: '07',
    pillar: 'Local Identities',
    title: 'Why No Two Regions Are the Same',
    essay:
      'A single country like India holds dozens of distinct food grammars shaped by monsoon winds, mountain passes, estuaries, and sacred beliefs. Honouring regional specificity refuses flat stereotypes and celebrates human diversity.',
    quote:
      '“Every dialect of spice, grain, and vessel proves there is no single way to nourish a human life.”',
    exampleDishId: 'eromba',
    exampleLabel: 'Eromba · Manipur',
    image: '/src/assets/images/indian_millet_claypot_1795656000689.jpg',
    caption: 'Fig. G — Distinct regional grain and plantain leaf lineages.',
  },
];

export function FoodIsOurCulture({ onOpenDishById, dishes }: FoodIsOurCultureProps) {
  const [activeId, setActiveId] = useState<string>(THREADS[0].id);
  const [failedImg, setFailedImg] = useState<Record<string, boolean>>({});

  const activeThread = THREADS.find((t) => t.id === activeId) ?? THREADS[0];
  const linkedDish = dishes.find((d) => d.id === activeThread.exampleDishId);

  return (
    <section
      id="food-is-culture"
      aria-labelledby="food-culture-heading"
      className="border-b border-[#DED6C6] bg-[#1C1917] text-[#FBF9F5]"
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 py-16 lg:py-24">
        {/* Storytelling Header */}
        <div className="max-w-3xl space-y-4 pb-10 border-b border-[#3A3531]">
          <div className="text-xs font-mono uppercase tracking-widest text-[#D97757]">
            Food Is Our Culture
          </div>
          <h2
            id="food-culture-heading"
            className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-[#FBF9F5] leading-[1.1]"
          >
            Every Culture Has a Story. Every Dish Has a History.
          </h2>
          <p className="text-base sm:text-lg text-[#D6CEBE] leading-relaxed">
            Food is never just fuel. Across continents and generations, a simmering pot holds who we are,
            where our ancestors farmed, which storms we weathered, and how we welcome strangers home.
          </p>
        </div>

        {/* Interactive 7-Pillar Editorial Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-10 items-stretch">
          {/* Pillar Selector Rail */}
          <div className="lg:col-span-4 flex flex-col divide-y divide-[#3A3531] border-t border-b border-[#3A3531]">
            {THREADS.map((thread) => {
              const isActive = thread.id === activeThread.id;
              return (
                <button
                  key={thread.id}
                  type="button"
                  onClick={() => setActiveId(thread.id)}
                  className={`py-4 px-3 text-left flex items-baseline justify-between gap-4 transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#292524] text-[#FBF9F5]'
                      : 'text-[#A8A29E] hover:text-[#FBF9F5] hover:bg-[#292524]/45'
                  }`}
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-[#D97757] tabular-nums">
                      {thread.index}.
                    </span>
                    <span className="font-serif text-xl font-medium">{thread.pillar}</span>
                  </div>
                  <span className="text-xs font-mono text-[#78716C] shrink-0">
                    {isActive ? 'Reading' : 'Explore'}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Narrative Canvas */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            <div className="md:col-span-6 flex flex-col justify-between gap-6">
              <div className="space-y-5">
                <div className="text-xs font-mono uppercase tracking-widest text-[#D97757]">
                  Chapter {activeThread.index} · {activeThread.pillar}
                </div>
                <h3 className="font-serif text-3xl font-semibold text-[#FBF9F5] leading-tight">
                  {activeThread.title}
                </h3>
                <p className="text-base text-[#E7E0D3] leading-relaxed">
                  {activeThread.essay}
                </p>

                {/* Editorial Pull Quote (No thick left accent border — hairline top & bottom dividers) */}
                <blockquote className="py-4 border-t border-b border-[#3A3531] font-serif italic text-xl text-[#D6CEBE] leading-snug">
                  {activeThread.quote}
                </blockquote>
              </div>

              {linkedDish && (
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => onOpenDishById(linkedDish.id)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#1C1917] bg-[#FBF9F5] hover:bg-[#E7E0D3] transition-colors cursor-pointer"
                  >
                    <span>Explore Living Example: {activeThread.exampleLabel}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            <figure className="md:col-span-6 flex flex-col border border-[#3A3531] bg-[#292524] p-2.5">
              <div className="relative flex-1 min-h-[260px] overflow-hidden bg-[#1C1917]">
                {!failedImg[activeThread.id] ? (
                  <img
                    src={activeThread.image}
                    alt={activeThread.caption}
                    referrerPolicy="no-referrer"
                    onError={() =>
                      setFailedImg((prev) => ({ ...prev, [activeThread.id]: true }))
                    }
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center p-6 text-center">
                    <span className="font-serif italic text-lg text-[#D6CEBE]">
                      {activeThread.pillar}
                    </span>
                  </div>
                )}
              </div>
              <figcaption className="pt-2.5 px-1 text-xs font-serif italic text-[#A8A29E]">
                {activeThread.caption}
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
