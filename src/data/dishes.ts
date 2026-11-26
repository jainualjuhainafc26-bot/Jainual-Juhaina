import { INDIAN_DISHES } from './indianDishes';
import { WORLD_DISHES } from './worldDishes';
import { DishDossier } from '../types/heritage';

export const ALL_DISHES: DishDossier[] = [...INDIAN_DISHES, ...WORLD_DISHES];

export function getDishById(id: string): DishDossier | undefined {
  return ALL_DISHES.find((d) => d.id === id);
}

export function getDishesByIds(ids: string[]): DishDossier[] {
  return ids
    .map((id) => ALL_DISHES.find((d) => d.id === id))
    .filter((d): d is DishDossier => Boolean(d));
}
