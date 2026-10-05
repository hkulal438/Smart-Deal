import { motion } from 'framer-motion';
import { MapPin, UserCheck, Eye, Building, Heart } from 'lucide-react';

const REASONS = [
  { icon: MapPin, title: 'Local Market Knowledge', desc: 'Understanding of the Mangalore property market and local areas.' },
  { icon: UserCheck, title: 'Personalized Guidance', desc: 'Property recommendations based on individual requirements and budgets.' },
  { icon: Eye, title: 'Transparent Approach', desc: 'Clear communication and straightforward guidance throughout the process.' },
  { icon: Building, title: 'Residential & Commercial', desc: 'Support for a broad range of residential and commercial property requirements.' },
  { icon: Heart, title: 'Client-First Service', desc: 'Focused on understanding the client\'s needs before recommending options.' },
];

export default function WhySmartDeal() {
  return (
    <section id="why" className="relative section-pad bg-sd-navy overflow-hidden">
      {/* Subtle gold glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sd-gold/5 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-8 h-px gold-line" />
            <span className="text-sm font-body font-medium text-sd-gold-light tracking-wider uppercase">Why Us</span>
            <div className="w-8 h-px gold-line" />
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
            Why Choose Smart Deal?
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {REASONS.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group relative bg-sd-charcoal/60 border border-white/5 rounded-xl p-6 text-center transition-all hover:border-sd-gold/40 hover:bg-sd-charcoal"
            >
              <div className="w-14 h-14 mx-auto flex items-center justify-center bg-sd-gold/10 rounded-xl mb-4 transition-all group-hover:bg-sd-gold/20">
                <reason.icon className="w-7 h-7 text-sd-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading font-semibold text-white text-sm leading-snug mb-2.5">
                {reason.title}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">{reason.desc}</p>
              <div className="mt-4 h-0.5 w-8 mx-auto gold-line scale-x-0 group-hover:scale-x-100 transition-transform" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
