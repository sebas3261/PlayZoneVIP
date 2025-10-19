import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pádel",
  description:
    "Descubre las mejores canchas de pádel en Playzone VIP, Chía. Reserva fácilmente y vive la experiencia deportiva más divertida con tus amigos o en torneos.",
  keywords: [
    "pádel",
    "canchas de pádel",
    "reservar pádel",
    "pádel Chía",
    "torneos de pádel",
    "Playzone VIP",
  ],

  // 🔗 Open Graph
  openGraph: {
    title: "Canchas de Pádel | Playzone VIP",
    description:
      "Juega pádel en Playzone VIP: canchas profesionales, iluminación ideal y ambiente deportivo en Chía. Reserva tu turno y vive la experiencia VIP.",
    url: "https://playzonevip.com/padel",
    siteName: "Playzone VIP",
    type: "website",
    locale: "es_CO",
    images: [
      {
        url: "/og-padel.webp", // guárdala en /public
        width: 1200,
        height: 630,
        alt: "Canchas de pádel en Playzone VIP",
      },
    ],
  },

};


export default function page() {
  return (
    <div>
      
    </div>
  )
}
