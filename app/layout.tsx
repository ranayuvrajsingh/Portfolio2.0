/* eslint-disable @next/next/no-sync-scripts */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "This is my portfolio",
  icons: {
    icon: "person2.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <script src="https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js"></script>

      <link
        rel="stylesheet"
        href="https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css"
      />
      <body className={inter.className}>
        <Navbar />
        {children}
        <Navigation />
      </body>
    </html>
  );
}
