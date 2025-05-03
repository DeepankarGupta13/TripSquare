import React, { useState, useEffect } from 'react'
import { assets } from '../assets/assets'
import '../styles/Map.css'
import { useNavigate } from 'react-router-dom';
import * as constants from '../utils/constants';

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
};

const Map = () => {
    const navigate = useNavigate();
    const { width } = useWindowSize();

    const handleClick = (id) => {
        return () => {
            console.log('id: ', id);
            navigate(`/trip/${id}`);
        };
    }

    if (width < 800) {
        return null; // Return nothing if screen is too small
    }

    return (
        <div className='map'>
            <div className='map-container'>
                <img src={assets.map} alt="" />
            </div>
            <div className='pin map-location' onClick={handleClick(constants.MEGHALAYA_ID)}>
                <img src={assets.location} alt="" />
                <p className='location-name'>Meghalaya</p>
            </div>
            <div className='pin map-location1' onClick={handleClick(constants.MANALI_ID)}>
                <img src={assets.location} alt="" />
                <p className='location-name'>Manali</p>
            </div>
            <div className='pin map-location2' onClick={handleClick(constants.SIKKIM_ID)}>
                <img src={assets.location} alt="" />
                <p className='location-name'>Sikkim</p>
            </div>
            <div className='pin map-location3' onClick={handleClick(constants.OOTY_ID)}>
                <img src={assets.location} alt="" />
                <p className='location-name'>Ooty</p>
            </div>
            <div className='pin map-location4' onClick={handleClick(constants.COORG_ID)}>
                <img src={assets.location} alt="" />
                <p className='location-name'>Coorg</p>
            </div>
            <div className='pin map-location5' onClick={handleClick(constants.KOCHI_ID)}>
                <img src={assets.location} alt="" />
                <p className='location-name'>Kochi</p>
            </div>
            <div className='pin map-location6' onClick={handleClick(constants.CHIKMAGALUR_ID)}>
                <img src={assets.location} alt="" />
                <p className='location-name'>Chikmangalur</p>
            </div>
            <div className='pin map-location7' onClick={handleClick(constants.PONDICHERRY_ID)}>
                <img src={assets.location} alt="" />
                <p className='location-name'>Pondicherry</p>
            </div>
            <div className='pin map-location8' onClick={handleClick(constants.KASHMIR_ID)}>
                <img src={assets.location} alt="" />
                <p className='location-name'>Kashmir</p>
            </div>
        </div>
    )
}

export default Map