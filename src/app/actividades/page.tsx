import React from "react";
import type { Metadata } from "next";
import ActivityCard from "@/components/ActivityCard";

export const metadata: Metadata = {
  title: "Nuestras actividades",
  description:
    "Descubre todas las actividades deportivas y recreativas que tenemos para ti en Playzone VIP: fútbol, pádel, paintball y mucho más.",
  keywords: [
    "actividades",
    "fútbol",
    "pádel",
    "paintball",
    "escape room",
    "Playzone VIP",
  ],
};

export default function Page() {
  return (
    <main className="bg-white pt-20 font-text px-8 md:pt-30">
      <div className="flex flex-col items-center justify-center">
        <h2 className="font-title text-2xl text-center mb-2">
          Nuestras Actividades
        </h2>
        <p className="text-center text-[#828292] text-sm mb-10 max-w-[842px]">
          Descubre nuestra variedad de experiencias diseñadas para todos los
          niveles y edades. Diversión garantizada en cada actividad.
        </p>
      </div>
      <div
        className="
    flex flex-wrap justify-center
    gap-x-15 gap-y-15 pb-20
  "
      >
        <ActivityCard
          image="/futbolCard.webp"
          title="Canchas sinteticas"
          subTitle="Es hora de vivir la adrenalina con tus amigos"
          time="1h"
          people="10-16"
          link = "canchas"
        />
        <ActivityCard
          image="/padelCard.webp"
          title="Padel"
          subTitle="¡Que empiece el juego! Tenemos todo listo para que mejores tus habilidades,"
          time="1h 30m"
          people="4"
          link="padel"
        />
        <ActivityCard
          image="/paintballCard.webp"
          title="Paintball"
          subTitle="¡Reúne a tu equipo, carga tu marcadora y prepárate para la batalla!"
          time="1h"
          people="20"
          link="paintball"
        />
        <ActivityCard
          image="/escapeCard.webp"
          title="Escape room"
          subTitle="Afinen su lógica y prepárense para un reto lleno de adrenalina."
          time="1h"
          people="6"
          link="escaperoom-game"
        />
      </div>
    </main>
  );
}
