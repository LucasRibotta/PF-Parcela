import "./globals.css"
import { Montserrat } from "next/font/google"
import Navbar from "@/components/Navbar/Navbar"
import Footer from "@/components/footer/Footer"
import Providers from "@/redux/provider"

const inter = Montserrat({ subsets: ["latin"] })

export const metadata = {
  title: "Parcelas",
  description: "Parcelas de Chile, invierte en tu Futuro"
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
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
