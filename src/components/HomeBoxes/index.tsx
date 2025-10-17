import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

type props = {
  image: string;
  activity: string;
  description: string;
  link: string;
};

export default function index({ image, activity, description, link }: props) {
  const router = useRouter()
  return (
    <div
      className="h-[300px] w-[300px] rounded-[20px] overflow-hidden 
             shadow-[0_4px_10px_3px_rgba(0,0,0,0.3)] flex flex-col 
             transform transition-all duration-500 ease-out 
             hover:scale-[1.03] hover:shadow-[0_6px_16px_6px_rgba(0,0,0,0.35)]"
    >
      <div
        className="relative bg-center bg-cover h-[168px] flex items-end p-2"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="text-white font-bold text-lg">{activity}</div>
      </div>

      <div className="flex flex-col justify-between flex-1 py-3 px-2">
        <p className="text-sm text-[#828292]">{description}</p>
        <Link className="mt-auto text-white rounded-3xl py-2 px-5 text-sm mx-3 cursor-pointer font-semibold bg-gradient-to-br from-[#713478] to-[#b76cbf] shadow-[0_4px_10px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_15px_rgba(0,0,0,0.4)] hover:brightness-110 active:translate-y-[1px] transition-all duration-300 flex items-center justify-center" href={link} type="button">
          Ver más
        </Link>
      </div>
    </div>
  );
}
