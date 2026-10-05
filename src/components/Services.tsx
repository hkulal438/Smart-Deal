import { motion } from 'framer-motion';
import {
  Home,
  Tag,
  KeyRound,
  Lightbulb,
  Building,
  Store,
  ArrowRight,
} from 'lucide-react';

const SERVICES = [
  { icon: Home, num: '01', title: 'Buy Property', desc: 'Find residential and commercial properties that match your requirements.' },
  { icon: Tag, num: '02', title: 'Sell Property', desc: 'Get guidance on positioning and connecting your property with potential buyers.' },
  { icon: KeyRound, num: '03', title: 'Rent / Lease', desc: 'Explore rental and leasing opportunities for residential and commercial requirements.' },
  { icon: Lightbulb, num: '04', title: 'Property Consultation', desc: 'Get practical guidance based on your property requirement, budget and preferred location.' },
  { icon: Building, num: '05', title: 'Residential Properties', desc: 'Explore apartments, independent houses, plots and other residential options.' },
  { icon: Store, num: '06', title: 'Commercial Properties', desc: 'Assistance for shops, offices, showrooms, warehouses and other commercial requirements.' },
];

export default function Services() {
  return (
    <section id="services" className="relative section-pad bg-sd-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-8 h-px gold-line" />
            <span className="text-sm font-body font-medium text-sd-gold-dark tracking-wider uppercase">Our Services</span>
            <div className="w-8 h-px gold-line" />
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-sd-navy">
            What We Help With
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.5 }}
              className="group relative bg-white border border-sd-border rounded-xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-sd-navy/10"
            >
              {/* Gold accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 gold-line scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-t-xl" />

              {/* Number */}
              <div className="absolute top-6 right-7 font-heading font-bold text-4xl text-sd-border group-hover:text-sd-gold/20 transition-colors">
                {service.num}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center bg-sd-navy rounded-xl mb-5 transition-all group-hover:bg-sd-gold">
                <service.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>

              <h3 className="font-heading font-semibold text-lg text-sd-navy mb-2.5">{service.title}</h3>
              <p className="text-sm text-sd-muted leading-relaxed">{service.desc}</p>

              <button
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) {
                    const top = el.getBoundingClientRect().top + window.scrollY - 70;
                    window.scrollTo({ top, behavior: 'smooth' });
                  }
                }}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-sd-gold-dark opacity-0 group-hover:opacity-100 transition-all"
              >
                Enquire
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
