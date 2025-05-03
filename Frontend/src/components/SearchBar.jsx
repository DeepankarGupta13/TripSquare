import React, { useState, useEffect } from 'react';
import '../styles/SearchBar.css'; // We'll create this CSS file next
import { assets } from '../assets/assets';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Sample list of items (replace with your actual data)
  const itemList = [
    "Adventure Tours",
    "Beach Holidays",
    "City Breaks",
    "Desert Safaris",
    "European Getaways",
    "Family Vacations",
    "Golf Retreats",
    "Hiking Expeditions",
    "Island Hopping",
    "Jungle Adventures",
    "Luxury Cruises",
    "Mountain Climbing",
    "Northern Lights",
    "Outdoor Camping",
    "Pilgrimage Tours",
    "Quaint Villages",
    "Road Trips",
    "Skiing Holidays",
    "Trekking Packages",
    "Urban Explorations",
    "Vineyard Tours",
    "Wildlife Safaris",
    "Yoga Retreats",
    "Zen Gardens"
  ];

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSuggestions([]);
      return;
    }

    const matchedItems = itemList.filter(item =>
      item.toLowerCase().includes(searchQuery.toLowerCase()))
        .slice(0, 5); // Show top 5 matches

    setSuggestions(matchedItems);
  }, [searchQuery]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
    // Perform search or other action here
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Perform search action
      console.log("Searching for:", searchQuery);
      setShowSuggestions(false);
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="search-icon-input">
          <img src={assets.search} alt="" />
          <input
            type="text"
            placeholder="Explore"
            value={searchQuery}
            onChange={handleInputChange}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            className="search-input"
          />
          <div className="search-button-container">
            <button type="submit" className='search-button'>
              Search
            </button>
          </div>
        </div>
        <div className='suggestions-container'>
            {showSuggestions && suggestions.length > 0 && (
              <ul className="suggestions-dropdown">
                {suggestions.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => handleSuggestionClick(item)}
                    className="suggestion-item"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
      </form>
    </div>
  );
};

export default SearchBar;