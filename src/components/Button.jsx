import { Link } from 'react-router-dom'

const variants = {
  primary: 'bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary-deep)]',
  accent: 'bg-[var(--brand-accent)] text-[var(--brand-text)] hover:brightness-95',
  outline:
    'border border-[var(--brand-text)]/30 text-[var(--brand-text)] hover:border-[var(--brand-text)] hover:bg-[var(--brand-text)] hover:text-[var(--brand-bg)]',
  light: 'border border-white/60 text-white hover:bg-white hover:text-black',
  lightSolid: 'bg-white text-black hover:bg-white/90',
}

/** Pill button shared by both brands; `to` renders a router Link, `href` an anchor. */
export default function Button({ to, href, variant = 'primary', className = '', children, ...rest }) {
  const cls = `inline-flex items-center justify-center gap-3 rounded-full px-7 py-3.5 eyebrow transition-all duration-300 ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" className={cls} {...rest}>
      {children}
    </button>
  )
}

export function Arrow({ className = '' }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
      className={className}
    >
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
