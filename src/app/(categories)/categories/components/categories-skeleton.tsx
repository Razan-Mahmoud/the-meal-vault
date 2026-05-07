import { Skeleton } from "@/components/ui/skeleton";

export default function CategoriesSkeleton() {
  return (
    <section className="grid grid-cols-1 gap-10 p-5 md:grid-cols-4 md:p-10">
      <div className="relative aspect-square overflow-hidden rounded-md shadow-lg [clip-path:polygon(0_0,100%_0,100%_80%,50%_100%,0_80%)]">
        <Skeleton className="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw size-full" />
      </div>

      <div className="group relative aspect-square overflow-hidden rounded-md [clip-path:polygon(0_0,100%_0,100%_80%,50%_100%,0_80%)]">
        <Skeleton className="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw size-full" />
      </div>
      <div className="group relative aspect-square overflow-hidden rounded-md [clip-path:polygon(0_0,100%_0,100%_80%,50%_100%,0_80%)]">
        <Skeleton className="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw size-full" />
      </div>

      <div className="group relative aspect-square overflow-hidden rounded-md [clip-path:polygon(0_0,100%_0,100%_80%,50%_100%,0_80%)]">
        <Skeleton className="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw size-full" />
      </div>
    </section>
  );
}
