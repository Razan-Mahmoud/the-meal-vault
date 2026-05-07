type Ingredient = {
  ingredient: string;
  measure: string;
};

type MealIngredientsPageProps = {
  ingredients: Ingredient[];
};

export default function MealIngredientsPage({ ingredients }: MealIngredientsPageProps) {
  return (
    <div className="space-y-3 text-lg">
      <div className="w-fit border-b-2 border-emerald-600 pb-1 dark:border-slate-400">
        <h2 className="text-xl font-semibold md:text-2xl">Ingredients</h2>
      </div>
      <ul className="ml-5 list-disc space-y-2 font-medium">
        {ingredients.map(({ ingredient, measure }, index) => (
          <li key={` ${ingredient} + ${index}`}>
            {measure} {ingredient}
          </li>
        ))}
      </ul>
    </div>
  );
}
