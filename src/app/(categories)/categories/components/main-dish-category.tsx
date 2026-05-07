import beefPic from "@/public/bbq.jpg";
import chickenPic from "@/public/chicken-fillet.jpg";
import lambPic from "@/public/lamb-chops.jpg";
import porkPic from "@/public/pork.jpg";
import sushiPic from "@/public/sushi.png";
import goatPic from "@/public/biryani.jpg";
import Image from "next/image";
import Link from "next/link";

const categoryCards = [
  {
    idCategory: "1",
    strCategory: "Beef",
    src: beefPic,
    alt: "a tray of thinly cut meat with herbs and tomatos",
    title: "Beef",
  },

  {
    idCategory: "2",
    strCategory: "Chicken",
    src: chickenPic,
    alt: "a chicken fillet and potato widges",
    title: "Chicken",
  },
  {
    idCategory: "4",
    strCategory: "Lamb",
    src: lambPic,
    alt: "grilled lamb chops with rpsemary",
    title: "Lamb",
  },
  {
    idCategory: "7",
    strCategory: "Pork",
    src: porkPic,
    alt: "a plate of thinly cut pork loins",
    title: "Pork",
  },
  {
    idCategory: "14",
    strCategory: "Goat",
    src: goatPic,
    alt: "chunks of goat biryani with saffron-infused basmati rice.",
    title: "Goat",
  },
  {
    idCategory: "8",
    strCategory: "Seafood",
    src: sushiPic,
    alt: "a plate of sushi and salmon rolls",
    title: "Seafood",
  },
];

export default function MainDishCategory() {
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
              className="h-full w-full object-cover object-center transition-transform duration-300 ease-in-out hover:scale-110"
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
