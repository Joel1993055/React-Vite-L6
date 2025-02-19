import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('¡Explora el potencial de React con Vite y TailwindCSS!');

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
    setMessage(`Has hecho clic ${count + 1} ${count + 1 === 1 ? 'vez' : 'veces'} 🚀`);
  };

  const handleReset = () => {
    setCount(0);
    setMessage('¡Contador reiniciado! 🔄');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="bg-blue-600 w-full py-6 text-white text-center shadow-md">
        <h1 className="text-4xl font-bold">⚡ React + Vite + TailwindCSS 🌟</h1>
        <p className="text-lg mt-2">¡Explora el poder del desarrollo moderno en la web! 🚀</p>
      </header>

      <main className="w-full flex-1 flex flex-col items-center justify-center p-8">
        <section className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md text-center">
          <p className="text-xl font-medium mb-4">{message}</p>
          <div className="flex justify-center gap-4">
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition"
              onClick={handleIncrement}
            >
              Incrementar Contador ➕
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition"
              onClick={handleReset}
            >
              Reiniciar 🔄
            </button>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8 w-full max-w-3xl mt-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">✨ ¿Qué hace potente a React?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-left">
            <li>🔄 Actualizaciones instantáneas del estado con `useState`.</li>
            <li>⚡ Renderizado ultrarrápido gracias a Vite.</li>
            <li>🧩 Componentes reutilizables y personalizables.</li>
            <li>💡 Interactividad sencilla y extensible.</li>
            <li>🚀 Preparado para escalar a proyectos complejos.</li>
          </ul>
        </section>
      </main>

      <footer className="bg-gray-800 text-white w-full text-center py-4">
        <p>🌟 ¡Hecho con ❤️ usando React, Vite y TailwindCSS! 🚀</p>
      </footer>
    </div>
  );
}

export default App;