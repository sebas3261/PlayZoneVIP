"use client";

import HomeBoxes from "@/components/HomeBoxes";
import HomeSelectUs from "@/components/HomeSelectUs";
import Title from "@/components/Title";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

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
      <section
        className="relative h-[550px] bg-start bg-cover flex items-center lg:bg-center md:h-[654px]"
        style={{ backgroundImage: "url('/MainHome.webp')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="z-10 px-8 flex flex-col w-fit gap-2 md:px-20 lg:px-60">
          <h2 className="text-white text-4xl font-title md:text-6xl lg:text-7xl">
            Playzone VIP
          </h2>
          <p className="font-text text-white font-semibold text-sm my-3 md:max-w-[500px] lg:max-w-[850px] lg:text-base">
            Fútbol, Pádel, Paintball y Escape Room. Cuatro experiencias únicas
            en un solo lugar. Vive la emoción del deporte y la aventura.
          </p>

          <div className="flex flex-col w-fit gap-2 md:flex-row md:gap-7">
            <button
              className="bg-white p-2 rounded-md font-text font-semibold text-xs flex items-center gap-1 cursor-pointer"
              onClick={handleWhatsApp}
              type="button"
            >
              Reservar ahora
              <Icon icon="line-md:arrow-right" />
            </button>
            <button
              className="bg-white p-2 rounded-md font-text font-semibold text-xs flex items-center gap-1 cursor-pointer"
              onClick={() => {
                router.push("/actividades");
              }}
              type="button"
            >
              Ver actividades
              <Icon icon="line-md:play-filled" />
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

      <section className="bg-white flex flex-wrap justify-center gap-10 px-5">
        <HomeBoxes
          image="/futbolHome.webp"
          activity="Fútbol"
          description="Canchas profesionales de césped sintético de última generación, iluminación LED"
          link="/canchas"
        />
        <HomeBoxes
          image="/padelHome.webp"
          activity="Pádel"
          description="Disfruta de modernas canchas de pádel techadas y con iluminación de torneo."
          link="/padel"
        />
        <HomeBoxes
          image="/paintballHome.webp"
          activity="Paintball"
          description="Campos de batalla con escenarios únicos, equipamiento de protección completo y bolas de pintura."
          link="/paintball"
        />
        <HomeBoxes
          image="/escapeHome.webp"
          activity="Escape Room"
          description="Salas inmersivas con tecnología de última generación, acertijos desafiantes y aventuras que pondrán a prueba tu ingenio."
          link="/escaperoom-game"
        />
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

      <section className="bg-white font-text flex flex-col lg:flex-row-reverse lg:p-10">
        <img
          src="/nosotros.webp"
          className="lg:w-[638px] lg:h-[422px] lg:rounded-xl"
        />
        <div className="px-10 py-5 flex flex-col gap-5 justify-center items-center lg:items-start">
          <div className="bg-[#E9EBEF] px-5 py-1 rounded-full">
            <h3 className="font-title text-sm">Sobre nosotros</h3>
          </div>
          <h3 className="font-semibold text-center lg:text-start">Más de 10 años creando momentos inolvidables</h3>
          <p className="text-center text-[#828292] text-xs md:text-sm lg:text-start">
            PlayZone nació con la visión de crear un espacio donde el deporte,
            la diversión y la familia se unieran en perfecta armonía. Durante
            más de una década, hemos sido el hogar de miles de deportistas,
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
          <button className=" text-white rounded-sm py-2 px-5 text-sm cursor-pointer font-semibold bg-gradient-to-br from-[#713478] to-[#b76cbf] shadow-[0_4px_10px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_15px_rgba(0,0,0,0.4)] hover:brightness-110 active:translate-y-[1px] transition-all duration-300 flex items-center gap-2" onClick={()=>{router.push("/actividades")}}>
            Conoce nuestras actividades
            <Icon icon="solar:arrow-right-linear" className="w-[20px] h-[20px]"/>
          </button>
        </div>
      </section>
    </main>
  );
}
