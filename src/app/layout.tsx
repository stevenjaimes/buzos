import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

import Footer from "@/componentsf/footer";
import Navbar from "@/componentsf/navbar";
import ModalProvider from "@/providersf/modal-provider";
import { Toaster } from "@/components/ui/sonner"

const font = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>      
        <Toaster
          position="top-center"
          richColors
        />
        <Navbar />
        {children}      
      </body>
    </html>
  );
}
