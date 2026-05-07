import Image from "next/image";
import bgMain from "@/public/bg-main.jpg";
import Link from "next/link";
import mainLogo from "@/public/leaf-maple-svgrepo-com.svg";
import { Copyright } from "lucide-react";

export default function MainFooter() {
  const sideNavTitles = [
    {
      strCategory: "Beef",
    },
    {
      strCategory: "Breakfast",
    },
    {
      strCategory: "Chicken",
    },
    {
      strCategory: "Dessert",
    },
    {
      strCategory: "Goat",
    },
    {
      strCategory: "Lamb",
    },
    {
      strCategory: "Miscellaneous",
    },
    {
      strCategory: "Pasta",
    },
    {
      strCategory: "Pork",
    },
    {
      strCategory: "Seafood",
    },
    {
      strCategory: "Side",
    },
    {
      strCategory: "Starter",
    },
    {
      strCategory: "Vegan",
    },
    {
      strCategory: "Vegetarian",
    },
  ];
  return (
    <footer className="relative mt-auto aspect-square h-112.5 w-full overflow-hidden px-2 md:h-64 md:px-4">
      {/* Background Image */}
      <Image
        src={bgMain}
        alt="spoons full of spices"
        fill
        className="-z-10 rounded-md object-cover object-center"
      />

      {/* content */}

      <div className="relative z-20 grid grid-cols-1 justify-between gap-2 py-2 md:grid-cols-2 md:gap-6">
        {/* flex items-center justify-between */}

        {/* website title and logo */}
        <div className="flex cursor-pointer flex-col items-center justify-center gap-2 md:gap-8">
          {/* Logo */}
          <Link href="/" className="cursor-pointer">
            <div className="relative size-10 overflow-hidden md:size-16">
              <Image
                src={mainLogo}
                alt="a maple leaf"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="rounded-lg object-cover"
              />
            </div>
          </Link>
          {/* Title */}
          <p className="text-2xl font-bold text-neutral-300 md:text-3xl">The Meal Vault</p>
        </div>

        {/* Nav links */}
        <div>
          {/* title */}
          <p className="py-2 text-xl font-semibold text-neutral-300 md:text-2xl">Categories:</p>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
            {/* Menu items */}
            {sideNavTitles.map((title) => {
              return (
                <Link key={title.strCategory} href={`/categories/${title.strCategory}`}>
                  <p className="col-span-1 font-semibold text-neutral-300">{title.strCategory}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      {/* copyrights */}
      <div className="relative z-20 justify-self-start pt-4">
        <p className="flex justify-center gap-2 text-neutral-200">
          Copyright
          <span>
            <Copyright size={20} color="#f8f7f7" strokeWidth={1.75} />
          </span>
          2026, Razan Mahmoud Fahmy, All Rights Reserved.
        </p>
      </div>

      {/* opacue layer on top */}
      <div className="absolute inset-0 bg-slate-900 opacity-55"></div>
    </footer>
  );
}
