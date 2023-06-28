import "./globals.css"
import { Montserrat } from "next/font/google"
import Navbar from "@/components/Navbar/Navbar"
import Footer from "@/components/footer/Footer"
import Providers from "@/redux/provider"

const inter = Montserrat({ subsets: ["latin"] })

export const metadata = {
  title: "Parcelas",
  description: "Generada y Creada por Estudiantes"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
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
