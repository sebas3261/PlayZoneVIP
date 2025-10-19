import React from "react";
import type { Metadata } from "next";
import { Icon } from "@iconify/react";

export const metadata: Metadata = {
  title: "Contáctanos",
  description:
    "Comunícate con Playzone VIP para reservar canchas, planear tu evento o resolver tus dudas. Estamos en Chía, listos para brindarte la mejor experiencia deportiva.",
  keywords: [
    "contacto",
    "reservas",
    "Playzone VIP",
    "canchas en Chía",
    "paintball Chía",
    "pádel Chía",
    "escape room Chía",
  ],
  openGraph: {
    title: "Contáctanos | Playzone VIP",
    description:
      "¿Tienes preguntas o deseas reservar? Escríbenos y el equipo de Playzone VIP te ayudará a organizar tu próxima experiencia deportiva.",
    url: "https://playzonevip.com/contacto",
    siteName: "Playzone VIP",
    type: "website",
    locale: "es_CO",
    images: [
      {
        url: "/og-contacto.webp",
        width: 1200,
        height: 630,
        alt: "Contáctanos en Playzone VIP",
      },
    ],
  },
};

const WHATSAPP = "573132485526";
const WAMSG = encodeURIComponent(
  "Hola, quiero más información y cotizar una reserva en Playzone VIP."
);

export default function Page() {
  return (
    <main className="font-text bg-white">
      {/* Hero */}
      <section className="mx-auto w-full max-w-6xl px-5 pt-10 md:pt-14">
        <h1 className="font-title text-3xl leading-tight tracking-tight md:text-5xl text-center mt-10">
          CONTACTO Y UBICACION
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-neutral-600 md:mt-3 md:text-base">
          Estamos aquí para ayudarte. Contáctanos para reservas, consultas o
          más información.
        </p>
      </section>

      {/* Content */}
      <section className="mx-auto mt-6 w-full max-w-6xl px-5 pb-16">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Columna izquierda: información + mapa */}
          <div className="space-y-5">
            <h2 className="text-lg font-semibold">Información de Contacto</h2>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-neutral-100">
                  <Icon className="h-5 w-5 text-neutral-700" icon="mdi:map-marker-outline" />
                </span>
                <div>
                  <p className="text-sm font-medium">Dirección</p>
                  <p className="text-sm text-neutral-600">
                    Cra 6, Vereda Bojacá / Km 1 vía Chía–Cajicá
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-neutral-100">
                  <Icon className="h-5 w-5 text-neutral-700" icon="mdi:phone-outline" />
                </span>
                <div>
                  <p className="text-sm font-medium">Teléfono / WhatsApp</p>
                  <p className="text-sm text-neutral-600">
                    +{WHATSAPP.slice(0, 2)} {WHATSAPP.slice(2, 5)}{" "}
                    {WHATSAPP.slice(5, 8)} {WHATSAPP.slice(8, 12)} - +57 310 565 5602 (padel)
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-neutral-100">
                  <Icon className="h-5 w-5 text-neutral-700" icon="mdi:clock-outline" />
                </span>
                <div>
                  <p className="text-sm font-medium">Horarios</p>
                  <p className="text-sm text-neutral-600">
                    8:00am – 11:00pm · Todos los días
                  </p>
                </div>
              </li>
            </ul>

            {/* Mapa */}
            <div className="rounded-2xl border border-neutral-200 bg-neutral-100/60 p-1 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                <iframe
                  title="Ubicación Playzone VIP"
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    "Playzone VIP, Chía, Cundinamarca"
                  )}&output=embed`}
                />
              </div>
            </div>
          </div>

          {/* Columna derecha: tarjeta WhatsApp / CTA */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] md:p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100">
                <Icon icon="mdi:whatsapp" className="h-7 w-7 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-semibold">Tarifas por Grupo</p>
                <p className="text-xs text-neutral-600">
                  El precio varía según el número de personas. ¡Cuantos más
                  sean, más económico por persona!
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-2">
              <Item line="Respuestas rápidas y personalizadas" />
              <Item line="Reservas confirmadas al instante" />
              <Item line="Información detallada de actividades" />
            </div>

            <a
              href={`https://wa.me/${WHATSAPP}?text=${WAMSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-black py-3 text-sm font-semibold text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-black/30"
              aria-label="Chatear por WhatsApp con Playzone VIP"
            >
              Contáctanos aquí
            </a>

            {/* Bloque de preguntas rápidas (details nativo, accesible) */}
            <div className="mt-6 divide-y divide-neutral-200 rounded-2xl border border-neutral-200">
              <DetailsItem
                title="¿Cómo reservo una cancha?"
                body="Escríbenos por WhatsApp con la actividad, fecha, horario y número de personas. Te confirmamos disponibilidad y precio al instante."
              />
              <DetailsItem
                title="¿Puedo cambiar o cancelar mi reserva?"
                body="Sí. Avísanos con la mayor antelación posible para reprogramar o gestionar tu cancelación según nuestras políticas."
              />
              <DetailsItem
                title="¿Qué medios de pago aceptan?"
                body="Efectivo, transferencia y opciones digitales disponibles al confirmar tu reserva."
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- UI helpers ---------- */

function Item({ line }: { line: string }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2">
      <Icon icon="mdi:check-circle-outline" className="h-5 w-5" />
      <span className="text-sm">{line}</span>
    </div>
  );
}

function DetailsItem({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <details className="group">
      <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-medium">
        {title}
        <Icon
          icon="mdi:chevron-down"
          className="h-5 w-5 transition-transform group-open:rotate-180"
        />
      </summary>
      <div className="px-4 pb-4 text-sm text-neutral-600">{body}</div>
    </details>
  );
}
