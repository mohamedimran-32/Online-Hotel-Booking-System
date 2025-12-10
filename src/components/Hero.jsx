import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Hero.css';

const Hero = () => {
    const [destination, setDestination] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [guests, setGuests] = useState(1);
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (!checkIn || !checkOut) {
            alert('Please select check-in and check-out dates');
            return;
        }
        if (new Date(checkOut) <= new Date(checkIn)) {
            alert('Check-out date must be after check-in date');
            return;
        }
        if (destination.trim()) {
            navigate(`/hotels?city=${encodeURIComponent(destination)}`);
        } else {
            navigate('/hotels');
        }
    };

    return (
        <div className="hero">
            <div className="hero-content">
                <h1>Find Your Perfect Stay</h1>
                <p>Discover top-rated hotels, resorts, and vacation rentals</p>

                <form className="search-bar" onSubmit={handleSearch}>
                    <div className="input-group">
                        <label>Where</label>
                        <input
                            type="text"
                            placeholder="City or Hotel"
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <label>Check-in</label>
                        <input
                            type="date"
                            value={checkIn}
                            onChange={(e) => setCheckIn(e.target.value)}
                            min={new Date().toISOString().split('T')[0]}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label>Check-out</label>
                        <input
                            type="date"
                            value={checkOut}
                            onChange={(e) => setCheckOut(e.target.value)}
                            min={checkIn || new Date().toISOString().split('T')[0]}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label>Guests</label>
                        <input
                            type="number"
                            min="1"
                            max="10"
                            value={guests}
                            onChange={(e) => setGuests(parseInt(e.target.value))}
                            required
                        />
                    </div>

                    <button type="submit" className="search-btn">
                        Search Hotels
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Hero;
