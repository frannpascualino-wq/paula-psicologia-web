import { DOCTORALIA_URL } from '../config';
import SectionHeading from './SectionHeading';
import EmotionalSupport from './EmotionalSupport';
import { ArrowIcon } from './Icons';

const numerals = ['i.', 'ii.', 'iii.', 'iv.'];

const motifCircles = [
  [[28, 28]],
  [[21, 28], [35, 28]],
  [[28, 20], [19, 35], [37, 35]],
];

function Motif({ index }) {
  const circles = motifCircles[index] || motifCircles[0];
  return (
    <svg className="svc-card__motif" width="64" height="64" viewBox="0 0 56 56" fill="none" aria-hidden="true">
      {circles.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="13" className={i === 0 ? 'is-filled' : ''} />
      ))}
    </svg>
  );
}

export default function Services({ t }) {
  const { label, title, subtitle, intro, cards, chips } = t.services;

  return (
    <section id="servicios" className="section section--paper services-section">
      <div className="container">
        <div className="svc-head">
          <SectionHeading index="03" label={label} title={title} lead={subtitle} variant="sh--flush" />
          {intro && <p className="svc-head__intro" data-reveal>{intro}</p>}
        </div>

        <div className="svc-grid" data-reveal="stagger">
          {cards.map((card, i) => (
            <article key={i} className="svc-card">
              <div className="svc-card__top">
                <Motif index={i} />
                <span className="svc-card__meta">
                  <span className="svc-card__numeral" aria-hidden="true">{numerals[i] || ''}</span>
                  {card.tag && <span className="svc-card__tag">{card.tag}</span>}
                </span>
              </div>

              <h3 className="svc-card__title">{card.title}</h3>
              <div className="svc-card__desc-wrap">
                <p className="svc-card__desc">{card.descPrimary}</p>
                {card.descSecondary && (
                  <p className="svc-card__desc svc-card__desc--secondary">{card.descSecondary}</p>
                )}
              </div>

              <a
                href={DOCTORALIA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow svc-card__cta"
              >
                {card.cta}
                <ArrowIcon />
              </a>
            </article>
          ))}
        </div>

        <ul className="services__chips" aria-label={t.services.chipsLabel} data-reveal>
          {chips.map((chip, i) => (
            <li key={i} className="services__chip">{chip}</li>
          ))}
        </ul>

        <EmotionalSupport t={t} />
      </div>
    </section>
  );
}
