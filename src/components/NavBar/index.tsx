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
  const [mobileOpen, setMobileOpen] = useState(false);

  // rAF para scroll suave
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > triggerOffset);
          ticking = false;
        });
        ticking = true;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [triggerOffset]);

  // Bloquea scroll del body al abrir menú
  useEffect(() => {
    const { body } = document;
    body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { body.style.overflow = ""; };
  }, [mobileOpen]);

  // Escape para cerrar
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const solid = !transparentOnTop || scrolled;

  const headerClass = [
    "fixed top-0 left-0 right-0 z-50 text-sm",
    "transition-[background-color,color,box-shadow] duration-300",
    solid ? "bg-white text-black shadow-sm md:backdrop-saturate-150"
          : "bg-transparent text-white shadow-none",
  ].join(" ");

  const contactButtonClass = [
    "p-2 px-6 rounded-3xl transition-colors duration-300 hidden md:flex",
    solid ? "bg-black text-white hover:bg-black/85"
          : "bg-white text-black hover:bg-white/90",
  ].join(" ");

  const navLinkClass =
    "relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-current after:transition-all hover:after:w-full";

  return (
    <header className={headerClass}>
      <a href="#main" className="sr-only focus:not-sr-only">Saltar al contenido</a>

      {/* Contenedor con altura fija + safe-area */}
      <div className="pt-[env(safe-area-inset-top)]">
        <div className="h-14 md:h-16 flex items-center justify-between px-5 md:px-10 lg:px-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/LogoNoBackground.webp"
              alt="PlayZone VIP"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <h1 className="font-title text-base">PLAYZONE VIP</h1>
          </Link>

          {/* Nav desktop */}
          <nav aria-label="Principal" className="hidden md:block">
            <ul className="flex items-center gap-10 lg:gap-16 font-text font-semibold">
              <li><Link className={navLinkClass} href="/">Inicio</Link></li>
              <li><Link className={navLinkClass} href="/actividades">Actividades</Link></li>
              <li><Link className={navLinkClass} href="/fiestasinfantiles">Fiestas infantiles</Link></li>
            </ul>
          </nav>

          <div className="flex items-center gap-3 font-text font-semibold">
            <Link href="/contacto" className={contactButtonClass}>Contáctanos</Link>

            {/* Botón menú móvil */}
            <button
              className={[
                "md:hidden inline-flex items-center justify-center rounded-full p-2",
                "transition-colors duration-200",
                solid ? "text-black hover:bg-black/10" : "text-white hover:bg-white/10",
              ].join(" ")}
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              aria-controls="mobile-menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(v => !v)}
            >
              <Icon
                icon={mobileOpen ? "material-symbols:close-rounded" : "material-symbols:menu-rounded"}
                className="w-7 h-7"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Overlay + Panel móvil */}
      <div
        id="mobile-menu"
        aria-hidden={!mobileOpen}
        className={["md:hidden fixed inset-0 z-[90]", mobileOpen ? "pointer-events-auto" : "pointer-events-none"].join(" ")}
        onClick={() => setMobileOpen(false)}
      >
        {/* Overlay */}
        <div
          className={[
            "absolute inset-0 backdrop-blur-sm transition-opacity duration-300",
            solid ? "bg-black/40" : "bg-black/50",
            mobileOpen ? "opacity-100" : "opacity-0",
          ].join(" ")}
        />

        {/* Panel */}
        <div
          className={[
            "absolute top-0 right-0 w-[85%] max-w-[420px] h-full z-[100]",
            "bg-white text-black shadow-xl transition-transform duration-300 ease-out",
            mobileOpen ? "translate-x-0" : "translate-x-full",
            "flex flex-col",
          ].join(" ")}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-black/10">
            <div className="flex items-center gap-3">
              <img src="/LogoNoBackground.webp" alt="PlayZone VIP" width={28} height={28} className="w-7 h-7" />
              <span className="font-title">PLAYZONE VIP</span>
            </div>
            <button
              className="p-2 rounded-full hover:bg-black/10 transition-colors"
              aria-label="Cerrar menú"
              onClick={() => setMobileOpen(false)}
            >
              <Icon icon="material-symbols:close-rounded" className="w-6 h-6" />
            </button>
          </div>

          <nav aria-label="Navegación móvil" className="px-5 py-4">
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/" className="flex items-center gap-3 rounded-xl px-3 py-3 hover:bg-black/5 active:bg-black/10 transition-colors font-text font-semibold" onClick={() => setMobileOpen(false)}>
                  <Icon icon="solar:home-2-linear" className="w-5 h-5" />
                  <span>Inicio</span>
                </Link>
              </li>
              <li>
                <Link href="/actividades" className="flex items-center gap-3 rounded-xl px-3 py-3 hover:bg-black/5 active:bg-black/10 transition-colors font-text font-semibold" onClick={() => setMobileOpen(false)}>
                  <Icon icon="solar:widget-6-linear" className="w-5 h-5" />
                  <span>Actividades</span>
                </Link>
              </li>
              <li>
                <Link href="/fiestasinfantiles" className="flex items-center gap-3 rounded-xl px-3 py-3 hover:bg-black/5 active:bg-black/10 transition-colors font-text font-semibold" onClick={() => setMobileOpen(false)}>
                  <Icon icon="solar:balloon-linear" className="w-5 h-5" />
                  <span>Fiestas infantiles</span>
                </Link>
              </li>
              <li className="pt-2">
                <Link href="/contacto" className="flex items-center justify-center gap-2 rounded-2xl px-4 py-3 bg-black text-white hover:bg-black/85 transition-colors font-text font-semibold" onClick={() => setMobileOpen(false)}>
                  <Icon icon="solar:phone-linear" className="w-5 h-5" />
                  <span>Contáctanos</span>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="mt-auto px-5 py-4 border-t border-black/10 text-xs text-black/60">
            © {new Date().getFullYear()} PlayZone VIP · Todos los derechos reservados
          </div>
        </div>
      </div>
    </header>
  );
}
