import { useEffect, useRef, useState, type ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
  duration?: number
}

export default function FadeIn({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 600,
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
          if (ref.current) observer.unobserve(ref.current)
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [delay])

  const transform = !isVisible
    ? direction === 'up' ? 'translateY(30px)'
      : direction === 'left' ? 'translateX(-30px)'
      : direction === 'right' ? 'translateX(30px)'
      : 'none'
    : 'none'

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform,
        transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
      }}
    >
      {children}
    </div>
  )
}