"use client";

import HomeBoxes from "@/components/HomeBoxes";
import Title from "@/components/Title";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleWhatsApp = () => {
    const phone = "573132485526";
    const message =
      "Hola, quiero saber más sobre las actividades de Playzone VIP";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <main className="overflow-hidden">
      <section
        className="relative h-[550px] bg-start bg-cover flex items-center lg:bg-center md:h-[654px]"
        style={{ backgroundImage: "url('/MainHome.webp')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="z-10 px-8 flex flex-col w-fit gap-2 md:px-20 lg:px-60">
          <h2 className="text-white text-4xl font-title md:text-6xl lg:text-7xl">
            Playzone VIP
          </h2>
          <p className="font-text text-white font-semibold text-sm my-3 md:max-w-[500px] lg:max-w-[850px] lg:text-base">
            Fútbol, Pádel, Paintball y Escape Room. Cuatro experiencias únicas
            en un solo lugar. Vive la emoción del deporte y la aventura.
          </p>

          <div className="flex flex-col w-fit gap-2 md:flex-row md:gap-7">
            <button
              className="bg-white p-2 rounded-md font-text font-semibold text-xs flex items-center gap-1 cursor-pointer"
              onClick={handleWhatsApp}
              type="button"
            >
              Reservar ahora
              <Icon icon="line-md:arrow-right" />
            </button>
            <button
              className="bg-white p-2 rounded-md font-text font-semibold text-xs flex items-center gap-1 cursor-pointer"
              onClick={() => {
                router.push("/actividades");
              }}
              type="button"
            >
              Ver actividades
              <Icon icon="line-md:play-filled" />
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <Title
          titulo="Nuestras Actividades"
          subTitulo="Cuatro formas de vivir la adrenalina"
          descripcion="Vive la emoción del deporte como nunca antes. Cada experiencia en PlayZone VIP está diseñada para despertar tu espíritu competitivo y hacerte sentir la adrenalina del juego."
        />
      </section>

      <section className="bg-white flex flex-wrap justify-center gap-10 pb-10 px-5">
        <HomeBoxes
          image="/futbolHome.webp"
          activity="Fútbol"
          description="Canchas profesionales de césped sintético de última generación, iluminación LED"
        />
        <HomeBoxes
          image="/padelHome.webp"
          activity="Pádel"
          description="Disfruta de modernas canchas de pádel techadas y con iluminación de torneo."
        />
        <HomeBoxes
          image="/paintballHome.webp"
          activity="Paintball"
          description="Campos de batalla con escenarios únicos, equipamiento de protección completo y bolas de pintura."
        />
        <HomeBoxes
          image="/escapeHome.webp"
          activity="Escape Room"
          description="Salas inmersivas con tecnología de última generación, acertijos desafiantes y aventuras que pondrán a prueba tu ingenio."
        />
      </section>

      <section className="bg-white">
        <Title 
          titulo="Por que elegirnos"
          subTitulo="La mejor experiencia deportiva"
          descripcion="En PlayZone VIP nos dedicamos a ofrecer instalaciones de primera calidad y un servicio excepcional para que disfrutes al máximo de tu tiempo deportivo y de ocio."  
        />
      </section>
    </main>
  );
}
