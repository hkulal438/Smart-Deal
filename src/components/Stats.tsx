import { motion } from 'framer-motion';
import { Calendar, Star, Users, MapPin } from 'lucide-react';
import { useCountUp, useInView } from '@/lib/hooks';
import { CONTACT } from '@/lib/constants';

const STATS = [
  { icon: Calendar, value: 2016, label: 'Established', isYear: true },
  { icon: Star, value: 5, label: 'Customer Rating', suffix: '.0', isFloat: true },
  { icon: Users, value: 36, label: 'Ratings', suffix: '+' },
  { icon: MapPin, value: 0, label: 'Mangalore', isText: true, text: 'Mangalore' },
];

function StatItem({ stat, start, index }: { stat: typeof STATS[0]; start: boolean; index: number }) {
  const count = useCountUp(stat.value, 2000, start);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="flex flex-col items-center text-center"
    >
      <div className="w-12 h-12 flex items-center justify-center bg-sd-gold/10 rounded-xl mb-4">
        <stat.icon className="w-6 h-6 text-sd-gold" strokeWidth={1.5} />
      </div>
      <div className="font-heading font-bold text-3xl sm:text-4xl text-sd-navy">
        {stat.isText ? stat.text : stat.isYear ? stat.value : count}{stat.suffix || ''}
      </div>
      <div className="mt-2 text-sm text-sd-muted">{stat.label}</div>
    </motion.div>
  );
}

export default function Stats() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);

  return (
    <section className="relative section-pad bg-sd-ivory">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} start={inView} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
