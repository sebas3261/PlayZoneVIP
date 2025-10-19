import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contáctanos",
  description:
    "Comunícate con Playzone VIP para reservar canchas, planear tu evento o resolver tus dudas. Estamos en Chía, listos para brindarte la mejor experiencia deportiva.",
  keywords: [
    "contacto",
    "reservas",
    "Playzone VIP",
    "canchas en Chía",
    "paintball Chía",
    "pádel Chía",
    "escape room Chía",
  ],

  // 🔗 Open Graph
  openGraph: {
    title: "Contáctanos | Playzone VIP",
    description:
      "¿Tienes preguntas o deseas reservar? Escríbenos y el equipo de Playzone VIP te ayudará a organizar tu próxima experiencia deportiva.",
    url: "https://playzonevip.com/contacto",
    siteName: "Playzone VIP",
    type: "website",
    locale: "es_CO",
    images: [
      {
        url: "/og-contacto.webp", // imagen en /public
        width: 1200,
        height: 630,
        alt: "Contáctanos en Playzone VIP",
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
