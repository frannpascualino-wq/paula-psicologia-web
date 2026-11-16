import SectionHeading from './SectionHeading';

export default function Faq({ t }) {
  const f = t.faq;
  if (!f) return null;

  return (
    <section id="preguntas-frecuentes" className="section section--paper faq">
      <div className="container">
        <div className="faq__grid">
          <SectionHeading index="07" label={f.label} title={f.title} variant="sh--flush" />
          <div className="faq__list" data-reveal>
            {f.items.map((item, i) => (
              <details key={i} className="faq__item">
                <summary>
                  <h3 className="faq__q">{item.q}</h3>
                  <span className="faq__icon" aria-hidden="true" />
                </summary>
                <p className="faq__a">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
