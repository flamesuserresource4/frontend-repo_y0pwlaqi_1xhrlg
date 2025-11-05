import { motion } from 'framer-motion';
import { Wrench, Cog, Cpu, Layers, Package, ShieldCheck } from 'lucide-react';

const items = [
  {
    icon: <Wrench className="h-6 w-6" />,
    title: 'CNC Turning',
    desc: 'High‑speed turning with bar feed and live tooling for complex features.'
  },
  {
    icon: <Cog className="h-6 w-6" />,
    title: 'CNC Milling',
    desc: '3‑ and 5‑axis milling for intricate geometries and fine finishes.'
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: 'Rapid Prototyping',
    desc: 'Fast DFM feedback, quick‑turn parts, and agile iteration cycles.'
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: 'Materials',
    desc: 'Aluminum, steel, titanium, copper, plastics — full finishing options.'
  },
  {
    icon: <Package className="h-6 w-6" />,
    title: 'Batch & Production',
    desc: 'From single‑digit prototypes to repeatable, scalable production runs.'
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: 'Quality Assurance',
    desc: 'First‑article inspection, CMM, SPC, and comprehensive QA docs.'
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative mx-auto max-w-7xl px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
      >
        What We Make
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="mx-auto mt-4 max-w-2xl text-center text-gray-700"
      >
        Precision components for aerospace, robotics, medical devices, and demanding industrial applications.
      </motion.p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900 text-white">
                {it.icon}
              </div>
              <div>
                <div className="text-lg font-semibold text-gray-900">{it.title}</div>
                <p className="mt-1 text-sm text-gray-600">{it.desc}</p>
              </div>
            </div>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.1 }}
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500"
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-12 rounded-2xl bg-gray-900 px-6 py-10 text-white sm:px-10"
      >
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <div className="text-xl font-semibold">Have a drawing or model ready?</div>
            <p className="mt-1 text-sm text-gray-300">We can quote from STEP, IGES, Parasolid, or native CAD with a 24‑hour turnaround.</p>
          </div>
          <a href="#contact" className="rounded-full bg-white px-5 py-3 font-medium text-gray-900 transition hover:bg-gray-100">Request a Quote</a>
        </div>
      </motion.div>
    </section>
  );
}
