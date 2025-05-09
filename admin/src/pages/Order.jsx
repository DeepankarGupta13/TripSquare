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
  
  const statusHandler = async ( event, orderId ) => {
    try {
      const response = await axios.post(backendUrl+'/api/order/status', { orderId, status: event.target.value }, {headers:{token}})
      if (response.data.success) {
        await fetchAllOrders();
        toast.success(response.data.message)
      }
    } catch (error) {
      console.error('error: ', error);
      toast.error(error.message);
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
              <img className='w-12' src={assets.orderIcon} alt="Trip"></img>
              <div>
                <p className='py-0.5'>{ order.tripName } x { order.travellersCount } Travelers</p>
                <p className='mt-3 mb-2 font-medium'>Name: { order.userName }</p>
                <p>Email: { order.userEmail }</p>
                <p>PhoneNo: { order.phone }</p>
                <p>Travel Date: { order.travelDate }</p>
              </div>
              <div>
                <p>Payment : { order.payment ? 'Done' : 'Pending' }</p>
                <p>Date: { new Date(order.date).toLocaleDateString() }</p>
              </div>
              <p className='text-sm sm:text-[15px]'>{ currency }{ order.amount }</p>
              <select onChange={(event) => statusHandler(event, order._id)} value={order.status} className='p-1.5 font-semibold border'>
                <option value="Booked">Booked</option>
                <option value="OnGoing">On Going</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Order
