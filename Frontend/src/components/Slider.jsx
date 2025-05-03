import React, { useRef, useState, useEffect } from 'react';
import '../styles/HorizontalSlider.css';
import { assetsList } from '../assets/assets';

const HorizontalSlider = ({ filter }) => {
    console.log('filter: ', filter);
    const sliderRef = useRef(null);
    const scrollbarRef = useRef(null);
    const handleRef = useRef(null);
    const [startX, setStartX] = useState(0);
    const [handleStartX, setHandleStartX] = useState(0);

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
    useEffect(() => {
        return () => {
            stopDrag();
        };
    }, []);

    return (
        <div className="scroller-container">
            <div className="cards-scroller" ref={sliderRef}>
                {assetsList.map((card) => (
                    <div key={card.id} className="travel-card">
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