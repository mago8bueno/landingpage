'use client';

import { motion } from 'framer-motion';
import DashboardPreview from '@/components/DashboardPreview';
import PainSection from '@/components/PainSection';
import SolutionSection from '@/components/SolutionSection';

export default function Home() {
  return (
    <>
      {/* HERO – copy mentor + estilo actual */}
      <main className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-black via-slate-950 to-black">
        <div className="max-w-3xl text-center space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-xs md:text-sm uppercase tracking-[0.3em] text-zinc-400"
          >
            PARA BOUTIQUES DE MODA EN LATAM QUE VIVEN DE INSTAGRAM Y WHATSAPP
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-title text-4xl md:text-5xl lg:text-6xl leading-tight"
          >
            Deja de lanzar promociones a ciegas.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-body text-base md:text-lg text-zinc-300 max-w-xl mx-auto"
          >
            La misma IA que usan las grandes marcas, ahora pensada para tu boutique:
            te dice a quién escribirle primero, qué ofrecerle y cuánto estás recuperando
            cada vez que lanzas una promoción.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col items-center gap-3"
          >
            <a
              href="https://www.instagram.com/loyal_light44/"
              target="_blank"
              rel="noreferrer"
              className="font-body px-6 py-3 rounded-full bg-white text-black text-sm md:text-base font-bold hover:bg-zinc-200 transition"
            >
              Quiero fidelizar gratis
            </a>
            <p className="text-xs md:text-sm text-zinc-500">
              Sin tarjeta · Te lo configuro yo por Instagram en 5 minutos
            </p>
          </motion.div>
        </div>
      </main>

      {/* 2. Mockup / prueba visual del dashboard */}
      <DashboardPreview />

      {/* 3. Problema: no sabes a quién escribirle primero */}
      <PainSection />

      {/* 4. Solución: módulos de clientes, productos y dashboard */}
      <SolutionSection />
    </>
  );
}
