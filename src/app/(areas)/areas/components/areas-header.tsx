import Image from "next/image";
import mapPic from "@/public/map-of-the-world.jpg";
import mainLogo from "@/public/leaf-maple-svgrepo-com.svg";
import Link from "next/link";
import { ThemeToggle } from "@/app/(main)/layout-components/theme-toggle-button";

export default function AreasHeader() {
  return (
    <header className="relative h-60 w-full md:h-72">
      {/* background image */}
      <Image
        src={mapPic}
        alt="world map"
        fill
        className="absolute -z-10 object-cover object-center"
      />

      {/* header */}
      <div className="absolute z-30 flex h-1/3 w-full items-center justify-between bg-cyan-600 px-3 py-2 md:px-10 md:py-8 dark:bg-cyan-700">
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
        <p className="text-center text-4xl font-semibold text-neutral-200 md:text-6xl dark:text-neutral-300">
          International Cuisine
        </p>
      </div>

      {/* opacue layer */}
      <div className="absolute inset-0 z-10 bg-gray-800 opacity-35"></div>
    </header>
  );
}
