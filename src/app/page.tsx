"use client";

import HomeBoxes from "@/components/HomeBoxes";
import HomeSelectUs from "@/components/HomeSelectUs";
import Title from "@/components/Title";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  const handleWhatsApp = () => {
    const phone = "573132485526";
    const message =
      "Hola, quiero saber más sobre las actividades de Playzone VIP";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  // Datos de las tarjetas
  const items = [
    {
      icon: "bi:shield-check",
      title: "Instalaciones Seguras",
      description:
        "Todas nuestras instalaciones cumplen con los más altos estándares de seguridad.",
    },
    {
      icon: "iconamoon:star-light",
      title: "Calidad Premium",
      description:
        "Equipamiento de última generación y mantenimiento constante de todas las áreas.",
    },
    {
      icon: "tabler:clock",
      title: "Horarios Flexibles",
      description:
        "Abierto todos los días con horarios amplios para adaptarse a tu agenda.",
    },
    {
      icon: "octicon:people-24",
      title: "Para Toda la Familia",
      description:
        "Actividades y espacios diseñados para todas las edades y niveles.",
    },
  ];

  const [index, setIndex] = useState(0);

  // Rotar automáticamente cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="overflow-hidden">
      <section className="relative h-[550px] md:h-[654px] flex items-center">
        {/* Fondo optimizado con Next/Image */}
        <Image
          src="/images/Home/Hero/MainHome.webp"
          alt="Playzone VIP - Deportes y Aventuras en Chía"
          fill
          priority // Hero: se carga primero
          sizes="100vw" // Ocupa todo el ancho de la ventana
          className="object-cover object-left-top lg:object-center"
        />

        {/* Capa oscura */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Contenido */}
        <div className="relative z-20 px-8 flex flex-col w-fit gap-2 md:px-20 lg:px-60">
          <h2 className="text-white text-4xl font-title md:text-6xl lg:text-7xl">
            Playzone VIP
          </h2>
          <p className="font-text text-white font-semibold text-sm my-3 md:max-w-[500px] lg:max-w-[850px] lg:text-base">
            Fútbol, Pádel, Paintball y Escape Room. Cuatro experiencias únicas
            en un solo lugar. Vive la emoción del deporte y la aventura.
          </p>

          <div className="flex flex-col w-fit gap-2 md:flex-row md:gap-7">
            <button
              className="bg-white p-2 rounded-md font-text font-semibold text-xs flex items-center gap-1 cursor-pointer md:text-base md:gap-2"
              onClick={handleWhatsApp}
              type="button"
            >
              <Icon icon="mdi:calendar-outline" />
              Reservar ahora
            </button>
            <button
              className="bg-white p-2 rounded-md font-text font-semibold text-xs flex items-center gap-1 cursor-pointer md:text-base md:gap-2"
              onClick={() => router.push("/actividades")}
              type="button"
            >
              <Icon icon="solar:widget-6-linear" />
              Ver actividades
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <Title
          titulo="Nuestras Actividades"
          subTitulo="Cuatro formas de vivir la adrenalina"
          descripcion="Vive la emoción del deporte como nunca antes. Cada experiencia en PlayZone VIP está diseñada para despertar tu espíritu competitivo y hacerte sentir la adrenalina del juego."
        />
      </section>

      <section
        className="
    scroll-hide
    bg-white
    flex gap-10
    overflow-x-auto             /* scroll siempre que haga falta */
    snap-x snap-mandatory
    scroll-smooth
    px-5 py-10
    justify-start
    md:justify-start            /* NO centres en md; aún puede faltar espacio */
    lg:justify-center           /* céntralo recién desde lg en adelante */
    md:overflow-x-auto          /* sigue permitiendo scroll en md */
    xl:overflow-x-visible       /* en lg, ya suele caber todo: quita scroll */
  "
        aria-label="Actividades"
      >
        <div className="snap-center shrink-0">
          <HomeBoxes
            image="/images/Home/ActivityCards/futbolHome.webp"
            activity="Fútbol"
            description="Canchas profesionales de césped sintético de última generación, iluminación LED"
            link="/canchas"
          />
        </div>

        <div className="snap-center shrink-0">
          <HomeBoxes
            image="/images/Home/ActivityCards/padelHome.webp"
            activity="Pádel"
            description="Disfruta de modernas canchas de pádel techadas y con iluminación de torneo."
            link="/padel"
          />
        </div>

        <div className="snap-center shrink-0">
          <HomeBoxes
            image="/images/Home/ActivityCards/paintballHome.webp"
            activity="Paintball"
            description="Campos de batalla con escenarios únicos, equipamiento de protección completo y bolas de pintura."
            link="/paintball"
          />
        </div>

        <div className="snap-center shrink-0">
          <HomeBoxes
            image="/images/Home/ActivityCards/escapeHome.webp"
            activity="Escape Room"
            description="Salas inmersivas con tecnología de última generación, acertijos desafiantes y aventuras que pondrán a prueba tu ingenio."
            link="/escaperoom-game"
          />
        </div>
      </section>

      <section className="bg-white">
        <Title
          titulo="Por que elegirnos"
          subTitulo="La mejor experiencia deportiva"
          descripcion="En PlayZone VIP nos dedicamos a ofrecer instalaciones de primera calidad y un servicio excepcional para que disfrutes al máximo de tu tiempo deportivo y de ocio."
        />
      </section>

      <section className="bg-white pb-10">
        {/* md y lg scroll horizontal */}
        <div
          className="
      hidden md:block
      md:overflow-x-auto md:px-6
      md:scroll-smooth md:snap-x md:snap-mandatory
      md:[scrollbar-width:none] md:[&::-webkit-scrollbar]:hidden
    "
        >
          <div
            className="
        flex gap-5 py-2 w-max mx-auto
        snap-x snap-mandatory
      "
          >
            {items.map((item, i) => (
              <div key={i} className="snap-center flex-shrink-0">
                <HomeSelectUs
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              </div>
            ))}
          </div>
        </div>

        {/* móvil: carrusel automático */}
        <div className="block md:hidden relative h-[280px] flex justify-center items-center">
          {items.map((item, i) => (
            <div
              key={i}
              className={`absolute transition-all duration-700 ease-in-out ${
                i === index ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              <HomeSelectUs
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white font-text flex flex-col items-center lg:flex-row-reverse lg:p-10 pb-5">
        <Image
          src="/images/Home/Nosotros/nosotros.webp"
          alt="Nosotros en Playzone VIP"
          width={638}
          height={422}
          className="w-full lg:w-[638px] lg:h-[422px] lg:rounded-xl object-cover"
          sizes="(max-width: 1024px) 100vw, 638px"
        />
        <div className="px-10 py-5 flex flex-col gap-5 justify-center items-center lg:items-start">
          <div className="bg-[#E9EBEF] px-5 py-1 rounded-full">
            <h3 className="font-title text-sm">Sobre nosotros</h3>
          </div>
          <h3 className="font-semibold text-center lg:text-start">
            Más de 10 años creando momentos inolvidables
          </h3>
          <p className="text-center text-[#828292] text-xs md:text-sm lg:text-start">
            PlayZone nació con la visión de crear un espacio donde el deporte,
            la diversión y la familia se unieran en perfecta armonía. Durante
            más de una década hemos sido el hogar de miles de deportistas,
            familias y celebraciones especiales.
          </p>
          <p className="text-center text-[#828292] text-xs md:text-sm lg:text-start">
            Nuestras instalaciones de última generación incluyen canchas de
            fútbol y pádel profesionales, emocionantes campos de paintball,
            desafiantes escape rooms y espacios perfectos para fiestas
            infantiles que harán realidad los sueños de los más pequeños.
          </p>
          <div className="md:flex md:gap-10">
            <div className="flex flex-col justify-center items-center">
              <h4 className="font-bold text-xl">10+</h4>
              <p className="text-[#828292] text-xs">Años de experiencia </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h4 className="font-bold text-xl">4</h4>
              <p className="text-[#828292] text-xs">Actividades Principales</p>
            </div>
          </div>
          <button
            className=" text-white rounded-sm py-2 px-5 text-sm cursor-pointer font-semibold bg-gradient-to-br from-[#713478] to-[#b76cbf] shadow-[0_4px_10px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_15px_rgba(0,0,0,0.4)] hover:brightness-110 active:translate-y-[1px] transition-all duration-300 flex items-center gap-2"
            onClick={() => {
              router.push("/actividades");
            }}
            type="button"
          >
            <Icon icon="solar:widget-6-linear" className="w-5 h-5" />
            Conoce nuestras actividades
          </button>
        </div>
      </section>

      <section className="bg-white pb-15 md:px-10 lg:px-40">
        <div className="bg-[#713478] text-white p-7 font-text flex flex-col gap-5 md:items-center md:justify-center md:rounded-lg lg:rounded-3xl">
          <h3 className="text-center font-semibold mb-2">
            ¿Listo para vivir la experiencia PlayZone?
          </h3>
          <p className="text-center text-xs font-semibold mb-2 md:max-w-[728px]">
            Ya sea para un partido con amigos, una celebración especial o
            simplemente para pasar un buen rato, estamos aquí para hacer
            realidad tu plan perfecto.
          </p>
          <ul className="flex flex-col gap-2 text-xs md:flex-row md:gap-20">
            <li className="flex items-center gap-2">
              <Icon
                icon="ic:baseline-phone"
                className="w-5 h-5"
                aria-hidden="true"
              />
              <a href="tel:+573132485526">+57 313 248 5526</a>
            </li>
            <li className="flex items-center gap-2 ">
              <Icon
                icon="mdi:location"
                className="w-5 h-5 mt-0.5"
                aria-hidden="true"
              />
              <a
                href="https://maps.google.com/?q=PlayZone+VIP+Ch%C3%ADa+Cra+9+Vereda+Bojac%C3%A1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs"
              >
                Cra. 9 Vereda Bojacá / Km 1 vía Chía-Cajicá
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Icon
                icon="mdi:clock-outline"
                className="w-5 h-5"
                aria-hidden="true"
              />
              <span>L–D 8:00 AM – 11:00 PM</span>
            </li>
          </ul>
          <div className="flex gap-10">
            <button
              className="bg-white text-black font-semibold flex items-center gap-1 p-2 rounded-md w-[162px] text-sm justify-center cursor-pointer"
              onClick={handleWhatsApp}
              type="button"
            >
              <Icon icon="mdi:calendar-outline" />
              Reservar ahora
            </button>
            <Link
              className="bg-white text-black font-semibold p-2 rounded-md w-[162px] text-sm cursor-pointer flex item-center justify-center"
              href="/contacto"
              type="button"
            >
              Mas informacion
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
