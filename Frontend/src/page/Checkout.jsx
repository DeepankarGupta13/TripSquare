import React, { useState } from 'react';
import '../styles/Checkout.css';
import { useLocation } from 'react-router-dom';
import { backendUrl, currency } from '../../../admin/src/App';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const gstPercent = 0.05;

const Checkout = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const totalPrice = state.trip.price * parseInt(state.travellers);
  const withoutDiscount = parseFloat((totalPrice * (1.4)).toFixed(2));
  const afterGst = parseFloat((totalPrice * gstPercent).toFixed(2));

  const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);
  
  const initPay = (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: 'Booking Payment',
      description: 'Booking Payment',
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        try {
          const { data } = await axios.post(backendUrl+'/order/verify', response);
          if (data.success) {
            toast.success('Payment Successfull! please check your email')
            navigate('/');
          }
        } catch (error) {
          console.error('error: ', error);
          toast.error(error.message)
        }
      }
    }
    const razpay = new window.Razorpay(options)
    razpay.open()
  }
  

  const handleProceedToPay = async () => {
    const orderData = {
      userEmail: state.email,
      userName: state.fullName,
      phone: state.phone,
      travellersCount: state.travellers,
      travelDate: state.travelDate,
      tripId: state.trip._id,
      tripName: state.trip.name,
      amount: totalPrice,
    }
    setIsPaymentProcessing(true);
    try {
      const response = await axios.post(backendUrl + '/api/order/razorpay/', orderData)
      if (response.data.success) {
        initPay(response.data.order);
        setIsPaymentProcessing(false);
        toast.success(response.data.message)
      }
    } catch (error) {
      toast.error(error.message)
      setIsPaymentProcessing(false);
    }
  };

  return (
    <div className="checkout-container">
      <div className="navigation-links">
        <a href="/">Back to HomePage</a> &gt; <a href={`/trip/${state.trip._id}`}>Back to Trip Page</a>
      </div>

      <h2>Checkout</h2>

      <div className="trip-details">
        <h3>{state.trip.name}</h3>
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
          onClick={() => handleProceedToPay()}
          disabled={isPaymentProcessing}
        >
          {isPaymentProcessing ? 'Processing...' : 'Proceed to Pay'}
        </button>
      </div>
    </div>
  );
};

export default Checkout;
