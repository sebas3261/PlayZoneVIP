import React from "react";
import type { Metadata } from "next";
import Image from "next/image";

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
    <main className="bg-white font-text">
      <section>
        <Image
          src="/images/Paintball/paintballHeader.webp"
          alt="Canchas header"
          width={800}
          height={600}
          className="w-full h-[300px] object-cover object-center mb-10 md:h-[400px]"
        />
      </section>

      <section className="flex flex-col justify-center items-center gap-2 mb-10">
        <h2 className="font-title text-3xl text-center">Paintball</h2>
        <h3 className="text-center text-[#828292] text-sm font-[600]">
          Vive la emoción del paintball en nuestros campos. Estrategia, trabajo en equipo y mucha diversión en una experiencia segura y profesional.
          <br />
          DOMINGO A DOMINGO DE 8am - 11 pm
        </h3>
      </section>
    </main>
  );
}
