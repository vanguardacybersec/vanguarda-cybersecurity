import { Shield, Award, Users, Target, BadgeCheck, BookOpen, FileBadge, Star } from 'lucide-react'
import FadeIn from '../components/FadeIn'

const team = [
  {
    name: 'Pedro Henrique Pains',
    role: 'Fundador & Especialista em Segurança Ofensiva',
    image: null,
    bio: 'Especialista em segurança ofensiva com reconhecimento internacional por descobertas de vulnerabilidades críticas em agências governamentais dos Estados Unidos.',
    credentials: [
      { icon: <Award />, text: 'Reconhecido com LoR pela NASA' },
      { icon: <Target />, text: '3 Falhas reportadas no State of California' },
      { icon: <Shield />, text: '1 Falha reportada no Department of Defense (DoD)' },
      { icon: <BadgeCheck />, text: 'CRTA Certified' },
      { icon: <FileBadge />, text: 'ISO 27001 Certified' },
      { icon: <Users />, text: 'Membro da IDCiber (Instituto de Defesa Cibernética)' },
    ],
  },
  {
    name: 'Marcos Almeida',
    role: 'SOC Analyst',
    image: null,
    bio: 'Analista de SOC com sólida formação em Ciência da Computação e experiência prática em detecção e resposta a incidentes de segurança.',
    credentials: [
      { icon: <BookOpen />, text: 'Bacharelado em Ciência da Computação' },
      { icon: <BadgeCheck />, text: 'CompTIA Security+' },
      { icon: <BadgeCheck />, text: 'BTL 1 (Blue Team Level 1)' },
      { icon: <Star />, text: '2 anos de experiência em SOC' },
    ],
  },
  {
    name: 'Rodrigo Andrade',
    role: 'Analista de Gestão de Riscos',
    image: null,
    bio: 'Profissional com expertise em governança, riscos e conformidade, liderando auditorias e implementações de sistemas de gestão de segurança.',
    credentials: [
      { icon: <BookOpen />, text: 'Graduado em ADS' },
      { icon: <BadgeCheck />, text: 'ISO 27001 Lead Auditor' },
      { icon: <FileBadge />, text: 'CISA (Certified Information Systems Auditor)' },
    ],
  },
]

const initials = [
  ['P', 'H', 'P'],
  ['M', 'A'],
  ['R', 'A'],
]

export default function Equipe() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-blue-500/5" />
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-sky-500/5 blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-blue-500/5 blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <FadeIn>
            <span className="inline-block text-sky-400 text-sm font-semibold tracking-wider uppercase mb-4 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20">
              Equipe
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl">
              Conheça nosso{' '}
              <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                time de especialistas.
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
              Profissionais certificados e apaixonados por cibersegurança, prontos para proteger
              sua empresa com excelência técnica e compromisso com resultados.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-24">
            {team.map((member, index) => (
              <FadeIn key={member.name} delay={index * 100} direction={index % 2 === 0 ? 'left' : 'right'}>
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-sky-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:blur-2xl" />

                  <div className={`relative bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-10 transition-all duration-500 group-hover:border-sky-500/30 group-hover:shadow-xl group-hover:shadow-sky-500/5 ${index % 2 === 0 ? '' : 'md:text-right'}`}>
                    <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-start`}>
                      <div className="flex-shrink-0">
                        {member.image ? (
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-28 h-28 md:w-36 md:h-36 rounded-2xl object-cover border-2 border-slate-700 group-hover:border-sky-500/40 transition-all duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl bg-gradient-to-br from-sky-500/20 to-blue-500/20 border-2 border-slate-700 group-hover:border-sky-500/40 transition-all duration-500 group-hover:scale-105 flex items-center justify-center">
                            <div className="flex gap-1.5">
                              {initials[index].map((letter, i) => (
                                <span
                                  key={i}
                                  className="text-2xl md:text-3xl font-bold bg-gradient-to-br from-sky-400 to-blue-400 bg-clip-text text-transparent"
                                >
                                  {letter}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-sky-400 transition-colors duration-300">
                          {member.name}
                        </h2>
                        <p className="text-sky-400 font-medium mb-4">{member.role}</p>
                        <p className="text-slate-400 leading-relaxed mb-6">{member.bio}</p>

                        <div className={`flex flex-wrap gap-3 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                          {member.credentials.map((cred) => (
                            <span
                              key={cred.text}
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700/50 text-slate-300 text-sm hover:bg-sky-500/10 hover:border-sky-500/30 hover:text-sky-300 transition-all duration-300 cursor-default"
                            >
                              <span className="w-4 h-4 text-sky-400">{cred.icon}</span>
                              {cred.text}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-blue-500/5" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Faça parte da nossa história.
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
              Quer fortalecer a segurança da sua empresa? Nossa equipe está pronta para ajudar.
            </p>
            <a href="/contato" className="btn btn-primary text-base px-8 py-4 inline-flex">
              Entrar em Contato
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  )
}