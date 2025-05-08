import React, { useRef, useState, useEffect } from 'react';
import '../styles/HorizontalSlider.css';
import { useNavigate } from 'react-router-dom';
import { useApi } from '../context/ApiContext'; // Import the useApi hook

const HorizontalSlider = ({ filter='Summer' }) => {

    const navigate = useNavigate();

    const { getTrips } = useApi(); // Get the API methods from context
    const [trips, setTrips] = useState([]); // State to store trips
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state

    const sliderRef = useRef(null);
    const scrollbarRef = useRef(null);
    const handleRef = useRef(null);
    const [startX, setStartX] = useState(0);
    const [handleStartX, setHandleStartX] = useState(0);

    useEffect(() => {
        const fetchTrips = async () => {
            try {
                let tripsData = await getTrips();
                tripsData = tripsData.filter(item => item.recommendedSeason.includes(filter));
                setTrips(tripsData);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchTrips();
    }, [getTrips]);

    // Update scrollbar position when content scrolls
    useEffect(() => {
        const slider = sliderRef.current;
        const scrollbar = scrollbarRef.current;
        const handle = handleRef.current;

        if (!slider || !scrollbar || !handle) return;

        const updateScrollbar = () => {
            const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
            if (maxScrollLeft <= 0) {
                handle.style.width = '100%';
                return;
            }

            const scrollRatio = slider.scrollLeft / maxScrollLeft;
            const scrollbarWidth = scrollbar.clientWidth;
            const handleWidth = Math.max(50, (slider.clientWidth / slider.scrollWidth) * scrollbarWidth);

            handle.style.width = `${handleWidth}px`;

            const maxHandlePos = scrollbarWidth - handleWidth;
            const handlePos = scrollRatio * maxHandlePos;

            handle.style.left = `${handlePos}px`;
        };

        // Initial update
        updateScrollbar();
        window.addEventListener('resize', updateScrollbar);
        slider.addEventListener('scroll', updateScrollbar);

        return () => {
            window.removeEventListener('resize', updateScrollbar);
            slider.removeEventListener('scroll', updateScrollbar);
        };
    }, []);

    if (loading) {
        return <div className="scroller-container">Loading trips...</div>;
    }

    if (error) {
        return <div className="scroller-container">Error: {error}</div>;
    }

    if (trips.length === 0) {
        return <div className="scroller-container">No trips available</div>;
    }

    // Common drag start handler
    const startDrag = (e) => {
        // Get the initial position based on input type
        const clientX = e.clientX || e.touches[0].clientX;
        setStartX(clientX);
        setHandleStartX(parseInt(handleRef.current.style.left || '0', 10));

        document.body.style.cursor = 'grabbing';

        // Add both mouse and touch listeners
        document.addEventListener('mousemove', onDrag);
        document.addEventListener('mouseup', stopDrag);
        document.addEventListener('touchmove', onTouchMove, { passive: false });
        document.addEventListener('touchend', stopDrag);

        e.preventDefault();
    };

    // Mouse drag handler
    const onDrag = (e) => {

        const clientX = e.clientX;
        updateScrollPosition(clientX);
        e.preventDefault();
    };

    // Touch drag handler
    const onTouchMove = (e) => {
        const clientX = e.touches[0].clientX;
        updateScrollPosition(clientX);
        e.preventDefault();
    };

    // Common function to update scroll position
    const updateScrollPosition = (clientX) => {
        const slider = sliderRef.current;
        const scrollbar = scrollbarRef.current;
        const handle = handleRef.current;

        if (!slider || !scrollbar || !handle) return;

        const scrollbarWidth = scrollbar.clientWidth;
        const handleWidth = handle.clientWidth;
        const maxHandlePos = scrollbarWidth - handleWidth;

        let newHandlePos = handleStartX + (clientX - startX);
        newHandlePos = Math.max(0, Math.min(newHandlePos, maxHandlePos));

        handle.style.left = `${newHandlePos}px`;

        // Update slider scroll position
        if (maxHandlePos > 0) {
            const scrollRatio = newHandlePos / maxHandlePos;
            const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
            slider.scrollLeft = scrollRatio * maxScrollLeft;
        }
    };

    // Common stop drag handler
    const stopDrag = () => {
        document.body.style.cursor = '';

        // Remove all event listeners
        document.removeEventListener('mousemove', onDrag);
        document.removeEventListener('mouseup', stopDrag);
        document.removeEventListener('touchmove', onTouchMove);
        document.removeEventListener('touchend', stopDrag);
    };

    // Clean up event listeners when component unmounts
    // useEffect(() => {
    //     return () => {
    //         stopDrag();
    //     };
    // }, []);

    const handleClick = (id) => {
        return navigate(`/trip/${id}`);
    }

    return (
        <div className="scroller-container">
            <div className="cards-scroller" ref={sliderRef}>
                {trips.map((card, index) => (
                    <div key={index} onClick={() => handleClick(card._id)} className="travel-card">
                        <img src={card.pic} alt={card.name} className="card-image" />
                        <div className="card-overlay">
                            <h3 className="card-title">{card.name}</h3>
                            <p className="card-duration">Duration: {card.duration}</p>
                            <button className="book-button">Book</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="custom-scrollbar" ref={scrollbarRef}>
                <div
                    className="scroll-handle"
                    ref={handleRef}
                    onMouseDown={startDrag}
                    onTouchStart={startDrag}
                ></div>
            </div>
        </div>
    );
};

export default HorizontalSlider;