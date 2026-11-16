import { DOCTORALIA_URL, DOCTORALIA_WIDGET, DOCTORALIA_REVIEWS_WIDGET } from '../config';
import SectionHeading from './SectionHeading';
import { ArrowIcon } from './Icons';

export default function Testimonials({ t }) {
  const { label, title, lead, ctaReviews } = t.testimonials;
  const widget = DOCTORALIA_REVIEWS_WIDGET;

  return (
    <section id="opiniones" className="section testimonials">
      <div className="container">
        <div className="reviews">
          <div className="reviews__intro">
            <SectionHeading index="06" label={label} title={title} lead={lead} variant="sh--flush" />
            <a href={DOCTORALIA_URL} target="_blank" rel="noopener noreferrer" className="link-arrow reviews__link">
              {ctaReviews}
              <ArrowIcon />
            </a>
          </div>

          {widget && (
            <div className="reviews__card" data-integration="doctoralia-reviews" data-reveal>
              <a
                id="zl-url-opiniones"
                className="zl-url"
                href={DOCTORALIA_URL}
                rel="nofollow noopener noreferrer"
                target="_blank"
                data-zlw-doctor={DOCTORALIA_WIDGET.doctorId}
                data-zlw-type={widget.type}
                data-zlw-opinion={String(widget.opinion)}
                data-zlw-hide-branding="true"
                data-zlw-saas-only="true"
                data-zlw-a11y-title={widget.a11yTitle}
              >
                {ctaReviews}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
