import AreasMainPage from "../(areas)/areas/components/areas-main-page";
import BreakfastCategoryCard from "../(categories)/categories/components/breakfast-category-card";
import MainDishCategory from "../(categories)/categories/components/main-dish-category";
import SideDishCategory from "../(categories)/categories/components/side-dish-category";
import VeganAndVegetarianCategoryCard from "../(categories)/categories/components/vegan-and-vegetarian-category-card";
import VideoRecipesCard from "../(categories)/categories/components/video-recipes-card";

export default function Home() {
  return (
    <main>
      {/* Categories */}
      <div className="my-20 space-y-24 md:space-y-28">
        {/* Main Dishes */}
        <div className="px-6 md:px-10">
          {/* Title */}
          <p className="text-center text-3xl font-semibold">Protein-packed Main Dishes</p>
          <p className="my-4 text-center text-xl font-medium">
            Cooking lunch or having friends over? This is where to find recipes.
          </p>

          {/* Main dishes */}
          <MainDishCategory />
        </div>

        {/* Areas */}
        <div className="px-6 md:px-10">
          <p className="text-center text-4xl font-semibold">World Cuisine</p>
          <p className="my-4 text-center text-2xl font-medium">Try some new and exotic recipes.</p>

          <AreasMainPage />
        </div>

        {/* side dishes */}
        <div className="px-6 md:px-10">
          {/* Title */}
          <p className="text-center text-3xl font-semibold">Side Dishes:</p>
          <p className="my-4 text-center text-xl font-medium">
            Add more colors and exciting flavours to your table.
          </p>
          <SideDishCategory />
        </div>

        {/* Breakfast */}
        <div className="px-6 md:px-10">
          {/* Title */}
          <p className="text-center text-3xl font-semibold">Breakfast</p>
          <p className="my-4 text-center text-xl font-medium">
            The most important meal of the day, or so they say!
          </p>

          {/* Breakfast */}
          <BreakfastCategoryCard />
        </div>

        {/* Vegan and vegetarian */}
        <div className="px-6 md:px-10">
          {/* Title */}
          <p className="text-center text-3xl font-semibold">Veggie Enthusiasts</p>
          <p className="my-4 text-center text-xl font-medium">
            Where colourful ingredients come together to create a wonderful meal.
          </p>

          {/* Vegan and vegetarian */}
          <VeganAndVegetarianCategoryCard />
        </div>

        {/* Video recipes */}
        <div className="px-6 md:px-10">
          {/* Title */}
          <p className="text-center text-3xl font-semibold">Video Recipes</p>
          <p className="my-4 text-center text-xl font-medium">
            Visual guides that make every recipe feel like a breeze.
          </p>

          {/* video recipes */}

          <VideoRecipesCard />
        </div>
      </div>
    </main>
  );
}
