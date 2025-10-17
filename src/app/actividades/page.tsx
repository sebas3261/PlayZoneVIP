import React from 'react'
import type { Metadata } from 'next'
import ActivityCard from '@/components/ActivityCard'

export const metadata: Metadata = {
  title: 'Nuestras actividades',
  description: 'Descubre todas las actividades deportivas y recreativas que tenemos para ti en Playzone VIP: fútbol, pádel, paintball y mucho más.',
  keywords: ['actividades', 'fútbol', 'pádel', 'paintball', 'escape room', 'Playzone VIP'],
}

export default function Page() {
  return (
    <main className="bg-white pt-20 font-text px-8 md:pt-30">
      <div className='flex flex-col items-center justify-center'>
        <h2 className='font-title text-2xl text-center mb-2'>Nuestras Actividades</h2>
        <p className='text-center text-[#828292] text-sm mb-10 max-w-[842px]'>Descubre nuestra variedad de experiencias diseñadas para todos los niveles y edades. Diversión garantizada en cada actividad.</p>
      </div>
      <ActivityCard/>
    </main>
  )
}
