import veganPic from "@/public/vegan.jpg";
import vegetarianPic from "@/public/vegetarian.jpg";
import Image from "next/image";
import Link from "next/link";

const categoryCards = [
  {
    idCategory: "11",
    strCategory: "Vegan",
    src: veganPic,
    alt: "different vegetables on skewers",
    title: "Vegan",
    description: "Explore innovative ways to use grains, legumes, and seasonal produce.",
    btnTitle: "Explore Vegan Meals",
  },
  {
    idCategory: "12",
    strCategory: "Vegetarian",
    src: vegetarianPic,
    alt: "slices of avocado and salad vegetables",
    title: "Vegetarian",
    description: "Where flavourful and colourful ingredients come together.",
    btnTitle: "Explore Vegetarian Meals",
  },
];

export default function VeganAndVegetarianCategoryCard() {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      {/* Category Card */}
      {categoryCards.map((card) => {
        return (
          <Link
            href={`/categories/${card.strCategory.toLowerCase()}`}
            prefetch={false}
            key={card.strCategory}
            className="relative block aspect-video w-3/4 overflow-hidden rounded-md md:w-[30%]"
          >
            {/* Image */}
            <Image
              src={card.src}
              alt={card.alt}
              fill
              className="object-cover object-center transition-transform duration-300 ease-in-out hover:scale-110"
            />
            {/* text and overlaying  layer */}
            <div className="absolute bottom-0 z-20 flex h-1/2 w-full items-center justify-center rounded-md bg-linear-to-t from-[#0A0000]">
              <p className="text-2xl font-semibold text-neutral-200">{card.title}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
