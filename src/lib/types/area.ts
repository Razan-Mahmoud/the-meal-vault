import { ErrorResponse } from "./categories";

export type AllAreasList = {
  strArea: string;
};

export type SuccessfulAllAreasListResponse = {
  meals: AllAreasList[];
};

export type APIAllAreasListResponse<T> = T | ErrorResponse;
