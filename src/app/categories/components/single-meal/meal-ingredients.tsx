type Ingredient = {
  ingredient: string;
  measure: string;
};

type MealIngredientsPageProps = {
  ingredients: Ingredient[];
};

export default function MealIngredientsPage({ ingredients }: MealIngredientsPageProps) {
  return (
    <div className="space-y-3">
      <div className="w-fit border-b-2 border-orange-500 pb-1 dark:border-orange-700">
        <h2 className="text-xl font-semibold">Ingredients</h2>
      </div>
      <ul className="ml-5 list-disc space-y-2">
        {ingredients.map(({ ingredient, measure }, index) => (
          <li key={` ${ingredient} + ${index}`}>
            {measure} {ingredient}
          </li>
        ))}
      </ul>
    </div>
  );
}
