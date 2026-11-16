const leafYs = [262, 212, 162, 112, 64];

function leafPath(y, side) {
  const s = side === 'left' ? -1 : 1;
  const x = 100;
  return `M${x} ${y} C${x + s * 30} ${y - 6} ${x + s * 48} ${y - 30} ${x + s * 54} ${y - 56} C${x + s * 24} ${y - 52} ${x + s * 4} ${y - 30} ${x} ${y}`;
}

export default function Sprig({ className = '' }) {
  return (
    <svg
      className={`sprig${className ? ` ${className}` : ''}`}
      viewBox="0 0 200 320"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path className="sprig__stem" pathLength="1" d="M100 312 C96 240 106 170 100 18" />
      {leafYs.map((y, i) => (
        <path
          key={y}
          className={`sprig__leaf sprig__leaf--${i + 1}`}
          pathLength="1"
          d={leafPath(y, i % 2 === 0 ? 'left' : 'right')}
        />
      ))}
    </svg>
  );
}
