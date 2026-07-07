import { Link } from 'react-router-dom'
import { Shield, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-950">
      <div className="text-center max-w-md mx-auto px-6">
        <Shield className="w-16 h-16 text-sky-400 mx-auto mb-6" />
        <h1 className="text-6xl font-bold bg-gradient-to-r from-sky-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
          404
        </h1>
        <p className="text-xl text-white mb-4">Página não encontrada</p>
        <p className="text-slate-400 mb-8">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Link to="/" className="btn btn-primary text-base px-8 py-4 inline-flex">
          <ArrowLeft className="w-4 h-4" />
          Voltar para Home
        </Link>
      </div>
    </section>
  )
}