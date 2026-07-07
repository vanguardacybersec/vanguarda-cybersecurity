import { Outlet, Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react'
import ParticlesBg from './ParticlesBg'
import './Layout.css'

interface NavItem {
  label: string
  href: string
  dropdown?: NavItem[]
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { 
    label: 'Serviços', 
    href: '#servicos',
    dropdown: [
      { label: 'Pentest', href: '/pentest' },
      { label: 'SOC', href: '/soc' },
      { label: 'Análise de Segurança', href: '/analise-de-seguranca' }
    ]
  },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Equipe', href: '/equipe' },
  { label: 'Contato', href: '/contato' }
]

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setOpenDropdown(null)
    window.scrollTo(0, 0)
  }, [location.pathname])

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label)
  }

  return (
    <div className="layout">
      <ParticlesBg />
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <Link to="/" className="logo" aria-label="Vanguarda Security - Início">
            <img src="/logo.png" alt="Vanguarda Security" className="logo-img" />
            <span className="logo-text">Vanguarda Security</span>
          </Link>

          <nav className="navbar-nav" role="navigation" aria-label="Navegação principal">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.label} className="nav-item">
                  {item.dropdown ? (
                    <div className="dropdown">
                      <button
                        className={`nav-link dropdown-toggle ${openDropdown === item.label ? 'active' : ''}`}
                        onClick={() => toggleDropdown(item.label)}
                        aria-expanded={openDropdown === item.label}
                        aria-haspopup="true"
                      >
                        {item.label}
                        <ChevronDown className="dropdown-icon" />
                      </button>
                      <ul className={`dropdown-menu ${openDropdown === item.label ? 'open' : ''}`} role="menu">
                        {item.dropdown.map((subItem) => (
                          <li key={subItem.label} role="none">
                            <Link 
                              to={subItem.href} 
                              className="dropdown-link" 
                              role="menuitem"
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <Link 
                      to={item.href} 
                      className={`nav-link ${location.pathname === item.href ? 'active' : ''}`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="navbar-actions">
            <Link to="/contato" className="btn btn-primary">
              Solicitar Orçamento
              <ArrowRight className="btn-icon" />
            </Link>
            <button
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X className="menu-icon" /> : <Menu className="menu-icon" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="mobile-menu" id="mobile-menu" role="navigation" aria-label="Menu mobile">
            <ul className="mobile-nav-list">
              {navItems.map((item) => (
                <li key={item.label} className="mobile-nav-item">
                  {item.dropdown ? (
                    <div className="mobile-dropdown">
                      <button
                        className={`mobile-dropdown-toggle ${openDropdown === item.label ? 'active' : ''}`}
                        onClick={() => toggleDropdown(item.label)}
                        aria-expanded={openDropdown === item.label}
                      >
                        {item.label}
                        <ChevronDown className={`mobile-dropdown-icon ${openDropdown === item.label ? 'rotated' : ''}`} />
                      </button>
                      {openDropdown === item.label && (
                        <ul className="mobile-dropdown-menu">
                          {item.dropdown.map((subItem) => (
                            <li key={subItem.label}>
                              <Link to={subItem.href} className="mobile-dropdown-link">
                                {subItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link to={item.href} className="mobile-nav-link">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
              <li className="mobile-cta">
                <Link to="/contato" className="btn btn-primary btn-full">
                  Solicitar Orçamento
                  <ArrowRight className="btn-icon" />
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>

      <main className="main-content" id="main-content">
        <Outlet />
      </main>

      <footer className="footer" role="contentinfo">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link to="/" className="footer-logo" aria-label="Vanguarda Security - Início">
                <img src="/logo.png" alt="Vanguarda Security" className="logo-img" />
                <span className="logo-text">Vanguarda Security</span>
              </Link>
              <p className="footer-tagline">
                Protegemos sua infraestrutura antes que ela seja o próximo alvo.
              </p>
              <div className="social-links" role="list" aria-label="Redes sociais">
                <a href="https://www.instagram.com/vanguardasecurity/" className="social-link" aria-label="Instagram" role="listitem" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn" role="listitem" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="Twitter" role="listitem" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-section">
              <h3 className="footer-title">Links Rápidos</h3>
              <ul className="footer-links">
                <li><Link to="/" className="footer-link">Home</Link></li>
                <li><Link to="/sobre" className="footer-link">Sobre</Link></li>
                <li><Link to="/equipe" className="footer-link">Equipe</Link></li>
                <li><Link to="/contato" className="footer-link">Contato</Link></li>
                <li><Link to="/pentest" className="footer-link">Pentest</Link></li>
                <li><Link to="/soc" className="footer-link">SOC</Link></li>
                <li><Link to="/analise-de-seguranca" className="footer-link">Análise de Segurança</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3 className="footer-title">Serviços</h3>
              <ul className="footer-links">
                <li><Link to="/pentest" className="footer-link">Teste de Invasão (Pentest)</Link></li>
                <li><Link to="/soc" className="footer-link">SOC - Centro de Operações de Segurança</Link></li>
                <li><Link to="/analise-de-seguranca" className="footer-link">Análise de Vulnerabilidades</Link></li>
                <li><Link to="/analise-de-seguranca" className="footer-link">Avaliação de Risco</Link></li>
                <li><Link to="/soc" className="footer-link">Monitoramento 24/7</Link></li>
                <li><Link to="/soc" className="footer-link">Resposta a Incidentes</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3 className="footer-title">Contato</h3>
              <ul className="footer-contact">
                <li>
                  <a href="mailto:vanguardacybersecurity@gmail.com" className="footer-link">
                    vanguardacybersecurity@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+5522996138603" className="footer-link">
                    +55 22 996138603
                  </a>
                </li>
                <li>
                  <address className="footer-address">
                    Bom Jesus do Itabapoana - RJ
                  </address>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="copyright">
              © {new Date().getFullYear()} Vanguarda Security. Todos os direitos reservados.
            </p>
            <div className="footer-legal">
              <Link to="/politica-de-privacidade" className="footer-link">Política de Privacidade</Link>
              <Link to="/termos-de-uso" className="footer-link">Termos de Uso</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}