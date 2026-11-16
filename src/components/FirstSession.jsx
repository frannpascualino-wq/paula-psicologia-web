import { DOCTORALIA_URL, WHATSAPP_URL } from '../config';
import SectionHeading from './SectionHeading';
import { ChatIcon } from './Icons';

export default function FirstSession({ t }) {
  const s = t.firstSession;

  return (
    <section id="primera-consulta" className="section section--warm first-session">
      <div className="container">
        <div className="first-session__inner">
          <div className="first-session__col">
            <SectionHeading index="04" label={s.label} title={s.title} lead={s.intro} variant="sh--flush" />
            <ul className="first-session__list" aria-label={s.title} data-reveal>
              {s.items.map((item, i) => (
                <li key={i}>
                  <span className="first-session__dot" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            {s.closing && (
              <p className="first-session__closing" data-reveal>{s.closing}</p>
            )}
          </div>

          <aside className="first-session__steps-card" id="proceso" data-reveal>
            <span className="label">{s.processLabel}</span>
            <h3 className="h3">{s.processTitle}</h3>
            <ol className="first-session__steps" aria-label={s.processTitle}>
              {s.steps.map((step, i) => (
                <li key={i}>
                  <span className="first-session__step-index" aria-hidden="true">{i + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>

            <div className="first-session__actions">
              <a href={DOCTORALIA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">{s.cta1}</a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline"><ChatIcon /> {s.cta2}</a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
