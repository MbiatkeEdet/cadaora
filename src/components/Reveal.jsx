import { useEffect, useRef } from 'react'

/**
 * Fades a block in when it enters the viewport. On the brand pages it also fades
 * back out when you scroll up past it (leaves through the bottom), so it plays
 * again on the next pass down; elsewhere it reveals once.
 */
export default function Reveal({ as: Tag = 'div', className = '', delay = 0, children, ...rest }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-in')
      return undefined
    }
    const repeat = !!el.closest('.brand-cadaora, .brand-gypsy')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('is-in')
            if (!repeat) io.disconnect()
          } else if (repeat && entry.boundingClientRect.top > 0) {
            // scrolled back up past it: hide so it reveals again next time
            el.classList.remove('is-in')
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}
