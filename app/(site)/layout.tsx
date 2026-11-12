import { Inter } from "next/font/google";
import "../globals.css";
import type { Metadata } from "next";
import Proivder from "./Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Weida Machinery | Professional Screw & Barrel Manufacturer",
  description: "Zhoushan Weida Machinery manufactures custom extrusion and injection molding screws and barrels, with expertise in EPE, EPS, PE and twin-screw applications.",
  icons: {
    icon: "/images/logo/logo-wd.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`bg-slate-100 ${inter.className}`}>
        <Proivder>{children}</Proivder>
      </body>
    </html>
  );
}
