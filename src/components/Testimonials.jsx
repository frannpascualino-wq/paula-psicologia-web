import { DOCTORALIA_URL } from '../config';

export default function Testimonials({ t }) {
  const { label, title, items, note, ctaProfile, ctaReviews } = t.testimonials;

  return (
    <section id="opiniones" className="section section--warm">
      <div className="container">
        <div className="testimonials__header">
          <span className="label">{label}</span>
          <h2 className="h2">{title}</h2>
        </div>
        <div className="testimonials__grid">
          {items.map((item, i) => (
            <div key={i} className="testi-card">
              <QuoteIcon className="testi-quote-icon" />
              <p className="testi-text">{item.text}</p>
              <span className="testi-author">{item.author}</span>
            </div>
          ))}
        </div>
        <p className="testimonials__note">{note}</p>
        <div className="testimonials__cta">
          <a
            href={DOCTORALIA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <DoctoraliaIcon />
            {ctaProfile}
          </a>
          <a
            href={DOCTORALIA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            {ctaReviews}
          </a>
        </div>
      </div>
    </section>
  );
}

function QuoteIcon({ className }) {
  return (
    <svg className={className} width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
    </svg>
  );
}

function DoctoraliaIcon() {
  return (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  );
}
