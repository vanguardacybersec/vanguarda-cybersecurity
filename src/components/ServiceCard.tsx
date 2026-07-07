import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  href: string
  index?: number
}

export default function ServiceCard({ icon, title, description, href, index = 0 }: ServiceCardProps) {
  return (
    <Link
      to={href}
      className="group relative block p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-sky-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-sky-500/5 overflow-hidden"
      style={{
        animation: `slideUp 0.6s ease-out ${index * 0.15}s both`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-500/20 to-blue-500/20 flex items-center justify-center mb-6 group-hover:from-sky-500/30 group-hover:to-blue-500/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
          <div className="text-sky-400 group-hover:text-sky-300 transition-colors duration-500" style={{ width: 28, height: 28 }}>
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-slate-400 mb-6 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
          {description}
        </p>
        <span className="inline-flex items-center gap-2 text-sky-400 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
          Saiba mais
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </span>
      </div>
    </Link>
  )
}