import React, { useState, useEffect } from 'react';
import '../styles/SearchBar.css'; // We'll create this CSS file next
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { useApi } from '../context/ApiContext';

const SearchBar = () => {
  const navigate = useNavigate();
  const { getTrips } = useApi(); // Get the API methods from context
  const [trips, setTrips] = useState([]); // State to store trips
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        let tripsData = await getTrips();
        setTrips(tripsData)
      } catch (err) {
        console.error('err: ', err);
      }
    };

    fetchTrips();
  }, [getTrips])
  
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSuggestions([]);
      return;
    }

    const matchedItems = trips.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()))
      .slice(0, 5); // Show top 5 matches

    setSuggestions(matchedItems);
  }, [searchQuery]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion.name);
    setShowSuggestions(false);
    navigate(`/trip/${suggestion._id}`)
    // Perform search or other action here
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Perform search action
      const matchedItems = trips.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()))
        .slice(0, 5); // Show top 5 matches
      navigate(`/trip/${matchedItems[0]._id}`)
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
                  onClick = {() => handleSuggestionClick(item)}
                  className="suggestion-item"
                >
                  {item.name}
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