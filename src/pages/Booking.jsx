import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/Booking.css';

const Booking = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { hotel, room } = location.state || {};

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    });

    const [isProcessing, setIsProcessing] = useState(false);

    if (!hotel || !room) {
        return (
            <div className="container" style={{ padding: '4rem', textAlign: 'center' }}>
                <h2>No booking details found. Please select a hotel first.</h2>
                <button className="btn-primary" onClick={() => navigate('/hotels')} style={{ marginTop: '1rem', padding: '10px 20px', cursor: 'pointer' }}>Go to Hotels</button>
            </div>
        );
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsProcessing(true);

        // Simulate API call
        setTimeout(() => {
            setIsProcessing(false);
            alert('Booking Confirmed! Thank you for choosing us.');
            navigate('/');
        }, 2000);
    };

    return (
        <div className="booking-page container">
            <h2>Confirm Your Booking</h2>

            <div className="booking-layout">
                <form className="booking-form" onSubmit={handleSubmit}>
                    <h3>Guest Details</h3>
                    <div className="form-row">
                        <div className="form-group">
                            <label>First Name</label>
                            <input required type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input required type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Email Address</label>
                        <input required type="email" name="email" value={formData.email} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label>Phone Number</label>
                        <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} />
                    </div>

                    <h3>Payment Details</h3>
                    <div className="form-group">
                        <label>Card Number</label>
                        <input required type="text" name="cardNumber" placeholder="0000 0000 0000 0000" value={formData.cardNumber} onChange={handleChange} />
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Expiry Date</label>
                            <input required type="text" name="expiryDate" placeholder="MM/YY" value={formData.expiryDate} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>CVV</label>
                            <input required type="password" name="cvv" placeholder="123" value={formData.cvv} onChange={handleChange} maxLength="3" />
                        </div>
                    </div>

                    <button type="submit" className="confirm-btn" disabled={isProcessing}>
                        {isProcessing ? 'Processing Payment...' : `Pay ₹${(room.price * 1.18).toLocaleString()}`}
                    </button>
                </form>

                <div className="booking-summary">
                    <h3>Booking Summary</h3>
                    <div className="summary-card">
                        <img src={hotel.thumbnail} alt={hotel.name} />
                        <h4>{hotel.name}</h4>
                        <p className="summary-detail">{hotel.location}</p>
                        <p className="summary-detail" style={{ fontWeight: 'bold' }}>{room.type}</p>

                        <div className="price-breakdown">
                            <div className="price-row">
                                <span>Room Price</span>
                                <span>₹{room.price.toLocaleString()}</span>
                            </div>
                            <div className="price-row">
                                <span>Taxes & Fees (18%)</span>
                                <span>₹{(room.price * 0.18).toLocaleString()}</span>
                            </div>
                            <div className="price-row total">
                                <span>Total</span>
                                <span>₹{(room.price * 1.18).toLocaleString()}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Booking;
