import Image from "next/image"

export default function Sedes() {
  const sedes = [
    {
      nombre: "Sede Principal - SJL",
      direccion: "Av. 13 de Enero, N°2201 La Huayrona, SJL",
      telefono: "+51 966 842 258",
      horario: "Lunes a Sabado: 9:00 AM - 8:00 PM",
      imagen: "/nuevasfotos/UBICACIÓN 1_Mesa de trabajo 1.jpg",
      mapa: "/nuevasfotos/UBICACIÓN 2_Mesa de trabajo 1.jpg",
      servicios: ["Consultas", "Cirugías", "Laboratorio", "Hospitalización", "Emergencias 24/7", "Farmacia"],
    },
    
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Nuestra Sede</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Encuentra la sede de Sanna Vet más cercana a ti. Contamos con múltiples ubicaciones para brindarte un servicio
          conveniente y accesible.
        </p>
      </div>

      <div className="space-y-16">
        {sedes.map((sede, index) => (
          <div key={index} className="bg- rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <Image src={sede.imagen || "/placeholder.svg"} alt={sede.nombre} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-primary mb-2">{sede.nombre}</h2>
                <div className="space-y-4">
                  <p className="flex items-start">
                    <span className="font-bold mr-2">Dirección:</span>
                    <span className="text-gray-600">{sede.direccion}</span>
                  </p>
                  <p className="flex items-start">
                    <span className="font-bold mr-2">Teléfono:</span>
                    <span className="text-gray-600">{sede.telefono}</span>
                  </p>
                  <p className="flex items-start">
                    <span className="font-bold mr-2">Horario:</span>
                    <span className="text-gray-600">{sede.horario}</span>
                  </p>
                  <div>
                    <p className="font-bold mb-2">Servicios:</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {sede.servicios.map((servicio, i) => (
                        <li key={i} className="text-gray-600 flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                          {servicio}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-64 w-full">
              <Image
                src={sede.mapa || "/placeholder.svg"}
                alt={`Mapa de ${sede.nombre}`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      

      
    </div>
  )
}

