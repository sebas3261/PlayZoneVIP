import { Icon } from "@iconify/react";
import Link from "next/link";

type Props = {
  icon: string;              // ej: "mdi:account-multiple-outline"
  title: string;             // ej: "2 personas"
  total: string;             // ej: "$100.000 cop"
  perPerson: string;         // ej: "$50.000 / persona"
  ctaHref: string;           // enlace al WhatsApp u otro
};

export default function index({
  icon,
  title,
  total,
  perPerson,
  ctaHref,
}: Props) {
  return (
    <div
      className="w-[204px] h-[246px] bg-white rounded-[20px] 
                 border border-black/5 shadow-[0_6px_16px_rgba(0,0,0,0.1)] 
                 flex flex-col justify-between p-4 text-center"
    >
      {/* Icono */}
      <div className="flex flex-col items-center">
        <div className="w-[48px] h-[48px] rounded-full bg-[#ECEDEF] flex items-center justify-center mb-2">
          <Icon icon={icon} className="w-6 h-6 text-gray-700" />
        </div>

        <h4 className="text-[14px] font-semibold text-gray-900 mb-1">
          {title}
        </h4>

        <p className="text-[18px] font-extrabold text-gray-900">{total}</p>
        <p className="text-[12px] font-semibold text-[#8C90A0]">{perPerson}</p>
      </div>

      {/* Botón */}
      <Link
        href={ctaHref}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex items-center justify-center gap-2 py-3
              text-white rounded-xl text-[13px] font-semibold
              bg-black
              shadow-[0_4px_10px_rgba(0,0,0,0.3)]
              hover:shadow-[0_6px_15px_rgba(0,0,0,0.4)]
              active:translate-y-[1px]
              transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-[#b76cbf]/60"
      >
        Reservar
      </Link>
    </div>
  );
}
