import { Outlet, Link, useLocation } from 'react-router-dom';

export default function AuthLayout() {
  const location = useLocation();

  const navItems = [
    { name: 'Inicio', path: '/home' },
    { name: 'Perfil', path: '/perfil' },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      {/* Sidebar */}
      <aside style={{
        width: '250px',
        backgroundColor: '#1f2937',
        color: '#fff',
        padding: '30px 20px'
      }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '40px' }}>Mi Dashboard</h2>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {navItems.map(({ name, path }) => (
              <li key={path} style={{ marginBottom: '20px' }}>
                <Link
                  to={path}
                  style={{
                    color: location.pathname === path ? '#38bdf8' : '#fff',
                    textDecoration: 'none',
                    fontWeight: location.pathname === path ? 'bold' : 'normal',
                  }}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Contenido principal */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Cabecera */}
        <header style={{
          padding: '20px 30px',
          backgroundColor: '#fff',
          borderBottom: '1px solid #e5e7eb'
        }}>
          <h1 style={{ fontSize: '22px', fontWeight: '500' }}>Bienvenido</h1>
        </header>

        {/* Área de contenido */}
        <main style={{ flex: 1, padding: '30px' }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
