import React from "react";

type Props = {
  titulo: string;
  subTitulo: string;
  descripcion: string;
};

export default function index({ titulo, subTitulo, descripcion }: Props) {
  return (
    <div className="py-10 flex flex-col justify-center items-center px-8 gap-2 md:gap-5 md:py-15">
      <div className="bg-[#E9EBEF] text-xs p-1 rounded-xl px-3 lg:text-base">
        <h2 className="font-title">{titulo}</h2>
      </div>
      <h3 className="text-xs lg:text-base">{subTitulo}</h3>
      <p className="max-w-[900px] text-center text-xs text-[#828292] lg:text-base">{descripcion}</p>
    </div>
  );
}
