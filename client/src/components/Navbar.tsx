import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const isAuthenticated = false; // TODO: Implement authentication state

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          Portfolio Builder
        </Link>
        <div className="navbar-links">
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="nav-link">
                Dashboard
              </Link>
              <Link to="/builder" className="nav-link">
                Create Portfolio
              </Link>
              <Link to="/profile" className="nav-link">
                <span className="profile-icon">👤</span>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">
                Login
              </Link>
              <Link to="/register" className="nav-link">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 