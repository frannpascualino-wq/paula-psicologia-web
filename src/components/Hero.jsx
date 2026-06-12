import { useState } from 'react';
import { DOCTORALIA_URL, PROFILE_IMAGE_URL, PROFILE_FALLBACK_IMAGE_URL } from '../config';

const trustIcons = [MapPinIcon, MonitorIcon, GlobeIcon, UsersIcon];

export default function Hero({ t }) {
  const h = t.hero;
  const doctoralia = h.doctoralia ?? {
    profileUrl: DOCTORALIA_URL,
    reviewCount: 21,
    rating: 5,
    reviewText: h.trust,
    location: h.badges?.[0]?.label ?? 'Ubicación [REVISAR]',
    modalities: 'Presencial y online',
    languages: 'Español · Português',
    bookingCta: h.cta1,
  };
  const [photoSrc, setPhotoSrc] = useState(h.photoSrc || PROFILE_IMAGE_URL);
  const rating = Number(doctoralia.rating || 5);
  const filledStars = Math.max(1, Math.min(5, Math.round(rating)));
  const trustPoints = [
    doctoralia.location,
    doctoralia.modalities,
    doctoralia.languages,
  ].filter(Boolean);

  return (
    <section id="inicio" className="hero">
      <div className="container">
        <div className="hero__inner">

          {/* ── Left: Content ── */}
          <div className="hero__content">
            <div className="hero__kicker fade-up fade-up-1">
              <span className="hero__rule-line" />
              <div className="hero__kicker-group">
                <span className="label">{h.kicker || 'Profesional de salud'}</span>
                {h.credential && (
                  <span className="hero__kicker-credential">{h.credential}</span>
                )}
              </div>
            </div>

            <h1 className="h1 hero__title fade-up fade-up-2">{h.title}</h1>

            <p className="hero__sub fade-up fade-up-3">{h.subtitle}</p>

            <ul className="hero__trust fade-up fade-up-4" aria-label="Servicios y ubicación">
              {h.badges.map((b, i) => {
                const Icon = trustIcons[i] || (() => null);
                return (
                  <li key={i} className="hero__trust-item">
                    <span className="hero__trust-icon" aria-hidden="true"><Icon /></span>
                    {b.label}
                  </li>
                );
              })}
            </ul>

            <div className="hero__actions fade-up fade-up-5">
              <a
                href={doctoralia.profileUrl || DOCTORALIA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                <CalendarIcon />
                {h.cta1}
              </a>
              <a
                href={h.cta2Href || '#metodo'}
                className="btn btn-outline btn-lg"
              >
                {h.cta2}
                <ArrowIcon />
              </a>
            </div>
            <p className="hero__helper-text fade-up fade-up-5">{h.bookingHelper}</p>
          </div>

          {/* ── Right: Visual ── */}
          <div className="hero__visual fade-up fade-up-3">
            <div className="hero__visual-shape" aria-hidden="true" />

            <div className="hero__photo-wrap">
              <div className="hero__photo-monogram" aria-hidden="true">{h.monogram || 'PAC'}</div>

              <div className="hero__photo">
                <img
                  src={photoSrc}
                  alt={h.photoAlt}
                  className="hero__photo-img"
                  onError={() => {
                    if (photoSrc !== (h.photoFallbackSrc || PROFILE_FALLBACK_IMAGE_URL)) {
                      setPhotoSrc(h.photoFallbackSrc || PROFILE_FALLBACK_IMAGE_URL);
                    }
                  }}
                />
              </div>
              <aside className="hero__trust-panel" aria-label={h.doctoraliaPanelLabel || 'Doctoralia Trust Panel'}>
                <div className="hero__trust-panel-head">
                  <span className="hero__trust-rule" aria-hidden="true" />
                  <span className="hero__trust-eyebrow">{h.doctoraliaPanelLabel || 'Doctoralia Trust Panel'}</span>
                </div>

                <div className="hero__trust-rating-row">
                  <div className="hero__trust-stars" aria-label={`Calificación ${rating} de 5`}>
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < filledStars ? 'is-filled' : ''}>★</span>
                    ))}
                  </div>
                  <p className="hero__trust-reviews">
                    {doctoralia.reviewText || `${doctoralia.reviewCount} opiniones verificadas en Doctoralia`}
                  </p>
                </div>

                <ul className="hero__trust-list">
                  {trustPoints.map((point) => (
                    <li key={point}>
                      <span className="hero__trust-dot" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="hero__trust-actions">
                  <a
                    href={doctoralia.profileUrl || DOCTORALIA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    {doctoralia.bookingCta || h.cta1}
                  </a>
                </div>
              </aside>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ── Icons ── */

function CalendarIcon() {
  return (
    <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

function MonitorIcon() {
  return (
    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2"/>
      <path d="M8 21h8M12 17v4"/>
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  );
}
