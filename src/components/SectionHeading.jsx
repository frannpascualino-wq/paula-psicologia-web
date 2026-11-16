export default function SectionHeading({ index, label, title, lead, as: Tag = 'h2', variant = '', id }) {
  return (
    <header className={`sh${variant ? ` ${variant}` : ''}`} data-reveal>
      <div className="sh__meta">
        {index && <span className="sh__index" aria-hidden="true">{index}</span>}
        {index && <span className="sh__line" aria-hidden="true" />}
        <span className="label">{label}</span>
      </div>
      <Tag id={id} className={Tag === 'h3' ? 'h3' : 'h2'}>{title}</Tag>
      {lead && <p className="lead">{lead}</p>}
    </header>
  );
}
