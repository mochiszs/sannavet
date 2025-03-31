import Image from "next/image"
import Link from "next/link"

export default function Mision() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Nuestra Misión</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Conoce el propósito que guía nuestro trabajo diario en Sanna Vet.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-2xl font-bold text-primary mb-6">Misión de Sanna Vet</h2>
          <p className="text-gray-600 mb-6 text-lg">
            En Sanna Vet, nuestra misión es proporcionar atención veterinaria de excelencia, combinando conocimientos
            científicos avanzados con un trato compasivo hacia las mascotas y sus familias.
          </p>
          <p className="text-gray-600 mb-6">Nos comprometemos a:</p>
          <ul className="space-y-4 mb-6">
            <li className="flex items-start">
              <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                1
              </span>
              <p className="text-gray-600">
                <span className="font-bold">Ofrecer servicios veterinarios de alta calidad</span> utilizando tecnología
                de vanguardia y siguiendo los más altos estándares médicos.
              </p>
            </li>
            <li className="flex items-start">
              <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                2
              </span>
              <p className="text-gray-600">
                <span className="font-bold">Educar a los propietarios de mascotas</span> sobre la prevención de
                enfermedades y el cuidado responsable de sus animales.
              </p>
            </li>
            <li className="flex items-start">
              <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                3
              </span>
              <p className="text-gray-600">
                <span className="font-bold">Crear un ambiente acogedor y de confianza</span> donde las mascotas se
                sientan seguras y sus dueños reciban un trato personalizado.
              </p>
            </li>
            <li className="flex items-start">
              <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                4
              </span>
              <p className="text-gray-600">
                <span className="font-bold">Contribuir al bienestar animal</span> en nuestra comunidad a través de
                programas de concientización y apoyo a organizaciones de protección animal.
              </p>
            </li>
          </ul>
          <p className="text-gray-600 italic">
            "Cada mascota merece una vida saludable y feliz. Nuestra misión es hacer todo lo posible para que esto sea
            una realidad."
          </p>
        </div>
        <div className="order-first md:order-last">
          <Image
            src="/placeholder.svg?height=500&width=600"
            alt="Misión de Sanna Vet"
            width={600}
            height={500}
            className="rounded-lg w-full h-auto shadow-lg"
          />
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-16">
        <h2 className="text-2xl font-bold text-primary mb-6 text-center">Cómo cumplimos nuestra misión</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-3">Excelencia Médica</h3>
            <p className="text-gray-600">
              Invertimos en formación continua para nuestro equipo y en equipamiento de última generación para ofrecer
              diagnósticos precisos y tratamientos efectivos.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-3">Atención Personalizada</h3>
            <p className="text-gray-600">
              Dedicamos tiempo a conocer a cada mascota y su familia, adaptando nuestros servicios a sus necesidades
              específicas y preferencias.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-3">Responsabilidad Social</h3>
            <p className="text-gray-600">
              Participamos activamente en campañas de esterilización, vacunación y adopción responsable, colaborando con
              refugios y organizaciones locales.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-2xl font-bold text-primary mb-6">Nuestro compromiso con la comunidad</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-8">
          Como parte de nuestra misión, Sanna Vet se compromete a contribuir positivamente a la comunidad a través de
          diversas iniciativas:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-primary mb-3">Programa de Educación</h3>
            <p className="text-gray-600 mb-4">
              Realizamos charlas y talleres gratuitos sobre tenencia responsable de mascotas en colegios, universidades
              y centros comunitarios.
            </p>
            <Image
              src="/placeholder.svg?height=200&width=400"
              alt="Programa de Educación"
              width={400}
              height={200}
              className="rounded-lg w-full h-48 object-cover"
            />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-primary mb-3">Campañas Solidarias</h3>
            <p className="text-gray-600 mb-4">
              Organizamos jornadas de atención veterinaria gratuita o a bajo costo para familias de escasos recursos y
              refugios de animales.
            </p>
            <Image
              src="/placeholder.svg?height=200&width=400"
              alt="Campañas Solidarias"
              width={400}
              height={200}
              className="rounded-lg w-full h-48 object-cover"
            />
          </div>
        </div>
      </div>

      <div className="text-center">
        <p className="text-gray-600 max-w-3xl mx-auto mb-8">
          Te invitamos a conocer también nuestra visión para el futuro:
        </p>
        <Link
          href="/vision"
          className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-navy-light transition-colors"
        >
          Conoce nuestra Visión
        </Link>
      </div>
    </div>
  )
}

