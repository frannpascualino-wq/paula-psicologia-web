import { EMAIL, PHONE, WHATSAPP_URL, DOCTORALIA_URL, LOGO_URL } from '../config';
import { PinIcon } from './Icons';

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
              width="64"
              height="64"
              loading="lazy"
              decoding="async"
            />
            <div className="footer__name">{f.brandName || 'Nombre profesional'}</div>
            <div className="footer__tagline">
              {f.tagline}
              {f.credential && <span className="footer__credential"> · {f.credential}</span>}
            </div>
            <div className="footer__location">
              <PinIcon size={14} />
              {f.location}
            </div>
          </div>

          <div>
            <div className="footer__col-title">{f.navigationTitle || 'Navegación'}</div>
            <nav className="footer__links" aria-label={f.navigationTitle || 'Navegación'}>
              <a href="#sobre-mi">{f.links.sobreMi}</a>
              <a href="#servicios">{f.links.terapias}</a>
              <a href="#primera-consulta">{f.links.primeraConsulta}</a>
              <a href="#metodo">{f.links.metodo}</a>
              {f.links.apoyoEmocional && <a href="#apoyo-emocional">{f.links.apoyoEmocional}</a>}
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
          <div className="footer__meta">
            <div className="footer__copyright">
              {f.copyright.replace('2025', year)}
            </div>
            {(f.privacyUrl || f.termsUrl) && (
              <div className="footer__legal">
                {f.privacyUrl && <a href={f.privacyUrl}>{f.privacy}</a>}
                {f.termsUrl && <a href={f.termsUrl}>{f.terms}</a>}
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
