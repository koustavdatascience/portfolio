import type { Metadata } from "next";
import { Inter, Noto_Sans_Devanagari, Noto_Sans_Malayalam } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const notoMalayalam = Noto_Sans_Malayalam({ subsets: ["malayalam"], variable: "--font-noto-malayalam", display: "swap" });
const notoDevanagari = Noto_Sans_Devanagari({ subsets: ["devanagari"], variable: "--font-noto-devanagari", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://koustavroy.vercel.app"),
  title: "Koustav Roy",
  description: "Koustav Roy is an aspiring Data Analyst who turns data into clear insights and meaningful decisions.",
  keywords: ["Koustav Roy", "Data Analyst", "Excel", "SQL", "Python", "Power BI", "Tableau", "data visualization"],
  authors: [{ name: "Koustav Roy" }],
  robots: "index, follow",
  openGraph: {
    title: "Koustav Roy | Data Analyst",
    description: "An aspiring Data Analyst who enjoys turning data into clear insights and meaningful business decisions.",
    siteName: "Koustav Roy",
    images: [{ url: "/twittercard.png", width: 1200, height: 630, alt: "Koustav Roy — Data Analyst" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Koustav Roy | Data Analyst",
    description: "Data, projects, creativity, and things I am building.",
    images: ["/twittercard.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${notoMalayalam.variable} ${notoDevanagari.variable}`}>
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
