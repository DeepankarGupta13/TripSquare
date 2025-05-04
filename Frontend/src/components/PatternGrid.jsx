import React from 'react';
import '../styles/PatternGrid.css';

const PatternGrid = () => {
  // Sample data - all images can be the same source
  const imageSets = [
    {
      id: 1,
      bigImg: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      smallImgs: [
        'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      ]
    },
    // Add more sets as needed
    {
      id: 2,
      bigImg: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      smallImgs: [
        'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      ]
    },
  ];

  return (
    <div className="pattern-scroller">
      <div className="pattern-container">
        {imageSets.map((set) => (
          <div key={set.id} className="image-group">
            {/* Big image */}
            <div className="image-wrapper big-image">
              <img src={set.bigImg} alt={`Featured ${set.id}`} />
            </div>
            
            {/* Small images grid */}
            <div className="small-grid">
              {set.smallImgs.map((img, idx) => (
                <div key={idx} className="image-wrapper small-image">
                  <img src={img} alt={`Thumbnail ${set.id}-${idx}`} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatternGrid;