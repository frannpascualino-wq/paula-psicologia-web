import { EMAIL, PHONE, WHATSAPP_URL, DOCTORALIA_URL, GOOGLE_MAPS_URL, MAPS_EMBED_URL } from '../config';

export default function Contact({ t }) {
  const c = t.contact;
  const hasEmail = Boolean(EMAIL);

  return (
    <section id="contacto" className="section section--white">
      <div className="container">
        <div className="contact__inner">
          <div className="contact__info">
            <div>
              <span className="label">{c.label}</span>
              <h2 className="h2">{c.title}</h2>
            </div>

            <div className="contact__block">
              <div className="contact__block-title">{c.officeTitle}</div>
              <div className="contact__item">
                <span className="contact__item-icon"><PinIcon /></span>
                <span>{c.officeAddress}<br /><span style={{ fontSize: '0.85em', opacity: 0.75 }}>{c.officeNote}</span></span>
              </div>
            </div>

            <div className="contact__block">
              <div className="contact__block-title">{c.onlineTitle}</div>
              <div className="contact__item">
                <span className="contact__item-icon"><VideoIcon /></span>
                <span>{c.onlineDesc}</span>
              </div>
            </div>

            <div className="contact__block">
              <div className="contact__item">
                <span className="contact__item-icon"><PhoneIcon /></span>
                <a href={`tel:${PHONE.replace(/\s/g, '')}`} style={{ color: 'inherit' }}>{PHONE}</a>
              </div>
              {hasEmail && (
                <div className="contact__item">
                  <span className="contact__item-icon"><MailIcon /></span>
                  <a href={`mailto:${EMAIL}`} style={{ color: 'inherit' }}>{EMAIL}</a>
                </div>
              )}
            </div>

            <div className="contact__facts" aria-label={c.factsLabel}>
              {c.facts.map((fact) => (
                <div key={fact} className="contact__fact">
                  <span className="contact__fact-mark" aria-hidden="true" />
                  {fact}
                </div>
              ))}
            </div>

            <div className="contact__actions">
              <a
                href={DOCTORALIA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent"
              >
                {c.bookingCta}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <WaIcon /> {c.whatsappCta}
              </a>
              <a
                href={DOCTORALIA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                {c.doctoraliaCta}
              </a>
            </div>
          </div>

          <div className="contact__map">
            {MAPS_EMBED_URL ? (
              <iframe
                title={c.mapIframeTitle || 'Ubicación del consultorio'}
                src={MAPS_EMBED_URL}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="contact__map-placeholder">
                <span className="contact__map-placeholder-icon"><PinIconLg /></span>
                <strong style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-serif)', fontSize: '1.05rem' }}>
                  {c.mapFallbackTitle || 'Ubicación de consulta'}
                </strong>
                <p>{c.mapNote}</p>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                  style={{ marginTop: 8 }}
                >
                  {c.mapsCta || 'Ver en Google Maps'}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function PinIcon() {
  return (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  );
}
function PinIconLg() {
  return (
    <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  );
}
function VideoIcon() {
  return (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.23 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.16 6.16l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
    </svg>
  );
}
function WaIcon() {
  return (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
    </svg>
  );
}
