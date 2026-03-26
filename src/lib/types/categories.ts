export type CategoryMeal = {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
};

export type SuccessfulCategoryResponse = {
  meals: CategoryMeal[];
};

export type ErrorResponse = {
  meals: null;
};

export type APICategoryResponse<T> = T | ErrorResponse;
