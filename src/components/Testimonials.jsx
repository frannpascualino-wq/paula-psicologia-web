import { DOCTORALIA_URL } from '../config';
import SectionHeading from './SectionHeading';
import { ArrowIcon } from './Icons';

export default function Testimonials({ t }) {
  const { label, title, items, note, ctaProfile, ctaReviews } = t.testimonials;

  return (
    <section id="opiniones" className="section testimonials">
      <div className="container">
        <SectionHeading index="06" label={label} title={title} />
        <div className="testimonials__grid h-scroll" data-reveal="stagger">
          {items.map((item, i) => (
            <figure key={i} className="testi-card">
              <span className="testi-quote-icon" aria-hidden="true">“</span>
              <blockquote className="testi-text">{item.text}</blockquote>
              <figcaption className="testi-author">{item.author}</figcaption>
            </figure>
          ))}
        </div>
        <div className="testimonials__foot" data-reveal>
          <p className="testimonials__note">{note}</p>
          <div className="testimonials__cta">
            <a href={DOCTORALIA_URL} target="_blank" rel="noopener noreferrer" className="link-arrow">
              {ctaProfile}
              <ArrowIcon />
            </a>
            <a href={DOCTORALIA_URL} target="_blank" rel="noopener noreferrer" className="link-arrow">
              {ctaReviews}
              <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
