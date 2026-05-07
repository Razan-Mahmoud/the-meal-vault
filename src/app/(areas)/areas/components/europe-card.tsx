import Image from "next/image";
import Link from "next/link";
import europeMap from "@/public/europe-vector.png";

export default function EuropeCard() {
  const mapDetails = [
    { id: "British", label: "British" },
    { id: "Croatian", label: "Croatian" },
    { id: "Netherlands", label: "Netherlands" },
    { id: "France", label: "France" },
    { id: "Greek", label: "Greek" },
    { id: "Irish", label: "Irish" },
    { id: "Italian", label: "Italian" },
    { id: "Norway", label: "Norway" },
    { id: "Polish", label: "Polish" },
    { id: "Portuguese", label: "Portuguese" },
    { id: "Slovakia", label: "Slovakia" },
    { id: "Spanish", label: "Spanish" },
    { id: "Ukrainian", label: "Ukrainian" },
  ];

  return (
    <div className="flex flex-col gap-4">
      {/* title */}
      <p className="text-center text-3xl font-medium dark:text-neutral-300">Europe</p>
      <div className="relative aspect-square size-full md:h-2/3">
        <Image src={europeMap} alt="Europe Map" fill className="-z-10 object-contain" />

        {/* countries buttons */}
        <div className="z-10 flex h-full flex-wrap items-center justify-center gap-3 md:gap-6">
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
