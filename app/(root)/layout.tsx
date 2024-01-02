import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import NavigationBar from "@/components/common/NavigationBar";
import Footer from "@/components/common/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <NavigationBar />
      {children}
      <Footer />
    </main>
  );
}
