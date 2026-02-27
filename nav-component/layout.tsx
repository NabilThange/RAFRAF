import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CIRCULR NAV",
  description: "Circular reveal navigation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
