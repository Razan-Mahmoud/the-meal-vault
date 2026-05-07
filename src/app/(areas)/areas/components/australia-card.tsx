import Image from "next/image";
import Link from "next/link";
import australiaMap from "@/public/australia-vector.png";

export default function AustraliaCard() {
  const mapDetails = [{ id: "Australian", label: "Australian" }];
  return (
    <div className="flex flex-col gap-4">
      {/* title */}
      <p className="text-center text-3xl font-medium dark:text-neutral-300">Australia</p>
      <div className="relative aspect-square h-full md:h-1/2">
        {/* main map */}
        <Image
          src={australiaMap}
          alt="Australia Map"
          fill
          className="-z-10 object-contain object-center"
        />
        <div className="z-10 flex h-full items-center justify-center">
          {mapDetails.map((country) => {
            return (
              <button
                key={country.id}
                className="rounded-md bg-rose-800 p-2 text-xl text-neutral-200 dark:bg-rose-800 dark:text-neutral-300"
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
