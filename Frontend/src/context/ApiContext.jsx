// src/contexts/ApiContext.js
import { createContext, useContext, useState } from 'react';
import axios from 'axios';

// Create the context
const ApiContext = createContext();

// Create axios instance
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

// Create the provider component
export const ApiProvider = ({ children }) => {
  const [trips, setTrips] = useState([])
  // Product APIs
  const getTrips = async () => {
    try {
      let response = [];
      if (trips.length === 0)  {
        response = await apiClient.get('/api/trip/list');
        if (response.data.success) {
          setTrips(response.data.trips); // Always update the state with new data
          return response.data.trips; // Return the fresh data from the response
        } else {
          return [];
        }
      }
      else {
        return trips;
      }
    } catch (error) {
      throw error.response?.data?.message || 'Failed to fetch products';
    }
  };

  const createOrder = async (orderData) => {
    try {
      const response = await apiClient.post('/api/order/addOrder', orderData);
      return response.data;
    } catch (error) {
      throw error.response?.data?.message || 'Failed to create order';
    }
  };

  // Value that will be available to consumers
  const value = {
    getTrips,
    createOrder,
    // Add more API methods as needed
  };

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

// Custom hook for easy access to the context
export const useApi = () => {
  const context = useContext(ApiContext);
  if (context === undefined) {
    throw new Error('useApi must be used within an ApiProvider');
  }
  return context;
};