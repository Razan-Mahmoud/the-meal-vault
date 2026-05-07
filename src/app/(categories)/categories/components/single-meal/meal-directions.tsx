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
    <div className="space-y-3 text-lg">
      <div className="w-fit border-b-2 border-emerald-600 pb-1 dark:border-slate-400">
        <h2 className="text-xl font-semibold md:text-2xl">Directions</h2>
      </div>
      <ul className="ml-5 list-disc space-y-2">
        {steps.map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </ul>
      <button className="mx-auto mt-2 rounded-md bg-emerald-600 px-3 py-2 text-white md:mt-4 md:px-4 dark:bg-slate-400 dark:text-neutral-200">
        <Link href={sourceUrl} target="_blank">
          Source
        </Link>
      </button>
    </div>
  );
}
