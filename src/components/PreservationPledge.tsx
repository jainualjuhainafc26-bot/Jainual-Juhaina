import { useState, FormEvent } from 'react';
import { Bookmark, Plus, Trash2 } from 'lucide-react';
import { DishDossier, FamilyRecipeMemory } from '../types/heritage';

interface PreservationPledgeProps {
  memories: FamilyRecipeMemory[];
  onAddMemory: (memory: Omit<FamilyRecipeMemory, 'id' | 'savedAt'>) => void;
  onRemoveMemory: (id: string) => void;
  bookmarkedDishes: DishDossier[];
  onOpenDish: (dish: DishDossier) => void;
}

export function PreservationPledge({
  memories,
  onAddMemory,
  onRemoveMemory,
  bookmarkedDishes,
  onOpenDish,
}: PreservationPledgeProps) {
  const [dishName, setDishName] = useState('');
  const [elderName, setElderName] = useState('');
  const [originPlace, setOriginPlace] = useState('');
  const [seasonOrOccasion, setSeasonOrOccasion] = useState('');
  const [keyIngredients, setKeyIngredients] = useState('');
  const [story, setStory] = useState('');
  const [submittedNotice, setSubmittedNotice] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!dishName.trim() || !story.trim()) return;

    onAddMemory({
      dishName: dishName.trim(),
      elderName: elderName.trim() || 'Family Elder',
      originPlace: originPlace.trim() || 'Home Kitchen',
      seasonOrOccasion: seasonOrOccasion.trim() || 'Family Gathering',
      keyIngredients: keyIngredients.trim() || 'Recorded by family memory',
      story: story.trim(),
    });

    setDishName('');
    setElderName('');
    setOriginPlace('');
    setSeasonOrOccasion('');
    setKeyIngredients('');
    setStory('');
    setSubmittedNotice(true);
    setTimeout(() => setSubmittedNotice(false), 3500);
  };

  return (
    <section
      id="preservation-toolkit"
      aria-labelledby="preservation-heading"
      className="border-b border-[#DED6C6] bg-[#F2EDE4]/55"
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 py-14 lg:py-20 space-y-12">
        <div className="max-w-2xl space-y-2">
          <div className="text-xs font-mono uppercase tracking-widest text-[#14532D]">
            Intergenerational Living Archive
          </div>
          <h2
            id="preservation-heading"
            className="font-serif text-3xl sm:text-4xl font-semibold text-[#1C1917]"
          >
            Preserve an Elder’s Recipe Before It Is Forgotten
          </h2>
          <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
            Every endangered recipe begins as an unwritten memory inside a grandparent’s kitchen. Record a
            family dish locally in your browser notebook, and keep track of global traditions you want to
            cook and share.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Oral Family Recipe Memory Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-6 border border-[#D6CEBE] bg-[#FBF9F5] p-6 sm:p-8 space-y-5"
          >
            <div className="pb-3 border-b border-[#E7E0D3]">
              <h3 className="font-serif text-2xl font-semibold text-[#1C1917]">
                Record an Oral Family Recipe Card
              </h3>
              <p className="text-xs text-[#57534E] mt-1">
                Saved privately in your browser so you can interview an elder and build your family’s archive.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="mem-dish"
                  className="block text-xs font-mono uppercase tracking-wider text-[#57534E] mb-1.5"
                >
                  Traditional Dish Name *
                </label>
                <input
                  id="mem-dish"
                  type="text"
                  required
                  value={dishName}
                  onChange={(e) => setDishName(e.target.value)}
                  placeholder="e.g., Paati’s Ulundhu Kali"
                  className="w-full px-3 py-2 text-sm border border-[#C7BFA9] bg-[#FBF9F5] text-[#1C1917] focus:outline-none focus:border-[#9A3412]"
                />
              </div>

              <div>
                <label
                  htmlFor="mem-elder"
                  className="block text-xs font-mono uppercase tracking-wider text-[#57534E] mb-1.5"
                >
                  Who Taught / Cooks It
                </label>
                <input
                  id="mem-elder"
                  type="text"
                  value={elderName}
                  onChange={(e) => setElderName(e.target.value)}
                  placeholder="e.g., Grandmother Meenakshi"
                  className="w-full px-3 py-2 text-sm border border-[#C7BFA9] bg-[#FBF9F5] text-[#1C1917] focus:outline-none focus:border-[#9A3412]"
                />
              </div>

              <div>
                <label
                  htmlFor="mem-origin"
                  className="block text-xs font-mono uppercase tracking-wider text-[#57534E] mb-1.5"
                >
                  Village, State or Country
                </label>
                <input
                  id="mem-origin"
                  type="text"
                  value={originPlace}
                  onChange={(e) => setOriginPlace(e.target.value)}
                  placeholder="e.g., Thanjavur, Tamil Nadu"
                  className="w-full px-3 py-2 text-sm border border-[#C7BFA9] bg-[#FBF9F5] text-[#1C1917] focus:outline-none focus:border-[#9A3412]"
                />
              </div>

              <div>
                <label
                  htmlFor="mem-occasion"
                  className="block text-xs font-mono uppercase tracking-wider text-[#57534E] mb-1.5"
                >
                  Season or Festival
                </label>
                <input
                  id="mem-occasion"
                  type="text"
                  value={seasonOrOccasion}
                  onChange={(e) => setSeasonOrOccasion(e.target.value)}
                  placeholder="e.g., Winter / Pongal"
                  className="w-full px-3 py-2 text-sm border border-[#C7BFA9] bg-[#FBF9F5] text-[#1C1917] focus:outline-none focus:border-[#9A3412]"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="mem-ingredients"
                className="block text-xs font-mono uppercase tracking-wider text-[#57534E] mb-1.5"
              >
                Key Heirloom Ingredients &amp; Vessel
              </label>
              <input
                id="mem-ingredients"
                type="text"
                value={keyIngredients}
                onChange={(e) => setKeyIngredients(e.target.value)}
                placeholder="e.g., Whole black urad, palm jaggery, gingelly oil in clay pot"
                className="w-full px-3 py-2 text-sm border border-[#C7BFA9] bg-[#FBF9F5] text-[#1C1917] focus:outline-none focus:border-[#9A3412]"
              />
            </div>

            <div>
              <label
                htmlFor="mem-story"
                className="block text-xs font-mono uppercase tracking-wider text-[#57534E] mb-1.5"
              >
                Memory, Method &amp; Family Story *
              </label>
              <textarea
                id="mem-story"
                rows={3}
                required
                value={story}
                onChange={(e) => setStory(e.target.value)}
                placeholder="Note unwritten cues: how the batter sounds, what leaves line the pot, or who always helped..."
                className="w-full px-3 py-2 text-sm border border-[#C7BFA9] bg-[#FBF9F5] text-[#1C1917] focus:outline-none focus:border-[#9A3412]"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#FBF9F5] bg-[#14532D] hover:bg-[#0F3F22] transition-colors cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Save Family Memory</span>
              </button>

              {submittedNotice && (
                <span className="text-xs font-medium text-[#14532D]">
                  Saved to your local family heritage notebook.
                </span>
              )}
            </div>
          </form>

          {/* Right: Recorded Family Memories + Saved Heritage Dossiers */}
          <div className="lg:col-span-6 space-y-6">
            {/* Family Memories List */}
            <div className="border border-[#D6CEBE] bg-[#FBF9F5] p-6 space-y-4">
              <div className="flex items-center justify-between gap-4 pb-3 border-b border-[#E7E0D3]">
                <h3 className="font-serif text-2xl font-semibold text-[#1C1917]">
                  Your Family Recipe Notebook ({memories.length})
                </h3>
                <span className="text-xs font-mono text-[#78716C]">LOCAL ARCHIVE</span>
              </div>

              {memories.length === 0 ? (
                <p className="text-sm text-[#57534E] py-4">
                  No family recipe memories recorded yet. Use the card on the left to document a dish from
                  your family or community.
                </p>
              ) : (
                <div className="divide-y divide-[#E7E0D3]">
                  {memories.map((mem) => (
                    <div key={mem.id} className="py-4 space-y-1.5">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h4 className="font-serif text-xl font-semibold text-[#1C1917]">
                            {mem.dishName}
                          </h4>
                          <div className="text-xs text-[#57534E]">
                            <span>Taught by {mem.elderName}</span>
                            <span aria-hidden="true"> · </span>
                            <span>{mem.originPlace}</span>
                            <span aria-hidden="true"> · </span>
                            <span>{mem.seasonOrOccasion}</span>
                          </div>
                        </div>
                        <button
                          type="button"
                          aria-label={`Delete ${mem.dishName}`}
                          onClick={() => onRemoveMemory(mem.id)}
                          className="p-1.5 text-[#78716C] hover:text-[#9A3412] cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs font-medium text-[#14532D]">
                        Ingredients &amp; Vessel: {mem.keyIngredients}
                      </p>
                      <p className="text-sm text-[#1C1917] leading-relaxed">{mem.story}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Bookmarked Archive Dishes */}
            <div className="border border-[#D6CEBE] bg-[#FBF9F5] p-6 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#E7E0D3]">
                <h3 className="font-serif text-xl font-semibold text-[#1C1917] flex items-center gap-2">
                  <Bookmark className="w-4 h-4 text-[#9A3412]" />
                  <span>Saved Archive Dossiers ({bookmarkedDishes.length})</span>
                </h3>
              </div>

              {bookmarkedDishes.length === 0 ? (
                <p className="text-xs text-[#57534E]">
                  Open any dish dossier and click “Save Dish” to curate dishes to cook and preserve with your
                  family.
                </p>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {bookmarkedDishes.map((dish) => (
                    <button
                      key={dish.id}
                      type="button"
                      onClick={() => onOpenDish(dish)}
                      className="px-3 py-1.5 text-xs font-medium border border-[#C7BFA9] bg-[#F2EDE4] text-[#1C1917] hover:border-[#9A3412] hover:text-[#9A3412] cursor-pointer"
                    >
                      {dish.traditionalName} · {dish.origin.stateOrRegion}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
