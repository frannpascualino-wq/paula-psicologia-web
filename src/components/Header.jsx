import { useState, useEffect } from 'react';
import { DOCTORALIA_URL, LOGO_URL } from '../config';

export default function Header({ t, lang, setLang }) {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  const navLinks = [
    { href: '#sobre-mi',    label: t.nav.sobreMi },
    { href: '#servicios',   label: t.nav.terapias },
    { href: '#primera-consulta', label: t.nav.primeraConsulta },
    { href: '#metodo',      label: t.nav.metodo },
    { href: '#opiniones',   label: t.nav.opiniones },
    { href: '#agenda',      label: t.nav.agenda },
    { href: '#contacto',    label: t.nav.contacto },
  ];

  return (
    <>
      <header className={`hdr${scrolled ? ' scrolled' : ''}`}>
        <div className="container">
          <div className="hdr__inner">
            <a href="#inicio" className="hdr__brand" onClick={close}>
              <img
                src={LOGO_URL}
                alt={t.nav.logoAlt || 'Logo'}
                className="hdr__logo"
                loading="eager"
                decoding="async"
              />
              <span className="hdr__brand-text">
                <span className="hdr__name">{t.nav.brandName || 'Nombre profesional'}</span>
                <span className="hdr__sub">{t.nav.brandSubtitle || 'PROFESIONAL DE SALUD'}</span>
                {t.nav.brandCredential && (
                  <span className="hdr__credential">{t.nav.brandCredential}</span>
                )}
              </span>
            </a>

            <nav className="hdr__nav" aria-label="Navegación principal">
              {navLinks.map(l => (
                <a key={l.href} href={l.href}>{l.label}</a>
              ))}
            </nav>

            <div className="hdr__right">
              <LangToggle lang={lang} setLang={setLang} />
              <a
                href={DOCTORALIA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                {t.nav.cta}
              </a>
              <button
                className={`hdr__hamburger${menuOpen ? ' open' : ''}`}
                aria-label="Menú"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(o => !o)}
              >
                <span /><span /><span />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className={`hdr__drawer${menuOpen ? ' open' : ''}`} role="dialog" aria-modal="true">
        {navLinks.map(l => (
          <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
        ))}
        <div className="hdr__drawer-lang">
          <button className={lang === 'es' ? 'active' : ''} onClick={() => { setLang('es'); close(); }}>ES</button>
          <button className={lang === 'pt' ? 'active' : ''} onClick={() => { setLang('pt'); close(); }}>PT</button>
        </div>
        <a
          href={DOCTORALIA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          onClick={close}
        >
          {t.nav.cta}
        </a>
      </div>
    </>
  );
}

function LangToggle({ lang, setLang }) {
  return (
    <div className="hdr__lang" role="group" aria-label="Idioma">
      <button className={`hdr__lang-btn${lang === 'es' ? ' active' : ''}`} onClick={() => setLang('es')}>ES</button>
      <button className={`hdr__lang-btn${lang === 'pt' ? ' active' : ''}`} onClick={() => setLang('pt')}>PT</button>
    </div>
  );
}
