import { useEffect, useState } from 'react';
import { DOCTORALIA_URL, WHATSAPP_URL, EMAIL, LOGO_URL, DOCTORALIA_WIDGET } from '../config';

const INITIAL = { name: '', email: '', phone: '', modality: '', reason: '' };

export default function Booking({ t }) {
  const { label, title, subtitle, calendarCta, bookingHelper, whatsappCta, whatsappNote, orDivider, features, form } = t.booking;
  const [values, setValues]   = useState(INITIAL);
  const [errors, setErrors]   = useState({});
  const [sent, setSent]       = useState(false);

  useEffect(() => {
    if (document.getElementById('zl-widget-s')) return;
    const js = document.createElement('script');
    js.id = 'zl-widget-s';
    js.src = 'https://platform.docplanner.com/js/widget.js';
    js.async = true;
    document.body.appendChild(js);
  }, []);

  const update = (field, val) => {
    setValues(v => ({ ...v, [field]: val }));
    if (errors[field]) setErrors(e => ({ ...e, [field]: '' }));
  };

  const validate = () => {
    const e = {};
    if (!values.name.trim())                              e.name     = form.errors.nameRequired;
    if (!values.email.trim())                             e.email    = form.errors.emailRequired;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = form.errors.emailInvalid;
    if (!values.modality)                                 e.modality = form.errors.modalityRequired;
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    if (!EMAIL) {
      window.open(DOCTORALIA_URL, '_blank', 'noopener,noreferrer');
      setSent(true);
      return;
    }

    const subject = encodeURIComponent('Consulta terapéutica — ' + values.name);
    const body = encodeURIComponent(
      `Nombre: ${values.name}\nCorreo: ${values.email}\nTeléfono: ${values.phone}\nModalidad: ${values.modality}\n\n${values.reason}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="agenda" className="section booking">
      <div className="container">
        <div className="booking__inner">
          <div className="booking__info">
            <span className="label">{label}</span>
            <h2 className="h2">{title}</h2>
            <p className="lead">{subtitle}</p>

            <div className="booking__actions">
              <a
                href={DOCTORALIA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                <CalIcon /> {calendarCta}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-lg"
              >
                <WaIcon /> {whatsappCta}
              </a>
            </div>
            {bookingHelper && <p className="booking__helper">{bookingHelper}</p>}
            {whatsappNote && <p className="booking__whatsapp-note">{whatsappNote}</p>}

            <div className="booking__features">
              {features.map((f, i) => (
                <div key={i} className="booking__feature">
                  <span className="booking__feature-icon"><CheckIcon /></span>
                  {f}
                </div>
              ))}
            </div>

            <div className="booking__divider">{orDivider}</div>
          </div>

          <div className="booking__right">
            <div className="booking__widget-card" data-integration="doctoralia-widget">
              <div className="booking__widget-brand">
                <img
                  src={LOGO_URL}
                  alt={form.logoAlt || 'Logo'}
                  className="booking__widget-logo"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <a
                id="zl-url"
                className="zl-url"
                href={DOCTORALIA_URL}
                rel="nofollow noopener noreferrer"
                target="_blank"
                data-zlw-doctor={DOCTORALIA_WIDGET.doctorId}
                data-zlw-type={DOCTORALIA_WIDGET.type}
                data-zlw-opinion={String(DOCTORALIA_WIDGET.opinion)}
                data-zlw-hide-branding={String(DOCTORALIA_WIDGET.hideBranding)}
                data-zlw-saas-only={String(DOCTORALIA_WIDGET.saasOnly)}
                data-zlw-a11y-title={DOCTORALIA_WIDGET.a11yTitle}
              >
                {DOCTORALIA_WIDGET.ctaText}
              </a>
            </div>

            <div className="booking__form-card">
              {sent ? (
                <div className="booking__success">{form.success}</div>
              ) : (
                <form className="booking__form" onSubmit={handleSubmit} noValidate>
                  <div className="booking__form-row">
                    <Field
                      label={form.name}
                      error={errors.name}
                      input={<input type="text" className={`form-input${errors.name ? ' error' : ''}`} value={values.name} onChange={e => update('name', e.target.value)} autoComplete="name" />}
                    />
                    <Field
                      label={form.email}
                      error={errors.email}
                      input={<input type="email" className={`form-input${errors.email ? ' error' : ''}`} value={values.email} onChange={e => update('email', e.target.value)} autoComplete="email" />}
                    />
                  </div>
                  <div className="booking__form-row">
                    <Field
                      label={form.phone}
                      error={errors.phone}
                      input={<input type="tel" className="form-input" value={values.phone} onChange={e => update('phone', e.target.value)} autoComplete="tel" />}
                    />
                    <Field
                      label={form.modality}
                      error={errors.modality}
                      input={
                        <select className={`form-select${errors.modality ? ' error' : ''}`} value={values.modality} onChange={e => update('modality', e.target.value)}>
                          {form.modalityOptions.map(o => (
                            <option key={o.value} value={o.value}>{o.label}</option>
                          ))}
                        </select>
                      }
                    />
                  </div>
                  <Field
                    label={form.reason}
                    input={<textarea className="form-textarea" value={values.reason} onChange={e => update('reason', e.target.value)} placeholder={form.reasonPlaceholder} />}
                  />
                  <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                    {form.submit}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, error, input }) {
  return (
    <div className="form-group">
      <label className="form-label">{label}</label>
      {input}
      {error && <span className="form-error">{error}</span>}
    </div>
  );
}

function CalIcon() {
  return (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  );
}
function WaIcon() {
  return (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}
