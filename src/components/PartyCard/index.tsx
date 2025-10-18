"use client";

import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

type Props = {
  image: string;
  title: string;
  subTitle: string;
  people: string;
  time: string;
  price: string;
  features?: string[];
  details?: {
    title: string;
    items: string[];
  }[];
  notes?: string[];
  ctaText?: string;
  ctaHref?: string;
};

export default function PartyCard({
  image,
  title,
  subTitle,
  people,
  time,
  price,
  features = [],
  details = [],
  notes = [],
  ctaText = "Reserva aquí",
  ctaHref = "#",
}: Props) {
  return (
    <div
      className="
        w-full max-w-[566px]
        overflow-hidden rounded-2xl bg-white font-text
        shadow-[0_4px_10px_3px_rgba(0,0,0,0.3)]
        flex flex-col
        md:w-[566px]
      "
    >
      {/* Imagen */}
      <div className="w-full aspect-[566/290] h-[240px] md:aspect-auto md:h-[290px]">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Contenido */}
      <div className="flex flex-col p-6 flex-1">
        {/* Header con título y precio */}
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 font-title">
            {title}
          </h3>
          <span className="text-sm md:text-xl font-bold text-gray-800 bg-gray-100 px-3 py-1 rounded-lg">
            {price}
          </span>
        </div>

        <p className="text-gray-700 text-base md:text-lg mb-3">{subTitle}</p>

        {/* Info rápida */}
        <div className="flex justify-between items-center text-base md:text-lg text-gray-700 mb-4">
          <span className="flex items-center gap-2">
            <Icon icon="mdi:account-group" className="w-6 h-6" />
            {people}
          </span>
          <span className="flex items-center gap-2">
            <Icon icon="mdi:clock-outline" className="w-6 h-6" />
            {time}
          </span>
        </div>

        {/* Lista general de features */}
        {features.length > 0 && (
          <ul className="space-y-2 text-gray-700 text-sm md:text-base mb-5">
            {features.map((f, i) => (
              <li key={i} className="flex items-start gap-2">
                <Icon
                  icon="mdi:check-circle-outline"
                  className="w-5 h-5 mt-[2px]"
                />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Bloques de detalles (Paintball / Fútbol / etc.) */}
        {details.map((section, i) => (
          <div key={i} className="mb-3">
            <h4 className="font-semibold text-gray-900 mb-1">{section.title}</h4>
            <ul className="text-gray-700 text-sm md:text-base list-disc ml-5 space-y-1">
              {section.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* Notas */}
        {notes.length > 0 && (
          <div className="mt-2">
            <h4 className="font-semibold text-gray-900 mb-1">Notas:</h4>
            <ul className="text-gray-700 text-sm md:text-base list-disc ml-5 space-y-1">
              {notes.map((note, i) => (
                <li key={i}>{note}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Botón */}
        <div className="mt-auto pt-5">
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-full flex items-center justify-center gap-2 py-3
              text-white rounded-xl text-sm md:text-base font-semibold
              bg-gradient-to-br from-[#713478] to-[#b76cbf]
              shadow-[0_4px_10px_rgba(0,0,0,0.3)]
              hover:shadow-[0_6px_15px_rgba(0,0,0,0.4)]
              active:translate-y-[1px]
              transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-[#b76cbf]/60
            "
          >
            <Icon icon="mdi:calendar-check" className="w-5 h-5" />
            {ctaText}
          </a>
        </div>
      </div>
    </div>
  );
}
