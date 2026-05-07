import { ThemeToggle } from "@/app/(main)/layout-components/theme-toggle-button";
import Image from "next/image";
import Link from "next/link";
import mainLogo from "@/public/leaf-maple-svgrepo-com.svg";

export default function MainHeader() {
  return (
    <header className="flex h-20 w-full items-center justify-between border-b border-gray-400 px-3 py-2 shadow-sm md:h-24 md:px-8 md:py-4 dark:text-neutral-300 dark:shadow-slate-800">
      {/* Title and logo */}

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

      {/* Dark theme toggle */}
      <ThemeToggle />
    </header>
  );
}
