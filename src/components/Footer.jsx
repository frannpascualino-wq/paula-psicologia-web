import { EMAIL, PHONE, WHATSAPP_URL, DOCTORALIA_URL, LOGO_URL } from '../config';

export default function Footer({ t }) {
  const f = t.footer;
  const year = new Date().getFullYear();
  const hasEmail = Boolean(EMAIL);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <img
              src={LOGO_URL}
              alt={f.logoAlt || 'Logo'}
              className="footer__logo"
              loading="lazy"
              decoding="async"
            />
            <div className="footer__name">{f.brandName || 'Nombre profesional'}</div>
            <div className="footer__tagline">{f.tagline}</div>
            {f.credential && <div className="footer__credential">{f.credential}</div>}
            <div className="footer__location">
              <PinIcon />
              {f.location}
            </div>
          </div>

          <div>
            <div className="footer__col-title">{f.navigationTitle || 'Navegación'}</div>
            <nav className="footer__links">
              <a href="#sobre-mi">{f.links.sobreMi}</a>
              <a href="#servicios">{f.links.terapias}</a>
              <a href="#primera-consulta">{f.links.primeraConsulta}</a>
              <a href="#metodo">{f.links.metodo}</a>
              <a href={DOCTORALIA_URL} target="_blank" rel="noopener noreferrer">{f.links.agenda}</a>
              <a href="#contacto">{f.links.contacto}</a>
            </nav>
          </div>

          <div>
            <div className="footer__col-title">{f.contactTitle || 'Contacto'}</div>
            <div className="footer__links">
              {hasEmail && <a href={`mailto:${EMAIL}`}>{EMAIL}</a>}
              <a href={`tel:${PHONE.replace(/\s/g, '')}`}>{PHONE}</a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">{f.whatsappLabel || 'WhatsApp'}</a>
              <a href={DOCTORALIA_URL} target="_blank" rel="noopener noreferrer">{f.doctoraliaLabel || 'Doctoralia'}</a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__disclaimer">{f.disclaimer}</p>
          {f.demoDisclaimer && <p className="footer__demo-disclaimer">{f.demoDisclaimer}</p>}
          <div className="footer__legal">
            <a href="#">{f.privacy}</a>
            <a href="#">{f.terms}</a>
          </div>
          <div className="footer__copyright">
            {f.copyright.replace('2025', year)}
          </div>
        </div>
      </div>
    </footer>
  );
}

function PinIcon() {
  return (
    <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  );
}
