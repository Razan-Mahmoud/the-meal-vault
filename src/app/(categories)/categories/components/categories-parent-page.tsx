// Step one

import { CategoryMeal } from "@/lib/types/categories";
import MealsListPage from "./meals-list";

type ParentPageProps = {
  id: string;
  fetcher: (id: string) => Promise<{ meals: CategoryMeal[] }>;
};

export default async function CategoriesParentPage({ id, fetcher }: ParentPageProps) {
  const payload = await fetcher(id.toUpperCase());
  return (
    <section className="px-2 py-2 md:px-4 md:py-8 dark:bg-slate-700">
      {payload.meals && <MealsListPage id={id} fetcher={() => fetcher(id)} />}
    </section>
  );
}
