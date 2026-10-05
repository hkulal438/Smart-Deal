import { Building2, MapPin, Phone, ArrowRight, MessageCircle } from 'lucide-react';
import { CONTACT } from '@/lib/constants';

const NAV = ['Home', 'About', 'Properties', 'Services', 'Contact'];
const PAGES = ['Privacy Policy'];

export default function Footer() {
  const scrollTo = (label: string) => {
    const map: Record<string, string> = {
      Home: 'home', About: 'about', Properties: 'properties',
      Services: 'services', Contact: 'contact',
    };
    const id = map[label];
    if (id) {
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative bg-sd-navy overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sd-gold/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 flex items-center justify-center bg-sd-gold/20 border border-sd-gold/40 rounded-lg">
                <Building2 className="w-5 h-5 text-sd-gold" strokeWidth={2} />
              </div>
              <div className="leading-none">
                <span className="block font-heading font-bold text-base text-white">SMART DEAL</span>
                <span className="block text-[10px] tracking-[0.15em] font-body font-medium text-sd-gold-light">REAL ESTATE & TRAVEL</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Property consultancy in Kadri, Mangalore. Trusted guidance for buying, selling,
              renting and leasing residential and commercial properties.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading font-semibold text-white text-sm mb-5 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              {NAV.map((item) => (
                <li key={item}>
                  <button onClick={() => scrollTo(item)} className="group flex items-center gap-2 text-sm text-gray-400 hover:text-sd-gold-light transition-colors">
                    <ArrowRight className="w-3 h-3 text-sd-gold opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h3 className="font-heading font-semibold text-white text-sm mb-5 uppercase tracking-wider">Information</h3>
            <ul className="space-y-3">
              {PAGES.map((page) => (
                <li key={page}>
                  <button onClick={() => scrollTo('home')} className="group flex items-center gap-2 text-sm text-gray-400 hover:text-sd-gold-light transition-colors">
                    <ArrowRight className="w-3 h-3 text-sd-gold opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                    {page}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-white text-sm mb-5 uppercase tracking-wider">Contact</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-sd-gold flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-sm text-gray-400 leading-relaxed">Kadri, Mangalore, Karnataka</span>
              </li>
              <li>
                <a href={`tel:${CONTACT.phoneRaw}`} className="flex gap-3 group">
                  <Phone className="w-5 h-5 text-sd-gold flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="text-sm text-gray-400 group-hover:text-sd-gold-light transition-colors">{CONTACT.phone}</span>
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${CONTACT.phoneRaw}`} target="_blank" rel="noopener noreferrer" className="flex gap-3 group">
                  <MessageCircle className="w-5 h-5 text-sd-gold flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="text-sm text-gray-400 group-hover:text-sd-gold-light transition-colors">WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <p className="text-center text-sm text-gray-500">
            &copy; 2026 Smart Deal Real Estate & Travel Agency. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
