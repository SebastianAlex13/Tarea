import { useNavigate } from 'react-router-dom';

export default function Registro() {
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    // Simula registro exitoso
    navigate('/home');
  }

  return (
    <>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nombre" required /><br />
        <input type="email" placeholder="Email" required /><br />
        <input type="password" placeholder="Contraseña" required /><br />
        <button type="submit">Registrarse</button>
      </form>
    </>
  );
}
