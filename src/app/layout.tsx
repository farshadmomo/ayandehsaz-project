"use client";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Providers } from "./Providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black">
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
