import { APIMealDetailsResponse, SuccessfulMealDetailsResponse } from "../types/meal-details";

export async function fetchMealDetailById(id: string) {
  const response = await fetch(`${process.env.API}/lookup.php?i=${id}`);
  const payload: APIMealDetailsResponse<SuccessfulMealDetailsResponse> = await response.json();

  return payload;
}
