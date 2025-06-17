import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { backendUrl, currency } from '../App';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const List = ({ token }) => {
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/trip/list')
      if (response.data.success) setList(response.data.trips)
      else toast.error(response.data.message)
    } catch (error) {
      console.error('error: ', error);
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchList()
  }, [])
  
  const removeTrip = async (id) => {
    try {
      const response = await axios.post(backendUrl+'/api/trip/remove', {id}, {headers: {token}})
      if (response.data.success) {
        toast.success('Trip Removed Successfully')
        await fetchList();
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.error('Error: ', error);
      toast.error(error.message)
    }
  }
  
  const updateTrip = (id) => {
    navigate(`/update/${id}`);
  }

  return (
    <>
      <p className='mb-2 '>All Product List</p>
      <div className='flex flex-col gap-2'>
        {/* --------------table title ---------------- */}
        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-200 text-sm'>
          <p>Image</p>
          <p>Name</p>
          <p>Price</p>
          <p>Duration</p>
          <p className='text-center'>Action</p>
        </div>
        {/* -------------table content---------------- */}
        {
          list.map((ele, index) =>(
            <div className='grid grid-cols-[1fr_3fr_1fr] md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr] items-center py-1 px-2 border text-sm' key={index}>
              <img className='w-12' src={ele.images[0]} alt="" />
              <p>{ ele.name }</p>
              <p>{ currency } { ele.price }</p>
              <p>{ ele.duration }</p>
              <p
                onClick={() => updateTrip(ele._id)}
                className='text-green-500 cursor-pointer'
              >
                Edit
              </p>
              <p onClick={() => removeTrip(ele._id)} className='text-right md:text-center text-red-500 cursor-pointer text-lg'>X</p>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default List
