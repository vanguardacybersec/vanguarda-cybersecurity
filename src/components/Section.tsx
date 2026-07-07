export default function Section({
  id,
  className = '',
  children,
  dark = false,
  container = true,
}: {
  id?: string
  className?: string
  children: React.ReactNode
  dark?: boolean
  container?: boolean
}) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${dark ? 'bg-slate-900' : 'bg-slate-950'} ${className}`}
    >
      {container ? (
        <div className="max-w-7xl mx-auto px-6">{children}</div>
      ) : (
        children
      )}
    </section>
  )
}

export function SectionHeader({
  subtitle,
  title,
  description,
  align = 'center',
}: {
  subtitle?: string
  title: string
  description?: string
  align?: 'center' | 'left'
}) {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : ''}`}>
      {subtitle && (
        <span className="inline-block text-sky-400 text-sm font-semibold tracking-wider uppercase mb-3">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
        {title}
      </h2>
      {description && (
        <p className="text-slate-400 text-lg max-w-2xl mx-auto text-balance">
          {description}
        </p>
      )}
    </div>
  )
}