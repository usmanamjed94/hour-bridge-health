import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-inter-tight",
});

export const metadata: Metadata = {
  title: "Hour Bridge Health — Locum Placements That Match Your Subspecialty",
  description:
    "A physician-run agency that matches you to facilities with the right equipment, case volume, and support staff — at higher rates.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable}`}>
      <body className="font-body overflow-x-hidden">{children}</body>
    </html>
  );
}
