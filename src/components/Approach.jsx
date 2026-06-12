export default function Approach({ t }) {
  const { label, title, subtitle, items } = t.approach;

  return (
    <section id="metodo" className="section section--sage">
      <div className="container">
        <div className="approach__header">
          <span className="label">{label}</span>
          <h2 className="h2">{title}</h2>
          <p className="lead" style={{ marginTop: 10, maxWidth: 540, margin: '10px auto 0' }}>{subtitle}</p>
        </div>
        <div className="approach__grid">
          {items.map((item, i) => (
            <div key={i} className="approach-card">
              <div className="approach-num">0{i + 1}</div>
              <div className="approach-title">{item.title}</div>
              <p className="approach-desc">{item.desc}</p>
              <div className="approach-detail">{item.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
