const base = {
  fill: 'none',
  viewBox: '0 0 24 24',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

export function ArrowIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} {...base}>
      <path d="M4 12h16M14 6l6 6-6 6" />
    </svg>
  );
}

export function PinIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} {...base}>
      <path d="M20 10c0 6.5-8 12-8 12s-8-5.5-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function ScreenIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} {...base}>
      <rect x="2.5" y="4" width="19" height="13" rx="1.5" />
      <path d="M8.5 20.5h7M12 17v3.5" />
    </svg>
  );
}

export function GlobeIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} {...base}>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M2.5 12h19M12 2.5c2.600 2.700 3.900 5.900 3.900 9.5s-1.300 6.800-3.900 9.5c-2.600-2.700-3.900-5.900-3.900-9.5s1.300-6.800 3.900-9.5z" />
    </svg>
  );
}

export function PeopleIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} {...base}>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20v-1a6.5 6.5 0 0 1 13 0v1" />
      <path d="M16 4.700a3.5 3.5 0 0 1 0 6.600M18.5 14.300a6 6 0 0 1 3 5.200v.5" />
    </svg>
  );
}

export function CalendarIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} {...base}>
      <rect x="3" y="4.5" width="18" height="16.5" rx="1.5" />
      <path d="M16 2.5v4M8 2.5v4M3 10h18" />
    </svg>
  );
}

export function ChatIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} {...base}>
      <path d="M21 11.5a8.400 8.400 0 0 1-.9 3.800 8.5 8.5 0 0 1-7.600 4.700 8.400 8.400 0 0 1-3.800-.9L3 21l1.900-5.700a8.400 8.400 0 0 1-.9-3.800 8.5 8.5 0 0 1 4.700-7.600 8.400 8.400 0 0 1 3.800-.9h.5a8.5 8.5 0 0 1 8 8v.5z" />
    </svg>
  );
}

export function PhoneIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} {...base}>
      <path d="M22 16.900v3a2 2 0 0 1-2.200 2 19.800 19.800 0 0 1-8.600-3.100A19.5 19.5 0 0 1 4.700 12 19.800 19.800 0 0 1 1.600 3.200 2 2 0 0 1 3.600 1h3a2 2 0 0 1 2 1.700c.1 1 .4 1.900.7 2.800a2 2 0 0 1-.5 2.100L7.900 8.900a16 16 0 0 0 6.200 6.200l.9-.9a2 2 0 0 1 2.100-.5c.9.300 1.800.6 2.800.7a2 2 0 0 1 2.100 2.5z" />
    </svg>
  );
}

export function MailIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} {...base}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="1.5" />
      <path d="M3 6l9 7 9-7" />
    </svg>
  );
}

export function VideoIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} {...base}>
      <rect x="1.5" y="5.5" width="14.5" height="13" rx="1.5" />
      <path d="M22.5 7.5l-6.5 4.5 6.5 4.5z" />
    </svg>
  );
}

export function CheckIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} {...base} strokeWidth={2}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function InfoIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} {...base}>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M12 11v5.5M12 7.600v.1" />
    </svg>
  );
}

export function StarIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.800l2.800 5.900 6.400.8-4.700 4.5 1.200 6.400L12 17.300l-5.700 3.100 1.200-6.400L2.800 9.5l6.400-.8z" />
    </svg>
  );
}
