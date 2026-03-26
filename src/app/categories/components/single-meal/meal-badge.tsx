import Link from "next/link";

type MealBadgeProps = {
  label: string;
  href: string;
};

export default function MealBadge({ label, href }: MealBadgeProps) {
  return (
    <button className="mx-auto rounded-md bg-orange-400 px-3 py-2 text-white md:px-4 dark:bg-orange-700 dark:text-neutral-200">
      <Link href={href}>{label}</Link>
    </button>
  );
}
