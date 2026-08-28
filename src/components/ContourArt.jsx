// A deterministic, generative topographic-line pattern — the recurring
// signature motif for Venue Gypsy's destination "atlas" cards. No stock
// photography; each destination gets its own contour "fingerprint" derived
// from a numeric seed so it renders identically every time.

function seededWave(seed, i) {
  const a = Math.sin(seed * 12.9898 + i * 78.233) * 43758.5453
  return a - Math.floor(a)
}

function buildPath(seed, index, width, height) {
  const points = 10
  const baseY = (height / 8) * (index + 1)
  const amp = 10 + seededWave(seed, index) * 26
  const freq = 1.2 + seededWave(seed, index + 50) * 1.6
  const phase = seededWave(seed, index + 100) * Math.PI * 2
  let d = `M 0 ${baseY}`
  for (let p = 0; p <= points; p++) {
    const x = (width / points) * p
    const y = baseY + Math.sin((p / points) * Math.PI * 2 * freq + phase) * amp
    d += ` L ${x.toFixed(1)} ${y.toFixed(1)}`
  }
  return d
}

export default function ContourArt({ seed = 1, className = '', color = 'currentColor', lines = 7 }) {
  const width = 400
  const height = 300
  const paths = Array.from({ length: lines }, (_, i) => buildPath(seed, i, width, height))
  const cx = 60 + seededWave(seed, 200) * (width - 120)
  const cy = 60 + seededWave(seed, 201) * (height - 120)

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {paths.map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke={color}
          strokeWidth={i === Math.floor(lines / 2) ? 1.1 : 0.6}
          opacity={0.16 + (i % 3) * 0.06}
        />
      ))}
      <circle cx={cx} cy={cy} r="2.2" fill={color} opacity="0.85" />
      <circle cx={cx} cy={cy} r="7" fill="none" stroke={color} strokeWidth="0.5" opacity="0.6" />
    </svg>
  )
}
