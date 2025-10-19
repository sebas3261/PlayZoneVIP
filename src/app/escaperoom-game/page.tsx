import React from "react";
import type { Metadata } from "next";
import Image from "next/image";

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
    <main className="bg-white font-text">
      <section>
        <Image
          src="/images/Escape/escapeHeader.webp"
          alt="Canchas header"
          width={800}
          height={600}
          className="w-full h-[300px] object-cover object-center mb-10 md:h-[400px]"
        />
      </section>

      <section className="flex flex-col justify-center items-center gap-2 mb-10">
        <h2 className="font-title text-3xl text-center">Escape room</h2>
        <h3 className="text-center text-[#828292] text-sm font-[600]">
          ¡Atrévete a Entrar a nuestras salas de escape!
          <br />
          Reúne a tu equipo, afinen su lógica y prepárense para un reto lleno de
          adrenalina. ¡Reserva ahora y demuestra que pueden salir a tiempo!
          <br />
          DOMINGO A DOMINGO DE 2pm - 11 pm
        </h3>
      </section>
    </main>
  );
}
