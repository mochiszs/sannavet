"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"

export default function LibroReclamaciones() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    tipoDocumento: "dni",
    numeroDocumento: "",
    telefono: "",
    email: "",
    direccion: "",
    tipoReclamo: "queja",
    detalleReclamo: "",
    pedido: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    alert("Reclamo enviado con éxito. Nos pondremos en contacto contigo pronto.")
    setFormData({
      nombre: "",
      apellido: "",
      tipoDocumento: "dni",
      numeroDocumento: "",
      telefono: "",
      email: "",
      direccion: "",
      tipoReclamo: "queja",
      detalleReclamo: "",
      pedido: "",
    })
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Libro de Reclamaciones</h1>
          <p className="text-gray-700">
            En Sanna Vet valoramos tu opinión. Si tienes alguna queja o reclamo, por favor completa el siguiente
            formulario.
          </p>
        </div>

        <div className="bg-cream p-8 rounded-lg shadow-md border border-gray-200">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombres *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-cream"
                />
              </div>

              <div>
                <label htmlFor="apellido" className="block text-sm font-medium text-gray-700 mb-1">
                  Apellidos *
                </label>
                <input
                  type="text"
                  id="apellido"
                  name="apellido"
                  value={formData.apellido}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-cream"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="tipoDocumento" className="block text-sm font-medium text-gray-700 mb-1">
                  Tipo de documento *
                </label>
                <select
                  id="tipoDocumento"
                  name="tipoDocumento"
                  value={formData.tipoDocumento}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-cream"
                >
                  <option value="dni">DNI</option>
                  <option value="ce">Carnet de Extranjería</option>
                  <option value="pasaporte">Pasaporte</option>
                </select>
              </div>

              <div>
                <label htmlFor="numeroDocumento" className="block text-sm font-medium text-gray-700 mb-1">
                  Número de documento *
                </label>
                <input
                  type="text"
                  id="numeroDocumento"
                  name="numeroDocumento"
                  value={formData.numeroDocumento}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-cream"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-cream"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Correo electrónico *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-cream"
                />
              </div>
            </div>

            <div>
              <label htmlFor="direccion" className="block text-sm font-medium text-gray-700 mb-1">
                Dirección *
              </label>
              <input
                type="text"
                id="direccion"
                name="direccion"
                value={formData.direccion}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-cream"
              />
            </div>

            <div>
              <label htmlFor="tipoReclamo" className="block text-sm font-medium text-gray-700 mb-1">
                Tipo de reclamo *
              </label>
              <select
                id="tipoReclamo"
                name="tipoReclamo"
                value={formData.tipoReclamo}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-cream"
              >
                <option value="queja">Queja</option>
                <option value="reclamo">Reclamo</option>
              </select>
            </div>

            <div>
              <label htmlFor="detalleReclamo" className="block text-sm font-medium text-gray-700 mb-1">
                Detalle del reclamo *
              </label>
              <textarea
                id="detalleReclamo"
                name="detalleReclamo"
                value={formData.detalleReclamo}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-cream"
              ></textarea>
            </div>

            <div>
              <label htmlFor="pedido" className="block text-sm font-medium text-gray-700 mb-1">
                Pedido o solicitud *
              </label>
              <textarea
                id="pedido"
                name="pedido"
                value={formData.pedido}
                onChange={handleChange}
                required
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-cream"
              ></textarea>
            </div>

            <div className="flex justify-between items-center">
              <Link href="/" className="text-primary hover:text-teal-light transition-colors">
                Volver al inicio
              </Link>
              <button
                type="submit"
                className="bg-primary text-cream px-6 py-3 rounded-lg font-medium hover:bg-teal-light transition-colors"
              >
                Enviar reclamo
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

