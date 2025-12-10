import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { hotels } from '../data/mockData';
import HotelCard from '../components/HotelCard';
import '../styles/HotelListing.css';

const HotelListing = () => {
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const cityQuery = queryParams.get('city');

    const [filteredHotels, setFilteredHotels] = useState(hotels);
    const [filters, setFilters] = useState({
        maxPrice: 100000,
        stars: []
    });
    const [sortBy, setSortBy] = useState('recommended');

    useEffect(() => {
        let result = [...hotels];

        // Filter by city (if present)
        if (cityQuery) {
            result = result.filter(h => h.location.toLowerCase() === cityQuery.toLowerCase());
        }

        // Filter by price
        result = result.filter(h => h.price <= filters.maxPrice);

        // Filter by stars
        if (filters.stars.length > 0) {
            result = result.filter(h => filters.stars.includes(h.stars));
        }

        // Sort
        if (sortBy === 'priceLowHigh') {
            result.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'priceHighLow') {
            result.sort((a, b) => b.price - a.price);
        } else if (sortBy === 'rating') {
            result.sort((a, b) => b.rating - a.rating);
        }

        setFilteredHotels(result);
    }, [filters, sortBy, cityQuery]);

    const handlePriceChange = (e) => {
        setFilters({ ...filters, maxPrice: parseInt(e.target.value) });
    };

    const handleStarChange = (star) => {
        const newStars = filters.stars.includes(star)
            ? filters.stars.filter(s => s !== star)
            : [...filters.stars, star];
        setFilters({ ...filters, stars: newStars });
    };

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    };

    return (
        <div className="listing-page container">
            <aside className="filters-sidebar">
                <h3>Filters</h3>

                <div className="filter-group">
                    <h4>Budget (Max)</h4>
                    <label>Up to ₹{filters.maxPrice.toLocaleString()}</label>
                    <input
                        type="range"
                        min="1000"
                        max="100000"
                        step="1000"
                        value={filters.maxPrice}
                        onChange={handlePriceChange}
                    />
                </div>

                <div className="filter-group">
                    <h4>Star Rating</h4>
                    {[5, 4, 3].map(star => (
                        <label key={star} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <input
                                type="checkbox"
                                checked={filters.stars.includes(star)}
                                onChange={() => handleStarChange(star)}
                            />
                            {star} Stars
                        </label>
                    ))}
                </div>
            </aside>

            <main className="hotel-list">
                <div className="list-header">
                    <h2>
                        {cityQuery ? `${filteredHotels.length} Hotels in ${cityQuery}` : `${filteredHotels.length} Hotels Found`}
                    </h2>
                    <select value={sortBy} onChange={handleSortChange} className="sort-select">
                        <option value="recommended">Recommended</option>
                        <option value="priceLowHigh">Price: Low to High</option>
                        <option value="priceHighLow">Price: High to Low</option>
                        <option value="rating">Top Rated</option>
                    </select>
                </div>

                {filteredHotels.length > 0 ? (
                    filteredHotels.map(hotel => (
                        <HotelCard key={hotel.id} hotel={hotel} />
                    ))
                ) : (
                    <p>No hotels found matching your filters.</p>
                )}
            </main>
        </div>
    );
};
export default HotelListing;
