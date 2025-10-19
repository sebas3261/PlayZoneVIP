import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import EscapeCard from "@/components/EscapeCard";
import Title from "@/components/Title";
import PriceCard from "@/components/PriceCard";

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
        <div className="px-5">
          <h2 className="font-title text-3xl text-center">Escape room</h2>
          <h3 className="text-center text-[#828292] text-sm font-[600]">
            ¡Atrévete a entrar a nuestras salas de escape!
            <br />
            Reúne a tu equipo, afina tu lógica y prepárate para un reto lleno
            de adrenalina. ¡Reserva ahora y demuestra que pueden salir a tiempo!
            <br />
            DOMINGO A DOMINGO DE 2 PM - 11 PM
          </h3>
        </div>
      </section>

      <section className="flex flex-wrap justify-center gap-10 px-8">
        <EscapeCard
          image="/images/Escape/escapeSaw.webp"
          title="SAW"
          subTitle={
            "Jigsaw ha atrapado a tu grupo de amigos y los tiene encerrados en una habitación aterradora.\nTienen 60 minutos para descifrar sus macabros acertijos, usar cada recurso disponible y trabajar en equipo para escapar con vida. ¿Lograrán salir antes de que sea demasiado tarde? "
          }
          people="2 - 6"
          time="1h"
          link="https://wa.me/573132485526?text=Hola,%20quiero%20más%20información%20sobre%20el%20scape%20de%20saw"
        />
        <EscapeCard
          image="/images/Escape/escapeAsesino.webp"
          title="¡En Busca del Asesino!"
          subTitle={
            "¡El famoso millonario ha sido asesinado en su propia mansión!\nAhora tienes 60 minutos para descubrir quién cometió el crimen, con qué arma y en qué lugar sucedió. Explora la escena, sigue las pistas, resuelve los acertijos y reúne todas las pruebas.\nSolo los mejores detectives podrán armar el caso y hacer su declaración final antes de que el tiempo se agote.\n¿Estás listo para encontrar al asesino? "
          }
          people="2 - 6"
          time="1h"
          link="https://wa.me/573132485526?text=Hola,%20quiero%20más%20información%20sobre%20el%20scape%20de%20en%20busqueda%20del%20asesino"
        />
      </section>

      <section>
        <Title
          titulo="Precios"
          subTitulo="Tarifas por Grupo"
          descripcion="El precio varía según el número de personas en tu grupo. Cuantos más seáis, más económico resulta por persona."
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
            icon="mdi:account-multiple-outline"
            title="2 persona"
            total="$100.000 cop"
            perPerson="$50.000 / persona"
            ctaHref="https://wa.me/573132485526?text=Quiero%20reservar%20para%202%20personas"
          />
        </div>

        <div className="snap-center shrink-0">
          <PriceCard
            icon="mdi:account-group-outline"
            title="3 personas"
            total="$130.000 cop"
            perPerson="$44.000 / persona"
            ctaHref="https://wa.me/573132485526?text=Quiero%20reservar%20para%203%20personas"
          />
        </div>

        <div className="snap-center shrink-0">
          <PriceCard
            icon="mdi:account-group-outline"
            title="4 personas"
            total="$135.000 cop"
            perPerson="$45.000 / persona"
            ctaHref="https://wa.me/573132485526?text=Quiero%20reservar%20para%204%20personas"
          />
        </div>

        <div className="snap-center shrink-0">
          <PriceCard
            icon="mdi:account-group-outline"
            title="5 personas"
            total="$160.000 cop"
            perPerson="$40.000 / persona"
            ctaHref="https://wa.me/573132485526?text=Quiero%20reservar%20para%205%20personas"
          />
        </div>

        <div className="snap-center shrink-0">
          <PriceCard
            icon="mdi:account-group-outline"
            title="6 personas"
            total="$175.000 cop"
            perPerson="$35.000 / persona"
            ctaHref="https://wa.me/573132485526?text=Quiero%20reservar%20para%206%20personas"
          />
        </div>
      </section>
    </main>
  );
}
