import { Metadata } from "next";
import Image from "next/image";
import Title from "@/components/Title";
import { Icon } from "@iconify/react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Canchas de Fútbol",
  description:
    "Reserva las mejores canchas sintéticas de fútbol en Playzone VIP, Chía. Espacios amplios, iluminación profesional y todo lo que necesitas para tu partido perfecto.",
  keywords: [
    "canchas de fútbol",
    "canchas sintéticas",
    "reservar cancha",
    "fútbol 5",
    "fútbol 7",
    "fútbol en Chía",
    "Playzone VIP",
  ],
  openGraph: {
    title: "Canchas de Fútbol | Playzone VIP",
    description:
      "Juega con tus amigos en las mejores canchas sintéticas de Chía. Reserva tu espacio en Playzone VIP y vive la pasión del fútbol con instalaciones de primera.",
    url: "https://playzonevip.com/canchas",
    siteName: "Playzone VIP",
    type: "website",
    locale: "es_CO",
    images: [
      {
        url: "/og-canchas.webp",
        width: 1200,
        height: 630,
        alt: "Canchas de fútbol en Playzone VIP",
      },
    ],
  },
};

export default function Page() {
  return (
    <main className="bg-white font-text">
      {/* Hero */}
      <section>
        <Image
          src="/images/Canchas/canchasHeader.webp"
          alt="Canchas header"
          width={1600}
          height={900}
          priority
          className="w-full h-[300px] object-cover object-[center_70%] mb-10 md:h-[400px]"
        />
      </section>

      {/* Intro */}
      <section className="flex flex-col justify-center items-center gap-2 mb-10 px-6">
        <h2 className="font-title text-3xl text-center">Canchas Sinteticas</h2>
        <h3 className="text-center text-[#828292] text-sm font-[600]">
          Es hora de vivir la adrenalina con tus amigos.
          <br />
          DOMINGO A DOMINGO DE 8am - 11 pm
        </h3>
      </section>

      {/* Nuestras canchas */}
      <section className="md:flex md:flex-row-reverse md:px-10 md:gap-5 lg:px-24 lg:gap-10 items-center">
        <Image
          src="/images/Canchas/canchasMain.webp"
          alt="Nuestras canchas"
          width={800}
          height={600}
          className="w-full h-[200px] object-cover object-center mb-10 md:h-[353px] md:max-w-[580px] md:rounded-xl md:shadow-[0_4px_10px_3px_rgba(0,0,0,0.3)]"
        />
        <div className="px-8 md:px-0">
          <h3 className="font-title md:text-2xl mb-1">Nuestras canchas</h3>
          <p className="text-sm mb-5 text-[#828292] md:text-sm lg:text-base md:mb-10">
            Cancha profesional de césped sintético de última generación,
            perfecta para partidos competitivos y entrenamientos de cualquier
            nivel. Equipamiento completo y mantenimiento diario.
          </p>
          <h3 className="font-title md:text-2xl mb-1">
            Caracteristicas incluidas:
          </h3>
          <ul className="text-sm list-disc pl-5 text-[#828292] md:text-sm lg:text-base">
            <li>Totalmente cerradas con malla</li>
            <li>Iluminación profesional</li>
            <li>Zona de graderías</li>
            <li>Medidas reglamentarias</li>
          </ul>
        </div>
      </section>

      {/* Precios */}
      <section>
        <Title
          titulo="Precios"
          subTitulo="Tarifas por Horario"
          descripcion="Nuestras canchas tienen el mismo equipamiento y calidad siempre. El precio varía únicamente según el horario de tu reserva. ¡Aprovecha los horarios!"
        />
      </section>

      <section className="flex flex-wrap md:flex-row px-8 gap-10 justify-center lg:gap-20 pb-20">
        {/* Lunes a viernes (variable) */}
        <div className="p-5 shadow-[0_4px_10px_3px_rgba(0,0,0,0.15)] rounded-xl text-xs md:text-base bg-white border border-black/5 md:min-w-[500px]">
          <h4 className="font-semibold">Lunes a viernes</h4>
          <p className="text-[#828292] mb-5">Precio según el horario</p>

          {/* Slots (ejemplo no repetido) */}
          <div className="space-y-2">
            <div className="flex items-center justify-between h-[58px] bg-[#F8F8F8] px-5 rounded-xl font-semibold">
              <div className="flex items-center gap-2">
                <Icon icon="mdi:clock-outline" className="w-[20px] h-[20px]" />
                Hasta 4:00 PM
              </div>
              <p>
                $70.000 <span className="font-normal">cop</span>
              </p>
            </div>
            <div className="flex items-center justify-between h-[58px] bg-[#F8F8F8] px-5 rounded-xl font-semibold">
              <div className="flex items-center gap-2">
                <Icon icon="mdi:clock-outline" className="w-[20px] h-[20px]" />
                4:00 PM – 6:00 PM
              </div>
              <p>
                $80.000 <span className="font-normal">cop</span>
              </p>
            </div>
            <div className="flex items-center justify-between h-[58px] bg-[#F8F8F8] px-5 rounded-xl font-semibold">
              <div className="flex items-center gap-2">
                <Icon icon="mdi:clock-outline" className="w-[20px] h-[20px]" />
                6:00 PM – 7:00 PM
              </div>
              <p>
                $90.000 <span className="font-normal">cop</span>
              </p>
            </div>
            <div className="flex items-center justify-between h-[58px] bg-[#F8F8F8] px-5 rounded-xl font-semibold">
              <div className="flex items-center gap-2">
                <Icon icon="mdi:clock-outline" className="w-[20px] h-[20px]" />
                7:00 PM – 9:00 PM
              </div>
              <p>
                $105.000 <span className="font-normal">cop</span>
              </p>
            </div>
            <div className="flex items-center justify-between h-[58px] bg-[#F8F8F8] px-5 rounded-xl font-semibold mb-10">
              <div className="flex items-center gap-2">
                <Icon icon="mdi:clock-outline" className="w-[20px] h-[20px]" />
                9:00 PM – 10:00 PM
              </div>
              <p>
                $90.000 <span className="font-normal">cop</span>
              </p>
            </div>
            <Link
              href={
                "https://wa.me/573132485526?text=" +
                encodeURIComponent(
                  "Hola, quiero reservar una cancha de futbol entre semana para el horario de "
                )
              }
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-xl bg-black text-center text-white py-3 sm:py-3.5 text-sm sm:text-base font-semibold hover:opacity-90 active:translate-y-[1px] transition"
            >
              Reserva aquí
            </Link>
          </div>
        </div>

        {/* Fines de semana y festivos (fijo) */}
        <div className="p-5 shadow-[0_4px_10px_3px_rgba(0,0,0,0.15)] rounded-xl text-xs md:text-base bg-white border border-black/5 md:min-w-[500px] flex flex-col justify-between">
          <div>
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-5 sm:mb-6">
              <div className="min-w-0">
                <h4 className="font-semibold text-gray-900 leading-tight">
                  Sábados, Domingos y Festivos
                </h4>
                {/* SIN redundancia con el badge */}
                <p className="text-gray-500 text-sm">Disponible todo el día</p>
              </div>

              <span className="shrink-0 rounded-xl bg-[#E9EBEF] text-gray-800 text-xs sm:text-sm px-3 py-1.5">
                Tarifa fija
              </span>
            </div>

            {/* Precio */}
            <div className="rounded-2xl bg-[#F5F6F8] px-5 py-6 sm:px-6 sm:py-7 mb-5 sm:mb-6">
              <div className="text-center">
                <div className="font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight">
                  $85.000 <span className="font-bold">cop</span>
                </div>
                <div className="text-gray-500 text-sm sm:text-base mt-1">
                  por hora
                </div>

                <div className="mt-3 inline-flex items-center gap-2 text-gray-500 text-sm sm:text-base">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <circle cx="12" cy="12" r="9"></circle>
                    <path d="M12 7v5l3 2"></path>
                  </svg>
                  <span>Cualquier horario disponible</span>
                </div>
              </div>
            </div>

            {/* Bullets */}
            <ul className="space-y-2 text-gray-600 text-sm sm:text-base mb-5 sm:mb-6">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-400"></span>
                <span>Ideal para partidos de fin de semana</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-400"></span>
                <span>Disponibilidad desde las 08:00</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-400"></span>
                <span>Reserva anticipada recomendada</span>
              </li>
            </ul>
          </div>

          {/* CTA sin onClick (Server Component friendly) */}
          <Link
            href={
              "https://wa.me/573132485526?text=" +
              encodeURIComponent("Hola, quiero reservar una cancha de futbol para el fin de semana.")
            }
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-xl bg-black text-center text-white py-3 sm:py-3.5 text-sm sm:text-base font-semibold hover:opacity-90 active:translate-y-[1px] transition"
          >
            Reserva aquí
          </Link>
        </div>
      </section>
    </main>
  );
}
