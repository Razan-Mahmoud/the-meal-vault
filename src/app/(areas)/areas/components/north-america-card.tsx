import Image from "next/image";
import Link from "next/link";
import northAmericaMap from "@/public/north-america-vector2.png";

export default function NorthAmericaCard() {
  const mapDetails = [
    { id: "United States", label: "United States" },
    { id: "Canadian", label: "Canadian" },
    { id: "Mexican", label: "Mexican" },
  ];
  return (
    <div className="flex flex-col gap-4">
      {/* title */}
      <p className="text-center text-3xl font-medium dark:text-neutral-300">North America</p>

      <div className="relative aspect-square size-full md:h-1/2">
        {/* main map */}
        <Image
          src={northAmericaMap}
          alt="North America Map"
          fill
          className="-z-10 object-contain"
        />

        {/* countries buttons */}
        <div className="z-10 flex h-full flex-wrap items-center justify-center gap-4 md:gap-6">
          {mapDetails.map((country) => {
            return (
              <button
                key={country.id}
                className="rounded-md bg-green-600 p-2 text-lg text-neutral-200 md:text-xl dark:bg-green-800 dark:text-neutral-300"
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
