import { DOCTORALIA_URL } from '../config';

export default function About({ t }) {
  const a = t.about;

  return (
    <section id="sobre-mi" className="about-section">
      <div className="about-bg" aria-hidden="true">
        <div className="about-bg__orb about-bg__orb--a" />
        <div className="about-bg__orb about-bg__orb--b" />
        <BotanicalLines />
      </div>

      <div className="container">
        <div className="about-layout about-layout--solo">

          <div className="about-main">
            <div className="about-card">
              <div className="about-card__ornament" aria-hidden="true">
                <div className="about-card__ornament-line" />
                <SprigIcon />
                <div className="about-card__ornament-line" />
              </div>

              <div className="about-card__body">
                <p className="about-intro">{a.p1}</p>
                <div className="about-rule" aria-hidden="true" />
                <p className="about-para">{a.p2}</p>
                <p className="about-para">{a.p3}</p>
                {a.p4 && <p className="about-para">{a.p4}</p>}
                {a.p5 && <p className="about-para">{a.p5}</p>}
              </div>
            </div>

            <a
              href={DOCTORALIA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary about-cta"
            >
              {a.cta}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

function SprigIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="about-card__sprig">
      <line x1="14" y1="26" x2="14" y2="4" stroke="#C4714A" strokeWidth="1" strokeLinecap="round"/>
      <path d="M14 20 C11 17 7 17 5 13 C9 13 13 15 14 19" fill="none" stroke="#C4714A" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 15 C17 12 21 12 23 8 C19 8 15 10 14 14" fill="none" stroke="#C4714A" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 23 C11.5 20.5 8 21 6 18 C10 17.5 13.5 19 14 22" fill="none" stroke="#C4714A" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function BotanicalLines() {
  return (
    <svg className="about-bg__botanical" viewBox="0 0 500 500" fill="none" aria-hidden="true">
      <path d="M 460 460 C 360 340 260 380 190 260 S 110 120 30 10" stroke="#2C3B35" strokeWidth="0.7" strokeLinecap="round"/>
      <path d="M 490 380 C 400 300 320 340 260 240 S 190 130 100 30" stroke="#C4714A" strokeWidth="0.5" strokeLinecap="round"/>
      <ellipse cx="330" cy="370" rx="20" ry="9" transform="rotate(-35 330 370)" stroke="#2C3B35" strokeWidth="0.6"/>
      <ellipse cx="270" cy="300" rx="16" ry="7" transform="rotate(-25 270 300)" stroke="#2C3B35" strokeWidth="0.5"/>
      <ellipse cx="360" cy="430" rx="14" ry="6" transform="rotate(-45 360 430)" stroke="#C4714A" strokeWidth="0.5"/>
      <ellipse cx="410" cy="310" rx="18" ry="8" transform="rotate(-20 410 310)" stroke="#2C3B35" strokeWidth="0.5"/>
      <path d="M 200 490 C 240 420 210 360 260 310" stroke="#2C3B35" strokeWidth="0.4" strokeLinecap="round"/>
      <ellipse cx="255" cy="305" rx="12" ry="5" transform="rotate(-60 255 305)" stroke="#2C3B35" strokeWidth="0.4"/>
    </svg>
  );
}
