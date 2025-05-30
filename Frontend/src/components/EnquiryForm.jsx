import React, { useState } from 'react';
import '../styles/EnquiryForm.css'; // Import the CSS file for styling
import { sendConfirmationEmail } from '../utilities/utils';

// Main ContactForm functional component
function App({tripType = ''}) {
    // State variables to hold form input values
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false); // State for loading indicator

    // Handler for phone number input change with validation
    const handlePhoneChange = (e) => {
        const value = e.target.value;
        // Allow only digits
        if (/^\d*$/.test(value)) {
            setPhone(value);
        }
    };

    // Handler for form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        setLoading(true); // Set loading to true when submission starts

        // Basic validation for phone number length if needed (pattern already handles format)
        if (phone.length !== 10) {
            // In a real app, you might show an error message here
            console.error("Phone number must be 10 digits.");
            return;
        }
        try {
            // In a real application, you would send this data to a backend server
            await sendConfirmationEmail({ name, email, phone, message }, tripType);
        }
        catch (error) {
            console.error('Error submitting form:', error);
            // Handle error (e.g., show an error message to the user)
        }
        finally {
            setLoading(false); // Set loading to false when submission ends
            // Clear the form after successful submission
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
        }
    };

    const closeModal = () => {
        setShowSuccessModal(false);
    };

    return (
        <div className="contact-form-wrapper">
            <div className="contact-form-header">
                {/* Contact Form Header */}
                <h2 className="form-title">Contact Us</h2>
                <p className="form-subtitle">Not sure what to do? We will give you a call back!</p>
                <div className="form-underline"></div>
            </div>

            <div className="contact-form-container">
                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="contact-form">
                    {/* Your Name Input */}
                    <div className="input-group">
                        <label htmlFor="name" className="input-label">
                            Your Name <span className="required-star">*</span>
                        </label>
                        <div className="input-field-wrapper">
                            <div className="input-icon">
                                {/* Inline SVG for User icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-style">
                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="form-input"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    {/* Email Id Input */}
                    <div className="input-group">
                        <label htmlFor="email" className="input-label">
                            Email Id <span className="required-star">*</span>
                        </label>
                        <div className="input-field-wrapper">
                            <div className="input-icon">
                                {/* Inline SVG for Mail icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-style">
                                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                </svg>
                            </div>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="form-input"
                                placeholder="Enter your Email id"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    {/* Phone Input */}
                    <div className="input-group">
                        <label htmlFor="phone" className="input-label">
                            Phone <span className="required-star">*</span>
                        </label>
                        <div className="input-field-wrapper">
                            <div className="input-icon">
                                {/* Inline SVG for Phone icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-style">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                            </div>
                            <input
                                type="tel" // Use type="tel" for phone numbers
                                name="phone"
                                id="phone"
                                className="form-input"
                                placeholder="Enter your 10 digit number"
                                value={phone}
                                onChange={handlePhoneChange} // Use the new handler
                                maxLength="10" // Limit to 10 digits
                                required
                            />
                        </div>
                    </div>

                    {/* Message Textarea */}
                    <div className="input-group">
                        <label htmlFor="message" className="input-label">
                            Message
                        </label>
                        <div className="input-field-wrapper textarea-wrapper">
                            <div className="input-icon textarea-icon">
                                {/* Inline SVG for MessageSquare icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-style">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V3a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                </svg>
                            </div>
                            <textarea
                                name="message"
                                id="message"
                                rows="4"
                                className="form-textarea"
                                placeholder="Write your message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            style={{
                                backgroundColor: loading ? '#ccc' : '#0AA84E', // Change color when loading
                                cursor: loading ? 'not-allowed' : 'pointer',
                            }}
                            className="submit-button"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default App;
