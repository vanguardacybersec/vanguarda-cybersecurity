import { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
  target: number
  suffix?: string
  label: string
  duration?: number
}

export default function AnimatedCounter({ target, suffix = '', label, duration = 2000 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (ref.current) observer.unobserve(ref.current)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
    let start = 0
    const step = Math.ceil(target / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [visible, target, duration])

  return (
    <div ref={ref} className="text-center group">
      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-2 transition-all duration-500 group-hover:scale-110">
        {count}{suffix}
      </div>
      <div className="text-slate-400 text-sm">{label}</div>
    </div>
  )
}