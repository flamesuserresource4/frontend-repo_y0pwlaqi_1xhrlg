import { motion } from 'framer-motion';
import { Factory, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900 text-white">
              <Factory className="h-5 w-5" />
            </div>
            <div>
              <div className="text-base font-semibold text-gray-900">Axiom CNC Manufacturing</div>
              <div className="text-sm text-gray-600">Precision parts. Predictable timelines.</div>
            </div>
          </motion.div>

          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <a href="mailto:quotes@axiomcnc.example" className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900">
              <Mail className="h-4 w-4" /> quotes@axiomcnc.example
            </a>
            <a href="tel:+10000000000" className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900">
              <Phone className="h-4 w-4" /> +1 (000) 000‑0000
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-6 border-t border-gray-100 pt-6 text-sm text-gray-500 sm:flex-row">
          <div>© {new Date().getFullYear()} Axiom CNC. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-gray-700">About</a>
            <a href="#capabilities" className="hover:text-gray-700">Capabilities</a>
            <a href="#contact" className="hover:text-gray-700">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
