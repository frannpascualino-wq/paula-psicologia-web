import { DOCTORALIA_URL } from '../config';
import { doctorData } from '../data/doctorData';
import { ArrowIcon, CheckIcon, InfoIcon, PinIcon } from './Icons';

export default function EmotionalSupport({ t }) {
  const esa = t.services.emotionalSupport;
  const illustration = doctorData.assets.emotionalSupportIllustration;
  if (!esa) return null;

  return (
    <article id="apoyo-emocional" className="esa" aria-labelledby="esa-title" data-reveal="draw">
      {illustration && (
        <div className="esa__media">
          <img
            src={illustration}
            alt={esa.illustrationAlt || ''}
            width="400"
            height="480"
            loading="lazy"
            decoding="async"
            className="esa__illustration"
          />
        </div>
      )}

      <div className="esa__body">
        <div className="esa__eyebrow">
          <span className="label">{esa.label}</span>
          <span className="esa__tag">{esa.subtitle}</span>
        </div>

        <h3 id="esa-title" className="esa__title">{esa.title}</h3>

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
                  <span className="esa__check" aria-hidden="true"><CheckIcon size={12} /></span>
                  {u}
                </li>
              ))}
            </ul>
          </div>

          <div className="esa__block">
            <h4 className="esa__block-title">{esa.modalityTitle}</h4>
            <p className="esa__modality">
              <span className="esa__pin" aria-hidden="true"><PinIcon size={15} /></span>
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
