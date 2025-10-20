import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Title from "@/components/Title";
import PriceCard from "@/components/PriceCard";
import Link from "next/link";

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
        url: "/og-paintball.webp",
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
      {/* Hero */}
      <section>
        <Image
          src="/images/Paintball/paintballHeader.webp"
          alt="Paintball header"
          width={1600}
          height={900}
          priority
          className="w-full h-[300px] object-cover object-center mb-10 md:h-[400px]"
        />
      </section>

      {/* Intro */}
      <section className="flex flex-col justify-center items-center gap-2 mb-10 px-6">
        <h2 className="font-title text-3xl text-center">Paintball</h2>
        <h3 className="text-center text-[#828292] text-sm font-[600]">
          Vive la emoción del paintball en nuestros campos. Estrategia, trabajo
          en equipo y mucha diversión en una experiencia segura y profesional.
          <br />
          DOMINGO A DOMINGO DE 8 AM - 11 PM
        </h3>
      </section>

      {/* ===== Sección: Experiencia Completa de Paintball ===== */}
      <section className="px-5 md:px-10 lg:px-24 mb-12 flex flex-col items-center">
        {/* Título y descripción fuera del panel */}

        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:items-center">
          <div>
            <div className="max-w-2xl mb-6">
              <h3 className="font-title text-xl md:text-2xl text-gray-900 mb-2 text-center md:text-start">
                Experiencia Completa de Paintball
              </h3>
              <p className="text-gray-600 text-sm md:text-base text-center md:text-start">
                Nuestro paquete base incluye todo lo necesario para que
                disfrutes una hora de acción intensa. Sin costos ocultos, todo
                el equipamiento profesional está incluido en el precio.
              </p>
            </div>
            <div className="rounded-2xl bg-[#F1F3F5] border border-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.06)] p-6 flex flex-col items-center text-center">
              {/* Precio centrado */}
              <div className="mb-4">
                <h4 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                  $30.000 <span className="font-bold">cop</span>
                </h4>
                <p className="text-gray-500 text-sm mt-1">por persona</p>
              </div>

              {/* Equipamiento y duración */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
                <div>
                  <p className="text-gray-900 font-semibold text-sm mb-2 text-start">
                    Equipamiento incluido:
                  </p>
                  <ul className="text-gray-700 text-sm space-y-1 text-start">
                    <li>• Overol profesional</li>
                    <li>• Chaleco protector</li>
                    <li>• Marcadora semiautomática</li>
                    <li>• Máscara de seguridad</li>
                    <li>• 100 bolas de pintura</li>
                  </ul>
                </div>
                <div className="sm:self-start flex justify-center sm:justify-start">
                  <div className="inline-flex items-center gap-2 rounded-lg px-3 py-2">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <circle cx="12" cy="12" r="9"></circle>
                      <path d="M12 7v5l3 2"></path>
                    </svg>
                    <span className="text-sm text-gray-800 font-medium">
                      1 hora de juego
                    </span>
                  </div>
                </div>
              </div>

              {/* Botón */}
              <a
                href={
                  "https://wa.me/573132485526?text=" +
                  encodeURIComponent(
                    "Hola, quiero reservar el paquete de Paintball (1 hora)."
                  )
                }
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-xl bg-black text-white text-center 
                   py-3 text-sm sm:text-base font-semibold hover:opacity-90 
                   active:translate-y-[1px] transition"
              >
                Reserva aquí
              </a>
            </div>
          </div>

          {/* Imagen lateral */}
          <div className="rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
            <Image
              src="/images/Paintball/paintballExperience.webp"
              alt="Experiencia de paintball en Playzone VIP"
              width={1200}
              height={800}
              className="w-full h-[220px] object-cover sm:h-[280px] md:h-[320px]"
            />
          </div>
        </div>
      </section>
      {/* ===== /Sección ===== */}

      {/* ===== /Sección: Experiencia Completa ===== */}

      {/* Zona de recargas */}
      <section>
        <Title
          titulo="Zona de Recargas"
          subTitulo="Adición de Bolas"
          descripcion="Recarga tu juego y continúa la diversión. En esta zona podrás añadir más bolas a tu partida de Paintball y disfrutar sin interrupciones."
        />
      </section>

      {/* Carrusel de recargas (mobile-first) */}
      <section
        className="
          scroll-hide
          bg-white
          flex
          gap-6
          overflow-x-auto
          snap-x snap-mandatory
          scroll-smooth
          px-5
          pb-5
          justify-start
          md:justify-center
          lg:overflow-x-visible
        "
      >
        <div className="snap-center shrink-0">
          <PriceCard
            icon="solar:box-linear"
            title="100 bolas"
            total="$13.000 cop"
            perPerson="Adicionales"
            ctaHref="https://wa.me/573132485526?text=Recarga%20100%20bolas%20paintball"
          />
        </div>

        <div className="snap-center shrink-0">
          <PriceCard
            icon="solar:box-linear"
            title="500 bolas"
            total="$65.000 cop"
            perPerson="Adicionales"
            ctaHref="https://wa.me/573132485526?text=Recarga%20500%20bolas%20paintball"
          />
        </div>

        <div className="snap-center shrink-0">
          <PriceCard
            icon="solar:box-linear"
            title="1000 bolas"
            total="$120.000 cop"
            perPerson="Adicionales"
            ctaHref="https://wa.me/573132485526?text=Recarga%201000%20bolas%20paintball"
          />
        </div>

        <div className="snap-center shrink-0">
          <PriceCard
            icon="solar:box-linear"
            title="2000 bolas"
            total="$230.000 cop"
            perPerson="Adicionales"
            ctaHref="https://wa.me/573132485526?text=Recarga%202000%20bolas%20paintball"
          />
        </div>
      </section>
    </main>
  );
}
