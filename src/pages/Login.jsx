import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    // Simula login exitoso
    navigate('/home');
  }

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" required /><br />
        <input type="password" placeholder="Contraseña" required /><br />
        <button type="submit">Entrar</button>
      </form>
    </>
  );
}
