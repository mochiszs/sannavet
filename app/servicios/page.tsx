"use client"

import { useState } from "react"
import Image from "next/image"
import { createWhatsAppLink } from "@/utils/whatsapp"
import { MessageCircle, X } from "lucide-react"

export default function Servicios() {
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [serviceDetails, setServiceDetails] = useState<any | null>(null)

  const serviciosPrincipales = [
    {
      id: "consultas",
      titulo: "Consultas",
      descripcion:
        "Evaluación completa del estado de salud de tu mascota, incluyendo examen físico, historial clínico y recomendaciones personalizadas.",
      imagen: "nuevasfotos/CONSULTAS_Mesa de trabajo 1.jpg",
      detalles: [
        "Examen físico completo",
        "Control de peso",
        "Revisión de signos vitales",
        "Recomendaciones nutricionales",
      ],
    },
    {
      id: "cirugias",
      titulo: "Cirugías",
      descripcion:
        "Procedimientos quirúrgicos realizados por especialistas en un quirófano completamente equipado, con monitoreo constante y cuidados post-operatorios.",
      imagen: "SANNAVETFOTOS/CIRUGIAS_Mesa de trabajo 1.jpg",
      detalles: [
        "Esterilización y castración",
        "Cirugías abdominales",
        "Cirugías ortopédicas",
        "Extracción de tumores",
      ],
    },
    {
      id: "examenes",
      titulo: "Exámenes de laboratorio",
      descripcion:
        "Análisis de sangre, orina y otros fluidos corporales para diagnósticos precisos y seguimiento de enfermedades.",
      imagen: "SANNAVETFOTOS/EXÁMENES DE LABORATORIO_Mesa de trabajo 1.jpg",
      detalles: ["Hemogramas completos", "Perfiles bioquímicos", "Análisis de orina", "Citologías"],
    },
    {
      id: "vacunacion",
      titulo: "Vacunación",
      descripcion:
        "Programa completo de vacunación para perros y gatos, siguiendo los protocolos internacionales y adaptados a las necesidades de cada mascota.",
      imagen: "SANNAVETFOTOS/VACUNACIÓN_Mesa de trabajo 1.jpg",
      detalles: [
        "Vacunas esenciales",
        "Vacunas opcionales según estilo de vida",
        "Carnet de vacunación",
        "Recordatorios de refuerzos",
      ],
    },
    {
      id: "grooming",
      titulo: "Baños y grooming",
      descripcion:
        "Servicios de higiene y estética para mantener a tu mascota limpia, saludable y con un aspecto impecable.",
      imagen: "SANNAVETFOTOS/BAÑOS Y GROOMING_Mesa de trabajo 1.jpg",
      detalles: ["Baños medicados", "Corte de pelo", "Limpieza de oídos", "Corte de uñas"],
    },
    {
      id: "petshop",
      titulo: "Pet shop",
      descripcion:
        "Tienda especializada con productos de calidad para el cuidado, alimentación y entretenimiento de tu mascota.",
      imagen: "SANNAVETFOTOS/PETSHOP_Mesa de trabajo 1.jpg",
      detalles: ["Alimentos premium", "Accesorios", "Juguetes", "Productos de higiene"],
    },
    {
      id: "desparasitacion",
      titulo: "Desparasitación",
      descripcion:
        "Tratamientos preventivos y curativos contra parásitos internos y externos que pueden afectar la salud de tu mascota.",
      imagen: "SANNAVETFOTOS/DESPARASITACION_Mesa de trabajo 1.jpg",
      detalles: [
        "Desparasitación interna",
        "Control de pulgas y garrapatas",
        "Programas preventivos",
        "Tratamientos específicos",
      ],
    },
    {
      id: "otros",
      titulo: "Otros servicios",
      descripcion: "Ofrecemos una amplia variedad de servicios adicionales para el cuidado integral de tu mascota.",
      imagen: "nuevasfotos/OTROS SERVICIOS_Mesa de trabajo 1.jpg",
      detalles: [
        "Farmacia",
        "Profilaxis Dental",
        "Ecografía",
        "Rayos X",
        "Hospitalización",
        "Certificado de Salud",
        "Servicio de cremación",
      ],
      subservicios: [
        {
          titulo: "Farmacia",
          descripcion: "Medicamentos de calidad y productos veterinarios con asesoramiento profesional.",
        },
        {
          titulo: "Profilaxis Dental",
          descripcion:
            "Limpieza dental profesional para prevenir enfermedades bucales y mantener la salud oral de tu mascota.",
        },
        {
          titulo: "Ecografía",
          descripcion: "Diagnóstico por imagen no invasivo para visualizar órganos internos y detectar anomalías.",
        },
        {
          titulo: "Rayos X",
          descripcion: "Radiografías digitales para diagnóstico de problemas óseos, respiratorios y otras condiciones.",
        },
        {
          titulo: "Hospitalización",
          descripcion:
            "Cuidados intensivos con monitoreo constante para mascotas que requieren atención médica continua.",
        },
        {
          titulo: "Certificado de Salud",
          descripcion: "Documentación oficial que certifica el estado de salud de tu mascota para viajes o trámites.",
        },
        {
          titulo: "Servicio de cremación",
          descripcion: "Servicio respetuoso para despedir a tu mascota con dignidad cuando llega el momento.",
        },
      ],
    },
  ]

  const handleServiceClick = (service: any) => {
    setSelectedService(service.id)
    setServiceDetails(service)
    window.scrollTo(0, 0)
  }

  const closeServiceDetails = () => {
    setSelectedService(null)
    setServiceDetails(null)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-black mb-4">Nuestros Servicios</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          En Sanna Vet ofrecemos una amplia gama de servicios veterinarios para garantizar la salud y bienestar de tu
          mascota.
        </p>
      </div>

      {selectedService ? (
        <div className="bg-cream rounded-lg shadow-lg p-6 mb-12 relative border border-gray-200">
          <button
            onClick={closeServiceDetails}
            className="absolute top-4 right-4 text-gray-500 hover:text-black"
            aria-label="Cerrar"
          >
            <X size={24} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-black mb-4">{serviceDetails.titulo}</h2>
              <p className="text-gray-700 mb-6">{serviceDetails.descripcion}</p>

              {serviceDetails.detalles && !serviceDetails.subservicios && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-black mb-3">Servicios incluidos:</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    {serviceDetails.detalles.map((detalle: string, i: number) => (
                      <li key={i}>{detalle}</li>
                    ))}
                  </ul>
                </div>
              )}

              <a
                href={createWhatsAppLink(serviceDetails.titulo)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Consultar por WhatsApp
              </a>
            </div>
            <div>
              <Image
                src={serviceDetails.imagen || "/placeholder.svg"}
                alt={serviceDetails.titulo}
                width={500}
                height={300}
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>

          {serviceDetails.subservicios && (
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-black mb-6 text-center">Servicios adicionales</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {serviceDetails.subservicios.map((subservicio: any, index: number) => (
                  <div key={index} className="bg-cream p-6 rounded-lg shadow-md border border-gray-200">
                    <h4 className="text-xl font-bold text-black mb-2">{subservicio.titulo}</h4>
                    <p className="text-gray-700 mb-4">{subservicio.descripcion}</p>
                    <a
                      href={createWhatsAppLink(subservicio.titulo)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-green-500 hover:text-green-600 transition-colors"
                    >
                      <MessageCircle className="mr-1 h-4 w-4" />
                      Consultar
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
  {serviciosPrincipales.map((servicio, index) => (
    <div
      key={index}
      className="relative h-64 rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105 border border-gray-300"
      onClick={() => handleServiceClick(servicio)}
    >
      <Image 
        src={`/${servicio.imagen}` || "/placeholder.svg"} 
        alt={servicio.titulo} 
        width={500} 
        height={250} 
        className="w-[500px] h-[250px] object-contain"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex flex-col justify-end p-6"></div>
    </div>
  ))}
</div>

      )}

      {!selectedService && (
        <div className="bg-primary text-cream p-8 rounded-lg shadow-md mb-16 border border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Servicios de Emergencia</h2>
              <p className="mb-4">
                Nuestro equipo está
                preparado para atender cualquier situación crítica que pueda afectar a tu mascota.
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>Atención inmediata</li>
                <li>Equipo especializado en emergencias</li>
                
                <li>Monitoreo constante</li>
              </ul>
              <p className="font-bold">Número de emergencias: +51 966 842 258</p>
              <a
                href={createWhatsAppLink("Emergencias Veterinarias")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 transition-colors mt-4"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Contactar ahora
              </a>
            </div>
            <div className="relative h-64 md:h-full">
              <Image
                src="/nuevasfotos/SERVICIO DE EMERGENCIA_Mesa de trabajo 1.jpg"
                alt="Servicios de Emergencia"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

