import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import './App.css';

function HeroSection() {
  return (
    <motion.section
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-6xl font-extrabold mb-4">🏊‍♂️ Swim Coach Tools</h1>
      <p className="text-xl mb-6">Planifica, analiza y mejora el rendimiento de tus nadadores</p>
      <Link
        to="/dashboard"
        className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-200 transition"
      >
        🚀 Empezar ahora
      </Link>
    </motion.section>
  );
}

function Dashboard() {
  const data = [
    { name: 'Semana 1', rendimiento: 50 },
    { name: 'Semana 2', rendimiento: 65 },
    { name: 'Semana 3', rendimiento: 75 },
    { name: 'Semana 4', rendimiento: 90 },
  ];

  return (
    <motion.section
      className="p-8 bg-white rounded-lg shadow-lg"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-6">📊 Progreso del Nadador</h2>
      <LineChart width={800} height={400} data={data}>
        <Line type="monotone" dataKey="rendimiento" stroke="#3b82f6" strokeWidth={3} />
        <CartesianGrid stroke="#e5e7eb" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </motion.section>
  );
}

function Formulario() {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    alert(`Sesión creada: ${JSON.stringify(data)}`);
    reset();
  };

  return (
    <motion.section
      className="p-8 bg-white rounded-lg shadow-lg mt-8"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-4">📝 Crear Nueva Sesión</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register('nombre')} placeholder="Nombre de la sesión" className="border p-3 rounded w-full" required />
        <input {...register('duracion')} placeholder="Duración (min)" className="border p-3 rounded w-full" required />
        <input type="date" {...register('fecha')} className="border p-3 rounded w-full" required />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition w-full"
        >
          💾 Guardar Sesión
        </button>
      </form>
    </motion.section>
  );
}

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen flex flex-col">
        <header className="bg-white shadow-lg py-4 px-8 flex justify-between items-center sticky top-0 z-50">
          <h1 className="text-2xl font-bold text-blue-600">🏊 Swim Coach Tools</h1>
          <nav>
            <ul className="flex space-x-6 text-gray-600">
              <li><Link to="/" className="hover:text-blue-600">Inicio</Link></li>
              <li><Link to="/dashboard" className="hover:text-blue-600">Dashboard</Link></li>
              <li><Link to="/formulario" className="hover:text-blue-600">Crear Sesión</Link></li>
            </ul>
          </nav>
        </header>

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/formulario" element={<Formulario />} />
          </Routes>
        </main>

        <footer className="bg-gray-800 text-white py-6 text-center">
          <p>© 2025 Swim Coach Tools - React, Vite, TailwindCSS, Recharts, Framer Motion 🚀</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
