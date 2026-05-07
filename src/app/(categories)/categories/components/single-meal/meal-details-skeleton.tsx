// app/(categories)/categories/[id]/loading.tsx

export default function MealDetailSkeleton() {
  return (
    <div className="relative flex animate-pulse flex-col space-y-4 px-6 py-5 md:mx-4 md:space-y-8 md:px-10">
      {/* Title skeleton */}
      <div className="h-8 w-2/3 rounded-md bg-neutral-300 dark:bg-slate-600" />

      {/* Badges skeleton */}
      <div className="flex gap-6">
        <div className="h-10 w-24 rounded-md bg-neutral-300 dark:bg-slate-600" />
        <div className="h-10 w-24 rounded-md bg-neutral-300 dark:bg-slate-600" />
      </div>

      {/* Image skeleton */}
      <div className="relative aspect-video w-1/2 rounded-md bg-neutral-300 dark:bg-slate-600" />

      {/* Ingredients skeleton */}
      <div className="w-full space-y-3 px-6">
        <div className="h-6 w-32 rounded-md bg-neutral-300 dark:bg-slate-600" />
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-4 w-1/2 rounded-md bg-neutral-300 dark:bg-slate-600" />
        ))}
      </div>

      {/* Directions skeleton */}
      <div className="w-full space-y-3 px-8">
        <div className="h-6 w-32 rounded-md bg-neutral-300 dark:bg-slate-600" />
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-4 w-1/2 rounded-md bg-neutral-300 dark:bg-slate-600" />
        ))}
      </div>

      {/* Video skeleton */}
      <div className="aspect-video w-1/2 rounded-md bg-neutral-300 dark:bg-slate-600" />
    </div>
  );
}
