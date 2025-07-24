import { Outlet } from 'react-router-dom';

export default function PublicLayout() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(to right, #111827, #1f2937)',
      padding: '20px'
    }}>
      <main style={{
        backgroundColor: '#1e293b',
        padding: '40px 30px',
        borderRadius: '12px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.4)',
        width: '100%',
        maxWidth: '400px',
        color: '#f9fafb'
      }}>
        <h2 style={{
          marginBottom: '20px',
          fontSize: '24px',
          fontWeight: '600',
          textAlign: 'center',
          color: '#f9fafb'
        }}>
          Inicia Sesión o Regístrate
        </h2>

        <Outlet />
      </main>
    </div>
  );
}
