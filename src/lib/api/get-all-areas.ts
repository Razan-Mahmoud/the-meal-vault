import type { APIAllAreasListResponse } from "@/lib/types/area.ts";
import type { AllAreasList } from "@/lib/types/area.ts";
import { notFound } from "next/navigation";

export async function fetchAllAreas() {
  const response = await fetch(`${process.env.API}/list.php?a=list`);
  const payload: APIAllAreasListResponse<{ meals: AllAreasList[] }> = await response.json();

  // trigger the not-found page
  if (!payload.meals) {
    return notFound();
  } else {
    return payload;
  }
}
