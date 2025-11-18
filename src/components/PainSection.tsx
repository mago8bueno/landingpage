'use client';

import { motion } from 'framer-motion';

export default function PainSection() {
  const items = [
    'Clientas que antes compraban cada mes ahora llevan semanas sin escribirte y no sabes por qué.',
    'Tu WhatsApp está lleno: entre pedidos, dudas y envíos, algunos mensajes se quedan sin responder 3–5 días.',
    'Si un post de Instagram va mal, el día de ventas se cae. Sientes que tu facturación depende del algoritmo.',
    'Compras inventario sin datos reales. Algunas prendas vuelan y otras se quedan muertas en el perchero.',
    'Tienes la misma clienta apuntada en cuadernos, Excel, WhatsApp y bolsas de puntos, pero no como una sola persona.',
    'Cada día apagas fuegos: no tienes un plan claro de 3 cosas concretas para aumentar ventas.',
  ];

  return (
    <section className='w-full py-24 px-4 bg-black'>
      <div className='max-w-4xl mx-auto text-center space-y-8'>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='font-title text-3xl md:text-4xl'
        >
          Esto te pasa si tienes una boutique como la tuya
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className='font-body text-zinc-300 max-w-2xl mx-auto'
        >
          No es que tu ropa no guste. Es que nadie te ha dado un sistema sencillo
          para cuidar a las clientas que ya confían en ti.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className='font-body text-left space-y-4 text-zinc-200 max-w-2xl mx-auto'
        >
          {items.map((item) => (
            <li key={item} className='flex gap-3'>
              <span className='mt-2 h-1.5 w-1.5 rounded-full bg-white' />
              <span>{item}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
