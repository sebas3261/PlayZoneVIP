import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description:
    "Conoce qué son las cookies, qué tipos utilizamos en PlayZone VIP, con qué finalidad y cómo puedes gestionarlas desde tu navegador.",
  keywords: [
    "política de cookies",
    "cookies",
    "PlayZone VIP",
    "privacidad",
    "análisis",
    "publicidad",
  ],
  openGraph: {
    title: "Política de Cookies | PlayZone VIP",
    description:
      "Información clara sobre el uso de cookies en PlayZone VIP: técnicas, análisis, personalización y publicitarias.",
    url: "https://playzonevip.com/cookies",
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
          Politica de Cookies de PlayZone VIP
        </h1>

        <p className="text-sm text-gray-500 text-center mb-10">
          Última actualización: 2025
        </p>

        <div className="space-y-8 leading-relaxed">
          {/* 1. ¿Qué son las Cookies? */}
          <article>
            <h2 className="text-xl font-semibold text-[#003566] mb-2">
              1. ¿Qué son las Cookies?
            </h2>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en su
              dispositivo (ordenador, móvil o tablet) al visitar nuestro sitio
              web (
              <a
                href="https://playzonevip.com"
                target="_blank"
                className="text-[#0077b6] hover:underline"
              >
                https://playzonevip.com
              </a>
              ). Estas cookies permiten recordar sus preferencias y mejorar su
              experiencia de navegación.
            </p>
          </article>

          {/* 2. Tipos de Cookies que Utilizamos */}
          <article>
            <h2 className="text-xl font-semibold text-[#003566] mb-2">
              2. Tipos de Cookies que Utilizamos
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <strong>Cookies Técnicas:</strong> Esenciales para el
                funcionamiento del sitio. Permiten la navegación y el uso de las
                funcionalidades básicas sin recoger datos personales.
              </li>
              <li>
                <strong>Cookies de Análisis:</strong> Recogen información
                anónima sobre cómo los usuarios interactúan con nuestro sitio,
                ayudándonos a optimizar su rendimiento y mejorar la experiencia
                de usuario.
              </li>
              <li>
                <strong>Cookies de Personalización:</strong> Permiten recordar
                sus preferencias (por ejemplo, idioma o configuración visual)
                para ofrecerle una experiencia más adaptada a sus necesidades.
              </li>
              <li>
                <strong>Cookies Publicitarias:</strong> Utilizadas, en algunos
                casos, para mostrar anuncios relevantes según sus intereses.
                Estas cookies pueden ser gestionadas por terceros y se rigen por
                sus propias políticas.
              </li>
            </ul>
          </article>

          {/* 3. Finalidad de las Cookies */}
          <article>
            <h2 className="text-xl font-semibold text-[#003566] mb-2">
              3. Finalidad de las Cookies
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <strong>Mejorar la Navegación:</strong> Facilitar el acceso y la
                utilización de las funcionalidades del sitio.
              </li>
              <li>
                <strong>Optimización y Análisis:</strong> Recopilar datos para
                analizar el comportamiento del usuario y mejorar el rendimiento
                del sitio.
              </li>
              <li>
                <strong>Publicidad Personalizada:</strong> Ofrecer anuncios y
                promociones adaptadas a los intereses del usuario, en
                colaboración con proveedores externos.
              </li>
            </ul>
          </article>

          {/* 4. Consentimiento y Configuración */}
          <article>
            <h2 className="text-xl font-semibold text-[#003566] mb-2">
              4. Consentimiento y Configuración
            </h2>
            <p className="mb-3">
              Al utilizar nuestro sitio web, usted acepta el uso de cookies de
              acuerdo con esta Política. Si desea modificar la configuración o
              desactivar las cookies, puede hacerlo desde las opciones de su
              navegador. Tenga en cuenta que la desactivación de ciertas cookies
              puede afectar la funcionalidad del sitio.
            </p>
            <div className="text-sm text-gray-600 bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p className="font-semibold mb-2">Enlaces útiles (navegadores):</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>
                  <a
                    href="https://support.google.com/chrome/answer/95647"
                    target="_blank"
                    className="text-[#0077b6] hover:underline"
                  >
                    Google Chrome: administrar cookies
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.mozilla.org/es/kb/proteccion-mejorada-contra-rastreo-firefox-escritorio"
                    target="_blank"
                    className="text-[#0077b6] hover:underline"
                  >
                    Mozilla Firefox: protección y cookies
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.apple.com/es-co/guide/safari/sfri11471/mac"
                    target="_blank"
                    className="text-[#0077b6] hover:underline"
                  >
                    Apple Safari: bloquear cookies
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                    target="_blank"
                    className="text-[#0077b6] hover:underline"
                  >
                    Microsoft Edge: eliminar cookies
                  </a>
                </li>
              </ul>
            </div>
          </article>

          {/* 5. Cookies de Terceros */}
          <article>
            <h2 className="text-xl font-semibold text-[#003566] mb-2">
              5. Cookies de Terceros
            </h2>
            <p>
              Es posible que en nuestro sitio se instalen cookies de terceros
              (por ejemplo, Google Analytics o redes sociales) para fines de
              análisis y publicidad. Estas cookies se rigen por las políticas de
              privacidad de sus respectivos proveedores, sobre las cuales no
              tenemos control.
            </p>
          </article>

          {/* 6. Modificaciones */}
          <article>
            <h2 className="text-xl font-semibold text-[#003566] mb-2">
              6. Modificaciones de la Política de Cookies
            </h2>
            <p>
              PlayZone VIP se reserva el derecho de actualizar esta Política de
              Cookies en cualquier momento. Las modificaciones se publicarán en
              este mismo sitio y serán efectivas desde el momento de su
              publicación. Se recomienda revisar esta política de forma
              periódica para estar informado de cualquier cambio.
            </p>
          </article>

          {/* 7. Contacto */}
          <article>
            <h2 className="text-xl font-semibold text-[#003566] mb-2">
              7. Información de Contacto
            </h2>
            <p>
              Si tiene alguna pregunta o inquietud acerca de nuestra Política de
              Cookies, puede comunicarse con nosotros a través del correo
              electrónico{" "}
              <a
                href="mailto:info@playzonevip.com"
                className="text-[#0077b6] hover:underline"
              >
                info@playzonevip.com
              </a>{" "}
              o en sector Bochica, Cl. 29, Chía, Cundinamarca.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
