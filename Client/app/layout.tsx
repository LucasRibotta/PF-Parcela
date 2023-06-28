import "./globals.css"
import { Montserrat } from "next/font/google"
import Navbar from "@/components/Navbar/Navbar"
import Providers from "@/redux/provider"

const inter = Montserrat({ subsets: ["latin"] })

export const metadata = {
  title: "Parcelas de Chile",
  description: "Generada y Creada por Estudiantes"
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
        </Providers>
      </body>
    </html>
  )
}
