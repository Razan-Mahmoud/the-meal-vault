import type { APIAllAreasListResponse } from "@/lib/types/area.ts";
import type { AllAreasList } from "@/lib/types/area.ts";

export async function fetchAllAreas() {
  const response = await fetch(`${process.env.API}/list.php?a=list`);
  const payload: APIAllAreasListResponse<{ meals: AllAreasList[] }> = await response.json();

  return payload;
}
