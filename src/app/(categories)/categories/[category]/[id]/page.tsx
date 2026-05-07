import { fetchMealDetailById } from "@/lib/api/get-meal-by-id";
import MealDetailsPage from "../../components/single-meal/meal-details";
import { notFound } from "next/navigation";

type MealIdPageProps = {
  params: Promise<{ id: string }>;
};

export default async function MealIdPage({ params }: MealIdPageProps) {
  const { id } = await params;
  const payload = await fetchMealDetailById(id);
  if (!payload.meals || payload.meals.length === 0) {
    return notFound();
  }

  return (
    <section>
      {Array.isArray(payload.meals) &&
        payload.meals.map((meal) => <MealDetailsPage key={meal.idMeal} meal={meal} />)}
      {!Array.isArray(payload.meals) && notFound()}
    </section>
  );
}
