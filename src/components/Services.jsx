import { DOCTORALIA_URL } from '../config';

const cardMeta = [
  {
    key: 'individual',
    icon: <PersonIcon />,
    motif: <CircleMotif />,
  },
  {
    key: 'pareja',
    icon: <ConnectionIcon />,
    motif: <DualCircleMotif />,
  },
  {
    key: 'familiar',
    icon: <FamilyIcon />,
    motif: <TripleCircleMotif />,
  },
];

export default function Services({ t }) {
  const { label, title, subtitle, intro, cards, chips } = t.services;

  return (
    <section id="servicios" className="services-section">
      <div className="container">

        <header className="svc-header">
          <span className="label">{label}</span>
          <h2 className="h2 svc-header__title">{title}</h2>
          {subtitle && <p className="lead svc-header__lead">{subtitle}</p>}
          {intro && <p className="svc-header__intro">{intro}</p>}
        </header>

        <div className="svc-grid svc-grid--three">
          {cards.map((card, i) => {
            const meta = cardMeta[i] ?? { key: `card-${i}` };
            return (
              <article key={i} className={`svc-card svc-card--${meta.key}`}>
                <div className="svc-card__motif" aria-hidden="true">
                  {meta.motif}
                </div>

                <div className="svc-card__top">
                  {card.tag && (
                    <span className="svc-card__tag">{card.tag}</span>
                  )}
                  <div className="svc-card__icon-wrap" aria-hidden="true">
                    {meta.icon}
                  </div>
                </div>

                <h3 className="svc-card__title">{card.title}</h3>
                <div className="svc-card__rule" aria-hidden="true" />
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
                  className="svc-card__cta"
                >
                  {card.cta}
                  <ArrowIcon />
                </a>
              </article>
            );
          })}
        </div>

        <div className="services__chips" aria-label={t.services.chipsLabel}>
          {chips.map((chip, i) => (
            <span key={i} className="services__chip">{chip}</span>
          ))}
        </div>

      </div>
    </section>
  );
}

function PersonIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="4"/>
      <path d="M5 21v-1a7 7 0 0 1 14 0v1"/>
    </svg>
  );
}

function ConnectionIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="8.5" cy="8" r="3.5"/>
      <path d="M2 21v-1a6.5 6.5 0 0 1 13 0v1"/>
      <circle cx="17" cy="8" r="3"/>
      <path d="M13.5 21v-1a5.5 5.5 0 0 1 7.5-5.1"/>
    </svg>
  );
}

function FamilyIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="6" r="3"/>
      <circle cx="17" cy="7" r="2.5"/>
      <path d="M3 20v-1a6 6 0 0 1 12 0v1"/>
      <path d="M14 20v-1a4.5 4.5 0 0 1 7 0v1"/>
    </svg>
  );
}

function CircleMotif() {
  return (
    <svg width="240" height="240" viewBox="0 0 240 240" fill="none" aria-hidden="true">
      <circle cx="180" cy="60" r="160" stroke="#C4714A" strokeWidth="0.8"/>
      <circle cx="180" cy="60" r="120" stroke="#C4714A" strokeWidth="0.6"/>
      <circle cx="180" cy="60" r="80" stroke="#C4714A" strokeWidth="0.5"/>
      <circle cx="180" cy="60" r="40" stroke="#C4714A" strokeWidth="0.4"/>
    </svg>
  );
}

function DualCircleMotif() {
  return (
    <svg width="260" height="200" viewBox="0 0 260 200" fill="none" aria-hidden="true">
      <circle cx="140" cy="20" r="150" stroke="#5F7358" strokeWidth="0.8"/>
      <circle cx="200" cy="50" r="120" stroke="#5F7358" strokeWidth="0.6"/>
      <circle cx="170" cy="10" r="90" stroke="#5F7358" strokeWidth="0.5"/>
    </svg>
  );
}

function TripleCircleMotif() {
  return (
    <svg width="260" height="200" viewBox="0 0 260 200" fill="none" aria-hidden="true">
      <circle cx="130" cy="30" r="140" stroke="#7B8F6E" strokeWidth="0.8"/>
      <circle cx="180" cy="60" r="110" stroke="#7B8F6E" strokeWidth="0.6"/>
      <circle cx="100" cy="20" r="80" stroke="#7B8F6E" strokeWidth="0.5"/>
      <circle cx="160" cy="80" r="50" stroke="#7B8F6E" strokeWidth="0.4"/>
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  );
}
