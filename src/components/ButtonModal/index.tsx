"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { createPortal } from "react-dom";

export default function BotonHorariosConModal() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Zoom opcional (apagado por defecto)
  const [zoomEnabled, setZoomEnabled] = useState(false);
  const [zoom, setZoom] = useState(1);

  useEffect(() => setMounted(true), []);

  // Cerrar con Esc
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const openModal = () => {
    setZoomEnabled(false);
    setZoom(1);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setZoomEnabled(false);
    setZoom(1);
  };

  const zoomIn = () => setZoom((z) => Math.min(3, +(z + 0.25).toFixed(2)));
  const zoomOut = () => setZoom((z) => Math.max(1, +(z - 0.25).toFixed(2)));
  const toggleZoomEnabled = () => {
    setZoomEnabled((v) => !v);
    setZoom(1); // al activar/desactivar, volvemos a ajuste a pantalla
  };

  const modal = (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Horarios de Padel"
      className="fixed inset-0 z-[9999]"
      onClick={closeModal}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Contenido */}
      <div
        className="relative z-10 flex h-full w-full items-center justify-center p-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Controles (arriba derecha) */}
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <button
            onClick={toggleZoomEnabled}
            className="rounded-md bg-white/90 px-3 py-1.5 text-sm shadow hover:bg-white"
            title={zoomEnabled ? "Desactivar zoom" : "Activar zoom"}
          >
            {zoomEnabled ? "Zoom: ON" : "Zoom: OFF"}
          </button>

          {/* Controles de zoom solo si está activo */}
          {zoomEnabled && (
            <>
              <button
                onClick={zoomOut}
                className="rounded-md bg-white/90 px-2 py-1 text-sm shadow hover:bg-white"
                title="Alejar"
              >
                −
              </button>
              <button
                onClick={zoomIn}
                className="rounded-md bg-white/90 px-2 py-1 text-sm shadow hover:bg-white"
                title="Acercar"
              >
                +
              </button>
            </>
          )}

          <button
            onClick={closeModal}
            className="rounded-md bg-white/90 p-2 shadow hover:bg-white"
            aria-label="Cerrar"
            title="Cerrar"
          >
            <Icon icon="mdi:close" className="w-5 h-5" />
          </button>
        </div>

        {/* Contenedor scrollable (solo necesario si hay zoom) */}
        <div
          className={`
            max-h-[85vh] max-w-[95vw]
            overflow-${zoomEnabled && zoom > 1 ? "auto" : "hidden"}
            rounded-xl bg-transparent
          `}
        >
          {/* Wrapper que aplica escala SOLO si el zoom está activo */}
          <div
            className={`inline-block transition-transform duration-150 ${
              zoomEnabled ? "cursor-zoom-in data-[zoomed=true]:cursor-zoom-out" : "cursor-default"
            }`}
            data-zoomed={zoom > 1}
            style={{
              transform: zoomEnabled ? `scale(${zoom})` : "none",
              transformOrigin: "center center",
            }}
            // Doble clic solo si el zoom está activo
            onDoubleClick={() => zoomEnabled && setZoom((z) => (z === 1 ? 2 : 1))}
          >
            {/* Imagen ajustada a pantalla: nunca supera viewport */}
            <Image
              src="/images/Padel/padelHorarios.webp"
              alt="Horarios de Padel"
              width={1200}
              height={1600}
              // Ajuste perfecto en viewport; no se sale
              className="block h-auto w-auto max-h-[85vh] max-w-[95vw] select-none"
              draggable={false}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Botón que abre el modal */}
      <button
        onClick={openModal}
        className="group w-full relative overflow-hidden rounded-xl text-sm md:text-base font-semibold border-2 border-black text-black flex items-center justify-center gap-2 py-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#b76cbf]/60 cursor-pointer"
      >
        <span
          aria-hidden
          className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
        <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
          <Icon icon="solar:calendar-linear" className="w-5 h-5" />
          Ver horarios
        </span>
      </button>

      {/* Portal para ocupar toda la pantalla */}
      {mounted && open && createPortal(modal, document.body)}
    </>
  );
}
