import React, { useState, useEffect } from 'react';
import '../styles/TripPage.css';
import { useNavigate } from 'react-router-dom';
import { useApi } from '../context/ApiContext';
import { months } from '../assets/assets';

const TripPage = ({ filter='all' }) => {
    const navigate = useNavigate();
    const { getTrips } = useApi();
    const [trips, setTrips] = useState([]);
    const [filteredTrips, setFilteredTrips] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedMonth, setSelectedMonth] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    
    // Generate months starting from current month
    const generateMonths = () => {
        const months = [];
        const date = new Date();
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        
        // Always show current month + next 6 months (7 total)
        for (let i = 0; i < 7; i++) {
            const monthIndex = (date.getMonth() + i) % 12;
            const year = date.getFullYear() + Math.floor((date.getMonth() + i) / 12);
            months.push({
                name: `${monthNames[monthIndex]}-${year.toString().slice(-2)}`,
                value: monthIndex + 1 // Month number (1-12)
            });
        }
        
        return months;
    };

    const [visibleMonths, setVisibleMonths] = useState(generateMonths());
    const [showAllMonths, setShowAllMonths] = useState(false);
    const tripsPerPage = 9; // 3 trips per row × 3 rows

    useEffect(() => {
        const fetchTrips = async () => {
            try {
                const tripsData = await getTrips();
                if (filter === 'weekend') {
                    // Filter trips for weekend getaways
                    const weekendTrips = tripsData.filter(trip => {
                        // Extract the number of days from the duration string (e.g., "3D/2N")
                        const match = trip.duration && trip.duration.match(/^(\d+)/);
                        const days = match ? parseInt(match[1], 10) : 0;
                        return days < 3;
                    });
                    setTrips(weekendTrips);
                    setFilteredTrips(weekendTrips);
                } else if (filter === 'long') { 
                    // Filter trips for weekend getaways
                    const longTrip = tripsData.filter(trip => {
                        // Extract the number of days from the duration string (e.g., "3D/2N")
                        const match = trip.duration && trip.duration.match(/^(\d+)/);
                        const days = match ? parseInt(match[1], 10) : 0;
                        console.log('days: ', days);
                        console.log('days > 3: ', days > 3);
                        return days > 3;
                    });
                    setTrips(longTrip);
                    setFilteredTrips(longTrip);
                } else {
                    // Default to all trips
                    setTrips(tripsData);
                    setFilteredTrips(tripsData);
                }
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchTrips();

        const handleResize = () => {
            setShowAllMonths(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [getTrips]);

    // Filter trips based on selected month
    useEffect(() => {
        if (!selectedMonth) {
            setFilteredTrips(trips);
            setCurrentPage(0);
            return;
        }

        const filtered = trips.filter(trip => {
            if (!trip.name) return false;

            // Get the places for the selected month
            const monthPlaces = months[selectedMonth.value] || [];

            // Check if any of the month places is included in the trip name (case insensitive)
            return monthPlaces.some(place =>
                trip.name.toLowerCase().includes(place.toLowerCase())
            );
        });

        setFilteredTrips(filtered);
        setCurrentPage(0);
    }, [selectedMonth, trips]);

    // Calculate total pages
    const totalPages = Math.ceil(filteredTrips.length / tripsPerPage);

    // Get current page trips
    const getCurrentPageTrips = () => {
        const startIndex = currentPage * tripsPerPage;
        return filteredTrips.slice(startIndex, startIndex + tripsPerPage);
    };

    // Group trips into rows of 3
    const groupTripsIntoRows = (tripsList) => {
        const grouped = [];
        for (let i = 0; i < tripsList.length; i += 3) {
            grouped.push(tripsList.slice(i, i + 3));
        }
        return grouped;
    };

    const handleClick = (id) => {
        navigate(`/trip/${id}`);
    };

    const handleMonthSelect = (month) => {
        setSelectedMonth(selectedMonth?.value === month.value ? null : month);
    };

    const handleShowAll = () => {
        setSelectedMonth(null);
    };

    const handlePrevPage = () => {
        setCurrentPage(prev => Math.max(0, prev - 1));
    };

    const handleNextPage = () => {
        setCurrentPage(prev => Math.min(totalPages - 1, prev + 1));
    };

    if (loading) {
        return <div className="scroller-container">Loading trips...</div>;
    }

    if (error) {
        return <div className="scroller-container">Error: {error}</div>;
    }

    if (trips.length === 0) {
        return <div className="scroller-container">No trips available</div>;
    }

    return (
        <div className="scroller-container">
            <div className="month-filter">
                <div className="month-buttons">
                    {/* Add All button at the beginning */}
                    <button
                        className={`month-button ${!selectedMonth ? 'active' : ''}`}
                        onClick={handleShowAll}
                    >
                        All
                    </button>
                    
                    {(showAllMonths ? visibleMonths : visibleMonths.slice(0, 4)).map((month) => (
                        <button
                            key={month.name}
                            className={`month-button ${selectedMonth?.value === month.value ? 'active' : ''}`}
                            onClick={() => handleMonthSelect(month)}
                        >
                            {month.name}
                        </button>
                    ))}
                    {!showAllMonths && visibleMonths.length > 4 && (
                        <button 
                            className="month-button more-button"
                            onClick={() => setShowAllMonths(true)}
                        >
                            More
                        </button>
                    )}
                    {showAllMonths && (
                        <button 
                            className="month-button less-button"
                            onClick={() => setShowAllMonths(false)}
                        >
                            Less
                        </button>
                    )}
                </div>
            </div>

            {filteredTrips.length === 0 && selectedMonth ? (
                <div className="no-results">
                    No trips available for {selectedMonth?.name}. Try another month.
                </div>
            ) : (
                <>
                    <div className="trips-grid">
                        {groupTripsIntoRows(getCurrentPageTrips()).map((row, rowIndex) => (
                            <div key={rowIndex} className="trips-row">
                                {row.map((card, cardIndex) => (
                                    <div 
                                        key={cardIndex} 
                                        onClick={() => handleClick(card._id)} 
                                        className="travel-card"
                                    >
                                        <img src={card.pic} alt={card.name} className="card-image" />
                                        <div className="card-overlay">
                                            <h3 className="card-title">{card.name}</h3>
                                            <p className="card-duration">Duration: {card.duration}</p>
                                            <button className="book-button">Book</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                    <div className="pagination-controls">
                        <button 
                            onClick={handlePrevPage} 
                            disabled={currentPage === 0}
                            className="pagination-button"
                        >
                            ◄
                        </button>
                        
                        <div className="page-indicator">
                            Page {currentPage + 1} of {totalPages}
                        </div>
                        
                        <button 
                            onClick={handleNextPage} 
                            disabled={currentPage >= totalPages - 1}
                            className="pagination-button"
                        >
                            ►
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default TripPage;