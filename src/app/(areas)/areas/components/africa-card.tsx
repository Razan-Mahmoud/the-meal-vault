import Image from "next/image";
import Link from "next/link";
import africaMap from "@/public/africa-vectors.png";

export default function AfricaCard() {
  const mapDetails = [
    { id: "Algerian", label: "Algerian" },
    { id: "Egyptian", label: "Egyptian" },
    { id: "Kenyan", label: "Kenyan" },
  ];

  return (
    <div className="flex flex-col gap-4">
      {/* title */}
      <p className="text-center text-3xl font-medium dark:text-neutral-300">Africa</p>
      <div className="relative aspect-square h-full md:h-2/3">
        {/* main map */}
        <Image
          src={africaMap}
          alt="Africa Map"
          fill
          className="-z-10 h-full w-full object-contain object-center"
        />
        {/* countries buttons */}
        <div className="z-10 flex h-full flex-col items-center justify-center gap-8">
          {mapDetails.map((country) => {
            return (
              <button
                key={country.id}
                className="rounded-md bg-amber-800 p-2 text-xl text-neutral-200 dark:bg-amber-700 dark:text-neutral-300"
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
