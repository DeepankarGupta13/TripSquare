import React from 'react'
import { assets } from '../assets/assets'

const Video = ({ path = assets.videoLink }) => {
    return (
        <div style={{ width: '100%', height: '90vh', top: 0, left: 0, zIndex: -1}}>
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
                <source src={path} type="video/mp4" />
            </video>
        </div>
    )
}

export default Video
