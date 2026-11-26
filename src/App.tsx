import { useEffect, useMemo, useState } from 'react';
import { Header } from './components/Header';
import { HeroExhibition } from './components/HeroExhibition';
import { InteractiveCulturalMap } from './components/InteractiveCulturalMap';
import { CulturalDiscovery } from './components/CulturalDiscovery';
import { FoodIsOurCulture } from './components/FoodIsOurCulture';
import { PreservationPledge } from './components/PreservationPledge';
import { DishDetailDrawer } from './components/DishDetailDrawer';
import { Footer } from './components/Footer';
import { ALL_DISHES, getDishById } from './data/dishes';
import { DishDossier, FamilyRecipeMemory } from './types/heritage';

const BOOKMARKS_KEY = 'roots_hearth_bookmarks_v1';
const MEMORIES_KEY = 'roots_hearth_family_memories_v1';

export default function App() {
  const [mapMode, setMapMode] = useState<'world' | 'india'>('india');
  const [selectedCountryId, setSelectedCountryId] = useState<string>('india');
  const [selectedStateId, setSelectedStateId] = useState<string>('tamil-nadu');
  const [activeDish, setActiveDish] = useState<DishDossier | null>(null);

  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(BOOKMARKS_KEY);
      return saved ? (JSON.parse(saved) as string[]) : [];
    } catch {
      return [];
    }
  });

  const [memories, setMemories] = useState<FamilyRecipeMemory[]>(() => {
    try {
      const saved = localStorage.getItem(MEMORIES_KEY);
      return saved ? (JSON.parse(saved) as FamilyRecipeMemory[]) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarkedIds));
    } catch {
      // Ignore storage quota errors
    }
  }, [bookmarkedIds]);

  useEffect(() => {
    try {
      localStorage.setItem(MEMORIES_KEY, JSON.stringify(memories));
    } catch {
      // Ignore storage quota errors
    }
  }, [memories]);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'indian-states') {
      setMapMode('india');
      const mapEl = document.getElementById('cultural-map');
      mapEl?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    if (sectionId === 'cultural-map') {
      const mapEl = document.getElementById('cultural-map');
      mapEl?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    const target = document.getElementById(sectionId);
    target?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExploreMap = (mode: 'world' | 'india') => {
    setMapMode(mode);
    const mapEl = document.getElementById('cultural-map');
    mapEl?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleToggleBookmark = (dishId: string) => {
    setBookmarkedIds((prev) =>
      prev.includes(dishId) ? prev.filter((id) => id !== dishId) : [...prev, dishId]
    );
  };

  const handleAddMemory = (entry: Omit<FamilyRecipeMemory, 'id' | 'savedAt'>) => {
    const newItem: FamilyRecipeMemory = {
      ...entry,
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      savedAt: new Date().toISOString(),
    };
    setMemories((prev) => [newItem, ...prev]);
  };

  const handleRemoveMemory = (id: string) => {
    setMemories((prev) => prev.filter((item) => item.id !== id));
  };

  const handleOpenDishById = (id: string) => {
    const found = getDishById(id);
    if (found) setActiveDish(found);
  };

  const bookmarkedDishes = useMemo(
    () =>
      bookmarkedIds
        .map((id) => ALL_DISHES.find((d) => d.id === id))
        .filter((d): d is DishDossier => Boolean(d)),
    [bookmarkedIds]
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1C1917]">
      <Header onNavigate={scrollToSection} />

      <main className="flex-1">
        <HeroExhibition
          onExploreMap={handleExploreMap}
          onBrowseArchive={() => scrollToSection('cultural-discovery')}
          totalDishes={ALL_DISHES.length}
        />

        <InteractiveCulturalMap
          mapMode={mapMode}
          onMapModeChange={setMapMode}
          selectedCountryId={selectedCountryId}
          onSelectCountry={setSelectedCountryId}
          selectedStateId={selectedStateId}
          onSelectState={setSelectedStateId}
          onOpenDish={setActiveDish}
        />

        <CulturalDiscovery
          onOpenDish={setActiveDish}
          bookmarkedIds={bookmarkedIds}
        />

        <FoodIsOurCulture
          onOpenDishById={handleOpenDishById}
          dishes={ALL_DISHES}
        />

        <PreservationPledge
          memories={memories}
          onAddMemory={handleAddMemory}
          onRemoveMemory={handleRemoveMemory}
          bookmarkedDishes={bookmarkedDishes}
          onOpenDish={setActiveDish}
        />
      </main>

      <Footer onNavigate={scrollToSection} />

      <DishDetailDrawer
        dish={activeDish}
        onClose={() => setActiveDish(null)}
        onSelectDish={setActiveDish}
        allDishes={ALL_DISHES}
        isBookmarked={activeDish ? bookmarkedIds.includes(activeDish.id) : false}
        onToggleBookmark={handleToggleBookmark}
      />
    </div>
  );
}
