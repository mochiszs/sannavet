import { Link } from "lucide-react"
import Image from "next/image"

export default function Equipo() {


  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Equipo</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">

        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div className="order-first md:order-none">
          <Image
            src="/nuevasfotos/NUESTRA HISTORIA_Mesa de trabajo 1.jpg"
            alt="Historia de Sanna Vet"
            width={600}
            height={400}
            className="rounded-lg w-full h-auto shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-primary mb-4">Dra. Carla Pineda Llanos
          </h2>
          <p className="text-gray-600 mb-4">
            La Dra. Carla Pineda Llanos es una médico veterinaria egresada de la Universidad Nacional de San Cristóbal de Huamanga, con una destacada trayectoria en el cuidado de animales de compañía. Posee una segunda especialidad en Medicina de Animales de Compañía de la Universidad Cayetano Heredia.
          </p>
          <p className="text-gray-600 mb-4">
            Con más de 13 años de experiencia en el ámbito veterinario, la Dra. Pineda se ha dedicado a ofrecer atención médica de alta calidad, integrando conocimientos actualizados, tecnología avanzada y un enfoque humanizado en cada consulta.
          </p>
          <p className="text-gray-600">
            En Sanna Vet, lidera un equipo de profesionales comprometidos con la prevención, diagnóstico y tratamiento de diversas patologías, garantizando siempre el mejor cuidado para las mascotas.
          </p>
        </div>

      </div>


      <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-16">
        <h2 className="text-2xl font-bold text-primary mb-6 text-center">Nuestro Compromiso</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
          En Sanna Vet, nuestro equipo se compromete a mantenerse actualizado con las últimas técnicas y avances en
          medicina veterinaria. Participamos regularmente en congresos, seminarios y cursos de especialización para
          ofrecer siempre el mejor cuidado a tu mascota.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-3">Formación Continua</h3>
            <p className="text-gray-600">
              Todos nuestros veterinarios participan en programas de educación continua para mantenerse al día con los
              avances médicos.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-3">Trabajo en Equipo</h3>
            <p className="text-gray-600">
              Colaboramos estrechamente entre especialidades para ofrecer un enfoque integral en el cuidado de tu
              mascota.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-3">Pasión por los Animales</h3>
            <p className="text-gray-600">
              Más allá de nuestra formación profesional, nos une el amor y respeto por los animales y su bienestar.
            </p>
          </div>
        </div>
      </div>

      
    </div>
  )
}

