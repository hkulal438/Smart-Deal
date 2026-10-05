import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageCircle, Building2 } from 'lucide-react';
import { CONTACT } from '@/lib/constants';

const NAV = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Properties', id: 'properties' },
  { label: 'Services', id: 'services' },
  { label: 'Why Smart Deal', id: 'why' },
  { label: 'Testimonials', id: 'testimonials' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = NAV.map((n) => document.getElementById(n.id)).filter(Boolean);
      const pos = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i]!.offsetTop <= pos) {
          setActive(NAV[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setOpen(false);
  };

  const dark = !scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass-light py-2.5 shadow-sm border-b border-sd-border'
            : 'bg-sd-navy py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollTo('home')} className="flex items-center gap-2.5 group">
            <div className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all ${
              dark ? 'bg-sd-gold/20 border border-sd-gold/40' : 'bg-sd-navy'
            }`}>
              <Building2 className={`w-5 h-5 ${dark ? 'text-sd-gold' : 'text-sd-gold'}`} strokeWidth={2} />
            </div>
            <div className="text-left leading-none">
              <span className={`block font-heading font-bold text-base tracking-tight ${dark ? 'text-white' : 'text-sd-navy'}`}>
                SMART DEAL
              </span>
              <span className={`block text-[10px] tracking-[0.15em] font-body font-medium ${dark ? 'text-sd-gold-light' : 'text-sd-muted'}`}>
                REAL ESTATE & TRAVEL
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative px-3.5 py-2 text-sm font-medium transition-colors ${
                  dark ? 'text-gray-300 hover:text-white' : 'text-sd-muted hover:text-sd-navy'
                } ${active === item.id ? (dark ? 'text-white' : 'text-sd-navy') : ''}`}
              >
                {item.label}
                {active === item.id && (
                  <motion.div
                    layoutId="nav-dot"
                    className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-sd-gold rounded-full"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${dark ? 'text-white hover:text-sd-gold-light' : 'text-sd-navy hover:text-sd-gold-dark'}`}
            >
              <Phone className="w-4 h-4 text-sd-gold" />
              <span>Call Now</span>
            </a>
            <a
              href={`https://wa.me/${CONTACT.phoneRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-sd-gold hover:bg-sd-gold-dark text-white text-sm font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-sd-gold/30"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden w-10 h-10 flex items-center justify-center ${dark ? 'text-white' : 'text-sd-navy'}`}
            aria-label="Menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-sd-navy/95 backdrop-blur-md" onClick={() => setOpen(false)} />
            <motion.nav
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative flex flex-col items-center justify-center h-full gap-2 px-6"
            >
              {NAV.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.04 }}
                  onClick={() => scrollTo(item.id)}
                  className={`text-2xl font-heading py-3 transition-colors ${
                    active === item.id ? 'text-sd-gold' : 'text-white'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + NAV.length * 0.04 }}
                className="flex gap-3 mt-6"
              >
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="flex items-center gap-2 px-5 py-3 border-2 border-sd-gold text-sd-gold rounded-lg font-semibold text-sm"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
                <a
                  href={`https://wa.me/${CONTACT.phoneRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 bg-sd-gold text-white rounded-lg font-semibold text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </motion.div>
              <motion.button
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + (NAV.length + 1) * 0.04 }}
                onClick={() => scrollTo('contact')}
                className="mt-3 px-8 py-3 bg-white text-sd-navy rounded-lg font-semibold text-sm"
              >
                Enquire Now
              </motion.button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
