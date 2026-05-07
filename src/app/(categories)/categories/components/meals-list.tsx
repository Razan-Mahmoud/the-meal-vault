// Step two
import Link from "next/link";
import Image from "next/image";
import BackButton from "@/app/(main)/layout-components/back-button";
import backupPhoto from "@/public/pasta-italian.jpg";
import { CategoryMeal } from "@/lib/types/categories";

type MealsListPageProps = {
  id: string;
  fetcher: () => Promise<{ meals: CategoryMeal[] }>;
};

export default async function MealsListPage({ id, fetcher }: MealsListPageProps) {
  const payload = await fetcher();
  return (
    <section id={id} className="grid grid-cols-1 gap-10 p-5 md:grid-cols-4 md:p-10">
      {payload.meals?.map((meal) => {
        return (
          <Link
            href={`/categories/${id}/${meal.idMeal}`}
            key={meal.idMeal}
            className="rounded-md bg-neutral-100 pb-2 shadow-lg dark:bg-slate-600 dark:text-neutral-200"
          >
            <div className="group relative aspect-square overflow-hidden rounded-md [clip-path:polygon(0_0,100%_0,100%_80%,50%_100%,0_80%)]">
              <Image
                src={meal.strMealThumb ? meal.strMealThumb : backupPhoto}
                alt={meal.strMeal}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-350 group-hover:scale-110"
              />
            </div>
            <p className="px-1 pt-4 text-center text-lg font-semibold">{meal.strMeal}</p>
          </Link>
        );
      })}

      {/* Back button */}
      <div className="fixed right-0 bottom-0 z-20">
        <BackButton />
      </div>
    </section>
  );
}
