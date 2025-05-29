import express from 'express'
import { placeOrder, allOrders, updateOrderStatus, verifyRazorpay, sendEmail } from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js';

const orderRouter = express.Router()

// Admin Features
orderRouter.post('/list', adminAuth, allOrders);
orderRouter.post('/status', adminAuth, updateOrderStatus);

// Payment Features
orderRouter.post('/razorpay', placeOrder)

// verify Payment
orderRouter.post('/verify', verifyRazorpay)

// send email
orderRouter.post('/send-email', sendEmail)

export default orderRouter;
