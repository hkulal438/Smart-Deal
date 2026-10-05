import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, Send } from 'lucide-react';
import { CONTACT } from '@/lib/constants';

export default function MobileActionBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Desktop floating WhatsApp */}
      <AnimatePresence>
        {visible && (
          <motion.a
            href={`https://wa.me/${CONTACT.phoneRaw}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="hidden lg:flex fixed bottom-6 right-6 z-40 w-14 h-14 items-center justify-center bg-sd-gold hover:bg-sd-gold-dark text-white rounded-full shadow-xl hover:scale-110 transition-transform"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-6 h-6" />
          </motion.a>
        )}
      </AnimatePresence>

      {/* Mobile bottom bar */}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ y: 80 }}
            animate={{ y: 0 }}
            exit={{ y: 80 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="lg:hidden fixed bottom-0 left-0 right-0 z-40 glass-light border-t border-sd-border"
          >
            <div className="flex items-stretch">
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="flex flex-col items-center justify-center gap-1 flex-1 py-3 text-sd-navy hover:text-sd-gold-dark transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="text-xs font-semibold">Call</span>
              </a>
              <a
                href={`https://wa.me/${CONTACT.phoneRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-1 flex-1 py-3 text-sd-navy hover:text-sd-gold-dark transition-colors border-l border-sd-border"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="text-xs font-semibold">WhatsApp</span>
              </a>
              <button
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) {
                    const top = el.getBoundingClientRect().top + window.scrollY - 70;
                    window.scrollTo({ top, behavior: 'smooth' });
                  }
                }}
                className="flex flex-col items-center justify-center gap-1 flex-1 py-3 bg-sd-navy text-white"
              >
                <Send className="w-5 h-5" />
                <span className="text-xs font-semibold">Enquire</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
