import PartyCard from "@/components/PartyCard";
import Title from "@/components/Title";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fiestas Infantiles",
  description:
    "Celebra las mejores fiestas infantiles en Playzone VIP. Espacios seguros, diversión asegurada y actividades diseñadas para todas las edades. ¡Haz de su día un recuerdo inolvidable!",
  keywords: [
    "fiestas infantiles",
    "cumpleaños",
    "celebraciones",
    "juegos para niños",
    "eventos familiares",
    "Playzone VIP",
  ],
};

export default function Page() {
  // Helper para WhatsApp (link serializable)
  return (
    <main className="bg-white pt-15">
      <Title
        titulo="Fiestas Infantiles"
        subTitulo="¡Celebra el día más especial!"
        descripcion="Haz que el cumpleaños de tu hijo sea inolvidable con nuestros paquetes de fiestas infantiles. Nos encargamos de todo para que solo tengas que disfrutar viendo la sonrisa de tu pequeño."
      />

      <section className="flex flex-wrap justify-center gap-20 px-10 pb-10">
        <PartyCard
          image="/paintboleroFiesta.webp"
          title="PAINT FUTBOLERO"
          subTitle="10 personas · 2h de fútbol"
          people="10 personas"
          time="2h de fútbol"
          price="$690.000"
          features={[
            "Espacio con decoración básica (bombas y mesa de torta)",
            "Acompañamiento dirigido",
            "10 paquetes de gomitas",
          ]}
          details={[
            {
              title: "Paintball",
              items: [
                "Equipo de protección",
                "100 balas de paintball por persona",
              ],
            },
            {
              title: "Fútbol",
              items: ["2 horas de cancha"],
            },
          ]}
          notes={[
            "Prohibido el uso de guayos",
            "Ser puntuales",
            "Valor persona adicional $30.000",
            "Recarga adicional 100 balas $13.000",
          ]}
          ctaHref="https://wa.me/573132485526?text=Hola%2C%20quiero%20reservar%20Paint%20Futbolero"
        />

        <PartyCard
          image="/escapeFiesta.webp"
          title="ESCAPEROOM"
          subTitle="12 personas · 1h"
          people="12 personas"
          time="1h"
          price="$465.000"
          features={[
            "Espacio con decoración básica (bombas y mesa de torta)",
            "12 paquetes de gomitas",
          ]}
          details={[
            {
              title: "Juego de escape para 12 personas",
              items: ["6 personas en SAW", "6 personas en Busca del asesino"],
            },
          ]}
          notes={["Ser puntuales"]}
          ctaHref="https://wa.me/573132485526?text=Hola%2C%20quiero%20reservar%20Escape%20Room"
        />
        <PartyCard
          image="/paintFiesta.webp"
          title="PAINTBOLERO"
          subTitle="12 personas · 1h"
          people="12 personas"
          time="1h"
          price="$480.000"
          features={[
            "Espacio con decoración básica (bombas y mesa de torta)",
            "12 paquetes de gomitas",
          ]}
          details={[
            {
              title: "Paintball",
              items: [
                "Equipo de protección",
                "100 balas de paintball por persona",
              ],
            },
            {
              title: "Notas",
              items: [
                "Valor persona adicional $30.000",
                "Recarga adicional 100 balas $13.000",
                "Prohibido el uso de guayos",
                "Ser puntuales",
              ],
            },
          ]}
          ctaHref="https://wa.me/573132485526?text=Hola%2C%20quiero%20reservar%20Paintbolero"
        />

        {/* JUEGOS PLAYZONE */}
        <PartyCard
          image="/juegosFiesta.webp"
          title="JUEGOS PLAYZONE"
          subTitle="12 personas · 3h"
          people="12 personas"
          time="3 h"
          price="$545.000"
          features={[
            "Espacio con decoración básica (bombas y mesa de torta)",
            "12 paquetes de gomitas",
            "Juegos competitivos",
            "Acompañamiento dirigido",
          ]}
          details={[
            {
              title: "Futbol",
              items: ["3 horas de cancha"],
            },
            {
              title: "Paintball",
              items: ["Tiro al blanco"],
            },
            {
              title: "Notas",
              items: ["Prohibido el uso de guayos", "Ser puntuales"],
            },
          ]}
          ctaHref="https://wa.me/573132485526?text=Hola%2C%20quiero%20reservar%20Juegos%20Playzone"
        />

        {/* FUTBOLERO */}
        <PartyCard
          image="/futboleroFiesta.webp"
          title="FUTBOLERO"
          subTitle="10 personas · 3h"
          people="10 personas"
          time="3h"
          price="$400.000"
          features={[
            "Espacio con decoración básica (bombas y mesa de torta)",
            "10 paquetes de gomitas",
            "3 horas de cancha de fútbol",
          ]}
          details={[
            {
              title: "Notas",
              items: ["Prohibido el uso de guayos", "Ser puntuales"],
            },
          ]}
          ctaHref="https://wa.me/573132485526?text=Hola%2C%20quiero%20reservar%20Futbolero"
        />
      </section>
    </main>
  );
}
