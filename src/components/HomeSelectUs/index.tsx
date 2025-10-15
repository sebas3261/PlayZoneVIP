import { Icon } from "@iconify/react";
import React from "react";

type Props = {
  icon: string;
  title: string;
  description: string;
};

export default function index({ icon, title, description }: Props) {
  return (
    <div className="w-[300px] h-[260px] bg-white rounded-3xl shadow-lg flex flex-col items-center text-center p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.3)] hover:bg-gradient-to-b hover:from-gray-50 hover:to-white mb-5">
      <div className="w-[90px] h-[90px] flex justify-center items-center rounded-full bg-gradient-to-br from-[#003566] to-[#0077b6] shadow-md mb-4">
        <Icon icon={icon} className="w-[55px] h-[55px] text-white" />
      </div>

      <h4 className="text-lg font-semibold mb-2 text-gray-800 tracking-tight">
        {title}
      </h4>

      <p className="text-sm text-[#828292] leading-relaxed max-w-[250px]">
        {description}
      </p>
    </div>
  );
}
