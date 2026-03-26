import CategoriesParentPage from "@/app/categories/components/categories-parent-page";
import { fetchMealsByArea } from "@/lib/api/get-meals-by-area";

type SingleAreaPageProps = {
  params: Promise<{ area: string }>;
};

export default async function SingleAreaPage({ params }: SingleAreaPageProps) {
  const { area } = await params;

  return <CategoriesParentPage id={area} fetcher={() => fetchMealsByArea(`${area}`)} />;
}
