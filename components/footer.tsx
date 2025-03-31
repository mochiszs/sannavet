import Link from "next/link"
import { Facebook, Instagram, Youtube, BookOpen } from "lucide-react"
import { SiTiktok } from "react-icons/si"

export default function Footer() {
  return (
    <footer className="bg-primary text-cream">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-2">Nuestra Ubicación</h3>
      <p className="text-gray-700 mb-4">
        Av. 13 de Enero, N°2201 La Huayrona, SJL
      </p>

      {/* Mapa en tamaño reducido */}
      <div className="w-full h-48 rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15606.633417402693!2d-76.94384229235138!3d-12.016723581703834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c6f57e49b9d1%3A0x4f991dbd379f38a8!2sAv.%2013%20de%20Enero%202201%2C%20San%20Juan%20de%20Lurigancho%2015403!5e0!3m2!1ses!2spe!4v1711755695864!5m2!1ses!2spe"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Botón para abrir en Google Maps */}
      <div className="mt-4">
        <Link
          href="https://www.google.com/maps/search/?api=1&query=Av.+13+de+Enero,+N°2201+La+Huayrona,+SJL"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Ver en Google Maps
        </Link>
      </div>
    </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Horario de Atención</h3>
            <p className="mb-2">Lunes a Sabado: 8:00 AM - 9:00 PM</p>
      
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Síguenos</h3>
            <div className="flex space-x-4 mb-6">
              
              <Link href="https://www.facebook.com/veterinariasannavet" className="hover:text-gray-300 transition-colors">
          <Facebook size={24} />
          <span className="sr-only">Facebook</span>
        </Link>
        <Link href="https://www.instagram.com/veterinaria.sannavet/" className="hover:text-gray-300 transition-colors">
          <Instagram size={24} />
          <span className="sr-only">Instagram</span>
        </Link>
        <Link href="https://www.tiktok.com/@veterinaria.sannavet" className="hover:text-gray-300 transition-colors">
          <SiTiktok size={24} />
          <span className="sr-only">TikTok</span>
        </Link>
            </div>

            <Link href="/reclamaciones" className="flex items-center text-cream hover:text-gray-300 transition-colors">
              <BookOpen className="mr-2 h-5 w-5" />
              <span>Libro de Reclamaciones</span>
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Sanna Vet. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

