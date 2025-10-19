import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Canchas de Fútbol",
  description:
    "Reserva las mejores canchas sintéticas de fútbol en Playzone VIP, Chía. Espacios amplios, iluminación profesional y todo lo que necesitas para tu partido perfecto.",
  keywords: [
    "canchas de fútbol",
    "canchas sintéticas",
    "reservar cancha",
    "fútbol 5",
    "fútbol 7",
    "fútbol en Chía",
    "Playzone VIP",
  ],

  // 🔗 Open Graph
  openGraph: {
    title: "Canchas de Fútbol | Playzone VIP",
    description:
      "Juega con tus amigos en las mejores canchas sintéticas de Chía. Reserva tu espacio en Playzone VIP y vive la pasión del fútbol con instalaciones de primera.",
    url: "https://playzonevip.com/canchas",
    siteName: "Playzone VIP",
    type: "website",
    locale: "es_CO",
    images: [
      {
        url: "/og-canchas.webp", // guárdala en /public
        width: 1200,
        height: 630,
        alt: "Canchas de fútbol en Playzone VIP",
      },
    ],
  },
};

export default function page() {
  return (
    <main>
      
    </main>
  )
}
