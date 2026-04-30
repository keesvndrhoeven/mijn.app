import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kees — Portfolio",
  description: "Persoonlijke portfolio van Kees. Meertalig, adaptief, creatief.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
