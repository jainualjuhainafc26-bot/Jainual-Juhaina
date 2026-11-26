export type DiscoveryLens =
  | 'all'
  | 'country'
  | 'state'
  | 'community'
  | 'festival'
  | 'seasonal'
  | 'indigenous'
  | 'technique'
  | 'endangered';

export interface DishIngredient {
  name: string;
  role: string;
  regionalNote?: string;
}

export interface DishDossier {
  id: string;
  accessionCode: string;
  traditionalName: string;
  nativeScriptName?: string;
  summary: string;
  origin: {
    country: string;
    stateOrRegion: string;
    subregion: string;
    coordinates: [number, number]; // [lon, lat]
  };
  communityAssociation: string;
  historyAndOrigin: string;
  traditionalIngredients: DishIngredient[];
  preparationAndCooking: {
    vessel: string;
    technique: string;
    steps: string[];
  };
  occasionsAndFestivals: string[];
  culturalSymbolism: string;
  modernEvolution: string;
  preservationActions: string[];
  discoveryTags: {
    country: string;
    stateOrRegion?: string;
    community: string;
    festival?: string;
    season: string;
    technique: string;
    isIndigenous: boolean;
    isEndangered: boolean;
    endangeredContext?: string;
  };
  image: string;
  imageCaption: string;
}

export type IndiaZone =
  | 'South'
  | 'West'
  | 'North'
  | 'East'
  | 'Central'
  | 'Northeast'
  | 'Union Territories';

export interface IndianStateDossier {
  id: string;
  name: string;
  type: 'State' | 'Union Territory';
  zone: IndiaZone;
  capital: string;
  coordinates: [number, number]; // [lon, lat]
  famousDishes: string[];
  featuredDishIds: string[];
  forgottenRecipes: {
    name: string;
    note: string;
  }[];
  localIngredients: string[];
  festivalFoods: {
    festival: string;
    dish: string;
    context: string;
  }[];
  culturalStory: string;
  cookingMethods: string[];
  communities: string[];
}

export interface WorldCountryDossier {
  id: string;
  isoNumeric: string;
  name: string;
  regionLabel: string;
  coordinates: [number, number]; // [lon, lat]
  signatureDishes: string[];
  featuredDishIds: string[];
  endangeredOrForgotten: {
    name: string;
    note: string;
  }[];
  localIngredients: string[];
  festivalFoods: {
    occasion: string;
    dish: string;
    context: string;
  }[];
  culturalStory: string;
  cookingMethods: string[];
  communities: string[];
}

export interface FamilyRecipeMemory {
  id: string;
  dishName: string;
  elderName: string;
  originPlace: string;
  seasonOrOccasion: string;
  story: string;
  keyIngredients: string;
  savedAt: string;
}
