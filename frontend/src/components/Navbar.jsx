import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const controls = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "About", path: "/about" },
    { name: "Contact Us", path: "/form" }
  ];

  return (
    <nav className="sticky top-0 bg-white dark:bg-gray-900 shadow-lg z-50 flex justify-between items-center px-8 py-3">
      <div className="text-2xl font-extrabold text-blue-600 dark:text-blue-300 tracking-tight">
        <Link to="/">Generic Site</Link>
      </div>
      <div className="hidden md:flex items-center justify-center gap-6 font-semibold text-gray-700 dark:text-gray-300">
        {controls.map(c => (
          <Link
            key={c.name}
            to={c.path}
            className={`hover:text-blue-600 dark:hover:text-blue-400 transition ${
              location.pathname === c.path ? "text-blue-600 dark:text-blue-400 font-bold underline underline-offset-4" : ""
            }`}
          >
            {c.name}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          title="Toggle dark mode"
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
        <Link to="/login" className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 transition">Login</Link>
        <Link to="/register" className="px-3 py-1 rounded bg-green-600 text-white hover:bg-green-700 transition">Register</Link>
      </div>
    </nav>
  );
}
