import { Link } from 'react-router-dom'
import { ArrowRight, Eye, Bell, Activity, Shield, CheckCircle, Users, Zap } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import Section, { SectionHeader } from '../components/Section'

const beneficios = [
  {
    icon: <Bell />,
    title: 'Detecção Precoce',
    description: 'Identificamos ameaças em estágio inicial, antes que causem danos significativos.',
  },
  {
    icon: <Zap />,
    title: 'Resposta Rápida',
    description: 'Tempo médio de resposta inferior a 15 minutos para incidentes críticos.',
  },
  {
    icon: <Shield />,
    title: 'Proteção 24/7',
    description: 'Monitoramento ininterrupto com equipe dedicada em regime de plantão.',
  },
  {
    icon: <CheckCircle />,
    title: 'Redução de Custos',
    description: 'Evite prejuízos com multas regulatórias, roubo de dados e paralisações.',
  },
  {
    icon: <Users />,
    title: 'Equipe Especializada',
    description: 'Profissionais certificados com experiência em ambientes corporativos complexos.',
  },
  {
    icon: <Activity />,
    title: 'Visibilidade Total',
    description: 'Dashboard com indicadores em tempo real e relatórios de performance.',
  },
]

const etapasMonitoramento = [
  {
    step: '01',
    title: 'Coleta de Dados',
    description: 'Integração com logs, endpoints, firewalls e ferramentas de segurança do seu ambiente.',
  },
  {
    step: '02',
    title: 'Correlação e Análise',
    description: 'Processamento em tempo real com regras avançadas e inteligência artificial para identificar padrões suspeitos.',
  },
  {
    step: '03',
    title: 'Detecção de Ameaças',
    description: 'Identificação de ataques, malware, acessos não autorizados e comportamentos anômalos.',
  },
  {
    step: '04',
    title: 'Resposta a Incidentes',
    description: 'Triagem, contenção e remediação imediata com acionamento dos canais de comunicação.',
  },
  {
    step: '05',
    title: 'Relatório e Melhoria',
    description: 'Documentação dos eventos e recomendações para fortalecimento contínuo da segurança.',
  },
]

export default function SOC() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-blue-500/5" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <FadeIn>
            <span className="inline-block text-sky-400 text-sm font-semibold tracking-wider uppercase mb-4 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20">
              SOC
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl">
              SOC:{' '}
              <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Monitoramento contínuo 24/7.
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
              O SOC (Security Operations Center) é o centro de operações de segurança que monitora,
              detecta e responde a ameaças cibernéticas em tempo real, protegendo sua empresa 24 horas
              por dia, 7 dias por semana.
            </p>
          </FadeIn>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left">
            <h2 className="text-3xl font-bold text-white mb-6">O que é SOC?</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                O <strong className="text-white">Security Operations Center (SOC)</strong> é uma
                estrutura dedicada ao monitoramento e proteção contínua do ambiente de TI da sua empresa.
                Combinamos tecnologia de ponta com expertise humana para detectar, analisar e responder
                a incidentes de segurança em tempo real.
              </p>
              <p>
                Nossa equipe de analistas trabalha 24 horas por dia, 7 dias por semana, utilizando
                ferramentas avançadas de SIEM, EDR, inteligência de ameaças e análise de comportamento
                para identificar atividades suspeitas antes que se tornem incidentes graves.
              </p>
              <p>
                Oferecemos desde o monitoramento básico até operações completas com caça ativa a ameaças
                (Threat Hunting), análise forense e suporte à resposta a incidentes.
              </p>
            </div>
          </FadeIn>
          <FadeIn direction="right">
            <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-sky-500/20 to-blue-500/20 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-sky-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Benefícios do SOC</h3>
              <ul className="space-y-3">
                {beneficios.slice(0, 4).map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <div className="text-sky-400 mt-0.5 w-5 h-5">{item.icon as React.ReactElement}</div>
                    <div>
                      <strong className="text-white block">{item.title}</strong>
                      <span className="text-slate-400 text-sm">{item.description}</span>
                    </div>
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
          title="Por que ter um SOC?"
          description="Invista em proteção contínua e evite surpresas desagradáveis com a segurança da sua empresa."
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
          title="Como funciona o monitoramento"
          description="Da coleta de dados à resposta a incidentes, nosso SOC opera com processos bem definidos."
        />
        <div className="max-w-3xl mx-auto">
          {etapasMonitoramento.map((etapa, index) => (
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
              Detecte ameaças antes que seja tarde.
            </h2>
            <p className="text-slate-400 text-lg mb-8 text-balance">
              Agende uma demonstração do nosso SOC e descubra como podemos proteger sua empresa.
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