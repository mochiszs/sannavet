"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-primary text-cream shadow-md sticky top-0 z-50 h-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/nuevasfotos\RECONTRANUEVOLOGO.png"
              alt="Logo"
              width={218}
              height={100}
              className="object-contain"
            />
          </Link>

          {/* Mobile menu button */}
          <button className="md:hidden text-cream" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {[
              { href: "/", label: "Inicio" },
              { href: "/nosotros", label: "Nosotros" },
              { href: "/servicios", label: "Servicios" },
              { href: "/equipo", label: "Equipo" },
              { href: "/sedes", label: "Sede" },
              { href: "/contacto", label: "Contacto" }
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-cream hover:text-gray-200 transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-gray-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 bg-primary">
            <div className="flex flex-col space-y-3">
              {[
                { href: "/", label: "Inicio" },
                { href: "/nosotros", label: "Nosotros" },
                { href: "/servicios", label: "Servicios" },
                { href: "/equipo", label: "Equipo" },
                { href: "/sedes", label: "Sede" },
                { href: "/contacto", label: "Contacto" }
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative text-cream hover:text-gray-200 transition-colors px-4 py-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-gray-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
