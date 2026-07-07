import { useState, type FormEvent } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import FadeIn from '../components/FadeIn'

export default function Contato() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="relative pt-32 pb-20 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-blue-500/5" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <FadeIn>
            <span className="inline-block text-sky-400 text-sm font-semibold tracking-wider uppercase mb-4 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20">
              Contato
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl">
              Entre em contato
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
              Preencha o formulário abaixo ou utilize nossos canais de atendimento. Nossa equipe
              retornará em até 24 horas.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {submitted ? (
                <FadeIn>
                  <div className="bg-slate-900 rounded-2xl border border-sky-500/20 p-12 text-center">
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-sky-500/20 to-blue-500/20 flex items-center justify-center mb-6">
                      <CheckCircle className="w-8 h-8 text-sky-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-3">Mensagem enviada!</h2>
                    <p className="text-slate-400">
                      Obrigado pelo contato! Nossa equipe analisará sua solicitação e retornará em breve.
                    </p>
                  </div>
                </FadeIn>
              ) : (
                <FadeIn>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="nome" className="block text-sm font-medium text-slate-300 mb-2">
                          Nome *
                        </label>
                        <input
                          type="text"
                          id="nome"
                          required
                          className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                          placeholder="Seu nome completo"
                        />
                      </div>
                      <div>
                        <label htmlFor="empresa" className="block text-sm font-medium text-slate-300 mb-2">
                          Empresa
                        </label>
                        <input
                          type="text"
                          id="empresa"
                          className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                          placeholder="Nome da empresa"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                          E-mail *
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                          placeholder="seu@email.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="telefone" className="block text-sm font-medium text-slate-300 mb-2">
                          Telefone
                        </label>
                        <input
                          type="tel"
                          id="telefone"
                          className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                          placeholder="(11) 99999-9999"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="assunto" className="block text-sm font-medium text-slate-300 mb-2">
                        Assunto *
                      </label>
                      <select
                        id="assunto"
                        required
                        className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                      >
                        <option value="">Selecione um assunto</option>
                        <option value="pentest">Pentest</option>
                        <option value="soc">SOC</option>
                        <option value="analise">Análise de Segurança</option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="mensagem" className="block text-sm font-medium text-slate-300 mb-2">
                        Mensagem *
                      </label>
                      <textarea
                        id="mensagem"
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors resize-none"
                        placeholder="Descreva sua necessidade ou projeto..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary text-base px-8 py-4"
                    >
                      Enviar Mensagem
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                </FadeIn>
              )}
            </div>

            <div>
              <FadeIn direction="right">
                <div className="space-y-6">
                  <div className="bg-slate-900 rounded-xl border border-slate-800 p-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-sky-500/20 to-blue-500/20 flex items-center justify-center mb-4">
                      <Mail className="w-6 h-6 text-sky-400" />
                    </div>
                  <h3 className="text-white font-semibold mb-2">E-mail</h3>
                  <a href="mailto:vanguardacybersecurity@gmail.com" className="text-slate-400 hover:text-sky-400 transition-colors text-sm">
                    vanguardacybersecurity@gmail.com
                    </a>
                  </div>

                  <div className="bg-slate-900 rounded-xl border border-slate-800 p-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-sky-500/20 to-blue-500/20 flex items-center justify-center mb-4">
                      <Phone className="w-6 h-6 text-sky-400" />
                    </div>
                  <h3 className="text-white font-semibold mb-2">Telefone</h3>
                  <a href="tel:+5522996138603" className="text-slate-400 hover:text-sky-400 transition-colors text-sm">
                    +55 22 996138603
                    </a>
                  </div>

                  <div className="bg-slate-900 rounded-xl border border-slate-800 p-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-sky-500/20 to-blue-500/20 flex items-center justify-center mb-4">
                      <MapPin className="w-6 h-6 text-sky-400" />
                    </div>
                  <h3 className="text-white font-semibold mb-2">Localização</h3>
                  <p className="text-slate-400 text-sm">
                    Bom Jesus do Itabapoana - RJ
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}