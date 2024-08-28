import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LanguageProvider from "@/context/LanguageProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Luis Alejandro Martinez Magallanes",
  description: "Portfolio | Luis Alejandro Martinez Magallanes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <LanguageProvider>
        <body className={inter.className}>{children}</body>
      </LanguageProvider>
    </html>
  );
}
