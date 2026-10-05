import { motion } from 'framer-motion';
import { ArrowRight, Phone, ChevronDown } from 'lucide-react';
import { IMAGES, CONTACT } from '@/lib/constants';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-sd-navy">
      {/* Background image with slow zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={IMAGES.hero}
          alt="Premium luxury apartment building in Mangalore"
          className="w-full h-full object-cover animate-slow-zoom"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sd-navy/80 via-sd-navy/60 to-sd-navy/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-sd-navy/70 via-transparent to-transparent" />
      </div>

      {/* Subtle gold radial glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-sd-gold/10 rounded-full blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-32">
        <div className="max-w-3xl">
          {/* Brand label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-10 h-px bg-sd-gold" />
            <span className="text-sm font-body font-medium text-sd-gold-light tracking-[0.2em] uppercase">
              Smart Deal · Real Estate & Travel Agency
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading font-bold text-4xl sm:text-5xl lg:text-7xl text-white leading-[1.1]"
          >
            Find the Right Property.
            <br />
            <span className="text-gold-gradient">Make the Right Move.</span>
          </motion.h1>

          {/* Gold divider */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '60px' }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-0.5 gold-line mt-8 rounded-full"
          />

          {/* Supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed"
          >
            Trusted real estate guidance for buying, selling, renting and leasing
            properties in Mangalore.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => {
                const el = document.getElementById('properties');
                if (el) {
                  const top = el.getBoundingClientRect().top + window.scrollY - 70;
                  window.scrollTo({ top, behavior: 'smooth' });
                }
              }}
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-sd-gold hover:bg-sd-gold-dark text-white font-semibold rounded-lg transition-all hover:shadow-xl hover:shadow-sd-gold/30 hover:scale-[1.02]"
            >
              Explore Properties
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 border-2 border-white/30 hover:border-sd-gold text-white font-semibold rounded-lg transition-all hover:bg-white/5"
            >
              <Phone className="w-5 h-5" />
              Talk to an Expert
            </a>
          </motion.div>

          {/* Trust line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-12 flex items-center gap-3 text-sm text-gray-400"
          >
            <div className="w-6 h-px bg-sd-gold/50" />
            <span>Property Solutions Across Mangalore</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-sd-gold/60" />
      </motion.div>
    </section>
  );
}
