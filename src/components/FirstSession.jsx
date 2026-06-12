import { DOCTORALIA_URL, WHATSAPP_URL } from '../config';

export default function FirstSession({ t }) {
  const s = t.firstSession;

  return (
    <section id="primera-consulta" className="section section--sage first-session">
      <div className="container">
        <div className="first-session__inner">
          <article className="first-session__card">
            <span className="label">{s.label}</span>
            <h2 className="h2">{s.title}</h2>
            {s.intro && (
              <p className="first-session__intro">{s.intro}</p>
            )}
            <ul className="first-session__list" aria-label={s.title}>
              {s.items.map((item, i) => (
                <li key={i}>
                  <span className="first-session__dot" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            {s.closing && (
              <p className="first-session__closing">{s.closing}</p>
            )}
          </article>

          <article className="first-session__card first-session__card--steps" id="proceso">
            <span className="label">{s.processLabel}</span>
            <h3 className="h3">{s.processTitle}</h3>
            <ol className="first-session__steps" aria-label={s.processTitle}>
              {s.steps.map((step, i) => (
                <li key={i}>
                  <span className="first-session__step-index">0{i + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>

            <div className="first-session__actions">
              <a href={DOCTORALIA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">{s.cta1}</a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline">{s.cta2}</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
