import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket, BadgeCheck, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm backdrop-blur-md"
        >
          <BadgeCheck className="h-4 w-4 text-emerald-600" /> ISO-Grade Quality • 5-Axis Precision
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl"
        >
          Precision CNC Manufacturing, Reimagined
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 max-w-2xl text-base text-gray-700 sm:text-lg"
        >
          We craft mission‑ready components with modern automation, rigorous tolerances, and a partner mindset. From prototype to production — faster, cleaner, and smarter.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-white shadow-lg transition hover:bg-gray-800"
          >
            <Rocket className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
            Get a Quote
          </a>
          <a
            href="#capabilities"
            className="inline-flex items-center rounded-full border border-gray-300 bg-white px-6 py-3 text-gray-900 shadow-sm transition hover:bg-gray-50"
          >
            View Capabilities
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3"
        >
          <FeaturePill icon={<Shield className="h-4 w-4 text-emerald-600" />} text="Tight tolerances to ±0.005 mm" />
          <FeaturePill icon={<Shield className="h-4 w-4 text-emerald-600" />} text="Surface finishes: Ra 0.8 µm and better" />
          <FeaturePill icon={<Shield className="h-4 w-4 text-emerald-600" />} text="Traceability & QA reports included" />
        </motion.div>
      </div>
    </section>
  );
}

function FeaturePill({ icon, text }) {
  return (
    <div className="inline-flex items-center justify-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm text-gray-700 shadow-sm backdrop-blur-md">
      {icon}
      <span>{text}</span>
    </div>
  );
}
