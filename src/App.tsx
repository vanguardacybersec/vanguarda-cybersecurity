import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Layout from './components/Layout'
import Loading from './components/Loading'

const Home = lazy(() => import('./pages/Home'))
const Pentest = lazy(() => import('./pages/Pentest'))
const SOC = lazy(() => import('./pages/SOC'))
const AnaliseSeguranca = lazy(() => import('./pages/AnaliseSeguranca'))
const Equipe = lazy(() => import('./pages/Equipe'))
const Sobre = lazy(() => import('./pages/Sobre'))
const Contato = lazy(() => import('./pages/Contato'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="pentest" element={<Pentest />} />
            <Route path="soc" element={<SOC />} />
            <Route path="analise-de-seguranca" element={<AnaliseSeguranca />} />
            <Route path="equipe" element={<Equipe />} />
            <Route path="sobre" element={<Sobre />} />
            <Route path="contato" element={<Contato />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App