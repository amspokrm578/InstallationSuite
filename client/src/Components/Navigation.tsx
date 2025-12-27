import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import './Navigation.css';

interface NavigationProps {
  currentUser?: {
    name: string;
    email: string;
  };
}

function Navigation({ currentUser }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <h2>Task Manager</h2>
        </div>
        
        <div className="nav-links">
          <a href="#dashboard" className="nav-link active">Dashboard</a>
          <a href="#tasks" className="nav-link">My Tasks</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#team" className="nav-link">Team</a>
        </div>

        <div className="nav-user">
          <button 
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            )}
          </button>
          
          {currentUser ? (
            <div className="user-menu">
              <button 
                className="user-button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div className="user-avatar">
                  {currentUser.name.charAt(0).toUpperCase()}
                </div>
                <span className="user-name">{currentUser.name}</span>
                <span className="dropdown-arrow">▼</span>
              </button>
              
              {isMenuOpen && (
                <div className="user-dropdown">
                  <div className="dropdown-item">
                    <strong>{currentUser.name}</strong>
                    <span className="dropdown-email">{currentUser.email}</span>
                  </div>
                  <div className="dropdown-divider"></div>
                  <a href="#profile" className="dropdown-item">Profile</a>
                  <a href="#settings" className="dropdown-item">Settings</a>
                  <a href="#logout" className="dropdown-item">Logout</a>
                </div>
              )}
            </div>
          ) : (
            <button className="login-button">Login</button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;

