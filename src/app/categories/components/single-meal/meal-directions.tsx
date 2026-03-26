import Link from "next/link";

type MealDirectionsProps = {
  instructions: string;
  sourceUrl: string;
};

export default function MealDirectionsPage({ instructions, sourceUrl }: MealDirectionsProps) {
  const steps = instructions
    .split(/\r\n|\n/)
    .filter((line) => line.trim() !== "" && line.trim() !== "▢");

  return (
    <div className="space-y-3">
      <div className="w-fit border-b-2 border-orange-500 pb-1 dark:border-orange-700">
        <h2 className="text-lg font-semibold">Directions</h2>
      </div>
      <ul className="ml-5 list-disc space-y-2">
        {steps.map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </ul>
      <button className="mx-auto rounded-md bg-orange-400 px-3 py-2 text-white md:px-4 dark:bg-orange-700 dark:text-neutral-200">
        <Link href={sourceUrl} target="_blank">
          Source
        </Link>
      </button>
    </div>
  );
}
