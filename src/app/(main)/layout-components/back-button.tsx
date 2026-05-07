"use client";

import { MoveLeft } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function BackButton() {
  // hide button on home page
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // variable to render url
  const router = useRouter();

  if (!router) {
    return <div>Loading...</div>;
  }

  //   condition to hide button on home page
  if (isHomePage) {
    return null;
  }
  function handleClickBack() {
    router.back();
  }

  return (
    <button
      className="flex items-center justify-center gap-2 rounded-lg bg-emerald-600 p-2 text-lg text-neutral-100 md:px-7 md:py-2 dark:bg-slate-500 dark:text-neutral-200"
      onClick={handleClickBack}
    >
      <MoveLeft size={20} strokeWidth={4} />
      <p>Back</p>
    </button>
  );
}
