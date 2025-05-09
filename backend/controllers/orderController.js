import orderModel from '../models/orderModel.js'

// placing order using RazorPay method
const placeOrder = async (req, res) => {
    try {
        const { userEmail, userName, phone, travellersCount, travelDate, tripId, tripName, amount} = req.body;
        
        const orderData = {
            userEmail,
            userName,
            phone,
            travellersCount,
            travelDate,
            tripId,
            tripName,
            amount,
            status: 'booked',
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData);
        await newOrder.save()
        
        res.status(200).json({success: true, message: 'Order Placed Successfully'})
    } catch (error) {
        console.log('error: ', error);
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

// all orders data for admin panel
const allOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({})
        console.log('orders: ', orders);
        res.status(200).json({
            success: true,
            orders: orders,
        })
    } catch (error) {
        console.log('error: ', error);
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

// update order status from admin panel
const updateOrderStatus = async (req, res) => {
    
}

export { placeOrder, allOrders, updateOrderStatus }