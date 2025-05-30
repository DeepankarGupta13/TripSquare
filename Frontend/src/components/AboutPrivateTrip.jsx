import React, { useState } from 'react';
import '../styles/AboutPrivateTrips.css'; // New CSS file for private trips
import { FaCalendarAlt, FaHotel, FaBus, FaMapMarkedAlt, FaWallet, FaHeadset } from 'react-icons/fa';

const AboutPrivateTrips = () => {
    const [expanded, setExpanded] = useState(false);

    const toggleContent = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="private-trips-container">
            <div className="private-trips-header">
                <h1>Your Dream Private Getaway: Tailored by Trip Square</h1>
                <div className={`intro-text-wrapper ${expanded ? 'expanded' : ''}`}>
                    <p className="intro-paragraph">
                        At Trip Square, we believe every journey should be as unique as you are. Forget the hassle of planning; imagine your perfect escape, meticulously crafted to your desires and budget. Whether you dream of serene beaches, adventurous mountains, or vibrant cultural immersions, we are dedicated to transforming your vision into an unforgettable reality. From romantic honeymoons to exhilarating family adventures, Trip Square ensures every detail is handled, providing the best stays and most enchanting locations within India, all designed for your ultimate comfort and joy. Your ideal private trip starts here, effortlessly.
                        {!expanded && ( // Show "..." only when not expanded
                            <span>...</span>
                        )}
                    </p>
                    {expanded && (
                        <>
                            <p>
                                We understand that planning a private trip can be overwhelming, with endless choices for destinations, accommodations, activities, and logistics. This is where Trip Square shines as your personal travel concierge. Our expertise lies in listening to your aspirations and translating them into a seamless travel plan that not only meets but exceeds your expectations, all while respecting your financial preferences. We pride ourselves on discovering hidden gems and securing exceptional deals, ensuring you experience luxury and comfort without breaking the bank.
                            </p>

                            <div className="private-trips-content">
                                <section className="why-choose-us">
                                    <h2>Why Choose Trip Square for Your Private Adventure?</h2>
                                    <p>
                                        We go beyond just booking tickets and rooms. Our team of travel enthusiasts and local experts is committed to delivering a holistic travel experience. We handpick accommodations, from cozy boutique hotels to lavish resorts, ensuring they align with your style and offer the best value. Our deep knowledge of diverse Indian destinations allows us to recommend locations that truly resonate with your travel goals, be it tranquil spiritual retreats, thrilling wildlife safaris, or bustling city explorations.
                                    </p>
                                </section>

                                <section className="hassle-free-planning">
                                    <h2>Hassle-Free Planning, Unforgettable Memories</h2>
                                    <p>
                                        The true luxury of a Trip Square private trip lies in our end-to-end service. You simply contact us and explain your requirements – your dream destination, desired experiences, budget constraints, and any special needs. Our dedicated travel planners then get to work, crafting a personalized itinerary. We take care of absolutely everything: from securing the best flights and comfortable transportation to arranging delightful culinary experiences, thrilling activities, and even handling unforeseen needs during your journey. This meticulous attention to detail means you can simply relax, immerse yourself in the destination, and create cherished memories with your loved ones, free from any logistical worries.
                                    </p>
                                    <p>
                                        Whether you're seeking a quiet solo retreat, a romantic escape with your partner, a fun-filled family vacation, or a unique adventure with friends, Trip Square is equipped to deliver. Our commitment to personalized service ensures that your private trip is not just a holiday, but a beautifully curated journey designed solely for you. Let us turn your travel dreams into a tangible reality, where every moment is a pleasure and every experience is truly yours.
                                    </p>
                                </section>

                                <section className="our-private-services">
                                    <h2>Our Private Trip Services</h2>
                                    <div className="private-service-cards-container">
                                        <div className="private-service-card">
                                            <FaCalendarAlt className="service-icon" />
                                            <h3>Customized Itineraries</h3>
                                            <p>Your trip, your way. Tailored to your interests, pace, and preferences for a truly personal journey.</p>
                                        </div>
                                        <div className="private-service-card">
                                            <FaHotel className="service-icon" />
                                            <h3>Best Stays & Locations</h3>
                                            <p>Handpicked accommodations and unique destinations within India, perfectly suiting your budget and style.</p>
                                        </div>
                                        <div className="private-service-card">
                                            <FaBus className="service-icon" />
                                            <h3>Seamless Logistics</h3>
                                            <p>We handle flights, local transfers, and all transportation for a stress-free, smooth journey.</p>
                                        </div>
                                        <div className="private-service-card">
                                            <FaMapMarkedAlt className="service-icon" />
                                            <h3>Personalized Experiences</h3>
                                            <p>From thrilling adventures to cultural immersions, we curate unique activities just for you.</p>
                                        </div>
                                        <div className="private-service-card">
                                            <FaWallet className="service-icon" />
                                            <h3>Budget-Friendly Options</h3>
                                            <p>Get the most value for your money without compromising on quality or unforgettable experiences.</p>
                                        </div>
                                        <div className="private-service-card">
                                            <FaHeadset className="service-icon" />
                                            <h3>24/7 Dedicated Support</h3>
                                            <p>Travel with peace of mind knowing you have round-the-clock assistance throughout your trip.</p>
                                        </div>
                                    </div>
                                </section>

                                <section className="contact-us-section">
                                    <h2>Ready to Plan Your Perfect Private Trip?</h2>
                                    <p>
                                        Simply reach out to us and explain your requirements. Our dedicated travel experts are eager to listen to your dreams and preferences. We will then meticulously plan and book the best trip for you, taking care of every single detail – from selecting the ideal stay and delicious food options to arranging all your travel needs. With Trip Square, your only job is to relax and enjoy.
                                    </p>
                                    <p className="contact-call-to-action">
                                        **Contact Trip Square today to start planning your bespoke private adventure!**
                                    </p>
                                </section>
                            </div>
                        </>
                    )}
                </div>
                <button className="read-more-btn" onClick={toggleContent}>
                    {expanded ? 'Read Less' : 'Read More'}
                </button>
            </div>
        </div>
    );
};

export default AboutPrivateTrips;