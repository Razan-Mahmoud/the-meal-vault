import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-1/2 flex-col items-center justify-center gap-6 px-4 py-10">
      <h1 className="text-4xl font-bold text-orange-800 dark:text-orange-400">404</h1>
      <p className="text-center text-xl text-neutral-500 dark:text-neutral-300">
        Sorry, we could not find that meal.
      </p>
      <Link
        href="/"
        className="rounded-md bg-green-600 px-4 py-2 font-semibold text-neutral-300 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
      >
        Back to Home Page
      </Link>
    </div>
  );
}
