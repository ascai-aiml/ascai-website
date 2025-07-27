import type React from "react"
import type { Metadata } from "next"
import { Orbitron, Share_Tech_Mono, Rajdhani } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "700", "900"],
})

const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  variable: "--font-share-tech",
  weight: ["400"],
})

const rajdhani = Rajdhani({
  subsets: ["latin"],
  variable: "--font-rajdhani",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "ASCAI - Association of Students for Computing Artificial Intelligence",
  description:
    "Professional computing intelligence research collective developing advanced technological solutions and educational frameworks.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${shareTechMono.variable} ${rajdhani.variable}`}>
      <body className="bg-black text-white overflow-x-hidden">
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
