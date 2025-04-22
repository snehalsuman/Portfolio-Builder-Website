import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import PortfolioBuilder from './pages/PortfolioBuilder';
import PortfolioView from './pages/PortfolioView';

// Import CSS
import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/builder" element={<PortfolioBuilder />} />
            <Route path="/builder/:id" element={<PortfolioBuilder />} />
            <Route path="/portfolio/:slug" element={<PortfolioView />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
