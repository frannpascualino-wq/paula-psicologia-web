import { useEffect, useState } from 'react';
import './App.css';
import { content } from './data/content';
import { doctorData } from './data/doctorData';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import HelpTopics from './components/HelpTopics';
import Services from './components/Services';
import FirstSession from './components/FirstSession';
import Approach from './components/Approach';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppBubble from './components/WhatsAppBubble';

export default function App() {
  const [lang, setLang] = useState('es');
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
    const seo = doctorData.seo[lang] || doctorData.seo.es;
    document.documentElement.lang = lang;
    document.title = seo.title;

    const setMeta = (selector, value) => {
      if (!value) return;
      const el = document.querySelector(selector);
      if (el) el.setAttribute('content', value);
    };

    setMeta('meta[name="description"]', seo.description);
    setMeta('meta[name="keywords"]', seo.keywords);
    setMeta('meta[property="og:title"]', seo.ogTitle);
    setMeta('meta[property="og:description"]', seo.ogDescription);
    setMeta('meta[property="og:locale"]', seo.ogLocale);
    setMeta('meta[property="og:url"]', seo.ogUrl);
    setMeta('meta[property="og:image"]', doctorData.assets.ogImage);
  }, [lang]);

  return (
    <>
      <Header t={t} lang={lang} setLang={setLang} />
      <main>
        <Hero t={t} />
        <About t={t} />
        <HelpTopics t={t} />
        <Services t={t} />
        <FirstSession t={t} />
        <Approach t={t} />
        <Testimonials t={t} />
        <Booking t={t} />
        <Contact t={t} />
      </main>
      <WhatsAppBubble />
      <Footer t={t} />
    </>
  );
}
