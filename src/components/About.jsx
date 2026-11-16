import { DOCTORALIA_URL } from '../config';
import { doctorData } from '../data/doctorData';
import SectionHeading from './SectionHeading';
import Photo from './Photo';
import Sprig from './Sprig';
import { ArrowIcon } from './Icons';

export default function About({ t }) {
  const a = t.about;
  const photo = doctorData.assets.officeDetailPhoto;

  return (
    <section id="sobre-mi" className="section section--paper about">
      <div className="container">
        <div className="about__grid">
          <div className="about__aside">
            <SectionHeading index="01" label={a.label} title={a.title} variant="sh--flush" />
            {photo && (
              <div className="about__figure">
                <div className="about__photo" data-reveal="image">
                  <Photo photo={photo} alt={a.photoAlt || ''} sizes="(max-width: 900px) 70vw, 380px" />
                </div>
                <Sprig className="about__sprig" />
              </div>
            )}
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
