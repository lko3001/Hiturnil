"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { useState } from "react";
import { GlobalProvider } from "@/components/GlobalContext";
import Root from "@/components/Root";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDark, setIsDark] = useState(false);
  return (
    <html lang="en">
      <body className={`${inter.className} h-0 min-h-screen`}>
        <ThemeProvider enableSystem={true} attribute="class">
          <GlobalProvider>
            <Root>{children}</Root>
          </GlobalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
