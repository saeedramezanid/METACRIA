type IconProps = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const paths = glyphs[name] ?? glyphs.layers;
  return (
    <svg {...base} className={className}>
      {paths}
    </svg>
  );
}

const glyphs: Record<string, React.ReactNode> = {
  layers: (
    <>
      <path d="M12 3 3 7.5 12 12l9-4.5L12 3Z" />
      <path d="M3 12.5 12 17l9-4.5" />
      <path d="M3 17.5 12 22l9-4.5" />
    </>
  ),
  device: (
    <>
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
      <path d="M10.5 6h3.5" />
      <circle cx="12" cy="17.5" r="1" />
    </>
  ),
  server: (
    <>
      <rect x="3" y="4" width="18" height="7" rx="2" />
      <rect x="3" y="13" width="18" height="7" rx="2" />
      <path d="M7 7.5h.01M7 16.5h.01" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3Z" />
      <path d="M18.5 16.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z" />
    </>
  ),
  arrow: (
    <>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  check: <path d="m5 13 4.5 4.5L19 7.5" />,
  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  ),
  close: (
    <>
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.5 9.5h17M3.5 14.5h17" />
      <path d="M12 3c2.4 2.6 3.6 5.6 3.6 9S14.4 18.4 12 21c-2.4-2.6-3.6-5.6-3.6-9S9.6 5.6 12 3Z" />
    </>
  ),
  quote: (
    <path d="M9 6c-2.8 1.3-4.4 3.6-4.4 6.4V18h5.6v-5.6H7.2c0-1.9.8-3.3 2.4-4.2L9 6Zm9.4 0c-2.8 1.3-4.4 3.6-4.4 6.4V18h5.6v-5.6h-3c0-1.9.8-3.3 2.4-4.2L18.4 6Z" />
  ),
  pin: (
    <>
      <path d="M12 21s6.5-6.1 6.5-10.6A6.5 6.5 0 0 0 5.5 10.4C5.5 14.9 12 21 12 21Z" />
      <circle cx="12" cy="10.2" r="2.4" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7.5 8 5.5 8-5.5" />
    </>
  ),
  phone: (
    <path d="M6.5 3.5h3l1.5 4-2 1.5a11 11 0 0 0 4.5 4.5l1.5-2 4 1.5v3c0 1.4-1.2 2.5-2.6 2.4C9.4 18.2 5.8 14.6 4.1 6.1 4 4.7 5.1 3.5 6.5 3.5Z" />
  ),
};

export type { IconProps };
