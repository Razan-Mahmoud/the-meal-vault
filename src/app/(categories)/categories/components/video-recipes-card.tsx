import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function VideoRecipesCard() {
  const videoCardsInfo = [
    {
      title: "Beef and Broccoli Stir-Fry",
      href: "https://www.youtube.com/watch?v=BBABeZjlRM8",
      src: "https://www.themealdb.com/images/media/meals/m0p0j81765568742.jpg",
      idMeal: "53366",
      strCategory: "Beef",
    },

    {
      title: "Chocolate Gateau",
      href: "https://www.youtube.com/watch?v=dsJtgmAhFF4",
      src: "https://www.themealdb.com/images/media/meals/tqtywx1468317395.jpg",
      idMeal: "52776",
      strCategory: "Dessert",
    },
    {
      title: "Vegan banh mi",
      href: "https://www.youtube.com/watch?v=i0_C3eRTbgg",
      src: "https://www.themealdb.com/images/media/meals/sonirb1763782831.jpg",
      idMeal: "53250",
      strCategory: "Vegan",
    },
    {
      title: "Ensaimada",
      href: "https://www.youtube.com/watch?v=_Quo9Tgxih4",
      src: "https://www.themealdb.com/images/media/meals/1ugsho1763248007.jpg",
      idMeal: "53149",
      strCategory: "Dessert",
    },
    {
      title: "Cucumber & fennel salad",
      href: "https://www.youtube.com/watch?v=q37qn81lg5c",
      src: "https://www.themealdb.com/images/media/meals/93iok31766436070.jpg",
      idMeal: "53378",
      strCategory: "Side",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-10">
      {/* left column */}
      <div className="col-span-2">
        {/* link to video */}
        <Link
          href="https://www.youtube.com/watch?v=C3pAgB7pync"
          target="_blank"
          className="relative block aspect-video h-2/3 w-full overflow-hidden rounded-lg"
        >
          <Image
            src="https://www.themealdb.com/images/media/meals/qxutws1486978099.jpg"
            alt="Vegan Chocolate Cake"
            fill
            className="rounded-md object-cover object-center transition-transform duration-500 ease-in-out hover:scale-110"
          />

          {/* play icon */}
          <div className="absolute bottom-0 left-0 m-3 rounded-full bg-neutral-100 p-2 opacity-80 md:p-3">
            <Play fill="black" className="opacity-85" />
          </div>
        </Link>

        {/* title */}
        <Link
          href={`/categories/vegan/52794 `}
          className="mt-4 block px-2 text-xl font-semibold transition-all duration-500 ease-in-out hover:scale-110 md:text-2xl"
        >
          Vegan Chocolate Cake
        </Link>
      </div>

      {/* right column */}
      <div className="col-span-2 flex grid-cols-1 flex-col gap-6 md:grid-cols-5">
        {videoCardsInfo.map((card) => {
          return (
            <div key={card.title} className="flex gap-4 md:gap-6">
              {/* link to video */}
              <Link
                href={card.href}
                target="_blank"
                className="relative col-span-1 aspect-video h-full w-3/4 overflow-hidden rounded-md md:w-1/3"
              >
                <Image
                  src={card.src}
                  alt={card.title}
                  fill
                  className="rounded-md object-cover object-center transition-transform duration-500 ease-in-out hover:scale-110"
                />

                {/* play icon */}
                <div className="absolute bottom-0 left-0 m-3 rounded-full bg-neutral-100 p-1.5 opacity-80 md:p-3">
                  <Play fill="black" className="opacity-85" />
                </div>
              </Link>

              {/* title and link to recipe */}
              <div className="col-span-1 flex items-center justify-center">
                <Link
                  href={`/categories/${card.strCategory.toLowerCase()}/${card.idMeal} `}
                  className="block text-lg font-semibold transition-all duration-500 ease-in-out hover:scale-110 md:text-xl"
                >
                  {card.title}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
