import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import LanguageProvider from "@/components/LanguageProvider";
import Navbar from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kolosi-infinit.vercel.app"),
  title: {
    default: "KOLOSI-Infinit Wrestling Club",
    template: "%s | KOLOSI-Infinit Wrestling Club",
  },
  description:
    "KOLOSI-Infinit Wrestling Club in Prizren, Kosovo. Training for Beginner, Junior, and Professional wrestlers.",
  keywords: [
    "wrestling club",
    "Prizren",
    "Kosovo",
    "sports club",
    "KOLOSI-Infinit",
    "mundje",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: "KOLOSI-Infinit Wrestling Club",
    description:
      "Professional wrestling club in Prizren with structured training programs for all levels.",
    url: "/",
    siteName: "KOLOSI-Infinit Wrestling Club",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sq">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased site-body`}
      >
        <LanguageProvider>
          <Navbar />
          <main className="page-main">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
