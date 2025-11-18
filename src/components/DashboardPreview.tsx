'use client';

import { motion } from 'framer-motion';

export default function DashboardPreview() {
  return (
    <section className='w-full py-24 flex flex-col items-center px-4 bg-black'>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className='font-title text-3xl md:text-4xl mb-10 text-center'
      >
        Mira cómo se ve tu tienda con orden
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className='bg-[#0e1526] rounded-3xl shadow-2xl p-8 md:p-10 max-w-4xl w-full border border-white/10'
      >
        <div className='font-body text-zinc-300 text-sm mb-6 flex justify-between items-center flex-wrap gap-2'>
          <span>Resumen de hoy</span>
          <span className='text-xs text-zinc-500'>
            3 tareas simples · 5 minutos de enfoque
          </span>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 text-center font-body'>
          <div className='bg-white/5 p-5 rounded-xl border border-white/10 flex flex-col justify-center'>
            <p className='text-xs md:text-sm text-zinc-400 mb-1'>
              Clientas en riesgo
            </p>
            <h3 className='text-3xl font-bold'>7</h3>
            <p className='mt-1 text-[11px] text-zinc-500'>
              Llevan varias semanas sin comprar
            </p>
          </div>

          <div className='bg-white/5 p-5 rounded-xl border border-white/10 flex flex-col justify-center'>
            <p className='text-xs md:text-sm text-zinc-400 mb-1'>
              Ventas recuperadas este mes
            </p>
            <h3 className='text-3xl font-bold'>280</h3>
            <p className='mt-1 text-[11px] text-zinc-500'>
              Solo con clientas que ya tenías
            </p>
          </div>

          <div className='bg-white/5 p-5 rounded-xl border border-white/10 flex flex-col justify-center'>
            <p className='text-xs md:text-sm text-zinc-400 mb-1'>
              Mensajes listos para enviar hoy
            </p>
            <h3 className='text-3xl font-bold'>5</h3>
            <p className='mt-1 text-[11px] text-zinc-500'>
              Copiados y pegados desde el sistema
            </p>
          </div>

          <div className='bg-white/5 p-5 rounded-xl border border-white/10 flex flex-col justify-center'>
            <p className='text-xs md:text-sm text-zinc-400 mb-1'>
              Productos que más repiten
            </p>
            <h3 className='text-3xl font-bold'>4</h3>
            <p className='mt-1 text-[11px] text-zinc-500'>
              Tus vacas lecheras claras, sin Excel
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
