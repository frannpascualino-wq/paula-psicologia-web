import { useEffect, useState } from 'react';
import { DOCTORALIA_URL, WHATSAPP_URL } from '../config';
import { CalendarIcon, ChatIcon } from './Icons';

export default function BookingBar({ t }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 360);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`book-bar${visible ? ' is-visible' : ''}`} aria-hidden={!visible}>
      <a
        href={DOCTORALIA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-accent book-bar__cta"
        tabIndex={visible ? 0 : -1}
      >
        <CalendarIcon />
        {t.nav.ctaShort || t.nav.cta}
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="book-bar__wa"
        aria-label={t.booking.whatsappCta}
        tabIndex={visible ? 0 : -1}
      >
        <ChatIcon size={20} />
      </a>
    </div>
  );
}
