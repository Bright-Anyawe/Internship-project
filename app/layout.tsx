import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import LayoutClient from "./layoutClient";
// import { ThemeProvider, createTheme } from "@mui/material/styles";

// const darkTheme = createTheme({
//   palette: {
//     mode: "dark",
//   },
// });
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Skill Test Dashboard",
  description: "Generated for WhatBytes company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
               <>
               {}
               <LayoutClient>{children}</LayoutClient>
        {}
               </>

      </body>
    </html>
  );
}
