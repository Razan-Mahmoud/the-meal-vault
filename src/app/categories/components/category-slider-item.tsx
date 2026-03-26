"use client";

import { Button } from "@/components/ui/button";
import { CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import { StaticImageData } from "next/image";
import Link from "next/link";

type CategorySliderItemProps = {
  idCategory: string;
  strCategory: string;
  src: StaticImageData | string;
  alt: string;
  title: string;
  description: string;
  btnTitle: string;
};
export default function CategorySliderItem({
  idCategory,
  strCategory,
  src,
  alt,
  title,
  description,
  btnTitle,
}: CategorySliderItemProps) {
  return (
    <CarouselItem>
      <div id={idCategory} className="relative flex h-80 basis-full items-center justify-center">
        {/* Image */}
        <Image src={src} alt={alt} fill sizes="100vw" className="object-cover object-center" />

        {/* Opaque layer over image */}
        <div className="absolute h-full w-full bg-neutral-900 opacity-50 dark:bg-neutral-700"></div>

        {/* slider content */}
        <div className="relative z-10 w-1/2 space-y-4 text-center text-gray-300">
          {/* title */}
          <p className="font-bold md:text-2xl">{title}</p>

          {/* description */}
          <p className="font-medium">{description}</p>

          {/* button */}
          <Link href={`/categories/${strCategory.toLowerCase()}`} passHref>
            <Button variant={"default"} className="px-2 py-3 md:px-4 md:py-5 dark:text-slate-300">
              {btnTitle}
            </Button>
          </Link>
        </div>
      </div>
    </CarouselItem>
  );
}
