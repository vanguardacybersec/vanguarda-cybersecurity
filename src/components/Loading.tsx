import { Shield } from 'lucide-react'

export default function Loading() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: '#0f172a',
    }}>
      <div style={{ textAlign: 'center' }}>
        <Shield
          style={{
            width: 40,
            height: 40,
            color: '#0ea5e9',
            animation: 'pulse 1.5s ease-in-out infinite',
          }}
        />
        <p style={{
          marginTop: 16,
          color: '#64748b',
          fontSize: '0.875rem',
        }}>
          Carregando...
        </p>
      </div>
    </div>
  )
}