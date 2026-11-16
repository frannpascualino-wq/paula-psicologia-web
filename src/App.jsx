import { useEffect, useState } from 'react';
import './App.css';
import { content } from './data/content';
import { doctorData } from './data/doctorData';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import HelpTopics from './components/HelpTopics';
import Interlude from './components/Interlude';
import Services from './components/Services';
import FirstSession from './components/FirstSession';
import Approach from './components/Approach';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppBubble from './components/WhatsAppBubble';
import BookingBar from './components/BookingBar';
import Faq from './components/Faq';

export default function App({ initialLang = 'es' }) {
  const [lang, setLang] = useState(content[initialLang] ? initialLang : 'es');
  const t = content[lang];

  useEffect(() => {
    const colors = doctorData.theme?.colors || {};
    const root = document.documentElement;
    const map = {
      bg: '--bg',
      bgWarm: '--bg-warm',
      bgSage: '--bg-sage',
      primary: '--primary',
      accent: '--accent',
      text: '--text',
      textMuted: '--text-muted',
      textLight: '--text-light',
      border: '--border',
      borderLight: '--border-light',
    };
    Object.entries(map).forEach(([key, cssVar]) => {
      if (colors[key]) root.style.setProperty(cssVar, colors[key]);
    });
  }, []);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    const root = document.documentElement;
    root.classList.add('has-reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-in');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.06 },
    );
    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
      root.classList.remove('has-reveal');
    };
  }, []);

  useEffect(() => {
    const seo = doctorData.seo[lang] || doctorData.seo.es;
    document.documentElement.lang = seo.htmlLang || lang;
    document.title = seo.title;

    const setAttr = (selector, attr, value) => {
      if (!value) return;
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };

    setAttr('meta[name="description"]', 'content', seo.description);
    setAttr('meta[property="og:title"]', 'content', seo.ogTitle);
    setAttr('meta[property="og:description"]', 'content', seo.ogDescription);
    setAttr('meta[property="og:locale"]', 'content', seo.ogLocale);
    setAttr('meta[property="og:url"]', 'content', seo.ogUrl);
    setAttr('link[rel="canonical"]', 'href', seo.ogUrl);

    if (seo.path && window.location.pathname !== seo.path) {
      window.history.replaceState(null, '', seo.path + window.location.search + window.location.hash);
    }
  }, [lang]);

  return (
    <>
      <a href="#contenido" className="skip-link">{lang === 'pt' ? 'Ir para o conteúdo' : 'Ir al contenido'}</a>
      <Header t={t} lang={lang} setLang={setLang} />
      <main id="contenido">
        <Hero t={t} />
        <About t={t} />
        <HelpTopics t={t} />
        <Interlude quote={t.whoFor.closing} />
        <Services t={t} />
        <FirstSession t={t} />
        <Approach t={t} />
        <Testimonials t={t} />
        <Faq t={t} />
        <Booking t={t} />
        <Contact t={t} />
      </main>
      <WhatsAppBubble />
      <BookingBar t={t} />
      <Footer t={t} />
    </>
  );
}
