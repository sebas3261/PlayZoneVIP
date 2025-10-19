import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Escape Room",
  description:
    "Pon a prueba tu mente y trabaja en equipo en el Escape Room de Playzone VIP. Desbloquea pistas, resuelve acertijos y vive una experiencia única llena de misterio y diversión.",
  keywords: [
    "escape room",
    "juego de escape",
    "acertijos",
    "misterio",
    "actividades en grupo",
    "Playzone VIP",
  ],

  // 🔗 Open Graph
  openGraph: {
    title: "Escape Room | Playzone VIP",
    description:
      "Atrévete a vivir la experiencia del Escape Room en Playzone VIP. Resuelve enigmas, colabora con tu equipo y escapa antes de que se acabe el tiempo.",
    url: "https://playzonevip.com/escaperoom-game",
    siteName: "Playzone VIP",
    type: "website",
    locale: "es_CO",
    images: [
      {
        url: "/og-escape-room.webp", // guarda esta imagen en /public
        width: 1200,
        height: 630,
        alt: "Escape Room en Playzone VIP",
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
