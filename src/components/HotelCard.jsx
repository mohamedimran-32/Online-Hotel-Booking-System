import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/HotelCard.css';

const HotelCard = ({ hotel }) => {
    return (
        <div className="hotel-card">
            <div className="hotel-image">
                <img src={hotel.thumbnail} alt={hotel.name} loading="lazy" />
            </div>
            <div className="hotel-details">
                <div className="hotel-header">
                    <h3>{hotel.name}</h3>
                    <div className="hotel-rating">
                        <span className="rating-badge">{hotel.rating}</span>
                        <span className="stars">
                            {[...Array(hotel.stars || 0)].map((_, i) => <FaStar key={i} />)}
                        </span>
                    </div>
                </div>

                <p className="hotel-location"><FaMapMarkerAlt /> {hotel.location}</p>

                <div className="hotel-amenities">
                    {hotel.amenities?.slice(0, 3).map((amenity, index) => (
                        <span key={index} className="amenity-tag">{amenity}</span>
                    ))}
                    {hotel.amenities?.length > 3 && <span className="amenity-tag">+{hotel.amenities.length - 3} more</span>}
                </div>

                <div className="hotel-footer">
                    <div className="hotel-price">
                        <span className="price">₹{hotel.price.toLocaleString()}</span>
                        <span className="per-night">/ night</span>
                    </div>

                    <Link to={`/hotels/${hotel.id}`} className="view-btn">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HotelCard;
