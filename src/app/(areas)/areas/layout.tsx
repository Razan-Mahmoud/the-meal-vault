import MainFooter from "@/app/(main)/layout-components/main-footer";
import AreasHeader from "./components/areas-header";

export default function AreasLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* header */}
      <AreasHeader />

      {children}

      {/* footer */}
      <MainFooter />
    </>
  );
}
