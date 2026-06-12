export default function HelpTopics({ t }) {
  const w = t.whoFor;

  return (
    <section id="terapias" className="section section--warm">
      <div className="container">
        <div className="topics__header">
          <span className="label">{w.label}</span>
          <h2 className="h2">{w.title}</h2>
        </div>

        <ul className="topics__list" aria-label={w.title}>
          {w.items.map((item, i) => (
            <li key={i} className="topics__item">
              <span className="topics__item-mark" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>

        {w.closing && (
          <p className="topics__closing">{w.closing}</p>
        )}
      </div>
    </section>
  );
}
