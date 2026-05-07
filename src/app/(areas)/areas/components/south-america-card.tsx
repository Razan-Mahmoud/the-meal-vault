import Image from "next/image";
import Link from "next/link";
import southAmericaMap from "@/public/south-america-vector.png";

export default function SouthAmericaCard() {
  const mapDetails = [
    { id: "Argentina", label: "Argentina" },
    { id: "Jamaican", label: "Jamaican" },
    { id: "Uruguayan", label: "Uruguayan" },
    { id: "Venezuela", label: "Venezuela" },
  ];
  return (
    <div className="flex flex-col gap-4">
      {/* title */}
      <p className="text-center text-3xl font-medium dark:text-neutral-300">South America</p>

      <div className="relative aspect-square h-full md:h-1/2">
        {/* main map */}
        <Image
          src={southAmericaMap}
          alt="South America Map"
          fill
          className="-z-10 object-contain"
        />

        {/* countries buttons */}
        <div className="z-10 flex h-full flex-wrap items-center justify-center gap-2 md:gap-6">
          {mapDetails.map((country) => {
            return (
              <button
                key={country.id}
                className="rounded-md bg-sky-600 p-2 text-lg text-neutral-200 md:text-xl dark:bg-sky-700 dark:text-neutral-300"
              >
                <Link href={`/areas/${country.label}`}> {country.label}</Link>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
