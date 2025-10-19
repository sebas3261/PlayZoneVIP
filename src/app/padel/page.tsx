import React from "react";
import type { Metadata } from "next";
import Image from "next/image";

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
    <main className="bg-white font-text">
      <section>
        <Image
          src="/images/Padel/padelHeader.webp"
          alt="Canchas header"
          width={800}
          height={600}
          className="w-full h-[300px] object-cover object-center mb-10 md:h-[400px]"
        />
      </section>
      
      <section className="flex flex-col justify-center items-center gap-2 mb-10">
          <h2 className="font-title text-3xl text-center">
            Padel
          </h2>
          <h3 className="text-center text-[#828292] text-sm font-[600]">
            El deporte que más crece, en las mejores pistas
            <br />
            DOMINGO A DOMINGO DE 8am - 11 pm
          </h3>
      </section>
    </main>
  );
}
