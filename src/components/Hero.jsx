import { useState } from 'react';
import { DOCTORALIA_URL, PROFILE_IMAGE_URL, PROFILE_FALLBACK_IMAGE_URL } from '../config';
import { ArrowIcon, CalendarIcon, GlobeIcon, PeopleIcon, PinIcon, ScreenIcon, StarIcon } from './Icons';

const factIcons = [PinIcon, ScreenIcon, GlobeIcon, PeopleIcon];

export default function Hero({ t }) {
  const h = t.hero;
  const doctoralia = h.doctoralia ?? {
    profileUrl: DOCTORALIA_URL,
    rating: 5,
    reviewText: h.trust,
  };
  const fallbackSrc = h.photoFallbackSrc || PROFILE_FALLBACK_IMAGE_URL;
  const [photoSrc, setPhotoSrc] = useState(h.photoSrc || PROFILE_IMAGE_URL);
  const rating = Number(doctoralia.rating || 5);
  const filledStars = Math.max(1, Math.min(5, Math.round(rating)));
  const profileUrl = doctoralia.profileUrl || DOCTORALIA_URL;

  return (
    <section id="inicio" className="hero">
      <div className="hero__wash" aria-hidden="true" />
      <div className="container">
        <div className="hero__inner">
          <div className="hero__content">
            <div className="hero__kicker fade-up fade-up-1">
              <span className="hero__rule-line" aria-hidden="true" />
              <span className="label">{h.kicker || 'Profesional de salud'}</span>
            </div>

            <h1 className="h1 hero__title fade-up fade-up-2">{h.title}</h1>

            <p className="hero__sub fade-up fade-up-3">{h.subtitle}</p>

            <div className="hero__actions fade-up fade-up-4">
              <a
                href={profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                <CalendarIcon />
                {h.cta1}
              </a>
              <a href={h.cta2Href || '#metodo'} className="link-arrow">
                {h.cta2}
                <ArrowIcon />
              </a>
            </div>
            <p className="hero__helper-text fade-up fade-up-4">{h.bookingHelper}</p>
          </div>

          <div className="hero__visual fade-up fade-up-3">
            <div className="hero__arch-outline" aria-hidden="true" />
            <div className="hero__photo">
              <img
                src={photoSrc}
                alt={h.photoAlt}
                className="hero__photo-img"
                width="1024"
                height="1024"
                fetchPriority="high"
                onError={() => {
                  if (photoSrc !== fallbackSrc) setPhotoSrc(fallbackSrc);
                }}
              />
            </div>

            <a
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__trust-note"
              aria-label={`${h.doctoraliaPanelLabel || 'Doctoralia'}: ${doctoralia.reviewText || h.trust}`}
            >
              <span className="hero__trust-stars" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < filledStars ? 'is-filled' : ''}><StarIcon /></span>
                ))}
              </span>
              <span className="hero__trust-text">{doctoralia.reviewText || h.trust}</span>
              <ArrowIcon size={14} />
            </a>
            {h.credential && <p className="hero__credential">{h.credential}</p>}
          </div>
        </div>

        <ul className="hero__facts fade-up fade-up-5" aria-label="Servicios y ubicación">
          {h.badges.map((b, i) => {
            const Icon = factIcons[i] || PinIcon;
            return (
              <li key={i} className="hero__fact">
                <span className="hero__fact-icon" aria-hidden="true"><Icon size={17} /></span>
                {b.label}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
