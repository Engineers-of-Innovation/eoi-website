import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import localFont from "next/font/local";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

import "./globals.css";
import SmoothScrollStoreProvider from "@/utils/stores/SmoothScrollStore";

// Font files can be colocated inside of `app`
const clashDisplay = localFont({
  src: "./fonts/ClashDisplay-Variable.woff2",
  display: "swap",
  variable: "--font-clash-display",
});

// eslint-disable-next-line new-cap
const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });

export const metadata: Metadata = {
  title: "Engineers of Innovation",
  description: "We are a team of engineers who build innovative products.",
};

// eslint-disable-next-line react/function-component-definition
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="w-full">
      <body className={`${raleway.variable} ${clashDisplay.variable} w-full`}>
        <SmoothScrollStoreProvider>
          {children}
          <PrismicPreview repositoryName={repositoryName} />
        </SmoothScrollStoreProvider>
      </body>
    </html>
  );
}
