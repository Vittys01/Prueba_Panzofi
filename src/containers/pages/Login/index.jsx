import { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de autenticación aquí
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="bg-white p-10 rounded shadow-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl mb-5 font-bold text-center">Iniciar sesión</h2>
        <div className="mb-5">
          <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
            Usuario
          </label>
          <input
            type="text"
            id="username"
            className="w-full px-3 py-2 border border-gray-400 rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border border-gray-400 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Iniciar sesión
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
