import type { Metadata } from "next";
import { Inter, Noto_Sans_Devanagari, Noto_Sans_Malayalam } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navigation from "../components/Navigation";
import BottomNav from "../components/BottomNav";
import LoadingScreen from "../components/LoadingScreen";

const inter = Inter({ subsets: ["latin"] });
const instrumentSerif = localFont({
  src: "../../public/instrument-serif/instrumentserif-regular.ttf",
  variable: "--font-instrument-serif",
  display: "swap",
});
const notoMalayalam = Noto_Sans_Malayalam({ subsets: ["malayalam"], variable: "--font-noto-malayalam", display: "swap" });
const notoDevanagari = Noto_Sans_Devanagari({ subsets: ["devanagari"], variable: "--font-noto-devanagari", display: "swap" });

export const metadata: Metadata = {
  title: "Koustav Roy",
  description: "Koustav Roy is an aspiring Data Analyst who turns data into clear insights and meaningful decisions.",
  keywords: ["Koustav Roy", "Data Analyst", "Excel", "SQL", "Python", "Power BI", "Tableau", "data visualization"],
  authors: [{ name: "Koustav Roy" }],
  robots: "index, follow",
  openGraph: {
    title: "Koustav Roy | Data Analyst",
    description: "An aspiring Data Analyst who enjoys turning data into clear insights and meaningful business decisions.",
    siteName: "Koustav Roy",
    images: [{ url: "/twittercard-v2.png", width: 1200, height: 630, alt: "Koustav Roy — Data Analyst" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Koustav Roy | Data Analyst",
    description: "Data, projects, creativity, and things I am building.",
    images: ["/twittercard-v2.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${instrumentSerif.variable} ${notoMalayalam.variable} ${notoDevanagari.variable}`}>
        <LoadingScreen />
        <Navigation />
        <main className="content-area">{children}</main>
        <div className="bottom-vignette" />
        <BottomNav />
        <Analytics />
      </body>
    </html>
  );
}
