import { motion } from 'framer-motion';

const STEPS = [
  { num: '01', title: 'Tell Us What You Need', desc: 'Share your property requirement with our team.' },
  { num: '02', title: 'Understand Your Requirement', desc: 'We understand your needs, budget and preferred location.' },
  { num: '03', title: 'Shortlist Suitable Options', desc: 'We identify properties that match your criteria.' },
  { num: '04', title: 'Property Visit / Discussion', desc: 'Visit shortlisted properties and discuss details.' },
  { num: '05', title: 'Move Forward With Confidence', desc: 'Make your property decision with clarity and confidence.' },
];

export default function Process() {
  return (
    <section className="relative section-pad bg-sd-ivory overflow-hidden">
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
            <span className="text-sm font-body font-medium text-sd-gold-dark tracking-wider uppercase">Our Process</span>
            <div className="w-8 h-px gold-line" />
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-sd-navy">
            How We Work
          </h2>
        </motion.div>

        {/* Desktop horizontal */}
        <div className="hidden lg:block relative">
          <div className="absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-sd-gold/40 to-transparent" />
          <div className="grid grid-cols-5 gap-4">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-white border-2 border-sd-gold/40 rounded-2xl font-heading font-bold text-xl text-sd-navy z-10 transition-all hover:border-sd-gold hover:shadow-lg hover:shadow-sd-gold/20">
                  {step.num}
                </div>
                <h3 className="mt-5 font-heading font-semibold text-sm text-sd-navy leading-snug">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs text-sd-muted leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile vertical */}
        <div className="lg:hidden relative pl-10">
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-sd-gold/40 to-transparent" />
          <div className="space-y-6">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="relative"
              >
                <div className="absolute -left-10 w-10 h-10 flex items-center justify-center bg-white border-2 border-sd-gold rounded-xl font-heading font-bold text-sm text-sd-navy">
                  {step.num}
                </div>
                <div className="bg-white border border-sd-border rounded-xl p-4">
                  <h3 className="font-heading font-semibold text-base text-sd-navy">{step.title}</h3>
                  <p className="mt-1.5 text-sm text-sd-muted leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
