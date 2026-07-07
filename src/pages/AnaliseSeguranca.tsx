import { Link } from 'react-router-dom'
import { ArrowRight, FileSearch, Search, AlertTriangle, Target, ClipboardList, Shield, BarChart3, Layers } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import Section, { SectionHeader } from '../components/Section'

const beneficios = [
  {
    icon: <Search />,
    title: 'Visão Completa',
    description: 'Mapeamento detalhado de todo o ambiente corporativo, incluindo ativos, processos e políticas.',
  },
  {
    icon: <Target />,
    title: 'Identificação de Riscos',
    description: 'Descoberta de vulnerabilidades, falhas de configuração e não conformidades.',
  },
  {
    icon: <ClipboardList />,
    title: 'Recomendações Práticas',
    description: 'Orientações claras e acionáveis para correção e mitigação de cada risco identificado.',
  },
  {
    icon: <BarChart3 />,
    title: 'Priorização Inteligente',
    description: 'Classificação das vulnerabilidades por criticidade, impacto e probabilidade de exploração.',
  },
  {
    icon: <Shield />,
    title: 'Conformidade Normativa',
    description: 'Avaliação de aderência a padrões como ISO 27001, LGPD, PCI DSS e NIST.',
  },
  {
    icon: <Layers />,
    title: 'Roadmap de Segurança',
    description: 'Plano estratégico com metas de curto, médio e longo prazo para evolução da maturidade.',
  },
]

const etapas = [
  {
    step: '01',
    title: 'Levantamento de Ativos',
    description: 'Identificação e catalogação de todos os ativos de TI, sistemas e dados críticos.',
  },
  {
    step: '02',
    title: 'Análise de Vulnerabilidades',
    description: 'Varredura automatizada e manual para identificar falhas conhecidas e configurações inseguras.',
  },
  {
    step: '03',
    title: 'Avaliação de Riscos',
    description: 'Análise de probabilidade e impacto de cada vulnerabilidade no contexto do negócio.',
  },
  {
    step: '04',
    title: 'Recomendações',
    description: 'Elaboração de plano de ação com medidas corretivas e mitigatórias priorizadas.',
  },
  {
    step: '05',
    title: 'Relatório Final',
    description: 'Documento executivo e técnico com todo o diagnóstico, riscos e recomendações.',
  },
]

export default function AnaliseSeguranca() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-blue-500/5" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <FadeIn>
            <span className="inline-block text-sky-400 text-sm font-semibold tracking-wider uppercase mb-4 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20">
              Análise de Segurança
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl">
              Análise de Segurança:{' '}
              <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Diagnóstico completo do seu ambiente.
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
              A Análise de Segurança é uma avaliação abrangente do ambiente corporativo que identifica
              vulnerabilidades, riscos e não conformidades, fornecendo um plano de ação claro e priorizado
              para fortalecer a postura de segurança da sua empresa.
            </p>
          </FadeIn>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left">
            <h2 className="text-3xl font-bold text-white mb-6">
              Avaliação completa do ambiente
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                A <strong className="text-white">Análise de Segurança</strong> vai além de um simples
                scan de vulnerabilidades. Realizamos um diagnóstico profundo considerando pessoas,
                processos e tecnologia, identificando gaps de segurança que poderiam ser explorados.
              </p>
              <p>
                Nossa metodologia combina ferramentas automatizadas com validação manual realizada por
                especialistas certificados. Analisamos desde a infraestrutura de rede até as políticas
                de segurança, passando por aplicações, endpoints e controles de acesso.
              </p>
              <p>
                O resultado é um panorama completo e honesto da maturidade de segurança da sua empresa,
                com recomendações práticas e priorizadas de acordo com o risco real para o negócio.
              </p>
            </div>
          </FadeIn>
          <FadeIn direction="right">
            <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-sky-500/20 to-blue-500/20 flex items-center justify-center mb-6">
                <FileSearch className="w-8 h-8 text-sky-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">O que analisamos?</h3>
              <ul className="space-y-3">
                {[
                  { icon: <Shield />, text: 'Infraestrutura de rede e perímetro' },
                  { icon: <Search />, text: 'Aplicações web, mobile e APIs' },
                  { icon: <AlertTriangle />, text: 'Políticas e procedimentos de segurança' },
                  { icon: <Target />, text: 'Controles de acesso e identidade' },
                  { icon: <Layers />, text: 'Configuração de servidores e endpoints' },
                ].map((item) => (
                  <li key={item.text} className="flex items-center gap-3">
                    <div className="text-sky-400 w-5 h-5">{item.icon as React.ReactElement}</div>
                    <span className="text-slate-300">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section dark>
        <SectionHeader
          subtitle="Benefícios"
          title="Por que fazer uma Análise de Segurança?"
          description="Conheça o estado real da segurança da sua empresa e tome decisões baseadas em dados."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {beneficios.map((item, index) => (
            <FadeIn key={item.title} delay={index * 100} direction="up">
              <div className="bg-slate-950 rounded-xl border border-slate-800 p-6 hover:border-sky-500/20 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-sky-500/20 to-blue-500/20 flex items-center justify-center mb-4">
                  <div className="w-6 h-6 text-sky-400">{item.icon as React.ReactElement}</div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          subtitle="Processo"
          title="Como realizamos a análise"
          description="Uma abordagem sistemática e completa para avaliar a segurança da sua empresa."
        />
        <div className="max-w-3xl mx-auto">
          {etapas.map((etapa, index) => (
            <FadeIn key={etapa.step} delay={index * 100} direction="up">
              <div className="flex gap-6 mb-10 last:mb-0">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-sky-500/20">
                  {etapa.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{etapa.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{etapa.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section dark className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-blue-500/5" />
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Descubra como está a segurança da sua empresa.
            </h2>
            <p className="text-slate-400 text-lg mb-8 text-balance">
              Solicite uma análise gratuita e receba um diagnóstico inicial do seu ambiente.
            </p>
            <Link to="/contato" className="btn btn-primary text-base px-8 py-4">
              Solicitar Orçamento
              <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeIn>
        </div>
      </Section>
    </>
  )
}