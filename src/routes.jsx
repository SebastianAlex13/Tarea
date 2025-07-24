import { createBrowserRouter } from 'react-router-dom';
import AuthLayout from './components/AuthLayout';
import PublicLayout from './components/PublicLayout';

import Home from './pages/Home';
import Perfil from './pages/Perfil';
import Login from './pages/Login';
import Registro from './pages/Registro';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      { index: true, element: <Login /> },
      { path: 'login', element: <Login /> },
      { path: 'registro', element: <Registro /> },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: 'home', element: <Home /> },
      { path: 'perfil', element: <Perfil /> },
    ],
  },
]);

export default router;
