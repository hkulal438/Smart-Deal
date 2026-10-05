import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { IMAGES } from '@/lib/constants';

const CATEGORIES = [
  { name: 'Apartments', img: IMAGES.apartments },
  { name: 'Independent Houses', img: IMAGES.independentHouse },
  { name: 'Villas', img: IMAGES.villa },
  { name: 'Residential Land', img: IMAGES.residentialLand },
  { name: 'Commercial Shops', img: IMAGES.commercialShop },
  { name: 'Office Spaces', img: IMAGES.officeSpace },
  { name: 'Commercial Land', img: IMAGES.commercialLand },
  { name: 'Warehouses', img: IMAGES.warehouse },
];

export default function PropertyCategories() {
  return (
    <section id="properties" className="relative section-pad bg-sd-navy overflow-hidden">
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
            <span className="text-sm font-body font-medium text-sd-gold-light tracking-wider uppercase">Categories</span>
            <div className="w-8 h-px gold-line" />
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
            Properties For Every Requirement
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {CATEGORIES.map((cat, i) => (
            <motion.button
              key={cat.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ delay: (i % 4) * 0.08, duration: 0.5 }}
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) {
                  const top = el.getBoundingClientRect().top + window.scrollY - 70;
                  window.scrollTo({ top, behavior: 'smooth' });
                }
              }}
              className="group relative aspect-[4/5] rounded-xl overflow-hidden text-left"
            >
              <img
                src={cat.img}
                alt={`${cat.name} in Mangalore`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sd-navy/90 via-sd-navy/20 to-transparent" />
              {/* Gold accent on hover */}
              <div className="absolute inset-0 border-2 border-sd-gold/0 group-hover:border-sd-gold/60 rounded-xl transition-all duration-300" />

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading font-semibold text-white text-sm sm:text-base">
                    {cat.name}
                  </h3>
                  <div className="w-8 h-8 flex items-center justify-center bg-sd-gold/20 rounded-full group-hover:bg-sd-gold transition-all">
                    <ArrowUpRight className="w-4 h-4 text-sd-gold-light group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
