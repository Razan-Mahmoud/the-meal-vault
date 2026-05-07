import Link from "next/link";

type MealBadgeProps = {
  label: string;
  href: string;
};

export default function MealBadge({ label, href }: MealBadgeProps) {
  return (
    <button className="mx-auto mr-3 rounded-md bg-emerald-600 px-3 py-2 font-medium text-white md:px-4 dark:bg-slate-700 dark:text-neutral-300">
      <Link href={href}>{label}</Link>
    </button>
  );
}
