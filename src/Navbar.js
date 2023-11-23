import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();

  const handleLogout = () => {
    logout();
  }

  const handleLinkClick = (path) => {
    navigate(path);
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" id="text" href="#">
          Career <span className="brand">Sculpt</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" id="active" aria-current="page" to="/" onClick={() => handleLinkClick('/')}>
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" id="links" to="/aboutus" onClick={() => handleLinkClick('/aboutus')}>
                ABOUT US
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" id="links" to="/contacts" onClick={() => handleLinkClick('/contacts')}>
                CONTACTS
              </Link>
            </li>
            <li className="nav-item">
              {isLoggedIn ? (
                <button className="nav-link btn" id="links" onClick={handleLogout}>
                  LOGOUT
                </button>
              ) : (
                <Link className="nav-link" id="links" to="/user" onClick={() => handleLinkClick('/user')}>
                  SIGN IN / SIGN UP
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
