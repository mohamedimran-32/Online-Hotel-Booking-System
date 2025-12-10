import React, { useState } from 'react';
import '../styles/LoginModal.css';

const LoginModal = ({ onClose }) => {
    const [isLogin, setIsLogin] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate auth
        alert(isLogin ? 'Logged in successfully!' : 'Account created successfully!');
        onClose();
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>&times;</button>
                <h2>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="Enter your email" required />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" placeholder="Enter password" required />
                    </div>
                    {!isLogin && (
                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input type="password" placeholder="Confirm password" required />
                        </div>
                    )}
                    <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                        {isLogin ? 'Login' : 'Sign Up'}
                    </button>
                </form>
                <p className="switch-mode">
                    {isLogin ? "Don't have an account? " : "Already have an account? "}
                    <span onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? 'Sign Up' : 'Login'}
                    </span>
                </p>
            </div>
        </div>
    );
};
export default LoginModal;
