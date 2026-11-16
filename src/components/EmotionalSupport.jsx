import { DOCTORALIA_URL } from '../config';
import { doctorData } from '../data/doctorData';

export default function EmotionalSupport({ t }) {
  const esa = t.services.emotionalSupport;
  const logo = doctorData.assets.emotionalSupportLogo;
  const photo = doctorData.assets.emotionalSupportPhoto;
  if (!esa) return null;

  return (
    <article id="apoyo-emocional" className="esa" aria-labelledby="esa-title">
      {photo && (
        <div className="esa__media">
          <picture>
            <source
              type="image/webp"
              srcSet={`${photo.webp720} 720w, ${photo.webp1080} 1080w`}
              sizes="(max-width: 860px) 100vw, 480px"
            />
            <img
              src={photo.jpg}
              alt={esa.photoAlt}
              width={photo.width}
              height={photo.height}
              loading="lazy"
              decoding="async"
              className="esa__photo"
            />
          </picture>
        </div>
      )}

      <div className="esa__body">
        <div className="esa__top">
          {logo && (
            <img
              src={logo}
              alt={esa.logoAlt}
              width="72"
              height="72"
              loading="lazy"
              decoding="async"
              className="esa__logo"
            />
          )}
          <div className="esa__eyebrow">
            <span className="esa__label">{esa.label}</span>
            <span className="esa__tag">{esa.subtitle}</span>
          </div>
        </div>

        <h3 id="esa-title" className="esa__title">{esa.title}</h3>
        <div className="esa__rule" aria-hidden="true" />

        <div className="esa__text">
          {esa.paragraphs.map((p, i) => (
            <p key={i} className={i === 0 ? 'esa__lead' : 'esa__desc'}>{p}</p>
          ))}
        </div>

        <div className="esa__details">
          <div className="esa__block">
            <h4 className="esa__block-title">{esa.usesTitle}</h4>
            <ul className="esa__list">
              {esa.uses.map((u, i) => (
                <li key={i}>
                  <span className="esa__check" aria-hidden="true"><CheckIcon /></span>
                  {u}
                </li>
              ))}
            </ul>
          </div>

          <div className="esa__block">
            <h4 className="esa__block-title">{esa.modalityTitle}</h4>
            <p className="esa__modality">
              <span className="esa__pin" aria-hidden="true"><PinIcon /></span>
              {esa.modality}
            </p>
          </div>
        </div>

        <div className="esa__action">
          <a
            href={DOCTORALIA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary esa__cta"
          >
            {esa.cta}
            <ArrowIcon />
          </a>
          <p className="esa__disclaimer">
            <span aria-hidden="true"><InfoIcon /></span>
            {esa.disclaimer}
          </p>
        </div>
      </div>
    </article>
  );
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5"/>
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9.5"/><path d="M12 11v5.5M12 7.6v.1"/>
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  );
}
