import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wissous Tennis Club",
  description: "Liens utiles du Wissous Tennis Club",
  openGraph: {
    title: "Wissous Tennis Club",
    description: "Réservation, inscription, avis et Instagram",
    images: [{ url: "/logo.png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen" style={{ backgroundColor: "var(--bg)", fontFamily: "var(--font-inter, sans-serif)" }}>
        {children}
      </body>
    </html>
  );
}
