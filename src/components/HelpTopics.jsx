import SectionHeading from './SectionHeading';

export default function HelpTopics({ t }) {
  const w = t.whoFor;

  return (
    <section id="terapias" className="section topics">
      <div className="container">
        <div className="topics__grid">
          <SectionHeading index="02" label={w.label} title={w.title} variant="sh--flush" />

          <ul className="topics__list" aria-label={w.title} data-reveal="stagger">
            {w.items.map((item, i) => (
              <li key={i} className="topics__item">
                <span className="topics__item-mark" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
