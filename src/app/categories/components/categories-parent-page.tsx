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
    <section className="px-4 py-8 dark:bg-slate-700">
      {payload.meals && <MealsListPage id={id} fetcher={() => fetcher(id)} />}
    </section>
  );
}
