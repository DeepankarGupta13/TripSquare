import React from 'react'
import { assets } from '../assets/assets'

const Video = () => {
    return (
        <div style={{ width: '100%', height: '80vh', top: 0, left: 0, zIndex: -1}}>
            <video
                autoPlay
                muted
                loop
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }}
            >
                <source src={assets.videoLink} type="video/mp4" />
            </video>
        </div>
    )
}

export default Video
