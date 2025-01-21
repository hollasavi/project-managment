import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../Assets/Nav.css';
import Logo from '../Images/mite-logo-org.png'

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [userId, setUserId] = useState(null); 
  const location = useLocation();

  const navigate=useNavigate();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId'); 
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userId'); 
    setUserId(null);
    navigate('/');
  };

  return (
    <div className="main-nav-container">
      <div className="logo-container">
        <img src={Logo} alt="Logo" />
      </div>
      <div className={`menu-container ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" className={isActive('/') ? 'active' : ''}>
          Home
        </Link>
        <div
          className="dropdown"
          onMouseEnter={() => setIsAboutDropdownOpen(true)}
          onMouseLeave={() => setIsAboutDropdownOpen(false)}
        >
          <span className={`dropdown-link ${isActive('/about') ? 'active' : ''}`}>
            About <span className="dropdown-symbol">▼</span>
          </span>
          {isAboutDropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/about/team">Our Team</Link>
              <Link to="/about/mission">Our Mission</Link>
              <Link to="/about/history">Our History</Link>
            </div>
          )}
        </div>
        <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>
          Contact Us
        </Link>
        <Link to="/manage" className={isActive('/manage') ? 'active' : ''}>
          Manage
        </Link>
        <div
          className="dropdown profile-container"
          onMouseEnter={() => setIsProfileDropdownOpen(true)}
          onMouseLeave={() => setIsProfileDropdownOpen(false)}
        >
          <span className="dropdown-link">
            {userId ? 'Profile' : 'Login'} <span className="dropdown-symbol">▼</span>
          </span>
          {isProfileDropdownOpen && (
            <div className="dropdown-menu">
              {userId ? (
                <>
                  <Link to="/profile">Profile</Link>
                  <Link to="/settings">Settings</Link>
                  <Link onClick={handleLogout}>Logout</Link>
                  
                </>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Nav;
