import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronDown } from 'lucide-react';

const ACTIONS = ['Buy', 'Rent', 'Sell', 'Lease'];
const TYPES = ['Apartment', 'Independent House', 'Villa', 'Land / Plot', 'Commercial Property', 'Office', 'Shop'];
const LOCATIONS = ['Mangalore', 'Kadri', 'Bejai', 'Other Areas'];

function Select({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium text-sd-muted uppercase tracking-wider">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none px-4 py-3 pr-10 bg-white border border-sd-border rounded-lg text-sd-navy text-sm font-medium focus:outline-none focus:border-sd-gold transition-colors cursor-pointer"
        >
          <option value="">Any</option>
          {options.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-sd-muted pointer-events-none" />
      </div>
    </div>
  );
}

export default function PropertySearch() {
  const [action, setAction] = useState('');
  const [type, setType] = useState('');
  const [location, setLocation] = useState('');

  return (
    <section className="relative z-20 -mt-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl shadow-sd-navy/10 border border-sd-border p-6 sm:p-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-px gold-line" />
          <h3 className="font-heading text-xl sm:text-2xl font-semibold text-sd-navy">
            Looking for a Property?
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Select label="I Want To" options={ACTIONS} value={action} onChange={setAction} />
          <Select label="Property Type" options={TYPES} value={type} onChange={setType} />
          <Select label="Location" options={LOCATIONS} value={location} onChange={setLocation} />

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-sd-muted uppercase tracking-wider">&nbsp;</label>
            <button
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) {
                  const top = el.getBoundingClientRect().top + window.scrollY - 70;
                  window.scrollTo({ top, behavior: 'smooth' });
                }
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-sd-navy hover:bg-sd-charcoal text-white font-semibold rounded-lg transition-all hover:shadow-lg"
            >
              <Search className="w-4 h-4" />
              Find Property
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
