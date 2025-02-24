import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Contactus from "./components/Contactuscomp/Contactuscomp";
import Inbox from "./components/Inbox/Inbox";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Kalven IT Group</title>
          <meta name="description" content="Kalven IT Group is a leading Digital Solution Company for Business IT Solutions." />
          <link rel="icon" href="/kalvenlogotitlebar.ico" sizes="32x32" type="image/x-icon" />
        </head>
        {/* Favicon Link */}
        <link rel="icon" href="/kalvenlogotitlebar.ico" sizes="32/32" className="w-52" type="image/x-icon" />

        {/* Optional: For PNG or SVG Logos */}
        {/* <link rel="icon" href="/logo.png" type="image/png" /> */}
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Shared Navbar */}
        <Navbar />

        {/* Page content */}
        <main>{children}</main>
        <Contactus />
        <Inbox />

        {/* Shared Footer */}
        <Footer />
      </body>
    </html>
  );
}
