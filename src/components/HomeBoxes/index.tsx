import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";

type props = {
  image: string;
  activity: string;
  description: string;
  link: string;
};

export default function index({ image, activity, description, link }: props) {
  const router = useRouter();
  return (
    <div
      className="h-[300px] w-[300px] rounded-[20px] overflow-hidden 
                 shadow-[0_4px_10px_3px_rgba(0,0,0,0.3)] flex flex-col 
                 transform transition-all duration-500 ease-out 
                 hover:scale-[1.03] hover:shadow-[0_6px_16px_6px_rgba(0,0,0,0.35)]"
    >
      {/* Imagen superior */}
      <div className="relative h-[168px] flex items-end p-2">
        <Image
          src={image}
          alt={activity}
          fill
          sizes="300px"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative text-white font-bold text-lg z-10">
          {activity}
        </div>
      </div>

      {/* Texto y botón */}
      <div className="flex flex-col justify-between flex-1 py-3 px-2">
        <p className="text-sm text-[#828292]">{description}</p>
        <Link
          href={link}
          className="mt-auto text-white rounded-3xl py-2 px-5 text-sm mx-3 cursor-pointer font-semibold 
                     bg-gradient-to-br from-[#713478] to-[#b76cbf] 
                     shadow-[0_4px_10px_rgba(0,0,0,0.3)] 
                     hover:shadow-[0_6px_15px_rgba(0,0,0,0.4)] 
                     hover:brightness-110 active:translate-y-[1px] 
                     transition-all duration-300 flex items-center justify-center"
        >
          Ver más
        </Link>
      </div>
    </div>
  );
}
