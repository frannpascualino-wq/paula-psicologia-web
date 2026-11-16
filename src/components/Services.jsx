import { DOCTORALIA_URL } from '../config';
import SectionHeading from './SectionHeading';
import EmotionalSupport from './EmotionalSupport';
import { ArrowIcon } from './Icons';

const numerals = ['i.', 'ii.', 'iii.', 'iv.'];

export default function Services({ t }) {
  const { label, title, subtitle, intro, cards, chips } = t.services;

  return (
    <section id="servicios" className="section section--paper services-section">
      <div className="container">
        <div className="svc-head">
          <SectionHeading index="03" label={label} title={title} lead={subtitle} variant="sh--flush" />
          {intro && <p className="svc-head__intro" data-reveal>{intro}</p>}
        </div>

        <div className="svc-grid" data-reveal>
          {cards.map((card, i) => (
            <article key={i} className="svc-card">
              <div className="svc-card__top">
                <span className="svc-card__numeral" aria-hidden="true">{numerals[i] || ''}</span>
                {card.tag && <span className="svc-card__tag">{card.tag}</span>}
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
