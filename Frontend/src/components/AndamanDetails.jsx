import React, { useState } from 'react';
import '../styles/AndamanPrivateTrip.css';
import { FaUmbrellaBeach, FaShip, FaSwimmer, FaTree, FaMapSigns } from 'react-icons/fa';

const AndamanPrivateTrip = () => {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div className="andaman-trip-container">
            <h2 className="andaman-heading">Explore Andaman & Nicobar with Trip Square</h2>
            <p className="andaman-intro">
                Discover the pristine beauty of the Andaman and Nicobar Islands with a private trip tailored just for you.
                From turquoise waters and white-sand beaches to rich coral reefs and tropical adventures,
                this journey promises an unforgettable escape into nature’s paradise.
            </p>

            <div className="andaman-highlights">
                <div className="highlight-card">
                    <FaUmbrellaBeach className="highlight-icon" />
                    <h3>Secluded Beaches</h3>
                    <p>Relax on the untouched sands of Radhanagar, Elephant Beach, and Neil Island’s shores.</p>
                </div>
                <div className="highlight-card">
                    <FaShip className="highlight-icon" />
                    <h3>Private Ferries & Cruises</h3>
                    <p>Enjoy luxury transport between islands with serene ocean views and top-notch service.</p>
                </div>
                <div className="highlight-card">
                    <FaSwimmer className="highlight-icon" />
                    <h3>Water Adventures</h3>
                    <p>Snorkeling, scuba diving, kayaking – we arrange it all with the best guides and safety.</p>
                </div>
                {showMore && (
                    <>
                        <div className="highlight-card">
                            <FaTree className="highlight-icon" />
                            <h3>Tropical Retreats</h3>
                            <p>Stay in eco-resorts or seaside villas surrounded by lush tropical forests and blue lagoons.</p>
                        </div>
                        <div className="highlight-card">
                            <FaMapSigns className="highlight-icon" />
                            <h3>Guided Island Tours</h3>
                            <p>Explore local culture, marine museums, historical sites, and native flora with expert guides.</p>
                        </div>
                    </>
                )}
            </div>

            <button className="show-more-btn" onClick={toggleShowMore}>
                {showMore ? 'Show Less' : 'Show More'}
            </button>

            <p className="andaman-closing">
                Whether you're planning a honeymoon, solo getaway, or family vacation – your private Andaman adventure starts here.
                Let Trip Square make it magical.
            </p>
        </div>
    );
};

export default AndamanPrivateTrip;
