import React, { useState } from 'react';
import '../styles/Checkout.css';
import { useLocation } from 'react-router-dom';

const gstPercent = 0.05;

const Checkout = () => {
  const { state } = useLocation();
  const tripData = state.trip;

  const totalPrice = tripData.price * parseInt(state.travellers);
  const withoutDiscount = parseFloat((totalPrice * (1.4)).toFixed(2));
  const afterGst = parseFloat((totalPrice*gstPercent).toFixed(2));
  
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
        <a href="/">Back to HomePage</a> &gt; <a href={`/trip/${tripData._id}`}>Back to Trip Page</a>
      </div>

      <h2>Checkout</h2>

      <div className="trip-details">
        <h3>{tripData.name}</h3>
        <p>{state.travellers} Travellers</p>
        <div className="price-section">
          <span className="current-price">{totalPrice}/-</span>
          <span className="original-price">{withoutDiscount}/-</span>
        </div>
      </div>

      <hr className="divider" />

      <div className="payment-summary">
        <h3>Payment Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Total MRP Amount :</td>
              <td>{totalPrice}/-</td>
            </tr>
            <tr>
              <td>Discount on MRP :</td>
              <td>{(withoutDiscount - totalPrice).toFixed(2)}/-</td>
            </tr>
            <tr>
              <td>Applicable GST :</td>
              <td>{afterGst}/-</td>
            </tr>
            <tr className="total-row">
              <td><strong>Total:</strong></td>
              <td><strong>{(afterGst + totalPrice)}/-</strong></td>
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
