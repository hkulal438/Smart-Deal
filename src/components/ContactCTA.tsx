import { motion } from 'framer-motion';
import { Phone, MessageCircle, Send } from 'lucide-react';
import { CONTACT } from '@/lib/constants';

export default function ContactCTA() {
  return (
    <section className="relative py-16 sm:py-20 bg-sd-navy overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-sd-navy via-sd-charcoal to-sd-navy" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[200px] bg-sd-gold/8 blur-[120px]" />

      {/* Top/bottom gold lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sd-gold/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sd-gold/40 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight"
        >
          Let's Find Your Next Opportunity.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-5 text-gray-300 text-lg max-w-2xl mx-auto"
        >
          Looking to buy, sell, rent or lease a property in Mangalore? Talk to Smart Deal today.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={`tel:${CONTACT.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-sd-gold hover:bg-sd-gold-dark text-white font-semibold rounded-lg transition-all hover:shadow-xl hover:shadow-sd-gold/30 w-full sm:w-auto"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
          <a
            href={`https://wa.me/${CONTACT.phoneRaw}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 border-2 border-white/30 hover:border-sd-gold text-white font-semibold rounded-lg transition-all w-full sm:w-auto"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) {
                const top = el.getBoundingClientRect().top + window.scrollY - 70;
                window.scrollTo({ top, behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center justify-center gap-2 px-7 py-4 border-2 border-white/30 hover:border-sd-gold text-white font-semibold rounded-lg transition-all w-full sm:w-auto"
          >
            <Send className="w-5 h-5" />
            Send Enquiry
          </button>
        </motion.div>
      </div>
    </section>
  );
}
