import MainFooter from "@/app/(main)/layout-components/main-footer";
import SecondaryHeader from "./components/secondary-header";
import { Suspense } from "react";
import Loading from "./loading";

export default function CategoryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* header */}
      <SecondaryHeader />
      <main>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </main>

      {/* footer */}
      <MainFooter />
    </>
  );
}
