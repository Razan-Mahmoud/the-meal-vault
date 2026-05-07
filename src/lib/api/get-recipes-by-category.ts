import { notFound } from "next/navigation";
import { APICategoryResponse, CategoryMeal } from "../types/categories";

export async function fetchRecipesByCategory(id: string) {
  const response = await fetch(`${process.env.API}/filter.php?c=${id}`);
  const payload: APICategoryResponse<{ meals: CategoryMeal[] }> = await response.json();
  if (!payload.meals) {
    return notFound();
  } else {
    return payload;
  }
}
