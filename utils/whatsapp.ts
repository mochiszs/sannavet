export function createWhatsAppLink(service: string): string {
  const phoneNumber = "51966842258"
  const message = `Hola deseo mas informacion sobre ${service}`
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
}

