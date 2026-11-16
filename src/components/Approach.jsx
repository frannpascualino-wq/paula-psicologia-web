import SectionHeading from './SectionHeading';
import Sprig from './Sprig';

export default function Approach({ t }) {
  const { label, title, subtitle, items } = t.approach;

  return (
    <section id="metodo" className="section section--dark approach">
      <div className="approach__sprig" data-reveal="draw"><Sprig /></div>
      <div className="container">
        <SectionHeading index="05" label={label} title={title} lead={subtitle} variant="sh--light" />
        <ol className="approach__grid h-scroll" data-reveal="stagger">
          {items.map((item, i) => (
            <li key={i} className="approach-card">
              <div className="approach-num" aria-hidden="true">0{i + 1}</div>
              <h3 className="approach-title">{item.title}</h3>
              <p className="approach-desc">{item.desc}</p>
              <div className="approach-detail">{item.detail}</div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
