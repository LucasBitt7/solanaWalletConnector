import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import AppWalletProvider from "./components/AppWalletProvider";
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppWalletProvider>{children}</AppWalletProvider>
      </body>
    </html>
  );
}

