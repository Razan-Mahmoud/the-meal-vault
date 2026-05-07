import Image from "next/image";
import MealBadge from "./meal-badge";
import MealIngredients from "./meal-ingredients";
import MealDirections from "./meal-directions";
import MealVideo from "./meal-video";
import BackButton from "@/app/(main)/layout-components/back-button";
import { MealDetails } from "@/lib/types/meal-details";
import alternatePic from "@/public/pasta-italian.jpg";

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
      className="relative flex flex-col space-y-4 px-6 py-5 md:mx-4 md:space-y-8 md:px-10"
    >
      {/* Title */}
      <h1 className="text-xl font-semibold md:text-3xl">{meal.strMeal}</h1>

      {/* Area and Category badges */}
      <div>
        <MealBadge label={meal.strArea} href={`/areas/${meal.strArea}`} />

        <MealBadge
          label={meal.strCategory}
          href={`/categories/${meal.strCategory.toLocaleLowerCase()}`}
        />
      </div>

      {/* Image */}
      <div className="relative aspect-video w-full self-start md:w-1/2">
        <Image
          src={meal.strMealThumb ? meal.strMealThumb : alternatePic}
          alt={meal.strMeal}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="rounded-md object-cover object-center"
        />
      </div>

      {/* Details */}
      <div className="flex flex-col justify-start space-y-10">
        <MealIngredients ingredients={ingredients} />
        <MealDirections instructions={meal.strInstructions} sourceUrl={sourceUrl} />
      </div>

      {/* Video */}
      <MealVideo youtubeUrl={meal.strYoutube} title={meal.strMeal} />

      {/* Back button */}
      <div className="fixed right-0 bottom-0 z-20">
        <BackButton />
      </div>
    </div>
  );
}
