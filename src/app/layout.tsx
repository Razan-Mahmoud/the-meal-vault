import type { Metadata } from "next";
import { Happy_Monkey } from "next/font/google";

import "@/app/globals.css";
import { Providers } from "./providers";

const happyMonkey = Happy_Monkey({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

export const metadata: Metadata = {
  title: {
    template: "%s | The Meal Vault App",
    default: "The Meal Vault App",
  },
  description: "Recipes from around the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={` ${happyMonkey.className} bg-neutral-200 antialiased dark:bg-slate-600 dark:text-neutral-200`}
      >
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
