// Small hand-drawn line icons — kept as inline SVG so there's no
// external icon-library dependency.
export function Icon({ name, ...props }) {
  const common = {
    width: 30,
    height: 30,
    viewBox: '0 0 30 30',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.4,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    ...props,
  }

  switch (name) {
    case 'target':
      return (
        <svg {...common}>
          <circle cx="15" cy="15" r="11" />
          <circle cx="15" cy="15" r="6" />
          <circle cx="15" cy="15" r="1.4" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'layers':
      return (
        <svg {...common}>
          <path d="M15 3 27 10 15 17 3 10Z" />
          <path d="M3 16l12 7 12-7" />
          <path d="M3 22l12 7 12-7" />
        </svg>
      )
    case 'scale':
      return (
        <svg {...common}>
          <rect x="9" y="9" width="12" height="12" rx="2" />
          <path d="M25 11V5h-6" />
          <path d="M5 19v6h6" />
          <path d="M25 5l-8 8" />
          <path d="M5 25l8-8" />
        </svg>
      )
    case 'shield':
      return (
        <svg {...common}>
          <path d="M15 3l10 4v7c0 7-4.5 11-10 13-5.5-2-10-6-10-13V7Z" />
          <path d="M10.5 15l3 3 6-6.5" />
        </svg>
      )
    default:
      return null
  }
}
