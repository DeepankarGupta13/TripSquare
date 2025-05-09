import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { backendUrl, currency } from '../App';
import { assets } from '../assets/assets';

const Order = ({ token }) => {

  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }
    try {
      const response = await axios.post(backendUrl + '/api/order/list', {}, { headers: { token } })
      if (response.data.success) {
        setOrders(response.data.orders);
      }
      else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.error('error: ', error);
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, [token])

  return (
    <div>
      <h3>Orders</h3>
      <div>
        {
          orders.map((order, index) => (
            <div className='grid gird-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700' key={index}>
              <img src={assets.orderIcon} alt="Trip"></img>
              <div>
                <p>{ order.tripName } x { order.travellersCount } Travelers</p>
                <p>Name: { order.useName }</p>
                <p>Email: { order.userEmail }</p>
                <p>PhoneNo: { order.phone }</p>
                <p>Travel Date: { order.travelDate }</p>
              </div>
              <div>
                <p>Payment : { order.payment ? 'Done' : 'Pending' }</p>
                <p>Date: { new Date(order.date).toLocaleDateString() }</p>
                <p>Status: { order.status }</p>
              </div>
              <p>{ currency }{ order.amount }</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Order
