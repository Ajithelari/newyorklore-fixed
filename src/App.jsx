import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Stories from './pages/Stories';
import Submit from './pages/Submit';

// src/App.jsx or App.jsx depending on your structure
function App() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>🎉 Welcome to New York Lore!</h1>
      <p>This Vite + React app is now working on Vercel 🚀</p>
    </div>
  )
}

export default App;


function App() {
  return (
    <Router>
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/submit" element={<Submit />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
