import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/styles/responsive.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Memento",
  description: "Memento - App for colleges",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Box icons CDN */}
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        ></link>
        <link rel="icon" type="image/x-icon" href="favicon.ico"></link>
        <link rel="manifest" href="mainfest.json" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body>{children}</body>
    </html>
  );
}
