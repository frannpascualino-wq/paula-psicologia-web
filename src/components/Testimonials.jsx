import { DOCTORALIA_URL } from '../config';
import SectionHeading from './SectionHeading';
import { ArrowIcon, StarIcon } from './Icons';

export default function Testimonials({ t }) {
  const { label, title, note, ctaProfile, ctaReviews, ratingLabel, reviewsText } = t.testimonials;
  const doctoralia = t.hero.doctoralia || {};
  const rating = Number(doctoralia.rating || 5);
  const filled = Math.max(1, Math.min(5, Math.round(rating)));

  return (
    <section id="opiniones" className="section testimonials">
      <div className="container">
        <div className="reviews">
          <SectionHeading index="06" label={label} title={title} variant="sh--flush" />

          <div className="reviews__card" data-reveal>
            <p className="reviews__label">{ratingLabel}</p>
            <div className="reviews__score">
              <span className="reviews__number">{rating.toFixed(1).replace('.', ',')}</span>
              <span className="reviews__stars" aria-label={`${rating} / 5`}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < filled ? 'is-filled' : ''}><StarIcon size={18} /></span>
                ))}
              </span>
            </div>
            <p className="reviews__count">{reviewsText}</p>
            <p className="reviews__note">{note}</p>
            <div className="reviews__cta">
              <a href={DOCTORALIA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                {ctaReviews}
                <ArrowIcon />
              </a>
              <a href={DOCTORALIA_URL} target="_blank" rel="noopener noreferrer" className="link-arrow">
                {ctaProfile}
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
