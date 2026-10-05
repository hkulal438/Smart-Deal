import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Building2, Send, User, Mail, MessageSquare, Navigation } from 'lucide-react';
import { CONTACT } from '@/lib/constants';

const REQUIREMENTS = [
  'Buy Property',
  'Sell Property',
  'Rent Property',
  'Lease Property',
  'Property Consultation',
  'Other',
];

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', requirement: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!form.phone.trim()) e.phone = 'Please enter your phone number';
    else if (!/^[+]?[\d\s-]{10,15}$/.test(form.phone.trim())) e.phone = 'Please enter a valid phone number';
    if (!form.email.trim()) e.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = 'Please enter a valid email';
    if (!form.requirement) e.requirement = 'Please select a requirement';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setForm({ name: '', phone: '', email: '', requirement: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 bg-white border rounded-lg text-sd-navy placeholder-sd-muted transition-all focus:outline-none focus:border-sd-gold ${
      errors[field] ? 'border-red-400' : 'border-sd-border'
    }`;

  return (
    <section id="contact" className="relative section-pad bg-sd-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-8 h-px gold-line" />
            <span className="text-sm font-body font-medium text-sd-gold-dark tracking-wider uppercase">Contact</span>
            <div className="w-8 h-px gold-line" />
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-sd-navy">Get In Touch</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <div className="flex items-start gap-4 p-5 bg-white border border-sd-border rounded-xl">
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-sd-navy rounded-lg">
                <Building2 className="w-6 h-6 text-sd-gold" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-sd-navy text-sm mb-1">Smart Deal Real Estate & Travel Agency</h3>
                <p className="text-sm text-sd-muted leading-relaxed">{CONTACT.address}</p>
                <p className="text-sm text-sd-gold-dark font-medium mt-1.5">{CONTACT.shortAddress}</p>
              </div>
            </div>

            <a href={`tel:${CONTACT.phoneRaw}`} className="flex items-center gap-4 p-5 bg-white border border-sd-border rounded-xl hover:border-sd-gold transition-colors group">
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-sd-navy rounded-lg group-hover:bg-sd-gold transition-colors">
                <Phone className="w-6 h-6 text-sd-gold group-hover:text-white transition-colors" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-sd-navy text-sm mb-1">Phone</h3>
                <p className="text-sm text-sd-muted group-hover:text-sd-gold-dark transition-colors">{CONTACT.phone}</p>
              </div>
            </a>

            <div className="flex items-start gap-4 p-5 bg-white border border-sd-border rounded-xl">
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-sd-navy rounded-lg">
                <Clock className="w-6 h-6 text-sd-gold" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-sd-navy text-sm mb-1">Business Hours</h3>
                <p className="text-sm text-sd-muted">{CONTACT.hours}</p>
                <p className="text-sm text-sd-muted">Sunday: {CONTACT.sundayHours}</p>
              </div>
            </div>

            {/* Map */}
            <div className="relative rounded-xl overflow-hidden border border-sd-border h-56 bg-white flex flex-col items-center justify-center">
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <pattern id="map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0B1220" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#map-grid)" />
                  <path d="M 0 100 Q 100 80 200 100 T 400 90" fill="none" stroke="#C9A227" strokeWidth="1.5" />
                  <path d="M 50 0 L 80 200" fill="none" stroke="#0B1220" strokeWidth="0.3" />
                  <path d="M 200 0 L 220 200" fill="none" stroke="#0B1220" strokeWidth="0.3" />
                </svg>
              </div>
              <MapPin className="w-10 h-10 text-sd-gold mb-2 relative z-10" strokeWidth={1.5} />
              <p className="text-sm text-sd-muted text-center px-6 max-w-xs relative z-10 leading-relaxed">
                Kadri Kambla Road, Mangalore, Karnataka
              </p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Kadri Kambla Road, Mangalore, Karnataka 575003')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 px-5 py-2.5 border-2 border-sd-navy text-sd-navy font-semibold rounded-lg hover:bg-sd-navy hover:text-white transition-all text-sm relative z-10"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </a>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="bg-white border border-sd-border rounded-2xl p-6 sm:p-8"
          >
            <h3 className="font-heading font-semibold text-xl text-sd-navy mb-6">Send an Enquiry</h3>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-5 p-4 bg-sd-gold/10 border border-sd-gold/30 rounded-lg text-sm text-sd-gold-dark"
              >
                Thank you for your enquiry. We'll get back to you shortly. For immediate assistance,
                call {CONTACT.phone}.
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label className="block text-sm text-sd-muted mb-1.5">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-sd-muted" />
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your full name"
                    className={inputClass('name') + ' pl-10'}
                  />
                </div>
                {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-sd-muted mb-1.5">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-sd-muted" />
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="Your phone number"
                      className={inputClass('phone') + ' pl-10'}
                    />
                  </div>
                  {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm text-sd-muted mb-1.5">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-sd-muted" />
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="Your email address"
                      className={inputClass('email') + ' pl-10'}
                    />
                  </div>
                  {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm text-sd-muted mb-1.5">Requirement</label>
                <select
                  value={form.requirement}
                  onChange={(e) => setForm({ ...form, requirement: e.target.value })}
                  className={`${inputClass('requirement')} appearance-none cursor-pointer`}
                >
                  <option value="">Select your requirement</option>
                  {REQUIREMENTS.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
                {errors.requirement && <p className="mt-1 text-xs text-red-400">{errors.requirement}</p>}
              </div>

              <div>
                <label className="block text-sm text-sd-muted mb-1.5">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-sd-muted" />
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your property requirement (optional)"
                    rows={4}
                    className={inputClass('message') + ' pl-10 resize-none'}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 bg-sd-navy hover:bg-sd-charcoal text-white font-semibold rounded-lg transition-all hover:shadow-xl"
              >
                <Send className="w-5 h-5" />
                Send Enquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
