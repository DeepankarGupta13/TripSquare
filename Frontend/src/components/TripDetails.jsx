import React, { useRef, useState } from 'react';
import '../styles/TripDetails.css';

const TripDetails = ({ tripData }) => {
    const [expandedDays, setExpandedDays] = useState({});
    const overviewRef = useRef(null);
    const itineraryRef = useRef(null);
    const inclusionRef = useRef(null);
    const exclusionRef = useRef(null);
    const otherInfoRef = useRef(null);
    const [showFullDescription, setShowFullDescription] = useState(false);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    const toggleDay = (dayIndex) => {
        setExpandedDays(prev => ({
            ...prev,
            [dayIndex]: !prev[dayIndex]
        }));
    };

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    const getShortDescription = (text) => {
        const words = text.split(' ');
        if (words.length <= 20) return text;
        return words.slice(0, 20).join(' ') + '...';
    };

    return (
        <div className="trip-details-container">
            {/* Menu Bar */}
            <div ref={overviewRef}> </div>
            <div className="menu-bar">
                <button onClick={() => scrollToSection(overviewRef)}>Overview</button>
                <button onClick={() => scrollToSection(itineraryRef)}>Itinerary</button>
                <button onClick={() => scrollToSection(inclusionRef)}>Inclusion</button>
                <button onClick={() => scrollToSection(exclusionRef)}>Exclusion</button>
                <button onClick={() => scrollToSection(otherInfoRef)}>Other Info</button>
            </div>

            {/* Scrollable Content Container */}
            <div className="content-container">
                {/* Overview Section */}
                <div className="section">
                    <h2>Overview & Highlights</h2>
                    <div className="content">
                        <p className="description-text">
                            {showFullDescription ? tripData.description : getShortDescription(tripData.description)}
                            {tripData.description.split(' ').length > 20 && (
                                <button
                                    onClick={toggleDescription}
                                    className="read-more-btn"
                                >
                                    {showFullDescription ? 'Read Less' : 'Read More'}
                                </button>
                            )}
                        </p>
                    </div>
                <div ref={itineraryRef} style={{ margin: '10px', height: '50px' }}> </div>
                </div>

                {/* Itinerary Section */}
                <div className="section">
                    <h2>Itinerary</h2>
                    <div className="content">
                        <div className="itinerary-days">
                            {tripData.itinerary.map((day, index) => (
                                <div
                                    key={index}
                                    className={`day-container ${expandedDays[index] ? 'expanded' : ''}`}
                                >
                                    <div
                                        className="day-header"
                                        onClick={() => toggleDay(index)}
                                    >
                                        <h3>Day {day.day}: {day.description}</h3>
                                        <span className="toggle-icon">
                                            {expandedDays[index] ? '▲' : '▼'}
                                        </span>
                                    </div>
                                    <div className="day-content">
                                        <ul>
                                            {day.activities.map((activity, i) => (
                                                <li key={i}>{activity}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                <div ref={inclusionRef} style={{ margin: '10px', height: '50px' }}> </div>
                </div>

                {/* Other sections remain the same */}
                <div className="section">
                    <h2>Inclusion</h2>
                    <div className="content">
                        <ul className="inclusion-list">
                            {tripData.inclusions.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                <div ref={exclusionRef} style={{ margin: '10px', height: '50px' }}> </div>
                </div>

                <div className="section">
                    <h2>Exclusion</h2>
                    <div className="content">
                        <ul className="exclusion-list">
                            {tripData.exclusions.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                <div ref={otherInfoRef} style={{ margin: '10px', height: '60px' }}> </div>
                </div>

                <div className="section">
                    <h2>Other Info</h2>
                    <div className="content">
                        <ul className="other-info-list">
                            {tripData.otherDetails.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TripDetails;