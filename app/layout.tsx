import type { Metadata } from "next";
import { Geist, Geist_Mono, Dancing_Script, Lato, Cormorant_Garamond, Tangerine, Gotu } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: "400",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
});

const tangerine = Tangerine({
  variable: "--font-tangerine",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const gotu = Gotu({
  variable: "--font-gotu",
  subsets: ["latin", "devanagari"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Prasad & Chinmayi - Wedding",
  description: "Join us for our special day on December 12, 2026",
};

// Add subtle rotating mandala art
const mandalaArt = (
  <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
    <div className="w-[600px] h-[600px] rounded-full border-[1px] border-wedding-pink-400 animate-spin-slow">
      <div className="w-[80%] h-[80%] rounded-full border-[1px] border-wedding-gold-500 border-dashed m-auto"></div>
    </div>
  </div>
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${dancingScript.variable} ${lato.variable} ${cormorantGaramond.variable} ${tangerine.variable} ${gotu.variable} h-full antialiased`}
    >
      <body className="bg-[#fdfbf7] text-[#2d1b1b] font-sans">
        {mandalaArt}
        {children}
      </body>
    </html>
  );
}
