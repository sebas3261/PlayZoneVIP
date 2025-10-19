import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paintball",
  description:
    "Vive la adrenalina del paintball en Playzone VIP, Chía. Escenarios diseñados para la acción, equipos de alta calidad y diversión garantizada para grupos y eventos.",
  keywords: [
    "paintball",
    "paintball en Chía",
    "juegos de paintball",
    "batallas de pintura",
    "actividades extremas",
    "Playzone VIP",
  ],

  // 🔗 Open Graph
  openGraph: {
    title: "Paintball | Playzone VIP",
    description:
      "Atrévete a jugar paintball en Playzone VIP. Escenarios realistas, equipos profesionales y la mejor experiencia de combate en Chía.",
    url: "https://playzonevip.com/paintball",
    siteName: "Playzone VIP",
    type: "website",
    locale: "es_CO",
    images: [
      {
        url: "/og-paintball.webp", // guárdala en /public
        width: 1200,
        height: 630,
        alt: "Paintball en Playzone VIP",
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
