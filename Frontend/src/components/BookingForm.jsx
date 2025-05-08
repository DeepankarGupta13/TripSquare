import React, { useState } from 'react';
import '../styles/BookingForm.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {useNavigate} from 'react-router-dom'

const BookingForm = ({ item }) => {
    const basePrice = item.price;
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        travelDate: '',
        travellers: 1,
        agreeTerms: false,
        trip: item,
    });
    const navigate = useNavigate();

    // Filter function to only allow Saturdays
    const isSaturday = (date) => {
        return date.getDay() === 6; // 6 is Saturday
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
        navigate('/checkout', { state: formData });
        // You can pass this to parent via props if needed
    };

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
                    <label>Travel Date* (Only Saturdays available)</label>
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
                        filterDate={isSaturday}
                        minDate={new Date()}
                        placeholderText="Select Date"
                        dateFormat="yyyy-MM-dd"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Travellers</label>
                    <input
                        type="number"
                        name="travellers"
                        min="1"
                        value={formData.travellers}
                        onChange={handleChange}
                    />
                    <span className="price-display">{formData.travellers} x ₹{basePrice}/-</span>
                </div>
                <div className="form-group total-amount">
                    <label>Total Amount:</label>
                    <span>₹{formData.travellers * basePrice}/-</span>
                </div>
                <div className="form-group checkbox-group">
                    <input
                        type="checkbox"
                        id="agreeTerms"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleChange}
                        required
                        style={{width: 'auto'}}
                    />
                    <label htmlFor="agreeTerms">I agree to the terms & conditions.</label>
                </div>
                <button type="submit" className="book-button">Book & Pay</button>
            </form>
        </div>
    );
};

export default BookingForm;