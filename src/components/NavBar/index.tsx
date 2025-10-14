"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function index() {
  const pathname = usePathname();
  const transparentOnTop = pathname === "/";
  const triggerOffset = 12;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > triggerOffset);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [triggerOffset]);

  const solid = !transparentOnTop || scrolled;

  const headerClass = [
    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 text-sm",
    solid
      ? "bg-white text-black shadow-[0_4px_4px_0_rgba(0,0,0,0.10)]"
      : "bg-transparent text-white",
  ].join(" ");

  const contactButtonClass = [
    "p-2 px-6 rounded-3xl transition-colors duration-300 hidden md:flex",
    solid ? "bg-black text-white" : "bg-white text-black",
  ].join(" ");

  return (
    <header className={headerClass}>
      <a href="#main" className="sr-only focus:not-sr-only">
        Saltar al contenido
      </a>

      <div className="font-text font-bold flex justify-between p-[30px] py-[15px] items-center ">
        <Link href="/" className="flex items-center gap-5">
          <img src="/LogoNoBackground.webp" className="w-10"/>
          <h1 className="font-title text-base">PLAYZONE VIP</h1>
        </Link>

        <nav aria-label="Principal">
          <ul className="gap-20 hidden md:flex">
            <li>
              <Link href="/">
                <p>Inicio</p>
              </Link>
            </li>
            <li>
              <Link href="/actividades">
                <p>Actividades</p>
              </Link>
            </li>
            <li>
              <Link href="/fiestasinfantiles">
                <p>Fiestas infantiles</p>
              </Link>
            </li>
          </ul>
        </nav>

        <Link href="/contacto" className={contactButtonClass}>
          <p>Contactanos</p>
        </Link>

        <button className="md:hidden">
          <Icon icon="material-symbols:menu-rounded" className="w-8 h-8" />
        </button>
      </div>
    </header>
  );
}
