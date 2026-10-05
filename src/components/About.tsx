import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { IMAGES } from '@/lib/constants';

export default function About() {
  return (
    <section id="about" className="relative section-pad bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={IMAGES.about}
                alt="Elegant living room interior of a premium Mangalore property"
                className="w-full h-[400px] sm:h-[520px] object-cover"
                loading="lazy"
              />
            </div>
            {/* Established badge */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 bg-sd-navy rounded-xl p-5 shadow-xl">
              <div className="font-heading font-bold text-3xl text-sd-gold">2016</div>
              <div className="text-xs text-gray-400 mt-1">Established in Mangalore</div>
            </div>
            {/* Gold corner accent */}
            <div className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-sd-gold rounded-tl-xl" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px gold-line" />
              <span className="text-sm font-body font-medium text-sd-gold-dark tracking-wider uppercase">
                About Smart Deal
              </span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-sd-navy leading-tight">
              Local Knowledge. Clear Guidance. Better Property Decisions.
            </h2>
            <div className="mt-6 space-y-4 text-sd-muted leading-relaxed">
              <p>
                Smart Deal Real Estate & Travel Agency is based in Kadri, Mangalore and provides
                property consulting and real estate assistance for clients looking to buy, sell,
                rent or lease property.
              </p>
              <p>
                With knowledge of the local Mangalore property market, Smart Deal focuses on
                understanding each client's requirement, budget and preferred location before
                helping them identify suitable opportunities.
              </p>
              <p>
                From residential properties to commercial spaces, the goal is to make property
                decisions more straightforward, transparent and convenient.
              </p>
            </div>
            <button
              onClick={() => {
                const el = document.getElementById('services');
                if (el) {
                  const top = el.getBoundingClientRect().top + window.scrollY - 70;
                  window.scrollTo({ top, behavior: 'smooth' });
                }
              }}
              className="group mt-8 inline-flex items-center gap-2 px-6 py-3 border-2 border-sd-navy text-sd-navy font-semibold rounded-lg hover:bg-sd-navy hover:text-white transition-all"
            >
              Know More About Us
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
