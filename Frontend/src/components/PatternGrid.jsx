import React, { useState } from 'react';
import '../styles/PatternGrid.css';

const PatternGrid = ({images}) => {
  const [expandedGroups, setExpandedGroups] = useState([]);
  const [isScrollerExpanded, setIsScrollerExpanded] = useState(true); // Add this state

  const toggleScroller = () => {
    setIsScrollerExpanded(!isScrollerExpanded);
  };

  const toggleGroup = (id) => {
    if (expandedGroups.includes(id)) {
      setExpandedGroups(expandedGroups.filter(groupId => groupId !== id));
    } else {
      setExpandedGroups([...expandedGroups, id]);
    }
  };

  // Single list of images
  const allImages = images;

  // Group images into sets of 5 (1 big + 4 small)
  const createImageGroups = () => {
    const groups = [];
    for (let i = 0; i < allImages.length; i += 5) {
      const bigImage = allImages[i];
      const smallImages = allImages.slice(i + 1, i + 5);

      groups.push({
        id: i / 5 + 1,
        bigImg: bigImage,
        smallImgs: smallImages,
        title: `Pattern Set ${i / 5 + 1}`,
        description: `Description for pattern set ${i / 5 + 1}`
      });
    }
    return groups;
  };

  const imageSets = createImageGroups();

  return (
    <>
      <div className='Title-Div'>
        <h1>Pictures</h1>
        <h2 className='Button-tripSquare' onClick={toggleScroller}> 
          {!isScrollerExpanded ? 'Show': 'Hide'}
        </h2>
      </div>
      <div className={`pattern-scroller ${!isScrollerExpanded ? 'collapsed' : ''}`}>
        <div className="pattern-container">
          {imageSets.map((set, index) => {
            const isEven = (index + 1) % 2 === 0;
            return (
              <div
                key={set.id}
                className={`image-group ${isEven ? 'even' : 'odd'}`}
                onClick={() => toggleGroup(set.id)}
              >
                {/* Content wrapper that changes order based on even/odd */}
                <div className="group-content">
                  {/* Big image - position changes based on even/odd */}
                  {!isEven && (
                    <div className="image-wrapper big-image">
                      <img src={set.bigImg} alt={`Featured ${set.id}`} />
                    </div>
                  )}

                  {/* Small images grid */}
                  <div className="small-grid">
                    {set.smallImgs.map((img, idx) => (
                      <div key={idx} className="image-wrapper small-image">
                        <img src={img} alt={`Thumbnail ${set.id}-${idx}`} />
                      </div>
                    ))}
                    {/* Fill empty spaces if less than 4 small images */}
                    {Array(4 - set.smallImgs.length).fill().map((_, i) => (
                      <div key={`empty-${i}`} className="image-wrapper small-image empty"></div>
                    ))}
                  </div>

                  {/* Big image - position changes based on even/odd */}
                  {isEven && (
                    <div className="image-wrapper big-image">
                      <img src={set.bigImg} alt={`Featured ${set.id}`} />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PatternGrid;