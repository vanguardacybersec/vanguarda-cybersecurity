import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-blue-500/5" />

      <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] rounded-full bg-sky-500/5 blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-3xl" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <span
              className="inline-block text-sky-400 text-sm font-semibold tracking-wider uppercase mb-6 animate-fade-in px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20"
            >
              Consultoria em Cibersegurança
            </span>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-slide-up text-balance"
            >
              Protegemos sua infraestrutura{' '}
              <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                antes que ela seja o próximo alvo.
              </span>
            </h1>

            <p
              className="text-lg text-slate-400 leading-relaxed mb-10 animate-slide-up animate-delay-100 text-balance"
            >
              A Vanguarda Security oferece serviços especializados em segurança ofensiva, monitoramento
              contínuo e avaliação de ambientes corporativos. Sua empresa protegida por quem entende
              do assunto.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animate-delay-200">
              <Link
                to="/contato"
                className="btn btn-primary text-base px-8 py-4 justify-center"
              >
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="#servicos"
                className="btn btn-secondary text-base px-8 py-4 justify-center"
              >
                Conhecer Serviços
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center animate-fade-in animate-delay-300">
            <div className="relative w-[500px] h-[500px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-500/10 via-transparent to-blue-500/10 blur-2xl animate-pulse-glow" />

              <svg viewBox="0 0 500 500" className="w-full h-full animate-float" aria-hidden="true">
                <defs>
                  <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4" />
                  </linearGradient>
                  <linearGradient id="g2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
                  </linearGradient>
                  <linearGradient id="g3" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6" />
                  </linearGradient>
                </defs>

                <circle cx="250" cy="250" r="180" fill="none" stroke="url(#g1)" strokeWidth="1.5" opacity="0.5">
                  <animateTransform attributeName="transform" type="rotate" from="0 250 250" to="360 250 250" dur="60s" repeatCount="indefinite" />
                </circle>
                <circle cx="250" cy="250" r="130" fill="none" stroke="url(#g2)" strokeWidth="1" opacity="0.4">
                  <animateTransform attributeName="transform" type="rotate" from="360 250 250" to="0 250 250" dur="45s" repeatCount="indefinite" />
                </circle>
                <circle cx="250" cy="250" r="80" fill="none" stroke="url(#g3)" strokeWidth="1" opacity="0.3">
                  <animateTransform attributeName="transform" type="rotate" from="0 250 250" to="360 250 250" dur="30s" repeatCount="indefinite" />
                </circle>

                <circle cx="250" cy="70" r="4" fill="#0ea5e9" opacity="0.8" />
                <circle cx="400" cy="150" r="3" fill="#3b82f6" opacity="0.6" />
                <circle cx="430" cy="300" r="4" fill="#8b5cf6" opacity="0.5" />
                <circle cx="330" cy="420" r="3" fill="#0ea5e9" opacity="0.6" />
                <circle cx="150" cy="430" r="4" fill="#3b82f6" opacity="0.7" />
                <circle cx="70" cy="180" r="3" fill="#8b5cf6" opacity="0.5" />
                <circle cx="120" cy="80" r="2.5" fill="#0ea5e9" opacity="0.4" />

                <circle cx="250" cy="250" r="3" fill="#0ea5e9" opacity="0.9">
                  <animate attributeName="r" values="3;6;3" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.9;0.4;0.9" dur="3s" repeatCount="indefinite" />
                </circle>

                <path d="M 220 220 L 250 170 L 280 220" fill="none" stroke="url(#g1)" strokeWidth="2" opacity="0.6">
                  <animateTransform attributeName="transform" type="translate" values="0,0;10,-5;0,0" dur="8s" repeatCount="indefinite" />
                </path>
                <path d="M 220 280 L 250 330 L 280 280" fill="none" stroke="url(#g2)" strokeWidth="2" opacity="0.6">
                  <animateTransform attributeName="transform" type="translate" values="0,0;-10,5;0,0" dur="8s" repeatCount="indefinite" />
                </path>
                <path d="M 200 250 L 150 250 L 200 230" fill="none" stroke="url(#g3)" strokeWidth="2" opacity="0.5">
                  <animateTransform attributeName="transform" type="translate" values="0,0;-8,8;0,0" dur="10s" repeatCount="indefinite" />
                </path>
                <path d="M 300 250 L 350 250 L 300 270" fill="none" stroke="url(#g1)" strokeWidth="2" opacity="0.5">
                  <animateTransform attributeName="transform" type="translate" values="0,0;8,-8;0,0" dur="10s" repeatCount="indefinite" />
                </path>

                <line x1="200" y1="200" x2="300" y2="300" stroke="#0ea5e9" strokeWidth="0.5" opacity="0.2" />
                <line x1="300" y1="200" x2="200" y2="300" stroke="#3b82f6" strokeWidth="0.5" opacity="0.2" />
                <line x1="200" y1="250" x2="300" y2="250" stroke="#8b5cf6" strokeWidth="0.5" opacity="0.2" />
                <line x1="250" y1="200" x2="250" y2="300" stroke="#0ea5e9" strokeWidth="0.5" opacity="0.2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}