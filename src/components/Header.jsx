import { useState, useEffect } from 'react';
import { DOCTORALIA_URL, LOGO_URL } from '../config';
import { CalendarIcon } from './Icons';

export default function Header({ t, lang, setLang }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    const sections = ['inicio', 'terapias', 'sobre-mi', 'servicios', 'primera-consulta', 'metodo', 'opiniones', 'agenda', 'contacto']
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const close = () => setMenuOpen(false);

  const navLinks = [
    { href: '#sobre-mi',         label: t.nav.sobreMi },
    { href: '#servicios',        label: t.nav.terapias },
    { href: '#primera-consulta', label: t.nav.primeraConsulta },
    { href: '#metodo',           label: t.nav.metodo },
    { href: '#opiniones',        label: t.nav.opiniones },
    { href: '#agenda',           label: t.nav.agenda },
    { href: '#contacto',         label: t.nav.contacto },
  ];

  return (
    <>
      <header className={`hdr${scrolled ? ' scrolled' : ''}${menuOpen ? ' menu-open' : ''}`}>
        <div className="container">
          <div className="hdr__inner">
            <a href="#inicio" className="hdr__brand" onClick={close}>
              <img
                src={LOGO_URL}
                alt={t.nav.logoAlt || 'Logo'}
                className="hdr__logo"
                width="44"
                height="44"
                loading="eager"
                decoding="async"
              />
              <span className="hdr__brand-text">
                <span className="hdr__name">{t.nav.brandName || 'Nombre profesional'}</span>
                <span className="hdr__sub">
                  {t.nav.brandSubtitle || 'PROFESIONAL DE SALUD'}
                  {t.nav.brandCredential && (
                    <span className="hdr__credential"> · {t.nav.brandCredential}</span>
                  )}
                </span>
              </span>
            </a>

            <nav className="hdr__nav" aria-label="Navegación principal">
              {navLinks.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  className={active === l.href ? 'active' : ''}
                  aria-current={active === l.href ? 'true' : undefined}
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="hdr__right">
              <LangToggle lang={lang} setLang={setLang} />
              <a
                href={DOCTORALIA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent btn-sm hdr__cta"
              >
                <CalendarIcon size={15} />
                {t.nav.ctaShort || t.nav.cta}
              </a>
              <button
                className={`hdr__hamburger${menuOpen ? ' open' : ''}`}
                aria-label="Menú"
                aria-expanded={menuOpen}
                aria-controls="menu-movil"
                onClick={() => setMenuOpen(o => !o)}
              >
                <span /><span />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        id="menu-movil"
        className={`hdr__drawer${menuOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menú"
        aria-hidden={!menuOpen}
      >
        <nav className="hdr__drawer-nav" aria-label="Navegación móvil">
          {navLinks.map((l, i) => (
            <a key={l.href} href={l.href} onClick={close} tabIndex={menuOpen ? 0 : -1}>
              <span className="hdr__drawer-index" aria-hidden="true">0{i + 1}</span>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hdr__drawer-foot">
          <div className="hdr__drawer-lang">
            <button className={lang === 'es' ? 'active' : ''} tabIndex={menuOpen ? 0 : -1} onClick={() => { setLang('es'); close(); }}>ES</button>
            <button className={lang === 'pt' ? 'active' : ''} tabIndex={menuOpen ? 0 : -1} onClick={() => { setLang('pt'); close(); }}>PT</button>
          </div>
          <a
            href={DOCTORALIA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            tabIndex={menuOpen ? 0 : -1}
            onClick={close}
          >
            {t.nav.cta}
          </a>
        </div>
      </div>
    </>
  );
}

function LangToggle({ lang, setLang }) {
  return (
    <div className="hdr__lang" role="group" aria-label="Idioma">
      <button className={`hdr__lang-btn${lang === 'es' ? ' active' : ''}`} aria-pressed={lang === 'es'} onClick={() => setLang('es')}>ES</button>
      <span aria-hidden="true">/</span>
      <button className={`hdr__lang-btn${lang === 'pt' ? ' active' : ''}`} aria-pressed={lang === 'pt'} onClick={() => setLang('pt')}>PT</button>
    </div>
  );
}
