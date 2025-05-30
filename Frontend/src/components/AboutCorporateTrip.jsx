import React, { useState } from 'react';
import '../styles/AboutCorporateTrip.css';
import { FaUsers, FaPlane, FaGift, FaLaptop, FaBuilding, FaGlobe } from 'react-icons/fa';

const AboutCorporateTrip = () => {
    const [expanded, setExpanded] = useState(false);

    const toggleContent = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="corporate-trips-container">
            <div className="corporate-trips-header">
                <h1>Elevate Your Team with Trip Square: Your Corporate Travel Partner</h1>
                <div className={`intro-text-wrapper ${expanded ? 'expanded' : ''}`}>
                    <p className="intro-paragraph">
                        In today's dynamic business landscape, fostering a strong and engaged team is paramount. At Trip Square, based in Bengaluru, Karnataka, India, we understand that the traditional office environment can sometimes feel monotonous and hinder the crucial bonds that drive success. That's where we come in. We specialize in crafting exceptional corporate travel experiences designed to rejuvenate your workforce, spark creativity, and significantly enhance team building. While our current focus is on providing unforgettable trips within the diverse and culturally rich expanse of India, our vision extends far beyond. We are excited about our upcoming expansion to offer worldwide corporate travel solutions, bringing global engagement opportunities to your doorstep.
                        {!expanded && ( // Show "..." only when not expanded
                            <span>...</span>
                        )}
                    </p>
                    {expanded && (
                        <>
                            <p>
                                Trip Square isn't just a travel agency; we are your dedicated partners in transforming the ordinary work experience into an engaging and inspiring journey. We believe that by stepping outside the confines of the office, teams can connect on a deeper level, fostering stronger relationships and a more cohesive work culture. Our meticulously planned corporate trips are more than just vacations; they are strategic investments in your team's morale, productivity, and overall well-being.
                            </p>

                            <div className="corporate-trips-content">
                                <section className="how-trip-square-helps">
                                    <h2>Transforming Your Office Experience</h2>
                                    <p>
                                        Imagine breaking free from the routine of daily tasks and immersing your team in a new and stimulating environment. Trip Square curates experiences that go beyond sightseeing. We design activities that encourage collaboration, problem-solving, and shared memories. Whether it's an adventurous trek in the Himalayas, a culturally enriching exploration of ancient cities, or a relaxing retreat in the serene backwaters, our trips are tailored to create lasting positive impacts.
                                    </p>
                                    <p>
                                        We handle all the logistics, from travel and accommodation to curated activities and team-building exercises. This allows you and your team to focus entirely on the experience and each other, without the stress of planning and coordination. Our goal is to provide a seamless and enjoyable journey that leaves your team feeling refreshed, motivated, and more connected than ever before.
                                    </p>
                                </section>

                                <section className="team-building-benefits">
                                    <h2>Boosting Team Building Through Travel</h2>
                                    <p>
                                        Team building is not just a buzzword; it's a critical component of a successful organization. Corporate trips offer a unique and effective platform for strengthening team bonds. When individuals step outside their usual roles and interact in informal settings, communication barriers break down, trust is built, and a sense of camaraderie flourishes.
                                    </p>
                                    <p>
                                        Our carefully designed itineraries incorporate activities that promote teamwork, communication, and mutual support. These shared experiences create a common ground and foster a stronger sense of unity within the team. The memories created during these trips become shared stories, contributing to a more positive and collaborative work environment long after the journey ends. Studies have shown that such initiatives can lead to increased employee satisfaction, reduced turnover, and improved overall performance.
                                    </p>
                                </section>

                                <section className="our-services">
                                    <h2>Explore Our Corporate Trip Services</h2>
                                    <div className="service-cards-container">
                                        <div className="service-card">
                                            <FaUsers className="service-icon" />
                                            <h3>Team Outings</h3>
                                            <p>Bring your work crew together for a day of bonding and enjoyment outside the office.</p>
                                        </div>
                                        <div className="service-card">
                                            <FaPlane className="service-icon" />
                                            <h3>Corporate Trips</h3>
                                            <p>Elevate team spirit and performance with incentive trips that turn dreams into reality.</p>
                                        </div>
                                        <div className="service-card">
                                            <FaGift className="service-icon" />
                                            <h3>Incentive Tour</h3>
                                            <p>Reward your top performers with unforgettable travel experiences that recognize their achievements.</p>
                                        </div>
                                        <div className="service-card">
                                            <FaLaptop className="service-icon" />
                                            <h3>Workcations</h3>
                                            <p>Why work in the same old way when you can do the same in your favorite destinations with our Workations?</p>
                                        </div>
                                        <div className="service-card">
                                            <FaBuilding className="service-icon" />
                                            <h3>Conferences</h3>
                                            <p>Transform ordinary conferences into extraordinary journeys combined with innovation, networking, and adventure.</p>
                                        </div>
                                        <div className="service-card">
                                            <FaGlobe className="service-icon" />
                                            <h3>Exhibition</h3>
                                            <p>Discover, connect, and inspire, elevate your brand at global exhibitions.</p>
                                        </div>
                                    </div>
                                </section>

                                <section className="global-expansion">
                                    <h2>Expanding Our Horizons: Going Global</h2>
                                    <p>
                                        Currently, Trip Square is proud to offer a wide array of enriching and engaging corporate travel options across India. We have a deep understanding of the diverse landscapes, cultures, and experiences that our country has to offer, allowing us to curate truly unique and impactful trips.
                                    </p>
                                    <p>
                                        Looking ahead, we are thrilled to announce our plans for global expansion. We recognize the growing need for international corporate travel solutions and are diligently working towards offering our expertise and personalized services worldwide. Our goal is to provide your team with access to a global network of destinations and experiences, fostering international collaboration and broadening perspectives. Stay tuned for updates on our global launch, as we prepare to take your corporate travel experiences to new heights, across the globe. With Trip Square, the world will soon be your team's oyster.
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

export default AboutCorporateTrip;