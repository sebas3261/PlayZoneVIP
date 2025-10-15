import React from "react";

type props = {
  image: string;
  activity: string;
  description: string;
};

export default function index({ image, activity, description }: props) {
  return (
    <div className="h-[300px] w-[300px] rounded-[20px] overflow-hidden 
             shadow-[0_4px_10px_3px_rgba(0,0,0,0.3)] flex flex-col 
             transform transition-all duration-500 ease-out 
             hover:scale-[1.03] hover:shadow-[0_6px_16px_6px_rgba(113,52,120,0.6)]">
      
      <div
        className="relative bg-center bg-cover h-[168px] flex items-end p-2"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="text-white font-bold text-lg">{activity}</div>
      </div>

      <div className="flex flex-col justify-between flex-1 py-3 px-2">
        <p className="text-sm text-[#828292]">{description}</p>
        <button className="mt-auto bg-[#713478] text-white rounded-3xl py-1 px-3 text-sm mx-3 cursor-pointer font-semibold">
          Ver más
        </button>
      </div>
    </div>
  );
}
