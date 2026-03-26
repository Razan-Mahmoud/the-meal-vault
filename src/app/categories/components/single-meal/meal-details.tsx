import Image from "next/image";
import MealBadge from "./meal-badge";
import MealIngredients from "./meal-ingredients";
import MealDirections from "./meal-directions";
import MealVideo from "./meal-video";
import BackButton from "@/app/layout-components/back-button";
import { MealDetails } from "@/lib/types/meal-details";

function getIngredients(meal: MealDetails) {
  return Array.from({ length: 20 }, (_, i) => i + 1)
    .map((i) => ({
      ingredient: meal[`strIngredient${i}` as keyof MealDetails] as string,
      measure: meal[`strMeasure${i}` as keyof MealDetails] as string,
    }))
    .filter(({ ingredient }) => ingredient?.trim());
}

type MealDetailsPageProps = {
  meal: MealDetails;
};

export default function MealDetailsPage({ meal }: MealDetailsPageProps) {
  const ingredients = getIngredients(meal);
  const sourceUrl = meal?.strSource || meal.strYoutube;

  return (
    <div
      key={meal.idMeal}
      className="relative flex flex-col space-y-10 px-3 py-5 md:mx-4 md:items-center md:justify-center md:px-8"
    >
      {/* Title */}
      <h1 className="text-center text-xl font-semibold uppercase md:text-3xl">{meal.strMeal}</h1>

      {/* Area and Category badges */}
      <div className="flex items-center justify-center gap-6">
        <MealBadge label={meal.strArea} href={`/areas/${meal.strArea}`} />
        <MealBadge
          label={meal.strCategory}
          href={`/categories/${meal.strCategory.toLocaleLowerCase()}`}
        />
      </div>

      {/* Image */}
      <div className="relative mx-auto aspect-square w-full md:w-2/3">
        <Image
          src={meal.strMealThumb}
          alt={meal.strMeal}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="rounded-md object-cover object-center"
        />
      </div>

      {/* Details */}
      <div className="flex flex-col justify-start space-y-6 md:px-8">
        <MealIngredients ingredients={ingredients} />
        <MealDirections instructions={meal.strInstructions} sourceUrl={sourceUrl} />
      </div>

      {/* Video */}
      <MealVideo youtubeUrl={meal.strYoutube} title={meal.strMeal} />

      {/* Back button */}
      <div className="fixed right-0 bottom-0">
        <BackButton />
      </div>
    </div>
  );
}
