import type { Metadata, Viewport } from "next";

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QuickIDEA",
  description: "A simple and efficient code editor for quick prototyping.",
  manifest: "/manifest.json",
}

export const viewport: Viewport = {
  themeColor: "#2563eb",
}

export default function RootLayout({ children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}