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
        <meta
          name="description"
          content="Memento - Make contact with your college friends"
        />
        <meta
          property="og:title"
          content="Memento - Make contact with your college friends"
        />
        <meta
          property="og:image"
          content="https://app-memento.netlify.app/favicon.ico"
        />
        <meta
          property="og:description"
          content="Memento - Make contact with your college friends"
        />
        <meta name="author" content="Aman Shivaji Singh" />
        <meta property="og:url" content="https://app-memento.netlify.app" />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="Memento, college, network" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body>{children}</body>
    </html>
  );
}
