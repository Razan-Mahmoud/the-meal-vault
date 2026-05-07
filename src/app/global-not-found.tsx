import "./globals.css";
import { Happy_Monkey } from "next/font/google";
import type { Metadata } from "next";
import Link from "next/link";

const happyMonkey = Happy_Monkey({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={happyMonkey.className}>
      <body>
        <div className="flex items-center justify-center">
          <h1>404 - Page Not Found</h1>
          <p>This page does not exist.</p>
          <Link href={"/"}>Return to Home Page</Link>
        </div>
      </body>
    </html>
  );
}
