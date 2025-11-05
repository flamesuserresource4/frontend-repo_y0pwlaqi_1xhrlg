import { motion } from 'framer-motion';
import { Factory, Cog, Cpu, Ruler } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Years of Experience', value: '15+' },
    { label: 'On‑time Delivery', value: '98.6%' },
    { label: 'Materials Supported', value: '50+' },
    { label: 'Customer NPS', value: '72' },
  ];

  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          Built for Precision. Driven by Craft.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 text-base text-gray-700 sm:text-lg"
        >
          We’re a modern CNC manufacturer specializing in tight‑tolerance milling and turning. Our shop blends advanced CAM, 5‑axis machines, and thoughtful fixturing to deliver consistent quality at any scale.
        </motion.p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <InfoCard
          icon={<Factory className="h-6 w-6 text-indigo-600" />}
          title="Modern Facility"
          desc="Climate‑controlled, lights‑out capable cells with in‑process probing."
        />
        <InfoCard
          icon={<Cog className="h-6 w-6 text-indigo-600" />}
          title="5‑Axis Expertise"
          desc="Complex geometries, fewer setups, superior surface finishes."
        />
        <InfoCard
          icon={<Cpu className="h-6 w-6 text-indigo-600" />}
          title="Digital Workflow"
          desc="DFM, toolpath simulation, and traceability from quote to shipment."
        />
        <InfoCard
          icon={<Ruler className="h-6 w-6 text-indigo-600" />}
          title="Quality First"
          desc="ISO‑grade inspection, CMM reports, material certs, PPAP on request."
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="mt-12 grid grid-cols-2 gap-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 p-8 sm:grid-cols-4"
      >
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-3xl font-bold text-gray-900">{s.value}</div>
            <div className="mt-1 text-sm text-gray-600">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

function InfoCard({ icon, title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50">
          {icon}
        </div>
        <div>
          <div className="font-semibold text-gray-900">{title}</div>
          <p className="mt-1 text-sm text-gray-600">{desc}</p>
        </div>
      </div>
    </motion.div>
  );
}
