import React from "react";
import localFont from "next/font/local";
import Card from "./components/card";
import Button from "@mui/material/Button";
import Navbar from "./components/navbar";
// import { useDropdown, } from "./pricing/page";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        style={{ margin: 0, padding: 0, height: "100vh", width: "100vw" }}
      >
        <Navbar />

        {children}
      </body>
    </html>
  );
}
