import { Inter } from "next/font/google";
import { Lunasima } from "next/font/google";
import { Kablammo } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const lusitana = Lunasima({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: "normal",
});

export const kabalammo = Kablammo({ subsets: ["cyrillic"], weight: ["400"] });
