"use client";

import Image from "next/image";
import rosemaryPc from "@/public/rosemary.jpg";
import mainLogo from "@/public/leaf-maple-svgrepo-com.svg";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ThemeToggle } from "@/app/(main)/layout-components/theme-toggle-button";

export default function SecondaryHeader() {
  const params = useParams();
  const category = params.category as string;
  return (
    <header className="relative h-60 w-full md:h-72">
      {/* background image */}
      <Image
        src={rosemaryPc}
        alt="rosemary on a table"
        fill
        className="absolute -z-10 object-cover object-center"
      />

      {/* header */}
      <div className="absolute z-30 flex h-1/3 w-full items-center justify-between bg-emerald-700 px-3 py-2 md:px-10 md:py-8 dark:bg-emerald-800">
        {/* home page link */}
        <Link
          href="/"
          className="flex w-fit cursor-pointer items-center justify-center gap-2 md:gap-6"
        >
          <div className="relative size-10 overflow-hidden md:size-16">
            {/* Logo */}
            <Image
              src={mainLogo}
              alt="a maple leaf"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className="rounded-lg object-cover"
            />
          </div>

          {/* Website title */}
          <h1 className="text-center text-2xl font-semibold text-neutral-200 md:text-4xl dark:text-neutral-300">
            The Meal Vault
          </h1>
        </Link>

        {/* dark theme toggle */}
        <ThemeToggle />
      </div>

      {/* page title */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pt-6">
        <p className="text-4xl font-semibold text-neutral-200 md:text-6xl dark:text-neutral-300">
          Category: <span>{category?.charAt(0).toUpperCase() + category.slice(1)}</span>
        </p>
      </div>

      {/* opacue layer */}
      <div className="absolute inset-0 z-10 bg-gray-800 opacity-35"></div>
    </header>
  );
}
