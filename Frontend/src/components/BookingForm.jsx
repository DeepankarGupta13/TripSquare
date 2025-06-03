import React, { useState } from 'react';
import '../styles/BookingForm.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const BookingForm = ({ item }) => {
    const basePrice = item.price;
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        travelDate: '',
        travellers: 1,
        tripType: basePrice > 0 ? 'Group Trip' : 'Private/Family Trip', // Default trip type
        agreeTerms: false,
        trip: {},
    });
    const navigate = useNavigate();
    const [address, setAddress] = useState('');

    // Filter function to only allow Fridays
    const isFriday = (date) => {
        return basePrice > 0 ? date.getDay() === 5 : true; // 5 is Friday
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleAddressChange = (e) => {
        const { value } = e.target;
        setAddress(value);
    };

    const handleSubmit = (e) => {
        if (formData.tripType === 'Group Trip' && formData.travellers > 5) {
            e.preventDefault();
            formData.trip = item;
            navigate('/checkout', { state: formData });
        } else {
            window.open(whatsappUrl, '_blank');
        }
    };

    const whatsappMessage = `Hi, ${formData.fullName ? `I'm ${formData.fullName}, ` : ''
        }I'm interested in booking a ${formData.tripType} to ${item.name} for ${formData.travellers
        } people${formData.travelDate ? ` on ${formData.travelDate}` : ''
        }. Please contact me${formData.phone ? ` on my phone at ${formData.phone}` : ''
        }${formData.email ? `${formData.phone ? ' or' : ''} via email at ${formData.email}` : ''
        }${address ? `. I would like my trip to start from ${address}` : ''
        }.`;
    const whatsappUrl = `https://wa.me/${assets.phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    const isGroupTripWithFewPeople = (formData.tripType === 'Group Trip' && formData.travellers < 5) || (formData.tripType !== 'Group Trip');

    return (
        <div className="booking-form-container">
            <form onSubmit={handleSubmit} className="booking-form">
                <h3>Book Your Trip</h3>
                <div className="form-group">
                    <label>Full name*</label>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email*</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Phone No*</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Trip Type</label>
                    <select
                        name="tripType"
                        value={formData.tripType}
                        onChange={handleChange}
                        required
                    >
                        {basePrice > 0 ? <option value="Group Trip">Group Trip</option> : null}
                        <option value="Private/Family Trip">Private/Family Trip</option>
                        <option value="Co-orporate Trip">Co-orporate Trip</option>
                        <option value="HoneyMoon">HoneyMoon</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Travel Date</label>
                    <DatePicker
                        selected={formData.travelDate ? new Date(formData.travelDate) : null}
                        onChange={(date) => {
                            const year = date.getFullYear();
                            const month = String(date.getMonth() + 1).padStart(2, '0');
                            const day = String(date.getDate()).padStart(2, '0');
                            const dateString = `${year}-${month}-${day}`;
                            setFormData(prev => ({
                                ...prev,
                                travelDate: dateString
                            }));
                        }}
                        filterDate={isFriday}
                        minDate={new Date()}
                        maxDate={(() => {
                            const date = new Date();
                            date.setMonth(date.getMonth() + 2);
                            return date;
                        })()}
                        placeholderText="Select Date"
                        dateFormat="yyyy-MM-dd"
                        required
                    />
                </div>
                {
                    basePrice == 0 ?
                    <div className="form-group">
                    <label>Address</label>
                    <input
                        type="text"
                        name="travellers"
                        min="1"
                        value={formData.address}
                        onChange={handleAddressChange}
                    />
                    </div> : null
                }
                <div className="form-group">
                    <label>Travellers</label>
                    <input
                        type="number"
                        name="travellers"
                        min="1"
                        value={formData.travellers}
                        onChange={handleChange}
                    />
                    { basePrice > 0 ? <span className="price-display">{formData.travellers} x ₹{basePrice}/-</span> : null }
                </div>
                {basePrice > 0 ? (
                    <div className="form-group total-amount">
                        <label>Total Amount:</label>
                        <span>₹{formData.travellers * basePrice}/-</span>
                    </div>
                ) : (
                    <div className="form-group total-amount">
                        <span>Personalized to Match Your Travel Style</span>
                    </div>
                )}
                <div className="form-group checkbox-group">
                    <input
                        type="checkbox"
                        id="agreeTerms"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleChange}
                        required
                        style={{ width: 'auto' }}
                    />
                    <label htmlFor="agreeTerms">I agree to the terms & conditions.</label>
                </div>
                
                {isGroupTripWithFewPeople ? (
                    <button 
                        className="book-button"
                        onClick={() => window.open(whatsappUrl, '_blank')}
                    >
                        Connect with us on WhatsApp
                    </button>
                ) : (
                    <button type="submit" className="book-button">Book & Pay</button>
                )}
            </form>
        </div>
    );
};

export default BookingForm;