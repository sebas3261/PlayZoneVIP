import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description:
    "Consulta el Aviso Legal de PlayZone VIP: condiciones de uso, propiedad intelectual, limitación de responsabilidad y normativa aplicable en Colombia.",
  keywords: [
    "aviso legal",
    "términos legales",
    "propiedad intelectual",
    "PlayZone VIP",
    "condiciones de uso",
    "responsabilidad",
  ],
  openGraph: {
    title: "Aviso Legal | PlayZone VIP",
    description:
      "Condiciones de uso y aspectos legales del sitio web PlayZone VIP, conforme a la legislación colombiana.",
    url: "https://playzonevip.com/aviso-legal",
    siteName: "PlayZone VIP",
    locale: "es_CO",
    type: "article",
  },
};

export default function page() {
  return (
    <main className="bg-white text-gray-800 py-16 px-6 md:px-16 lg:px-40 font-text pt-30">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-title font-bold text-[#003566] mb-6 text-center">
          Aviso Legal de PlayZone VIP
        </h1>

        <p className="text-sm text-gray-500 text-center mb-10">
          Última actualización: 2025
        </p>

        <div className="space-y-8 leading-relaxed">
          <article>
            <h2 className="text-xl font-semibold text-[#003566] mb-2">
              1. Información General
            </h2>
            <p>
              <strong>Titular del sitio web:</strong> PlayZone VIP <br />
              <strong>Domicilio Social:</strong> sector Bochica, Cl. 29, Chía,
              Cundinamarca, Colombia <br />
              <strong>Sitio web:</strong>{" "}
              <a
                href="https://playzonevip.com"
                target="_blank"
                className="text-[#0077b6] hover:underline"
              >
                https://playzonevip.com
              </a>
              .
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-[#003566] mb-2">
              2. Objeto y Condiciones de Uso
            </h2>
            <p>
              El presente Aviso Legal regula el acceso, navegación y uso del
              sitio web y los servicios ofrecidos por PlayZone VIP. El acceso y
              uso de este sitio web implica la aceptación plena y sin reservas
              de las condiciones aquí establecidas. El usuario se compromete a
              utilizar el sitio de conformidad con la legislación colombiana, la
              moral, las buenas costumbres y el orden público.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-[#003566] mb-2">
              3. Propiedad Intelectual e Industrial
            </h2>
            <p>
              Todos los contenidos del sitio (textos, imágenes, gráficos,
              logotipos, diseño, etc.) son propiedad de <strong>PlayZone VIP</strong> o
              de terceros que han autorizado su uso. Queda expresamente prohibida
              la reproducción, distribución, comunicación pública o
              transformación de los contenidos sin la autorización previa y por
              escrito del titular.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-[#003566] mb-2">
              4. Responsabilidad
            </h2>
            <p>
              No se garantiza la disponibilidad total ni la continuidad del
              servicio, eximiéndose de responsabilidad por interrupciones o
              problemas técnicos que puedan afectar el acceso al sitio.
              <br />
              <br />
              PlayZone VIP no se hace responsable de los daños o perjuicios que
              puedan derivarse del uso inadecuado del sitio o de la información
              contenida en él.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-[#003566] mb-2">
              5. Protección de Datos y Cookies
            </h2>
            <p>
              El tratamiento de datos personales se realizará conforme a lo
              establecido en nuestra{" "}
              <a
                href="/politica-privacidad"
                className="text-[#0077b6] hover:underline"
              >
                Política de Privacidad
              </a>{" "}
              y en la Ley 1581 de 2012 y demás normas aplicables en Colombia.
              Este sitio utiliza cookies y tecnologías similares para mejorar la
              experiencia del usuario. Se recomienda consultar la{" "}
              <a
                href="/cookies"
                className="text-[#0077b6] hover:underline"
              >
                Política de Cookies
              </a>{" "}
              para obtener más detalles.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-[#003566] mb-2">
              6. Legislación Aplicable y Jurisdicción
            </h2>
            <p>
              Este Aviso Legal se rige por la legislación colombiana. En caso de
              controversia, el usuario y <strong>PlayZone VIP</strong> se
              someten a la jurisdicción de los tribunales competentes de Chía,
              Cundinamarca, Colombia, renunciando expresamente a cualquier otro
              fuero que pudiera corresponder.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-[#003566] mb-2">
              7. Modificaciones
            </h2>
            <p>
              <strong>PlayZone VIP</strong> se reserva el derecho de modificar
              este Aviso Legal en cualquier momento. Las modificaciones serán
              publicadas en el sitio web y se considerarán aceptadas por el
              usuario desde el momento de su consulta.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
