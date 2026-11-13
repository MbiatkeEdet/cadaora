import { EMBLEM, WORDMARK } from './cadaoraLogoPaths.js'

// Official Cadaora marks (traced from the Studio Areca identity guideline).
// Every shape fills with currentColor, so colour comes from the parent:
// `text-midnight` gives the dark variant, `text-white` the light variant.

const NAME_HEIGHT = 73 // height of the CADAORA letters inside WORDMARK's 400-unit box

/** The C emblem: 22 feather blades. `animate` fans the blades open in sweep order. */
export default function CadaoraEmblem({ size = 48, animate = false, className = '', style }) {
  const height = Math.round((size * EMBLEM.height) / EMBLEM.width)
  return (
    <svg
      viewBox={`0 0 ${EMBLEM.width} ${EMBLEM.height}`}
      width={size}
      height={height}
      fill="currentColor"
      className={`${animate ? 'emblem-fan ' : ''}${className}`}
      style={animate ? { ...style, '--fan-origin': `${EMBLEM.cx}px ${EMBLEM.cy}px` } : style}
      aria-hidden="true"
    >
      {EMBLEM.blades.map((d, i) => (
        <path key={i} d={d} style={animate ? { animationDelay: `${i * 42}ms` } : undefined} />
      ))}
    </svg>
  )
}

const WORDMARK_HEIGHTS = { sm: 22, md: 34, lg: 64, xl: 92 }

/**
 * CADAORA wordmark with the EXQUISITE EVENTS line beneath it.
 * `sub={false}` crops to the name alone (for very small sizes where the subline would be illegible).
 * `animate` wipes the name in from the left, then fades the subline in.
 */
export function CadaoraWordmark({ size = 'md', sub = true, animate = false, delay = 0, className = '', style }) {
  const h = typeof size === 'number' ? size : WORDMARK_HEIGHTS[size]
  const vbH = sub ? WORDMARK.height : NAME_HEIGHT
  const w = Math.round((h * WORDMARK.width) / vbH)
  return (
    <svg
      viewBox={`0 0 ${WORDMARK.width} ${vbH}`}
      width={w}
      height={h}
      fill="currentColor"
      fillRule="evenodd"
      className={className}
      style={style}
      role="img"
      aria-label="Cadaora Exquisite Events"
    >
      <path d={WORDMARK.name} className={animate ? 'wordmark-wipe' : undefined} style={animate ? { animationDelay: `${delay}ms` } : undefined} />
      {sub && (
        <path
          d={WORDMARK.sub}
          className={animate ? 'wordmark-sub' : undefined}
          style={animate ? { animationDelay: `${delay + 450}ms` } : undefined}
        />
      )}
    </svg>
  )
}

/** Primary lockup: emblem beside the wordmark, as in the guideline. */
export function CadaoraLogo({ height = 56, className = '', style }) {
  return (
    <span className={`inline-flex items-center ${className}`} style={{ gap: height * 0.22, ...style }}>
      <CadaoraEmblem size={Math.round((height * EMBLEM.width) / EMBLEM.height)} />
      <CadaoraWordmark size={Math.round(height * 0.62)} />
    </span>
  )
}
