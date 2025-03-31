import Link from "next/link"
import Image from "next/image"
import ImageSlider from "@/components/image-slider"

export default function Home() {
  const sliderImages = [
    {
      src: "/nuevasfotos/PORTADA 1_Mesa de trabajo 1.jpg",
      alt: "Veterinarios atendiendo a una mascota",
    },
    {
      src: "/nuevasfotos/PORTADA 2_Mesa de trabajo 1.jpg",
      alt: "Instalaciones modernas de Sanna Vet",
    },
    
  ]

  return (
    <div className="flex flex-col items-center justify-center">
      <section className="relative w-full h-full flex items-center justify-center">
        <ImageSlider images={sliderImages} />
      </section>

      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-helveticaBold text-black mb-4">Bienvenidos a Sanna Vet</h2>
            <p className="text-gray-700 max-w-3xl mx-auto ">
              En Sanna Vet nos dedicamos a brindar el mejor cuidado veterinario para tus mascotas. Contamos con un
              equipo de profesionales altamente calificados y las instalaciones más modernas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-cream p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200">
              <div className="mb-4">
                <Image
                  src="/nuevasfotos/SOBRE NOSOTROS_Mesa de trabajo 1.jpg"
                  alt="Sobre Nosotros"
                  width={400}
                  height={200}
                  className="rounded-lg w-full h-48 object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Sobre Nosotros</h3>
              <p className="text-gray-700 mb-4">
                Conoce nuestra historia, valores y compromiso con la salud y bienestar animal.
              </p>
              <Link
                href="/nosotros"
                className="inline-block bg-primary text-cream px-4 py-2 rounded hover:bg-teal-light transition-colors"
              >
                Conocer más
              </Link>
            </div>

            <div className="bg-cream p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200">
              <div className="mb-4">
                <Image
                  src="/nuevasfotos/NUESTROS SERVICIOS_Mesa de trabajo 1.jpg"
                  alt="Nuestros Servicios"
                  width={400}
                  height={200}
                  className="rounded-lg w-full h-48 object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Nuestros Servicios</h3>
              <p className="text-gray-700 mb-4">
                Ofrecemos una amplia gama de servicios veterinarios para el cuidado integral de tu mascota.
              </p>
              <Link
                href="/servicios"
                className="inline-block bg-primary text-cream px-4 py-2 rounded hover:bg-teal-light transition-colors"
              >
                Ver servicios
              </Link>
            </div>

            <div className="bg-cream p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200">
              <div className="mb-4">
                <Image
                  src="/nuevasfotos/NUESTRO EQUIPO_Mesa de trabajo 1.jpg"
                  alt="Nuestro Equipo"
                  width={400}
                  height={200}
                  className="rounded-lg w-full h-48 object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Nuestro Equipo</h3>
              <p className="text-gray-700 mb-4">
                Contamos con veterinarios especializados y personal capacitado para brindar la mejor atención.
              </p>
              <Link
                href="/equipo"
                className="inline-block bg-primary text-cream px-4 py-2 rounded hover:bg-teal-light transition-colors"
              >
                Conocer al equipo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">¿Por qué elegirnos?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="bg-primary text-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-bold text-black mb-2">Atención Personalizada</h3>
              <p className="text-gray-700">Cada mascota recibe un trato único y especial.</p>
            </div>

            <div className="text-center p-4">
              <div className="bg-primary text-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-bold text-black mb-2">Tecnología Avanzada</h3>
              <p className="text-gray-700">Equipos de última generación para diagnósticos precisos.</p>
            </div>

            <div className="text-center p-4">
              <div className="bg-primary text-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-bold text-black mb-2">Profesionales Expertos</h3>
              <p className="text-gray-700">Veterinarios con amplia experiencia y especialización.</p>
            </div>

            <div className="text-center p-4 ">
              <div className="bg-primary text-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-bold text-black mb-2">Cuidado Integral</h3>
              <p className="text-gray-700">Cuidamos la salud de tu mascota con prevención y tratamientos especializados.</p>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  )
}

