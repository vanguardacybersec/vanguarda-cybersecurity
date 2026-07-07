import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Eye, FileSearch, Target, Users, BarChart3, CheckCircle, ChevronRight } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import ServiceCard from '../components/ServiceCard'
import Section, { SectionHeader } from '../components/Section'
import HomeHero from '../components/HomeHero'
import AnimatedCounter from '../components/AnimatedCounter'

const services = [
  {
    icon: <Shield />,
    title: 'Pentest',
    description: 'Simulação de ataques reais para identificar vulnerabilidades antes que criminosos digitais as explorem.',
    href: '/pentest',
  },
  {
    icon: <Eye />,
    title: 'SOC',
    description: 'Monitoramento contínuo 24/7 com detecção e resposta a ameaças em tempo real para proteger seu negócio.',
    href: '/soc',
  },
  {
    icon: <FileSearch />,
    title: 'Análise de Segurança',
    description: 'Avaliação completa do ambiente corporativo identificando riscos e priorizando correções.',
    href: '/analise-de-seguranca',
  },
]

const diferenciais = [
  {
    icon: <Target />,
    title: 'Metodologias Reconhecidas',
    description: 'Utilizamos frameworks internacionais como OWASP, NIST e MITRE ATT&CK em nossas avaliações.',
  },
  {
    icon: <Shield />,
    title: 'Especialistas em Segurança Ofensiva',
    description: 'Equipe certificada com experiência em ataques simulados e discovery de vulnerabilidades críticas.',
  },
  {
    icon: <BarChart3 />,
    title: 'Relatórios Técnicos e Executivos',
    description: 'Documentação clara e acionável, desde o nível técnico até a visão estratégica para a diretoria.',
  },
  {
    icon: <Users />,
    title: 'Atendimento Personalizado',
    description: 'Cada cliente é único: planejamos as ações de acordo com a maturidade e necessidades do seu negócio.',
  },
  {
    icon: <CheckCircle />,
    title: 'Foco em Redução de Riscos',
    description: 'Não apenas identificamos problemas: priorizamos e orientamos a correção com base no impacto real.',
  },
]

const timeline = [
  { step: '01', title: 'Entendimento do Ambiente', description: 'Mapeamos sua infraestrutura, processos e objetivos de segurança para contextualizar o trabalho.' },
  { step: '02', title: 'Planejamento', description: 'Definimos escopo, metodologias, ferramentas e cronograma alinhados às suas necessidades.' },
  { step: '03', title: 'Execução', description: 'Realizamos os testes e análises com rigor técnico, seguindo as melhores práticas do mercado.' },
  { step: '04', title: 'Validação', description: 'Verificamos cada achado para eliminar falsos positivos e garantir a precisão dos resultados.' },
  { step: '05', title: 'Relatório', description: 'Entregamos documentação detalhada com evidências, impacto e recomendações priorizadas.' },
  { step: '06', title: 'Reunião de Apresentação', description: 'Apresentamos os resultados, discutimos o plano de ação e alinhamos os próximos passos.' },
]

export default function Home() {
  return (
    <>
      <HomeHero />

      <Section id="servicos">
        <SectionHeader
          subtitle="Serviços"
          title="Soluções completas em cibersegurança"
          description="Da avaliação à proteção contínua, oferecemos tudo que sua empresa precisa para se manter segura."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 150} direction="up">
              <ServiceCard {...service} index={index} />
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section className="py-16 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/3 via-transparent to-blue-500/3" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <FadeIn delay={0} direction="up">
              <AnimatedCounter target={10} suffix="+" label="Clientes Atendidos" />
            </FadeIn>
            <FadeIn delay={100} direction="up">
              <AnimatedCounter target={100} suffix="+" label="Projetos Realizados" />
            </FadeIn>
            <FadeIn delay={200} direction="up">
              <AnimatedCounter target={3} suffix="+" label="Certificações" />
            </FadeIn>
            <FadeIn delay={300} direction="up">
              <AnimatedCounter target={100} suffix="%" label="Satisfação" />
            </FadeIn>
          </div>
        </div>
      </Section>

      <Section dark id="diferenciais">
        <SectionHeader
          subtitle="Diferenciais"
          title="Por que escolher a Vanguarda Security?"
          description="Não somos apenas mais uma consultoria. Nosso compromisso é com a excelência técnica e resultados reais."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {diferenciais.map((item, index) => (
            <FadeIn key={item.title} delay={index * 100} direction="up">
              <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/50 hover:border-sky-500/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-sky-500/20 to-blue-500/20 flex items-center justify-center mb-4">
                  <div className="text-sky-400" style={{ width: 24, height: 24 }}>{item.icon}</div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section id="como-trabalhamos">
        <SectionHeader
          subtitle="Processo"
          title="Como trabalhamos"
          description="Uma metodologia transparente e estruturada para entregar resultados com excelência."
        />
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-sky-500/40 via-sky-500/20 to-transparent transform -translate-x-1/2" />
          {timeline.map((item, index) => (
            <FadeIn key={item.step} delay={index * 100} direction={index % 2 === 0 ? 'left' : 'right'}>
              <div className={`relative flex items-start gap-8 mb-12 md:mb-16 group ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`hidden md:block w-1/2 ${index % 2 === 0 ? 'text-right pr-12' : 'pl-12'}`}>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors duration-300">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">{item.description}</p>
                </div>
                <div className="flex-shrink-0 relative z-10 flex md:flex-col items-center gap-1">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-sky-500/20 group-hover:scale-110 group-hover:shadow-sky-500/40 transition-all duration-300">
                    {item.step}
                  </div>
                  <div className="md:hidden w-px h-full min-h-[40px] bg-gradient-to-b from-sky-500/40 to-transparent" />
                </div>
                <div className="md:hidden flex-1 pb-8 group-hover:translate-x-2 transition-transform duration-300">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-400 transition-colors duration-300">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance">
              Descubra como fortalecer a segurança da sua empresa.
            </h2>
            <p className="text-slate-400 text-lg mb-8 text-balance">
              Agende uma conversa com nossos especialistas e receba um diagnóstico gratuito do seu ambiente.
            </p>
            <Link to="/contato" className="btn btn-primary text-base px-8 py-4">
              Solicitar Diagnóstico
              <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeIn>
        </div>
      </Section>
    </>
  )
}