"use client";

import Image from "next/image";
import logo from "@/public/logo.png";
import Link from "next/link";

import ContinentsDynamicMenu from "../areas/components/continents-dynamic-menu";
import { ThemeToggle } from "./theme-toggle-button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { title: "Breakfast" },
  { title: "Starter" },
  { title: "Side" },
  { title: "Miscellaneous" },
  { title: "Dessert" },
];
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="z-50 flex h-20 w-full flex-row justify-between bg-orange-100 px-2 py-5 shadow-sm shadow-orange-100 md:px-8 dark:bg-slate-800 dark:text-neutral-300 dark:shadow-slate-800">
      {/* Title and logo */}
      <div className="flex w-fit items-center justify-center gap-2 md:gap-6">
        {/* Logo */}
        <Link href="/" className="cursor-pointer">
          <div className="relative size-10 overflow-hidden md:size-16">
            <Image
              src={logo}
              alt="Veggies being stir fried"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className="rounded-lg object-cover"
            />
          </div>
        </Link>

        {/* Website title */}
        <Link href="/" className="cursor-pointer">
          <h1 className="text-center text-lg font-semibold text-rose-900 md:text-3xl dark:text-neutral-300">
            The Meal Vault
          </h1>
        </Link>
      </div>

      {/* Navbar */}
      {/* Desktop Navigation (visible on screens >= md) */}
      <div className="hidden items-center justify-center gap-3 md:flex">
        <div className="absolute top-0 left-1/3">
          <ContinentsDynamicMenu />
        </div>
        {navLinks.map((item) => (
          <Link
            className="cursor-pointer rounded-lg p-2 text-lg font-medium text-rose-900 hover:bg-orange-200 dark:text-neutral-300 dark:hover:bg-slate-600"
            key={item.title}
            href={`/categories/${item.title}`}
          >
            {item.title}
          </Link>
        ))}

        <ThemeToggle />
      </div>

      {/* change */}

      {/* Mobile Navigation (visible on screens < md) */}
      <div className="md:hidden">
        <div className="absolute top-0 left-1/2">
          <ContinentsDynamicMenu />
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button className="size-10 dark:bg-gray-700" aria-label="Toggle menu">
              <Menu className="size-10" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="space-y-6 bg-neutral-200 dark:border-gray-800 dark:bg-gray-800 dark:text-slate-300"
          >
            <div className="flex flex-col space-y-4 p-4">
              {navLinks.map((item) => (
                <Link
                  className="cursor-pointer rounded-lg p-2 text-lg font-medium text-rose-900 hover:bg-orange-200 dark:text-neutral-300 dark:hover:bg-slate-600"
                  key={item.title}
                  href={`/categories/${item.title}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}

              {/* Dark mode toggle */}
              <div onClick={() => setIsOpen(false)}>
                <ThemeToggle />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
