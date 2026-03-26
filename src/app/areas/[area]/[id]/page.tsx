import MealDetailsPage from "@/app/categories/components/single-meal/meal-details";
import { fetchMealDetailById } from "@/lib/api/get-meal-by-id";

type MealIdPageProps = {
  params: Promise<{ id: string }>;
};

export default async function MealIdPage({ params }: MealIdPageProps) {
  const { id } = await params;
  const payload = await fetchMealDetailById(id);

  return (
    <section className="bg-amber-50 text-lg dark:bg-slate-600 dark:text-neutral-300">
      {payload.meals?.map((meal) => (
        <MealDetailsPage key={meal.idMeal} meal={meal} />
      ))}
    </section>
  );
}
