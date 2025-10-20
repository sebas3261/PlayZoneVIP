import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
// Ajusta la ruta de tu componente si es distinta
import PadelCard from "@/components/PadelCard";

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
        url: "/og-padel.webp",
        width: 1200,
        height: 630,
        alt: "Canchas de pádel en Playzone VIP",
      },
    ],
  },
};

export default function Page() {
  return (
    <main className="bg-white font-text">
      {/* HERO */}
      <section className="relative h-[300px] md:h-[420px]">
        <Image
          src="/images/Padel/padelHeader.webp"
          alt="Canchas de pádel en Playzone VIP"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-center"
        />
      </section>

      {/* TÍTULO + SUBTÍTULO */}
      <section className="px-6 md:px-12 lg:px-28 py-8 md:py-10 flex flex-col items-center gap-2">
        <h1 className="font-title text-3xl md:text-4xl text-center">Padel</h1>
        <p className="text-center text-[#828292] text-sm md:text-base font-semibold">
          El deporte que más crece, en las mejores pistas
          <br />
          DOMINGO A DOMINGO DE 8 AM - 11 PM
        </p>
      </section>

      {/* INTRO + VIDEO */}
      <section className="px-6 md:px-12 lg:px-28 pb-10">
        <div className="grid gap-6 md:grid-cols-2 md:gap-10 items-center">
          <div>
            <h2 className="font-title text-2xl md:text-3xl mb-3">
              ¡Que empiece el juego!
            </h2>
            <p className="text-[#5a5a5a] leading-relaxed">
              Tenemos todo listo para que mejores tus habilidades, superes tus
              propios límites y te diviertas a lo grande. Contamos con 2 canchas
              de pádel profesionales, espacios ideales para entrenar,
              perfeccionar tu técnica o simplemente jugar con tu parche.
            </p>
            <p className="text-[#5a5a5a] leading-relaxed mt-3">
              Y lo mejor: nuestros profes están listos para acompañarte en cada
              golpe, punto y aprendizaje.
            </p>
          </div>

          {/* Video 16:9 responsive */}
          <div className="rounded-xl overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.12)]">
            <div className="relative w-full aspect-video bg-black">
              <video
                src="/videos/padel-tour.mp4" // reemplaza por el tuyo o un embed
                className="absolute inset-0 w-full h-full object-cover"
                controls
                preload="metadata"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CARDS */}
      <section className="flex flex-wrap justify-center gap-10 md:gap-20 px-8 mb-10">
        <PadelCard
          image="/images/Padel/padelReserva.webp"
          title="Reserva tu cancha"
          subTitle="Pista profesional con cristal panorámico y césped artificial de competición. Agenda tu turno y arma el mejor partido."
          people="4"
          time="1h 30m"
          link="https://wa.me/573105655602?text=Hola,%20quiero%20reservar%20para%20jugar%20p%C3%A1del."
        />

        <PadelCard
          image="/images/Padel/padelClases.webp"
          title="Clases con profesor"
          subTitle="Aprende los fundamentos del pádel y perfecciona tu técnica y estrategia con nuestros profes certificados."
          people="1 - 4"
          time="1h"
          link="https://wa.me/573105655602?text=Hola,%20quiero%20informaci%C3%B3n%20de%20clases%20de%20p%C3%A1del."
          id={2}
        />
      </section>

      {/* BLOQUE TEXTO CENTRAL */}
      <section className="px-6 md:px-12 lg:px-28 pb-6">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="font-title text-xl md:text-2xl mb-2">
            ¿Cuando puedes entrenar?
          </h3>
          <p className="text-[#5a5a5a]">
            Tenemos sesiones entre semana y fines de semana, con planes
            individuales o grupales. Tú eliges el horario, el parche y el profe.
            Nosotros te ponemos la cancha, la paleta y toda la energía.
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 md:px-12 lg:px-28 pb-16">
        <div className="max-w-xl mx-auto">
          <Link
            href="https://wa.me/573132485526?text=Hola%20Playzone%20VIP,%20quiero%20reservar%20para%20jugar%20p%C3%A1del."
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-black text-white rounded-full py-3.5 text-base font-semibold hover:opacity-90 transition"
          >
            Reservar ahora
          </Link>
        </div>
      </section>
    </main>
  );
}
