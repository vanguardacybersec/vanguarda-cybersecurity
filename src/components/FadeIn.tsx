import { useEffect, useRef, useState, createElement, ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
  duration?: number
  as?: keyof JSX.IntrinsicElements
}

export default function FadeIn({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 600,
  as = 'div',
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

  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up': return 'translateY(30px)'
        case 'left': return 'translateX(-30px)'
        case 'right': return 'translateX(30px)'
        default: return 'none'
      }
    }
    return 'none'
  }

  return createElement(as, {
    ref,
    className,
    style: {
      opacity: isVisible ? 1 : 0,
      transform: getTransform(),
      transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
    },
  }, children)
}