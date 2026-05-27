import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tavyn UX",
  description: "A lightweight UX prototyping lab for Tavyn."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
