import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Footer() {
  const itemHover =
    "inline-block transition-all duration-300 hover:scale-110 hover:text-[#F35723] hover:drop-shadow-[0_0_6px_rgba(255,209,102,0.7)] text-sm md:text-base";

  return (
    <footer
      role="contentinfo"
      className="font-text text-white p-10 px-8 md:px-20"
    >
      <div className="border-b border-white/50 flex flex-col py-5 justify-between gap-8 md:flex-row">
        {/* Columna brand + redes */}
        <div>
          {/* Evita H1/uso excesivo de headings en footer; H2 aquí está bien */}
          <h2 className="font-title text-2xl mb-1">PLAYZONE VIP</h2>
          <p className="max-w-[48ch] mb-6 text-sm md:text-base">
            Tu centro de entretenimiento deportivo donde la diversión no tiene
            límites. Fútbol, Pádel, Paintball y Escape Room en un solo lugar.
          </p>

          <div className="flex gap-3 mb-5">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/playzonevip10"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className={`${itemHover} hover:!text-[#1877F2] hover:!drop-shadow-[0_0_6px_rgba(24,119,242,0.6)]`}
            >
              <Icon
                icon="ic:baseline-facebook"
                className="w-6 h-6"
                aria-hidden="true"
              />
            </a>

            {/* Instagram (un color plano cercano al gradiente) */}
            <a
              href="https://www.instagram.com/playzonevip10"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={`${itemHover} hover:!text-[#E1306C] hover:!drop-shadow-[0_0_6px_rgba(225,48,108,0.6)]`}
            >
              <Icon
                icon="mdi:instagram"
                className="w-6 h-6"
                aria-hidden="true"
              />
            </a>

            {/* X / Twitter */}
            <a
              href="https://x.com/playzonevip"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className={`${itemHover} hover:!text-[#1DA1F2] hover:!drop-shadow-[0_0_6px_rgba(29,161,242,0.6)]`}
            >
              <Icon
                icon="prime:twitter"
                className="w-6 h-6"
                aria-hidden="true"
              />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/573132485526"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className={`${itemHover} hover:!text-[#25D366] hover:!drop-shadow-[0_0_6px_rgba(37,211,102,0.6)]`}
            >
              <Icon
                icon="ic:baseline-whatsapp"
                className="w-6 h-6"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        {/* Columna enlaces */}
        <div className="flex flex-col gap-8 sm:flex-row sm:gap-12">
          <nav aria-label="Enlaces rápidos">
            <h3 className="font-semibold mb-2">Enlaces rápidos</h3>
            <div className="flex gap-10">
              <ul className="flex flex-col gap-1">
                <li>
                  <Link href="/" className={itemHover}>
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/actividades" className={itemHover}>
                    Actividades
                  </Link>
                </li>
                <li>
                  <Link href="/fiestasinfantiles" className={itemHover}>
                    Fiestas infantiles
                  </Link>
                </li>
                <li>
                  <Link href="/canchas" className={itemHover}>
                    Fútbol
                  </Link>
                </li>
              </ul>
              <ul className="flex flex-col gap-1">
                <li>
                  <Link href="/padel" className={itemHover}>
                    Pádel
                  </Link>
                </li>
                <li>
                  <Link href="/paintball" className={itemHover}>
                    Paintball
                  </Link>
                </li>
                <li>
                  <Link href="/escaperoom-game" className={itemHover}>
                    Escape Room
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className={itemHover}>
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          {/* Columna contacto con semántica */}
          <address className="not-italic">
            <h3 className="font-semibold mb-2">Contacto</h3>
            <ul className="flex flex-col gap-2 text-xs">
              <li className="flex items-start gap-2">
                <Icon
                  icon="mdi:location"
                  className="w-5 h-5 mt-0.5"
                  aria-hidden="true"
                />
                <a
                  href="https://maps.google.com/?q=PlayZone+VIP+Ch%C3%ADa+Cra+9+Vereda+Bojac%C3%A1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cra. 9, Vereda Bojacá / Km 1 vía Chía–Cajicá, Chía,
                  Cundinamarca
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon
                  icon="ic:baseline-phone"
                  className="w-5 h-5"
                  aria-hidden="true"
                />
                <a href="tel:+573132485526">+57 313 248 5526</a>
              </li>
              <li className="flex items-center gap-2">
                <Icon
                  icon="mdi:clock-outline"
                  className="w-5 h-5"
                  aria-hidden="true"
                />
                <span>L–D 8:00–23:00</span>
              </li>
            </ul>
          </address>
        </div>
      </div>
      <div className="mt-5 flex justify-between flex-col md:flex-row">
        <div>
          <p>© 2025 - Play Zone VIP</p>
        </div>
        <ul className="flex flex-col gap-1 mt-2 sm:flex-row sm:gap-4 md:mt-0">
          <li>
            <Link href="/cookies" className={itemHover}>
              Cookies
            </Link>
          </li>
          <li>
            <Link href="/politica-privacidad" className={itemHover}>
              Política de privacidad
            </Link>
          </li>
          <li>
            <Link href="/aviso-legal" className={itemHover}>
              Aviso legal
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
