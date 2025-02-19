import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white flex flex-col">
      <header className="w-full py-6 px-10 flex justify-between items-center bg-opacity-50 bg-black">
        <h1 className="text-3xl font-bold">🏊 Swim Coach Tools</h1>
        <nav>
          <ul className="flex space-x-6 text-lg">
            <li className="hover:text-gray-300 cursor-pointer">Inicio</li>
            <li className="hover:text-gray-300 cursor-pointer">Características</li>
            <li className="hover:text-gray-300 cursor-pointer">Contacto</li>
          </ul>
        </nav>
      </header>

      <main className="flex flex-1 flex-col justify-center items-center text-center px-6">
        <h2 className="text-5xl font-extrabold leading-tight mb-6">
          💡 Herramientas inteligentes para entrenadores de natación
        </h2>
        <p className="text-lg mb-8 max-w-2xl">
          Gestiona entrenamientos, analiza el rendimiento y ayuda a tus nadadores a alcanzar su máximo potencial. Todo en un solo lugar, con una experiencia intuitiva y moderna.
        </p>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-8 rounded-lg text-xl transition">
          🚀 Empezar ahora
        </button>
      </main>

      <section className="bg-white text-gray-800 py-12 px-6 text-center">
        <h3 className="text-3xl font-bold mb-6">✨ Características principales</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h4 className="text-2xl font-semibold mb-2">📅 Gestión de Sesiones</h4>
            <p>Organiza y programa sesiones de entrenamiento de manera eficiente.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h4 className="text-2xl font-semibold mb-2">📊 Análisis de Datos</h4>
            <p>Visualiza el progreso de tus nadadores con métricas clave (próximamente).</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h4 className="text-2xl font-semibold mb-2">🌟 Perfil Personalizado</h4>
            <p>Cada nadador tiene un perfil detallado para un seguimiento personalizado.</p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white text-center py-6">
        <p>© 2025 Swim Coach Tools - Hecho con ❤️ usando React + Vite + TailwindCSS 🚀</p>
      </footer>
    </div>
  );
}

export default App;
