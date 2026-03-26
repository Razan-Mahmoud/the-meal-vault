import { fetchRecipesByCategory } from "@/lib/api/get-recipes-by-category";
import CategoriesParentPage from "../components/categories-parent-page";

type CategoryPageProps = {
  params: Promise<{ category: string }>;
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;

  return (
    <CategoriesParentPage id={category} fetcher={() => fetchRecipesByCategory(`${category}`)} />
  );
}
