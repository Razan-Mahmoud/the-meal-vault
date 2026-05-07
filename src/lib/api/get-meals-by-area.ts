import { notFound } from "next/navigation";
import { APICategoryResponse, CategoryMeal } from "../types/categories";

export async function fetchMealsByArea(id: string) {
  const response = await fetch(`${process.env.API}/filter.php?a=${id}`);
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  const payload: APICategoryResponse<{ meals: CategoryMeal[] }> = await response.json();

  if (!payload.meals || payload.meals.length === 0) {
    return notFound();
  }

  return payload;
}
