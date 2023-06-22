import "./globals.css"
import { Inter } from "next/font/google"

import Navbar from "@/components/Navbar/Navbar"
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <body className={inter.className}>
            <Navbar />
            {children}
          </body>
     </html>
  )
}
