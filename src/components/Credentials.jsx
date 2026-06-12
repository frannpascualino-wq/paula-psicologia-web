export default function Credentials({ t }) {
  const { label, title, items } = t.credentials;

  return (
    <section className="section section--white">
      <div className="container">
        <div className="creds__header">
          <span className="label">{label}</span>
          <h2 className="h2">{title}</h2>
        </div>
        <div className="creds__grid">
          {items.map((item, i) => (
            <div key={i} className="cred-card">
              <div className="cred-icon"><CheckIcon /></div>
              <div className="cred-title">{item.title}</div>
              <div className="cred-sub">{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
