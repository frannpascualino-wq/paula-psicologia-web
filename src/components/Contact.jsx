import { EMAIL, PHONE, WHATSAPP_URL, DOCTORALIA_URL, GOOGLE_MAPS_URL, MAPS_EMBED_URL } from '../config';
import { doctorData } from '../data/doctorData';
import SectionHeading from './SectionHeading';
import Photo from './Photo';
import { ArrowIcon, ChatIcon, MailIcon, PhoneIcon, PinIcon, VideoIcon } from './Icons';

export default function Contact({ t }) {
  const c = t.contact;
  const hasEmail = Boolean(EMAIL);
  const gallery = doctorData.assets.officeGallery || [];
  const galleryAlts = c.galleryAlts || [];

  return (
    <section id="contacto" className="section section--paper contact">
      <div className="container">
        <div className="contact__inner">
          <div className="contact__info">
            <SectionHeading index="08" label={c.label} title={c.title} variant="sh--flush" />

            <dl className="contact__blocks" data-reveal>
              <div className="contact__block">
                <dt className="contact__block-title">
                  <span className="contact__item-icon" aria-hidden="true"><PinIcon /></span>
                  {c.officeTitle}
                </dt>
                <dd>
                  {c.officeAddress}
                  <span className="contact__note">{c.officeNote}</span>
                  <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="contact__maps-link">
                    {c.mapsCta || 'Ver en Google Maps'}
                  </a>
                </dd>
              </div>

              <div className="contact__block">
                <dt className="contact__block-title">
                  <span className="contact__item-icon" aria-hidden="true"><VideoIcon /></span>
                  {c.onlineTitle}
                </dt>
                <dd>{c.onlineDesc}</dd>
              </div>

              <div className="contact__block">
                <dt className="contact__block-title">
                  <span className="contact__item-icon" aria-hidden="true"><PhoneIcon /></span>
                  {c.phone}
                </dt>
                <dd>
                  <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="contact__link">{PHONE}</a>
                </dd>
              </div>

              {hasEmail && (
                <div className="contact__block">
                  <dt className="contact__block-title">
                    <span className="contact__item-icon" aria-hidden="true"><MailIcon /></span>
                    {c.email}
                  </dt>
                  <dd>
                    <a href={`mailto:${EMAIL}`} className="contact__link">{EMAIL}</a>
                  </dd>
                </div>
              )}
            </dl>

            <ul className="contact__facts" aria-label={c.factsLabel} data-reveal>
              {c.facts.map((fact) => (
                <li key={fact} className="contact__fact">{fact}</li>
              ))}
            </ul>

            <div className="contact__actions" data-reveal>
              <a href={DOCTORALIA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                {c.bookingCta}
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <ChatIcon /> {c.whatsappCta}
              </a>
              <a href={DOCTORALIA_URL} target="_blank" rel="noopener noreferrer" className="link-arrow">
                {c.doctoraliaCta}
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="contact__visual" data-reveal>
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
                  <span className="contact__map-placeholder-icon"><PinIcon size={36} /></span>
                  <strong>{c.mapFallbackTitle || 'Ubicación de consulta'}</strong>
                  <p>{c.mapNote}</p>
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    {c.mapsCta || 'Ver en Google Maps'}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {gallery.length > 0 && (
          <figure className="contact__gallery" data-reveal>
            <div className="contact__gallery-grid">
              {gallery.map((photo, i) => (
                <div key={photo.jpg} className={`contact__gallery-item contact__gallery-item--${i + 1}`}>
                  <Photo
                    photo={photo}
                    alt={galleryAlts[i] || ''}
                    sizes={i === 1 ? '(max-width: 760px) 92vw, 560px' : '(max-width: 760px) 46vw, 320px'}
                  />
                </div>
              ))}
            </div>
            {c.galleryCaption && (
              <figcaption>
                {c.galleryCaption}
                <span>{c.officeAddress}</span>
              </figcaption>
            )}
          </figure>
        )}
      </div>
    </section>
  );
}
