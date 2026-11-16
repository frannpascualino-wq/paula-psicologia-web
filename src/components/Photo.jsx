export default function Photo({ photo, alt, sizes, className = '', eager = false }) {
  if (!photo) return null;
  const srcSet = photo.webp.map(([src, width]) => `${src} ${width}w`).join(', ');

  return (
    <picture className={`photo${className ? ` ${className}` : ''}`}>
      <source type="image/webp" srcSet={srcSet} sizes={sizes} />
      <img
        src={photo.jpg}
        alt={alt}
        width={photo.width}
        height={photo.height}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
      />
    </picture>
  );
}
