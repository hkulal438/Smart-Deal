import { motion } from 'framer-motion';
import { MapPin, Bed, Maximize, ArrowRight, Eye } from 'lucide-react';
import { IMAGES } from '@/lib/constants';

const SAMPLE = [
  { img: IMAGES.featuredProp1, type: 'Apartment', location: 'Kadri, Mangalore', beds: '3 BHK', area: '1,450 sq ft', status: 'For Sale' },
  { img: IMAGES.featuredProp2, type: 'Villa', location: 'Bejai, Mangalore', beds: '4 BHK', area: '2,800 sq ft', status: 'For Sale' },
  { img: IMAGES.featuredProp3, type: 'Apartment', location: 'Mangalore', beds: '2 BHK', area: '1,100 sq ft', status: 'For Rent' },
];

export default function FeaturedProperties() {
  return (
    <section className="relative section-pad bg-sd-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-8 h-px gold-line" />
            <span className="text-sm font-body font-medium text-sd-gold-dark tracking-wider uppercase">Featured</span>
            <div className="w-8 h-px gold-line" />
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-sd-navy">
            Featured Property Opportunities
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-sm text-sd-muted mb-12 max-w-2xl mx-auto"
        >
          Sample listings shown for reference. Contact Smart Deal directly for current available
          properties matching your requirements.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SAMPLE.map((prop, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group bg-white rounded-2xl overflow-hidden border border-sd-border property-card-shadow transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[16/11] overflow-hidden">
                <img
                  src={prop.img}
                  alt={`${prop.type} in ${prop.location}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 px-3 py-1 bg-sd-gold text-white text-xs font-semibold rounded-full">
                  {prop.status}
                </div>
                <div className="absolute top-3 right-3 px-3 py-1 glass-light text-sd-navy text-xs font-medium rounded-full">
                  Featured Listing
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <span className="text-xs font-medium text-sd-gold-dark uppercase tracking-wider">{prop.type}</span>
                <h3 className="mt-1.5 font-heading font-semibold text-lg text-sd-navy">
                  Details Coming Soon
                </h3>
                <div className="mt-2 flex items-center gap-1.5 text-sm text-sd-muted">
                  <MapPin className="w-4 h-4" />
                  {prop.location}
                </div>

                <div className="mt-4 pt-4 border-t border-sd-border flex items-center gap-4 text-sm text-sd-muted">
                  <div className="flex items-center gap-1.5">
                    <Bed className="w-4 h-4 text-sd-gold" />
                    {prop.beds}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Maximize className="w-4 h-4 text-sd-gold" />
                    {prop.area}
                  </div>
                </div>

                <button
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) {
                      const top = el.getBoundingClientRect().top + window.scrollY - 70;
                      window.scrollTo({ top, behavior: 'smooth' });
                    }
                  }}
                  className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 bg-sd-ivory hover:bg-sd-navy text-sd-navy hover:text-white text-sm font-semibold rounded-lg transition-all"
                >
                  <Eye className="w-4 h-4" />
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-sd-muted mb-4">Looking for something specific?</p>
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) {
                const top = el.getBoundingClientRect().top + window.scrollY - 70;
                window.scrollTo({ top, behavior: 'smooth' });
              }
            }}
            className="group inline-flex items-center gap-2 px-6 py-3.5 bg-sd-navy hover:bg-sd-charcoal text-white font-semibold rounded-lg transition-all hover:shadow-xl"
          >
            Request a Property
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
