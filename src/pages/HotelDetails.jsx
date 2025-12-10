import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { hotels } from '../data/mockData';
import { FaMapMarkerAlt, FaStar, FaWifi, FaCoffee, FaConciergeBell, FaSwimmer, FaDumbbell } from 'react-icons/fa';
import '../styles/HotelDetails.css';

const HotelDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [hotel, setHotel] = useState(null);
    const [activeImage, setActiveImage] = useState(0);

    useEffect(() => {
        // Simulate API fetch
        const foundHotel = hotels.find(h => h.id === parseInt(id));
        setHotel(foundHotel);
        window.scrollTo(0, 0);
    }, [id]);

    if (!hotel) {
        return (
            <div className="container" style={{ padding: '4rem', textAlign: 'center' }}>
                <h2>Loading...</h2>
            </div>
        );
    }

    const handleBook = (room) => {
        // Navigate to booking page with state
        navigate('/booking', { state: { hotel, room } });
    };

    return (
        <div className="hotel-details-page container">
            {/* Image Gallery */}
            <div className="image-gallery">
                <div className="main-image">
                    {hotel.images && hotel.images[activeImage] && (
                        <img src={hotel.images[activeImage]} alt={hotel.name} />
                    )}
                </div>
                <div className="thumbnail-list">
                    {hotel.images && hotel.images.map((img, idx) => (
                        <img
                            key={idx}
                            src={img}
                            alt={`Thumbnail ${idx}`}
                            className={idx === activeImage ? 'active' : ''}
                            onClick={() => setActiveImage(idx)}
                        />
                    ))}
                </div>
            </div>

            <div className="details-content">
                <div className="header-info">
                    <h1>{hotel.name}</h1>
                    <p className="location"><FaMapMarkerAlt /> {hotel.location}</p>
                    <div className="rating">
                        <span className="badge">{hotel.rating}</span>
                        <span>({hotel.stars} Stars)</span>
                    </div>
                </div>

                <div className="description">
                    <h3>Overview</h3>
                    <p>{hotel.description}</p>
                </div>

                <div className="amenities-section">
                    <h3>Amenities</h3>
                    <div className="amenities-grid">
                        {hotel.amenities && hotel.amenities.map((amenity, idx) => (
                            <span key={idx} className="amenity-item">
                                {/* Using a generic star icon for now */}
                                <FaStar size={12} color="var(--primary-color)" /> {amenity}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Map Section */}
                <div className="map-section">
                    <h3>Location</h3>
                    <div className="map-container">
                        {hotel.mapEmbedUrl ? (
                            <iframe
                                src={hotel.mapEmbedUrl}
                                width="100%"
                                height="450"
                                style={{ border: 0, borderRadius: 'var(--radius)' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Hotel Location"
                            ></iframe>
                        ) : (
                            <div className="map-placeholder">
                                <p>Map View Integration (Google Maps Placeholder)</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Rooms */}
                <div className="rooms-section">
                    <h3>Available Rooms</h3>
                    <div className="rooms-grid">
                        {hotel.rooms && hotel.rooms.map((room, idx) => (
                            <div key={idx} className="room-card">
                                <div>
                                    <h4>{room.type}</h4>
                                    <p>Max Capacity: {room.capacity} Guests</p>
                                </div>
                                <div className="room-price-action">
                                    <span className="price">₹{room.price.toLocaleString()}</span>
                                    <button onClick={() => handleBook(room)} className="book-btn">Book Now</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelDetails;
