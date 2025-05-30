import React from 'react'

const ImageScreen = ({ path = assets.imagePath }) => {
    return (
        <div style={{ width: '100%', height: '90vh', top: 0, left: 0, zIndex: -1}}>
            <img
                src={path}
                alt="Background"
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: `brightness(80%)`,
                }}
            />
        </div>
    )
}

export default ImageScreen
