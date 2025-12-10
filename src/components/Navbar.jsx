import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { FaMoon, FaSun, FaUserCircle } from 'react-icons/fa';
import LoginModal from './LoginModal';
import '../styles/Navbar.css';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [showLogin, setShowLogin] = useState(false);

    return (
        <>
            <nav className="navbar">
                <div className="container navbar-content">
                    <Link to="/" className="navbar-logo">
                        <img src="/images/logo.jpg" alt="ARM Grand Palace Hotel" className="navbar-logo-img" />
                        <span className="navbar-logo-text">ARM Grand Palace Hotel</span>
                    </Link>

                    <div className="navbar-links">
                        <button
                            className="btn-icon"
                            onClick={toggleTheme}
                            aria-label="Toggle Theme"
                        >
                            {theme === 'light' ? <FaMoon /> : <FaSun />}
                        </button>

                        <button className="btn-primary" onClick={() => setShowLogin(true)}>
                            <FaUserCircle /> Login
                        </button>
                    </div>
                </div>
            </nav>
            {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
        </>
    );
};

export default Navbar;
