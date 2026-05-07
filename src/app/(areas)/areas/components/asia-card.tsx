import asiaMap from "@/public/asia-vector.png";
import Image from "next/image";
import Link from "next/link";

export default function AsiaCard() {
  const mapDetails = [
    { id: "Chinese", label: "Chinese" },
    { id: "Filipino", label: "Filipino" },
    { id: "India", label: "India" },
    { id: "Japanese", label: "Japanese" },
    { id: "Malaysian", label: "Malaysian" },
    { id: "Russian", label: "Russian" },
    { id: "Saudi Arabian", label: "Saudi Arabian" },
    { id: "Syrian", label: "Syrian" },
    { id: "Thai", label: "Thai" },
    { id: "Turkish", label: "Turkish" },
    { id: "Vietnamese", label: "Vietnamese" },
  ];
  return (
    <div className="flex flex-col gap-4">
      {/* title */}
      <p className="text-center text-3xl font-medium dark:text-neutral-300">Asia</p>

      <div className="relative aspect-square h-full md:h-2/3">
        {/* main map */}
        <Image src={asiaMap} alt="Asia Map" fill className="-z-10 object-contain object-center" />
        {/* countries buttons */}
        <div className="absolute inset-0 z-10 flex h-full flex-wrap items-center justify-center gap-4 md:gap-6">
          {mapDetails.map((country) => {
            return (
              <button
                key={country.id}
                className="rounded-md bg-green-600 p-2 text-lg text-neutral-200 md:text-xl dark:bg-green-700 dark:text-neutral-300"
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
