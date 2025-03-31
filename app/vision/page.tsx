import Image from "next/image"
import Link from "next/link"

export default function Vision() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Nuestra Visión</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Descubre hacia dónde nos dirigimos y qué aspiramos lograr en Sanna Vet.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div className="order-last md:order-first">
          <Image
            src="/placeholder.svg?height=500&width=600"
            alt="Visión de Sanna Vet"
            width={600}
            height={500}
            className="rounded-lg w-full h-auto shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-primary mb-6">Visión de Sanna Vet</h2>
          <p className="text-gray-600 mb-6 text-lg">
            Aspiramos a ser reconocidos como el centro veterinario líder en el Perú, distinguiéndonos por nuestra
            excelencia médica, innovación constante y compromiso con el bienestar animal.
          </p>
          <p className="text-gray-600 mb-6">Nuestra visión contempla:</p>
          <ul className="space-y-4 mb-6">
            <li className="flex items-start">
              <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                1
              </span>
              <p className="text-gray-600">
                <span className="font-bold">Ser referentes en medicina veterinaria de vanguardia</span>, implementando
                las técnicas más avanzadas y efectivas para el diagnóstico y tratamiento de enfermedades.
              </p>
            </li>
            <li className="flex items-start">
              <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                2
              </span>
              <p className="text-gray-600">
                <span className="font-bold">Expandir nuestra red de clínicas</span> para llegar a más comunidades,
                manteniendo siempre los más altos estándares de calidad en cada una de nuestras sedes.
              </p>
            </li>
            <li className="flex items-start">
              <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                3
              </span>
              <p className="text-gray-600">
                <span className="font-bold">Desarrollar programas educativos</span> que promuevan la tenencia
                responsable de mascotas y contribuyan a crear una sociedad más consciente del bienestar animal.
              </p>
            </li>
            <li className="flex items-start">
              <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                4
              </span>
              <p className="text-gray-600">
                <span className="font-bold">Formar a la próxima generación de veterinarios</span> a través de programas
                de pasantías y capacitación continua que eleven el nivel de la medicina veterinaria en nuestro país.
              </p>
            </li>
          </ul>
          <p className="text-gray-600 italic">
            "Visualizamos un futuro donde cada mascota tenga acceso a atención veterinaria de calidad y donde la
            relación entre humanos y animales se base en el respeto y el cuidado responsable."
          </p>
        </div>
      </div>

      <div className="bg-primary text-white p-8 rounded-lg shadow-md mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Nuestro futuro</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Innovación Tecnológica</h3>
            <p className="mb-4">
              Buscamos integrar constantemente nuevas tecnologías que mejoren la precisión diagnóstica y la eficacia de
              los tratamientos, como telemedicina veterinaria, monitoreo remoto de pacientes y sistemas de gestión de
              salud animal.
            </p>
            <Image
              src="/placeholder.svg?height=200&width=400"
              alt="Innovación Tecnológica"
              width={400}
              height={200}
              className="rounded-lg w-full h-48 object-cover"
            />
          </div>
          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Centro de Investigación</h3>
            <p className="mb-4">
              Proyectamos establecer un centro de investigación veterinaria que contribuya al avance de la medicina
              animal, colaborando con universidades y centros de investigación nacionales e internacionales.
            </p>
            <Image
              src="/placeholder.svg?height=200&width=400"
              alt="Centro de Investigación"
              width={400}
              height={200}
              className="rounded-lg w-full h-48 object-cover"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-primary mb-3">Sostenibilidad</h3>
          <p className="text-gray-600 mb-4">
            Nos comprometemos a implementar prácticas sostenibles en todas nuestras operaciones, reduciendo nuestro
            impacto ambiental y promoviendo la responsabilidad ecológica.
          </p>
          <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
            <div className="bg-primary h-full w-3/4"></div>
          </div>
          <p className="text-right text-sm text-gray-500 mt-1">75% completado</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-primary mb-3">Especialización</h3>
          <p className="text-gray-600 mb-4">
            Aspiramos a contar con especialistas en todas las áreas de la medicina veterinaria, ofreciendo servicios
            altamente especializados y de referencia nacional.
          </p>
          <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
            <div className="bg-primary h-full w-1/2"></div>
          </div>
          <p className="text-right text-sm text-gray-500 mt-1">50% completado</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-primary mb-3">Formación Continua</h3>
          <p className="text-gray-600 mb-4">
            Buscamos establecer una academia veterinaria que ofrezca programas de formación continua para profesionales,
            elevando el nivel de la medicina veterinaria en el país.
          </p>
          <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
            <div className="bg-primary h-full w-1/4"></div>
          </div>
          <p className="text-right text-sm text-gray-500 mt-1">25% completado</p>
        </div>
      </div>

      <div className="text-center">
        <p className="text-gray-600 max-w-3xl mx-auto mb-8">
          Conoce también nuestra misión, que guía nuestro trabajo diario:
        </p>
        <Link
          href="/mision"
          className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-navy-light transition-colors"
        >
          Conoce nuestra Misión
        </Link>
      </div>
    </div>
  )
}

