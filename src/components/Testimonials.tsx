import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { CONTACT } from '@/lib/constants';

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative section-pad bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-8 h-px gold-line" />
            <span className="text-sm font-body font-medium text-sd-gold-dark tracking-wider uppercase">Reviews</span>
            <div className="w-8 h-px gold-line" />
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-sd-navy">
            What Clients Say
          </h2>
        </motion.div>

        {/* Rating summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 p-6 bg-sd-ivory rounded-xl border border-sd-border"
        >
          <div className="text-center">
            <div className="font-heading font-bold text-5xl text-sd-navy">{CONTACT.rating}</div>
            <div className="flex gap-1 mt-2 justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-sd-gold" fill="currentColor" />
              ))}
            </div>
            <div className="mt-2 text-sm text-sd-muted">Customer Rating</div>
          </div>
          <div className="hidden sm:block w-px h-16 bg-sd-border" />
          <div className="text-center">
            <div className="font-heading font-bold text-3xl text-sd-navy">{CONTACT.ratingCount}</div>
            <div className="mt-2 text-sm text-sd-muted">Ratings</div>
          </div>
        </motion.div>

        {/* Single verified review */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative bg-sd-ivory rounded-2xl p-8 sm:p-12 border border-sd-border"
        >
          <Quote className="absolute top-6 right-6 w-14 h-14 text-sd-gold/15" fill="currentColor" />

          <div className="flex gap-1 mb-5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-sd-gold" fill="currentColor" />
            ))}
          </div>

          <p className="text-lg sm:text-xl text-sd-navy leading-relaxed font-medium font-heading italic">
            "We are always have pleasure to serve our customer with politeness, transparency and
            clear documentation."
          </p>

          <div className="mt-8 flex items-center gap-4">
            <div className="w-12 h-px gold-line" />
            <div>
              <div className="font-heading font-semibold text-sd-navy">Smart Deal</div>
              <div className="text-sm text-sd-muted">Verified Public Review</div>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center text-sm text-sd-muted"
        >
          More client reviews will be featured here as they become available.
        </motion.p>
      </div>
    </section>
  );
}
