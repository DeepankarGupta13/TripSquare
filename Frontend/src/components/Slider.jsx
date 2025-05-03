import React, { useRef, useState, useEffect } from 'react';
import '../styles/HorizontalSlider.css';
import { assetsList } from '../assets/assets';

const HorizontalSlider = () => {
    const sliderRef = useRef(null);
    const scrollbarRef = useRef(null);
    const handleRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeftStart, setScrollLeftStart] = useState(0);

    // Update scrollbar position when content scrolls
    useEffect(() => {
        const slider = sliderRef.current;
        const scrollbar = scrollbarRef.current;
        const handle = handleRef.current;

        const updateScrollbar = () => {
            const scrollRatio = slider.scrollLeft / (slider.scrollWidth - slider.clientWidth);
            const handlePos = scrollRatio * (scrollbar.clientWidth - handle.clientWidth);
            handle.style.left = `${handlePos}px`;
        };

        slider.addEventListener('scroll', updateScrollbar);
        return () => slider.removeEventListener('scroll', updateScrollbar);
    }, []);

    // Handle scrollbar drag
    const startDrag = (e) => {
        setIsDragging(true);
        setStartX(e.clientX);
        setScrollLeftStart(sliderRef.current.scrollLeft);
        document.body.style.cursor = 'grabbing';
        document.addEventListener('mousemove', onDrag);
        document.addEventListener('mouseup', stopDrag);
        e.preventDefault();
    };

    const onDrag = (e) => {
        if (!isDragging) return;
        const x = e.clientX - startX;
        const scrollbar = scrollbarRef.current;
        const handle = handleRef.current;
        const scrollbarWidth = scrollbar.clientWidth - handle.clientWidth;

        const scrollRatio = x / scrollbarWidth;
        const newScrollLeft = scrollRatio * (sliderRef.current.scrollWidth - sliderRef.current.clientWidth);

        sliderRef.current.scrollLeft = newScrollLeft;
    };

    const stopDrag = () => {
        setIsDragging(false);
        document.body.style.cursor = '';
        document.removeEventListener('mousemove', onDrag);
        document.removeEventListener('mouseup', stopDrag);
    };
    
    return (
        <div className="scroller-container">
            <div className="cards-scroller" ref={sliderRef}>
                {assetsList.map((card) => (
                    <div key={card.id} className="travel-card">
                        <img src={card.pic} alt={card.name} className="card-image" />
                        <div className="card-overlay">
                            <h3 className="card-title">{card.name}</h3>
                            <p className="card-price">Price: {card.price}</p>
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
                ></div>
            </div>
        </div>
    );
};

export default HorizontalSlider;