import React, { useState } from 'react';
import '../styles/PrivateTripForm.css'; // Make sure to create this CSS file
import { sendConfirmationEmail } from '../utilities/utils';

const CorporateForm = ({destination = ''}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    members: '',
    destination: '',
  });
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false); // New state for loading
  const [modalMessage, setModalMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      // Allow empty string or only digits for phone number
      if (value === '' || /^\d*$/.test(value)) {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      } else {
        // If non-digit characters are entered, show an error
        setModalMessage('Phone number must contain only digits.');
        setShowModal(true);
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when submission starts
    try {
      if (destination) {
        formData.destination = destination; // Set destination if provided
      }
      // Basic validation before submission
      if (!/^\d+$/.test(formData.phone)) {
        setModalMessage('Please enter a valid phone number (digits only).');
        return; // Stop submission if validation fails
      }
  
      // Handle form submission logic here
      await sendConfirmationEmail(formData, 'Private'); // Pass 'Honeymoon' as tripType
    }
    catch (error) {
      console.error('Error submitting form:', error);
    }
    finally {
      setLoading(false); // Set loading to false when submission ends
      // You would typically send this data to a server
      // For demonstration, we'll clear the form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
      });
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setModalMessage('');
  };

  return (
    <div className="combined-section-wrapper">
      <div className="combined-section-left">
        {/* Top Text Section */}
        <div className="hero-text-section">
          <h2 className="hero-heading" style={{color: '#222'}}>Best Tailored Trip for You! ⭐</h2>
          <p className="hero-subheading">
            Contact us! Let's get your dream trip in the making!
          </p>
        </div>
      </div>

      {/* Right Side Form Section */}
      <div className="combined-section-right">
        <div className="form-container-card">
          <div className="form-header">
            <p className="form-intro-text">Drop your details & let the magic begin!</p>
            <p className="get-in-touch-p">Get in Touch</p>
          </div>
          <form onSubmit={handleSubmit} className="details-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <div className="input-with-icon">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <span className="icon">👤</span>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Id</label>
              <div className="input-with-icon">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email id"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <span className="icon">📧</span>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <div className="input-with-icon">
                <input
                  type="tel" // Use type="tel" for phone numbers
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <span className="icon">📞</span>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="phone">No of Members</label>
              <div className="input-with-icon">
                <input
                  type="text"
                  id="members"
                  name="members"
                  placeholder="Enter No of Members"
                  value={formData.members}
                  onChange={handleChange}
                  required
                />
                <span className="icon">👩‍👧‍👦</span>
              </div>
            </div>
            { !destination ? <div className="form-group">
                <label htmlFor="phone">Destination</label>
                <div className="input-with-icon">
                  <input
                    type="text"
                    id="destination"
                    name="destination"
                    placeholder="Enter destination / if not sure, write 'Not Sure'"
                    value={formData.destination}
                    onChange={handleChange}
                    required
                  />
                  <span className="icon">📍</span>
                </div>
              </div> : null }
            <button 
              type="submit"
              disabled={loading}
              className="submit-button" 
              style={{
                backgroundColor: loading ? '#ccc' : '#0AA84E', // Change color when loading
                cursor: loading ? 'not-allowed' : 'pointer',
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CorporateForm;
