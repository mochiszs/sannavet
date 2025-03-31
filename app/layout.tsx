import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Sanna Vet - Clínica Veterinaria",
  description: "Cuidamos de tus mascotas con amor y profesionalismo",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/SANNAVETFOTOS/ISOTIPO SANNAVET_Mesa de trabajo 1.png" sizes="any" />
        <link rel="icon" type="image/png" href="/SANNAVETFOTOS/ISOTIPO SANNAVET_Mesa de trabajo 1.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  )
}

import "./globals.css"
