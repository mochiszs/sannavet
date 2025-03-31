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
          La Dra. Carla Pineda Llanos es médico veterinaria egresada de la Universidad Nacional de San Cristóbal de Huamanga, con una sólida trayectoria en el cuidado de animales de compañía. Cuenta con una segunda especialidad en Medicina Interna y Cirugía General, además de una especialización en el diagnóstico y tratamiento de enfermedades nasales crónicas mediante rinoscopia en pacientes caninos.

          </p>
          <p className="text-gray-600 mb-4">
            
Su formación académica incluye una Maestría Integrada en Ciencias Veterinarias con mención en Animales de Compañía, lo que refuerza su compromiso con la salud y el bienestar de las mascotas. Con más de 14 años de experiencia en el campo veterinario, la Dra. Carla ha dedicado su carrera a brindar atención médica de calidad, combinando conocimiento, tecnología y un trato humanizado hacia cada paciente.

          </p>
          <p className="text-gray-600">
          En Sanna Vet, lidera un equipo profesional enfocado en la prevención, diagnóstico y tratamiento de diversas patologías, asegurando siempre el mejor cuidado para sus mascotas.
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

      <div className="text-center">
        <h2 className="text-2xl font-bold text-primary mb-6">¿Necesitas una Consulta Especializada?</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-8">
          Nuestro equipo de especialistas está listo para atender a tu mascota. Agenda una cita con el profesional que
          mejor se adapte a las necesidades de tu compañero.
        </p>
        <div className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-navy-light transition-colors">
          Agendar Cita
        </div>
      </div>
    </div>
  )
}

