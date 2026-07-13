import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin", "cyrillic"], variable: "--font-geist", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });

const description =
  "Mebelchilar va oshxona dizaynerlari uchun ilova. Oshxonani 3D da yig'ing, materiallarni tanlang va darhol smeta hamda ishlab chiqarish uchun fayllarni oling.";

export const metadata: Metadata = {
  metadataBase: new URL("https://jihozla.uz"),
  title: {
    default: "Jihozla - mebelchilar va oshxona dizaynerlari uchun ilova",
    template: "%s | Jihozla",
  },
  description,
  keywords: ["mebel", "oshxona", "3D konstruktor", "smeta", "raskroy", "CNC", "ChPU", "SWJ008", "usta", "Oʻzbekiston"],
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    url: "https://jihozla.uz",
    siteName: "Jihozla",
    title: "Jihozla - mebelchilar va oshxona dizaynerlari uchun ilova",
    description,
  },
  twitter: { card: "summary_large_image", title: "Jihozla", description },
  icons: { icon: "/icon.png", apple: "/icon.png" },
};

/* The page is light only, so a single theme colour is correct here. */
export const viewport: Viewport = {
  themeColor: "#f7f8f8",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
