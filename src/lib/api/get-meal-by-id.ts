import { notFound } from "next/navigation";
import { APIMealDetailsResponse, SuccessfulMealDetailsResponse } from "../types/meal-details";

export async function fetchMealDetailById(id: string) {
  const response = await fetch(`${process.env.API}/lookup.php?i=${id}`);
  const payload: APIMealDetailsResponse<SuccessfulMealDetailsResponse> = await response.json();

  // trigger the not-found page
  if (!payload.meals || payload.meals.length === 0) {
    return notFound();
  } else {
    return payload;
  }
}
