// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50 }} className="bg-white shadow-md">
      <nav className="flex items-center justify-between px-6 py-4">
        <Link to="/">
          <img src="/logo.svg" alt="New York Lore" className="h-8" />
        </Link>
        <ul className="flex gap-6 text-lg text-gray-800">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/stories">Stories</Link></li>
          <li><Link to="/submit">Submit</Link></li>
        </ul>
      </nav>
    </header>
  );
}
