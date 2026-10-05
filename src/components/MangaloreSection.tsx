import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { IMAGES } from '@/lib/constants';

const AREAS = ['Kadri', 'Bejai', 'Kambla', 'Mangalore'];

export default function MangaloreSection() {
  return (
    <section className="relative section-pad bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px gold-line" />
              <span className="text-sm font-body font-medium text-sd-gold-dark tracking-wider uppercase">Mangalore Focus</span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-sd-navy leading-tight">
              Property Opportunities Across Mangalore
            </h2>
            <p className="mt-6 text-sd-muted leading-relaxed">
              Based in Kadri, Smart Deal serves clients looking for residential and commercial
              property opportunities across Mangalore and nearby areas.
            </p>

            {/* Areas */}
            <div className="mt-8 flex flex-wrap gap-3">
              {AREAS.map((area, i) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="flex items-center gap-2 px-4 py-2.5 bg-sd-ivory border border-sd-border rounded-lg hover:border-sd-gold transition-colors"
                >
                  <MapPin className="w-4 h-4 text-sd-gold" />
                  <span className="text-sm font-medium text-sd-navy">{area}</span>
                </motion.div>
              ))}
            </div>

            <button
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) {
                  const top = el.getBoundingClientRect().top + window.scrollY - 70;
                  window.scrollTo({ top, behavior: 'smooth' });
                }
              }}
              className="group mt-8 inline-flex items-center gap-2 px-6 py-3.5 bg-sd-gold hover:bg-sd-gold-dark text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-sd-gold/30"
            >
              Find a Property
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* Right - Image with map-inspired overlay */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={IMAGES.cityAerial}
                alt="Aerial view of Mangalore city landscape"
                className="w-full h-[400px] sm:h-[480px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sd-navy/70 to-transparent" />
              {/* Map-style pin markers */}
              <div className="absolute top-1/4 left-1/3 flex items-center gap-2">
                <div className="w-3 h-3 bg-sd-gold rounded-full animate-pulse shadow-lg shadow-sd-gold/50" />
              </div>
              <div className="absolute top-1/2 right-1/3 flex items-center gap-2">
                <div className="w-3 h-3 bg-sd-gold rounded-full animate-pulse shadow-lg shadow-sd-gold/50" />
              </div>
              <div className="absolute bottom-1/3 left-1/4 flex items-center gap-2">
                <div className="w-3 h-3 bg-sd-gold rounded-full animate-pulse shadow-lg shadow-sd-gold/50" />
              </div>
            </div>
            <div className="absolute -top-3 -right-3 w-20 h-20 border-t-2 border-r-2 border-sd-gold" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
