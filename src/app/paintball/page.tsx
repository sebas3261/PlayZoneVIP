import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Title from "@/components/Title";
import PriceCard from "@/components/PriceCard";

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
          Vive la emoción del paintball en nuestros campos. Estrategia, trabajo
          en equipo y mucha diversión en una experiencia segura y profesional.
          <br />
          DOMINGO A DOMINGO DE 8 AM - 11 PM
        </h3>
      </section>

      <section>
        <Title
          titulo="Zona de Recargas"
          subTitulo="Adición de Bolas"
          descripcion="Recarga tu juego y continúa la diversión. En esta zona podrás añadir más bolas a tu partida de PianoBall y disfrutar sin interrupciones."
        />
      </section>

      <section
        className="
          scroll-hide
          bg-white
          flex
          gap-6
          overflow-x-auto              /* scroll horizontal en móvil */
          snap-x snap-mandatory
          scroll-smooth
          px-5
          pb-5
          justify-start                /* alineado al inicio por defecto */
          md:justify-center            /* centrado en pantallas grandes */
          md:overflow-x-visible        /* sin scroll horizontal en desktop */
        "
      >
        <div className="snap-center shrink-0">
          <PriceCard
            icon="solar:box-linear"
            title="100 bolas"
            total="$13.000 cop"
            perPerson="Adicionales"
            ctaHref="https://wa.me/573132485526?text=Quiero%20reservar%20para%203%20personas"
          />
        </div>

        <div className="snap-center shrink-0">
          <PriceCard
            icon="solar:box-linear"
            title="500 bolas"
            total="$65.000 cop"
            perPerson="Adicionales"
            ctaHref="https://wa.me/573132485526?text=Quiero%20reservar%20para%204%20personas"
          />
        </div>

        <div className="snap-center shrink-0">
          <PriceCard
            icon="solar:box-linear"
            title="1000 bolas"
            total="$120.000 cop"
            perPerson="Adicionales"
            ctaHref="https://wa.me/573132485526?text=Quiero%20reservar%20para%205%20personas"
          />
        </div>

        <div className="snap-center shrink-0">
          <PriceCard
            icon="solar:box-linear"
            title="2000 bolas"
            total="$230.000 cop"
            perPerson="Adicionales"
            ctaHref="https://wa.me/573132485526?text=Quiero%20reservar%20para%206%20personas"
          />
        </div>
      </section>
    </main>
  );
}
