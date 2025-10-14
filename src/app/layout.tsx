import type { Metadata, Viewport } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "700"], // opcional: los pesos que necesites
});


export const sprintura = localFont({
  src: "../../public/fonts/Sprintura Demo.otf",
  variable: "--font-sprintura",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://playzonevip.com"),
  title: {
    default: "PlayZone VIP — Deportes y Aventuras en Chía",
    template: "%s | PlayZone VIP",
  },
  description:
    "Reserva pádel, paintball, escape rooms y canchas de fútbol sintético en PlayZone VIP, Chía. Eventos, fiestas y planes para grupos. ¡Agenda tu experiencia!",
  keywords: [
    "PlayZone VIP",
    "paintball Chía",
    "pádel Chía",
    "escape room Chía",
    "canchas sintéticas Chía",
    "deportes Chía",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://playzonevip.com",
    siteName: "PlayZone VIP",
    title: "PlayZone VIP — Deportes y Aventuras en Chía",
    description:
      "Paintball, pádel, escape rooms y canchas sintéticas. Reserva por WhatsApp y arma tu plan.",
    images: [
      {
        url: "/Logo.png", // sube esta imagen a /public
        width: 1200,
        height: 630,
        alt: "PlayZone VIP: pádel, paintball y escape rooms en Chía",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@playzonevip",
    title: "PlayZone VIP — Deportes y Aventuras en Chía",
    description:
      "Reserva pádel, paintball, escape rooms y fútbol sintético en Chía.",
    images: ["/og-playzone.jpg"],
  },
  applicationName: "PlayZone VIP",
  authors: [{ name: "PlayZone VIP" }],
  category: "Sports",
};


export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {

  return (
    <html lang="es">
      <body
        className={`${sprintura.variable} ${montserrat.variable} antialiased bg-[#030213] `}
      >
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
