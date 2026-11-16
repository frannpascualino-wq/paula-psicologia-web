import { doctorData } from '../data/doctorData';

export default function Interlude({ quote }) {
  const photo = doctorData.assets.interludePhoto;
  if (!quote) return null;

  return (
    <section className={`interlude${photo ? '' : ' interlude--plain'}`} aria-label={quote}>
      {photo && (
        <div className="interlude__media" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet={`${photo.webpSmall} 720w, ${photo.webp} 1448w`} sizes="100vw" />
            <img src={photo.jpg} alt="" width={photo.width} height={photo.height} loading="lazy" decoding="async" />
          </picture>
        </div>
      )}
      <div className="container">
        <p className="interlude__quote" data-reveal>{quote}</p>
      </div>
    </section>
  );
}
