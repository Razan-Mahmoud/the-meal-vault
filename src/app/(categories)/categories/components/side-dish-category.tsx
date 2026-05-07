import Image from "next/image";
import miscPic from "@/public/misc.jpg";
import sidePic from "@/public/french-fries.jpg";
import starterPic from "@/public/cheese-plate.jpg";
import pastaPic from "@/public/pasta-italian.jpg";
import Link from "next/link";

const categoryCards = [
  {
    idCategory: "10",
    strCategory: "Starter",
    src: starterPic,
    alt: "a cheese and fruits plate",
    title: "Starter",
  },
  {
    idCategory: "6",
    strCategory: "Pasta",
    src: pastaPic,
    alt: "a bowl of spaghetti",
    title: "Pasta",
  },

  {
    idCategory: "9",
    strCategory: "Side",
    src: sidePic,
    alt: "a plate of French fries",
    title: "Side",
  },
  {
    idCategory: "5",
    strCategory: "Miscellaneous",
    src: miscPic,
    alt: "many dishes from the Labanese cuisine",
    title: "Miscellaneous",
  },
];

export default function SideDishCategory() {
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
              className="h-full w-full rounded-md object-cover object-center transition-transform duration-300 ease-in-out hover:scale-110"
            />

            {/* title and overlaying layer */}
            <div className="absolute bottom-0 z-20 flex h-1/2 w-full items-center justify-center rounded-md bg-linear-to-t from-[#0A0000]">
              <p className="text-2xl font-semibold text-neutral-200">{card.title}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
