import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BrewHub Reviews - Expert Coffee Equipment Reviews & Buying Guides",
  description:
    "Expert, independent reviews of espresso machines, coffee grinders, kettles, and brewing equipment. We research, test, and compare so you can brew with confidence.",
  keywords: [
    "coffee reviews",
    "espresso machine reviews",
    "coffee grinder reviews",
    "best coffee equipment",
    "pour-over coffee",
    "kettle reviews",
    "coffee buying guide",
    "Breville reviews",
    "Fellow reviews",
    "Baratza reviews",
  ],
  authors: [{ name: "BrewHub Reviews" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "BrewHub Reviews - Expert Coffee Equipment Reviews",
    description:
      "Expert, independent reviews of espresso machines, coffee grinders, kettles, and brewing equipment.",
    siteName: "BrewHub Reviews",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BrewHub Reviews - Expert Coffee Equipment Reviews",
    description:
      "Expert, independent reviews of espresso machines, coffee grinders, kettles, and brewing equipment.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#eaeded] text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
