import { motion } from 'framer-motion';
import { Plane, ArrowRight } from 'lucide-react';

export default function TravelSection() {
  return (
    <section className="relative section-pad bg-sd-ivory overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative bg-sd-navy rounded-2xl p-8 sm:p-14 text-center overflow-hidden"
        >
          {/* Gold glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-40 bg-sd-gold/10 blur-[80px]" />

          <div className="relative">
            <div className="w-14 h-14 mx-auto flex items-center justify-center bg-sd-gold/15 rounded-2xl mb-6">
              <Plane className="w-7 h-7 text-sd-gold" strokeWidth={1.5} />
            </div>

            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-6 h-px gold-line" />
              <span className="text-sm font-body font-medium text-sd-gold-light tracking-wider uppercase">Travel Assistance</span>
              <div className="w-6 h-px gold-line" />
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white">
              Beyond Property
            </h2>

            <p className="mt-6 text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Smart Deal also operates under the name Smart Deal Real Estate & Travel Agency.
              Contact the team directly for information about currently available travel-related
              services.
            </p>

            <button
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) {
                  const top = el.getBoundingClientRect().top + window.scrollY - 70;
                  window.scrollTo({ top, behavior: 'smooth' });
                }
              }}
              className="group mt-8 inline-flex items-center gap-2 px-6 py-3.5 bg-sd-gold hover:bg-sd-gold-dark text-white font-semibold rounded-lg transition-all hover:shadow-xl hover:shadow-sd-gold/30"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
