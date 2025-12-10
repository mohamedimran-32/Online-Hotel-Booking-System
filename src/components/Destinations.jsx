import React from 'react';
import { useNavigate } from 'react-router-dom';
import { popularDestinations } from '../data/mockData';
import '../styles/Destinations.css';

const Destinations = () => {
    const navigate = useNavigate();

    const handleDestinationClick = (city) => {
        navigate(`/hotels?city=${encodeURIComponent(city)}`);
    };

    return (
        <div className="destinations-section">
            <div className="container">
                <h2>Popular Destinations</h2>
                <div className="destinations-grid">
                    {popularDestinations.map((dest) => (
                        <div
                            key={dest.id}
                            className="destination-card"
                            onClick={() => handleDestinationClick(dest.name)}
                        >
                            <div style={{ overflow: 'hidden' }}>
                                <img src={dest.image} alt={dest.name} loading="lazy" />
                            </div>
                            <div className="destination-info">
                                <h3>{dest.name}</h3>
                                <p>{dest.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Destinations;
