'use client';

import { motion } from 'framer-motion';

const benefits = [
  'Te muestra qué clientas están a punto de dejar de comprar, antes de que desaparezcan.',
  'Te prepara una lista diaria con 3 acciones simples para aumentar ventas ese día.',
  'Te sugiere mensajes listos para reactivar clientas frías sin que tengas que pensarlos.',
  'Te enseña qué productos son tus vacas lecheras y cuáles frenan tu dinero.',
  'Une los datos de tienda física, Instagram y WhatsApp en una sola ficha por clienta.',
  'Te recuerda cuidar a tus mejores clientas con pequeños gestos y beneficios especiales.',
];

export default function SolutionSection() {
  return (
    <section className='w-full py-24 px-4 bg-gradient-to-b from-black via-slate-950 to-black'>
      <div className='max-w-5xl mx-auto text-center space-y-10'>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='font-title text-3xl md:text-4xl'
        >
          Lo que este sistema hace por tu boutique
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className='font-body text-zinc-300 max-w-2xl mx-auto'
        >
          Tú sigues atendiendo clientas. El sistema se encarga de decirte
          a quién cuidar hoy, qué producto mover y qué mensaje enviar.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className='grid gap-6 md:grid-cols-2'
        >
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className='relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-left font-body'
            >
              <div className='mb-3 h-6 w-6 rounded-full bg-white/10 flex items-center justify-center text-xs text-white/80'>
                ✓
              </div>
              <p className='text-sm md:text-base text-zinc-100'>
                {benefit}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className='mt-6'
        >
          <a
            href='https://www.instagram.com/loyal_light44/'
            target='_blank'
            rel='noreferrer'
            className='inline-flex items-center justify-center font-body px-6 py-3 rounded-full bg-white text-black text-sm md:text-base font-bold hover:bg-zinc-200 transition'
          >
            Quiero que el sistema piense por mí
          </a>
          <p className='mt-2 text-xs md:text-sm text-zinc-500'>
            Gratis · Solo escríbeme por Instagram y te lo dejo funcionando
          </p>
        </motion.div>
      </div>
    </section>
  );
}
