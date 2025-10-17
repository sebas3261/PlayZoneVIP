import Title from '@/components/Title'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Fiestas Infantiles',
  description:
    'Celebra las mejores fiestas infantiles en Playzone VIP. Espacios seguros, diversión asegurada y actividades diseñadas para todas las edades. ¡Haz de su día un recuerdo inolvidable!',
  keywords: [
    'fiestas infantiles',
    'cumpleaños',
    'celebraciones',
    'juegos para niños',
    'eventos familiares',
    'Playzone VIP',
  ],
}


export default function page() {
  return (
    <main className='bg-white pt-15'>
      <Title titulo='Fiestas Infantiles' subTitulo='¡Celebra el día más especial!' descripcion='Haz que el cumpleaños de tu hijo sea inolvidable con nuestros paquetes de fiestas infantiles. Nos encargamos de todo para que solo tengas que disfrutar viendo la sonrisa de tu pequeño.'/>
    </main>
  )
}
