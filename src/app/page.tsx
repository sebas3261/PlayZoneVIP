"use client";

import { Icon } from "@iconify/react";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <section
        className="relative h-[550px] bg-start bg-cover flex items-center lg:bg-center md:h-[654px]"
        style={{ backgroundImage: "url('/MainHome.webp')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="z-10 px-8 flex flex-col w-fit gap-2 md:px-20 lg:px-60">
          <h2 className="text-white text-4xl font-title md:text-6xl lg:text-7xl">Playzone VIP</h2>
          <p className="font-text text-white font-semibold text-sm my-3 md:max-w-[500px] lg:max-w-[850px] lg:text-base">
            Fútbol, Pádel, Paintball y Escape Room. Cuatro experiencias únicas
            en un solo lugar. Vive la emoción del deporte y la aventura.
          </p>

          <div className="flex flex-col w-fit gap-2 md:flex-row md:gap-7">
            <button className="bg-white p-2 rounded-md font-text font-semibold text-xs flex items-center gap-1">
              Reservar ahora
              <Icon icon="line-md:arrow-right"/>
            </button>
            <button className="bg-white p-2 rounded-md font-text font-semibold text-xs flex items-center gap-1">
              Ver actividades
              <Icon icon="line-md:play-filled"/>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <h2>aaaa</h2>
      </section>
    </main>
  );
}
