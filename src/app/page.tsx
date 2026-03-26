import { Suspense } from "react";
import CategorySlider from "./categories/components/category-slider";
import CategoriesParentPage from "./categories/components/categories-parent-page";
import { fetchRecipesByCategory } from "@/lib/api/get-recipes-by-category";

export default function Home() {
  return (
    <main className="w-full dark:bg-slate-700">
      <CategorySlider />
      <div className="w-full pt-1">
        <Suspense fallback={<p>Loading...</p>}>
          <CategoriesParentPage
            fetcher={() => fetchRecipesByCategory("Breakfast")}
            id="breakfast"
          />
        </Suspense>
      </div>
    </main>
  );
}
