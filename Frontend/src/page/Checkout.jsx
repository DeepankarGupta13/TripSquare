import React, { useState } from 'react';
import '../styles/Checkout.css';
import { useLocation } from 'react-router-dom';

const Checkout = () => {
  const { state } = useLocation();
  console.log('state: ', state);
  const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);

  const handleProceedToPay = () => {
    setIsPaymentProcessing(true);
    
    // In a real implementation, you would make an API call to your backend
    // which would then initiate the PhonePe payment gateway
    // This is just a mock implementation
    
    // Mock PhonePe payment gateway integration
    setTimeout(() => {
      window.location.href = "https://phonepe-payment-gateway-url.com"; // Replace with actual PhonePe URL
    }, 1000);
  };

  return (
    <div className="checkout-container">
      <div className="navigation-links">
        <a href="/">Back to HomePage</a> &gt; <a href="/trip">Back to Trip Page</a>
      </div>

      <h2>Checkout</h2>

      <div className="trip-details">
        <h3>Meghalaya 7 Day Road Trip</h3>
        <p>10 Travellers</p>
        <div className="price-section">
          <span className="current-price">49,999/-</span>
          <span className="original-price">69,999/-</span>
        </div>
      </div>

      <hr className="divider" />

      <div className="payment-summary">
        <h3>Payment Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Total MRP Amount :</td>
              <td>69,999/-</td>
            </tr>
            <tr>
              <td>Discount on MRP :</td>
              <td>20,000/-</td>
            </tr>
            <tr>
              <td>Applicable GST :</td>
              <td>8,998/-</td>
            </tr>
            <tr className="total-row">
              <td><strong>Total:</strong></td>
              <td><strong>58,997/-</strong></td>
            </tr>
          </tbody>
        </table>

        <button 
          className="pay-button" 
          onClick={handleProceedToPay}
          disabled={isPaymentProcessing}
        >
          {isPaymentProcessing ? 'Processing...' : 'Proceed to Pay'}
        </button>
      </div>
    </div>
  );
};

export default Checkout;
