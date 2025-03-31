import Image from "next/image"

export default function Nosotros() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Nosotros</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Conoce más sobre Sanna Vet, nuestra historia, misión, visión y nuestro compromiso con la salud animal.
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
          <h2 className="text-2xl font-bold text-primary mb-4">Nuestra Historia</h2>
          <p className="text-gray-600 mb-4">
            Sanna Vet nació en 2010 con la visión de ofrecer servicios veterinarios de alta calidad en un ambiente
            cálido y acogedor. Fundada por un grupo de veterinarios apasionados, nuestra clínica ha crecido hasta
            convertirse en un referente en el cuidado animal.
          </p>
          <p className="text-gray-600 mb-4">
            A lo largo de estos años, hemos atendido a miles de mascotas, ganándonos la confianza de sus dueños gracias
            a nuestro compromiso con la excelencia y el trato humano tanto a las mascotas como a sus familias.
          </p>
          <p className="text-gray-600">
            Hoy contamos con múltiples sedes equipadas con tecnología de vanguardia y un equipo de profesionales
            altamente capacitados, manteniendo siempre nuestra filosofía original: tratar a cada mascota como si fuera
            nuestra.
          </p>
        </div>

      </div>

      {/* Sección de Misión */}
      <div id="mision" className="pt-8 mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary mb-4">Nuestra Misión</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Conoce el propósito que guía nuestro trabajo diario en Sanna Vet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 mb-6 text-lg">
              En Sanna Vet, nuestra misión es proporcionar atención veterinaria de excelencia, combinando conocimientos
              científicos avanzados con un trato compasivo hacia las mascotas y sus familias.
            </p>
            <p className="text-gray-600 mb-6">Nos comprometemos a:</p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <span className="bg-primary text-cream rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                  1
                </span>
                <p className="text-gray-600">
                  <span className="font-bold">Ofrecer servicios veterinarios de alta calidad</span> utilizando
                  tecnología de vanguardia y siguiendo los más altos estándares médicos.
                </p>
              </li>
              <li className="flex items-start">
                <span className="bg-primary text-cream rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                  2
                </span>
                <p className="text-gray-600">
                  <span className="font-bold">Educar a los propietarios de mascotas</span> sobre la prevención de
                  enfermedades y el cuidado responsable de sus animales.
                </p>
              </li>
              <li className="flex items-start">
                <span className="bg-primary text-cream rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                  3
                </span>
                <p className="text-gray-600">
                  <span className="font-bold">Crear un ambiente acogedor y de confianza</span> donde las mascotas se
                  sientan seguras y sus dueños reciban un trato personalizado.
                </p>
              </li>
              <li className="flex items-start">
                <span className="bg-primary text-cream rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
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
          <div>
            <Image
              src="/nuevasfotos\MISIÓN_Mesa de trabajo 1.jpg"
              alt="Misión de Sanna Vet"
              width={600}
              height={500}
              className="rounded-lg w-full h-auto shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Sección de Visión */}
      <div id="vision" className="pt-8 mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary mb-4">Nuestra Visión</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Descubre hacia dónde nos dirigimos y qué aspiramos lograr en Sanna Vet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-last md:order-first">
            <Image
              src="/nuevasfotos\VISIÓN_Mesa de trabajo 1.jpg"
              alt="Visión de Sanna Vet"
              width={600}
              height={500}
              className="rounded-lg w-full h-auto shadow-lg"
            />
          </div>
          <div>
            <p className="text-gray-600 mb-6 text-lg">
              Aspiramos a ser reconocidos como el centro veterinario líder en el Perú, distinguiéndonos por nuestra
              excelencia médica, innovación constante y compromiso con el bienestar animal.
            </p>
            <p className="text-gray-600 mb-6">Nuestra visión contempla:</p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <span className="bg-primary text-cream rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                  1
                </span>
                <p className="text-gray-600">
                  <span className="font-bold">Ser referentes en medicina veterinaria de vanguardia</span>, implementando
                  las técnicas más avanzadas y efectivas para el diagnóstico y tratamiento de enfermedades.
                </p>
              </li>
              <li className="flex items-start">
                <span className="bg-primary text-cream rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                  2
                </span>
                <p className="text-gray-600">
                  <span className="font-bold">Expandir nuestra red de clínicas</span> para llegar a más comunidades,
                  manteniendo siempre los más altos estándares de calidad.
                </p>
              </li>
              <li className="flex items-start">
                <span className="bg-primary text-cream rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                  3
                </span>
                <p className="text-gray-600">
                  <span className="font-bold">Desarrollar programas educativos</span> que promuevan la tenencia
                  responsable de mascotas y contribuyan a crear una sociedad más consciente del bienestar animal.
                </p>
              </li>
              <li className="flex items-start">
                <span className="bg-primary text-cream rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                  4
                </span>
                <p className="text-gray-600">
                  <span className="font-bold">Formar a la próxima generación de veterinarios</span> a través de
                  programas de pasantías y capacitación continua que eleven el nivel de la medicina veterinaria en
                  nuestro país.
                </p>
              </li>
            </ul>
            <p className="text-gray-600 italic">
              "Visualizamos un futuro donde cada mascota tenga acceso a atención veterinaria de calidad y donde la
              relación entre humanos y animales se base en el respeto y el cuidado responsable."
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-600 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-primary mb-6 text-center">¿Por qué elegirnos?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-3">Equipo Profesional</h3>
            <p className="text-gray-600">
              Nuestro equipo está formado por veterinarios con amplia experiencia y especialización en diferentes áreas
              de la medicina veterinaria.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-3">Instalaciones Modernas</h3>
            <p className="text-gray-600">
              Contamos con instalaciones diseñadas específicamente para el confort y la atención óptima de las mascotas.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-3">Atención Integral</h3>
            <p className="text-gray-600">
              Ofrecemos todos los servicios que tu mascota necesita en un solo lugar: consultas, cirugías, vacunaciones,
              análisis y más.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

