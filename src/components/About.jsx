import { DOCTORALIA_URL } from '../config';
import SectionHeading from './SectionHeading';
import { ArrowIcon } from './Icons';

export default function About({ t }) {
  const a = t.about;

  return (
    <section id="sobre-mi" className="section section--paper about">
      <div className="container">
        <div className="about__grid">
          <div className="about__aside">
            <SectionHeading index="01" label={a.label} title={a.title} variant="sh--flush" />
          </div>

          <div className="about__body" data-reveal>
            <p className="about__intro">{a.p1}</p>
            <div className="about__text">
              <p>{a.p2}</p>
              <p>{a.p3}</p>
              {a.p4 && <p>{a.p4}</p>}
              {a.p5 && <p>{a.p5}</p>}
            </div>
            <a
              href={DOCTORALIA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="link-arrow about__cta"
            >
              {a.cta}
              <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
