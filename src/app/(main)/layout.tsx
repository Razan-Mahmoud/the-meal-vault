import Image from "next/image";
import MainHeader from "./layout-components/main-header";

import bgPic from "@/public/bg3.jpg";
import MainFooter from "./layout-components/main-footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* Background */}
      <div className="relative h-screen w-full shadow-sm dark:shadow-slate-600">
        {/* Background Image */}
        <Image
          src={bgPic}
          alt="vegetables and spices"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="-z-10 rounded-md object-cover"
          priority
        />
        {/* Header */}
        <div className="relative z-30">
          <MainHeader />
        </div>

        {/* text */}
        <div className="relative z-20 flex flex-col items-center justify-center space-y-3 px-8 py-20 *:text-center">
          <p className="text-3xl font-bold text-neutral-200">Unleash the creative chef inside...</p>
          <p className="text-xl font-bold text-neutral-200">
            Get inspired by new and exotic recipes.
          </p>
        </div>
        {/* opacue layer */}
        <div className="absolute inset-0 z-10 bg-gray-800 opacity-35"></div>
      </div>

      {children}

      {/* footer */}
      <MainFooter />
    </>
  );
}
