import { Shield, Target, Users, Award, TrendingUp, Heart } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import Section, { SectionHeader } from '../components/Section'
import AnimatedCounter from '../components/AnimatedCounter'

const valores = [
  {
    icon: <Shield />,
    title: 'Excelência Técnica',
    description: 'Buscamos o mais alto padrão de qualidade em cada serviço prestado.',
  },
  {
    icon: <Target />,
    title: 'Ética e Transparência',
    description: 'Agimos com honestidade e clareza em todas as relações com clientes e parceiros.',
  },
  {
    icon: <Users />,
    title: 'Foco no Cliente',
    description: 'Cada cliente é único e merece uma abordagem personalizada e dedicada.',
  },
  {
    icon: <Award />,
    title: 'Inovação Constante',
    description: 'Investimos continuamente em pesquisa e atualização técnica.',
  },
  {
    icon: <TrendingUp />,
    title: 'Resultados Mensuráveis',
    description: 'Nosso compromisso é com entregas que geram impacto real no negócio.',
  },
  {
    icon: <Heart />,
    title: 'Paixão pela Segurança',
    description: 'Somos movidos pela missão de proteger empresas e dados.',
  },
]

export default function Sobre() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-blue-500/5" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <FadeIn>
            <span className="inline-block text-sky-400 text-sm font-semibold tracking-wider uppercase mb-4 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20">
              Sobre Nós
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl">
              Quem somos?
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
              A Vanguarda Security nasceu da missão de elevar o padrão de segurança digital
              das empresas brasileiras. Somos especialistas em segurança ofensiva e proteção
              contínua de ambientes corporativos.
            </p>
          </FadeIn>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left">
            <h2 className="text-3xl font-bold text-white mb-6">Nossa História</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Fundada por profissionais com mais de uma década de experiência em cibersegurança,
                a Vanguarda Security surgiu da necessidade de oferecer serviços de segurança ofensiva
                com padrão internacional no mercado brasileiro.
              </p>
              <p>
                Nossa equipe é composta por especialistas certificados (CRTA, CRTA V2, GOOGLE)
                que já atuaram em projetos de grande porte, protegendo empresas dos mais diversos
                setores como finanças, saúde, tecnologia e governo.
              </p>
              <p>
                Acreditamos que segurança não é um produto, mas um processo contínuo. Por isso,
                nossa abordagem combina tecnologia de ponta com expertise humana para entregar
                resultados que realmente fazem a diferença.
              </p>
            </div>
          </FadeIn>
          <FadeIn direction="right">
            <div className="grid grid-cols-3 gap-4">
              <AnimatedCounter target={10} suffix="+" label="Clientes Atendidos" />
              <AnimatedCounter target={100} suffix="+" label="Projetos Realizados" />
              <AnimatedCounter target={100} suffix="%" label="Satisfação" />
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section dark>
        <SectionHeader
          subtitle="Valores"
          title="Nossos pilares"
          description="Princípios que guiam cada interação e cada entrega."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {valores.map((item, index) => (
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
        <div className="text-center max-w-2xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-6">Vamos trabalhar juntos?</h2>
            <p className="text-slate-400 text-lg mb-8">
              Entre em contato e descubra como podemos ajudar sua empresa a elevar o nível de segurança.
            </p>
            <a href="/contato" className="btn btn-primary text-base px-8 py-4 inline-flex">
              Fale Conosco
            </a>
          </FadeIn>
        </div>
      </Section>
    </>
  )
}