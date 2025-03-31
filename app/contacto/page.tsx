"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mascota: "",
    mensaje: "",
    servicio: "consulta",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }



  return (
    <div className="container mx-auto px-3 py-0">
      <div className="flex justify-center items-center min-h-screen mb-0">
        <div>
        <div className="text-center text-4xl font-bold text-gray-700 mb-12">

            <h1>CONTACTO</h1>
          </div>
          <h2 className="text-2xl font-bold text-primary  mb-3">Información de contacto</h2>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
            <div className="space-y-0">
              <div className="flex items-start">
                <Phone className="text-primary mr-3 h-5 w-5 mt-1" />
                <div>
                  <p className="font-bold">Teléfono</p>
                  <p className="text-gray-600">+51 966 842 258</p>

                </div>
              </div>

              <div className="flex items-start">
                <Mail className="text-primary mr-3 h-5 w-5 mt-1" />
                <div>
                  <p className="font-bold">Correo electrónico</p>
                  <p className="text-gray-600">veterinariasannavet@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="text-primary mr-3 h-5 w-5 mt-1" />
                <div>
                  <p className="font-bold">Dirección</p>
                  <p className="text-gray-600">Av. 13 de Enero, N°2201 La Huayrona, SJL</p>

                </div>
              </div>

              <div className="flex items-start">
                <Clock className="text-primary mr-3 h-5 w-5 mt-1" />
                <div>
                  <p className="font-bold">Horario de atención</p>
                  <p className="text-gray-600">Lunes a Sabado: 8:00 AM - 9:00 PM</p>

                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary text-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Emergencias 24/7</h3>
            <p className="mb-4">
              Contamos con servicio de emergencias las 24 horas del día, los 7 días de la semana. No dudes en
              contactarnos ante cualquier urgencia.
            </p>
            <div className="flex items-center">
              <Phone className="mr-2 h-5 w-5" />
              <p className="font-bold">+51 996 842 258</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-16">
        <h2 className="text-2xl font-bold text-primary mb-6 text-center">Preguntas frecuentes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-bold text-primary mb-2">¿Cómo puedo agendar una cita?</h3>
            <p className="text-gray-600">
              Puedes agendar una cita llamando a nuestro número principal, a través de WhatsApp o completando el
              formulario de contacto en esta página.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-primary mb-2">¿Qué debo llevar a la primera consulta?</h3>
            <p className="text-gray-600">
              Para la primera consulta, te recomendamos traer el historial médico de tu mascota, cartilla de vacunación
              y cualquier resultado de exámenes previos.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-primary mb-2">¿Atienden emergencias sin cita previa?</h3>
            <p className="text-gray-600">
              Sí, nuestro servicio de emergencias está disponible 24/7 y no requiere cita previa. Te atenderemos de
              inmediato.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-primary mb-2">¿Ofrecen servicio a domicilio?</h3>
            <p className="text-gray-600">
              Sí, contamos con servicio a domicilio para ciertos procedimientos. Consulta disponibilidad y tarifas
              llamando a nuestro número principal.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

