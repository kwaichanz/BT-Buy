"use client";

import "swiper/css";
import "swiper/css/bundle";
import { Inter } from "next/font/google";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";
import { Navbar } from "@src/components/Navbar/Navbar";
import { Footer } from "@src/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BT Buy",
  description: "Online Shopping",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>BT Buy</title>
        <meta title="description" content="Buy products online"></meta>
        <link
          rel="shortcut icon"
          href="Easter eggs.svg"
          type="image/svg"
          sizes="32x32"
        />
      </head>
      <body className={inter.className}>
        <CacheProvider>
          <ChakraProvider theme={theme}>
            <Navbar />
            {children}
            <Footer />
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
