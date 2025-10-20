"use client";

import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import ButtonModal from "../ButtonModal";

type Props = {
  image: string;
  title: string;
  subTitle: string;
  people: string;
  time: string;
  id?: number;
  link?: string;
  contactLink?: string;
};

export default function index({
  image,
  title,
  subTitle,
  people,
  time,
  link = "#",
  id = 1,
}: Props) {
  return (
    <div
      className="
        w-full max-w-[566px]
        overflow-hidden rounded-2xl bg-white font-text
        shadow-[0_4px_10px_3px_rgba(0,0,0,0.3)]
        flex flex-col
        md:w-[566px] md:h-[590px]
        transition-all duration-300 hover:scale-[1.02]
      "
    >
      {/* Imagen (sin hover transform) */}
      <div className="w-full aspect-[566/290] h-[240px] md:aspect-auto md:h-[290px]">
        <Image
          src={image}
          alt={title}
          width={800}
          height={600}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenido */}
      <div className="flex flex-col p-6 flex-1">
        <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-900 font-title">
          {title}
        </h3>
        <p className="text-gray-700 text-base md:text-lg mb-4">{subTitle}</p>

        {/* Info (más grande) */}
        <div className="flex justify-between items-center text-base md:text-lg text-gray-600 mb-6">
          <span className="flex items-center gap-2">
            <Icon icon="mdi:account-group" className="w-6 h-6 text-gray-700" />
            {people}
          </span>
          <span className="flex items-center gap-2">
            <Icon icon="mdi:clock-outline" className="w-6 h-6 text-gray-700" />
            {time}
          </span>
        </div>

        {/* Botones: columna en móvil, fila en md+ */}
        <div className="mt-auto flex flex-col gap-3 md:flex-row md:gap-4">
          {/* Más información (gradiente fijo) */}
          <Link
            href={link}
            className="
              w-full flex items-center justify-center gap-2 py-3
              text-white rounded-xl text-sm md:text-base font-semibold
              bg-black
              shadow-[0_4px_10px_rgba(0,0,0,0.3)]
              hover:shadow-[0_6px_15px_rgba(0,0,0,0.4)]
              active:translate-y-[1px]
              transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-[#b76cbf]/60
            "
          >
            <Icon icon="mdi:information-outline" className="w-5 h-5" />
            Mas información
          </Link>

          {id == 1 && (
            <ButtonModal/>
          )}
        </div>
      </div>
    </div>
  );
}
