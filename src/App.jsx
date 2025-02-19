import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('¡Explora el potencial de React con Vite!');

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
    setMessage(`Has hecho clic ${count + 1} ${count + 1 === 1 ? 'vez' : 'veces'} 🚀`);
  };

  const handleReset = () => {
    setCount(0);
    setMessage('¡Contador reiniciado! 🔄');
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>⚡ React + Vite: ¡Potencial en Acción!</h1>
      </header>

      <main className="main-content">
        <section className="counter-section">
          <p className="message">{message}</p>
          <button className="btn increment" onClick={handleIncrement}>
            Incrementar Contador ➕
          </button>
          <button className="btn reset" onClick={handleReset}>
            Reiniciar 🔄
          </button>
        </section>

        <section className="features-section">
          <h2>✨ ¿Qué hace potente a React?</h2>
          <ul>
            <li>🔄 Actualizaciones instantáneas del estado.</li>
            <li>⚡ Renderizado ultrarrápido gracias a Vite.</li>
            <li>🧩 Componentes reutilizables y personalizables.</li>
            <li>💡 Interactividad sencilla con `useState`.</li>
            <li>🚀 Preparado para escalar a proyectos complejos.</li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>🌟 ¡Hecho con React + Vite! 🚀</p>
      </footer>
    </div>
  );
}

export default App;

