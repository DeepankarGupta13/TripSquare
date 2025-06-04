import orderModel from '../models/orderModel.js'
import razorpay from 'razorpay'
import nodemailer from 'nodemailer'

// global variable
const currency = 'inr';

// gateway initialize
const razorpayInstance = new razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
})

// Create Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail', // or your email service
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

const sendEmail = async (req, res) => {
    try {
        const { mailOptions } = req.body;
        await transporter.sendMail(mailOptions);
        console.log('Confirmation email sent successfully');
        res.status(200).json({
            success: true,
            message: 'Confirmation email sent successfully',
        });
    } catch (error) {
        console.error('Error sending confirmation email:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to send confirmation email: ' + error.message,
        });
        // You might want to log this error to a monitoring service
    }
}

const sendConfirmationEmail = async (order) => {
    try {
        const mailOptions = {
            from: {
                name: 'Trip Square',
                address: process.env.EMAIL_USER,
            },
            to: order.userEmail,
            subject: 'Payment Confirmation - Your Booking is Confirmed',
            html: `
                <h1>Thank you for your booking!</h1>
                <p>Dear ${order.userName},</p>
                <p>Your payment for ${order.tripName} has been successfully processed.</p>
                <h3>Booking Details:</h3>
                <ul>
                    <li>Booking ID: ${order._id}</li>
                    <li>Trip: ${order.tripName}</li>
                    <li>Travel Date: ${new Date(order.travelDate).toDateString()}</li>
                    <li>Travellers: ${order.travellersCount}</li>
                    <li>Amount Paid: ₹${order.amount}</li>
                </ul>
                <p>If you have any questions, please contact our support team.</p>
                <p>Best regards,</p>
                <p>The Travel Team</p>
            `
        };

        await transporter.sendMail(mailOptions);
        console.log('Confirmation email sent successfully');
    } catch (error) {
        console.error('Error sending confirmation email:', error);
        // You might want to log this error to a monitoring service
    }
};

// placing order using RazorPay method
const placeOrder = async (req, res) => {
    try {
        const { userEmail, userName, phone, travellersCount, travelDate, tripId, tripName, amount } = req.body;

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
        // sendConfirmationEmail(newOrder) // testing email
        await newOrder.save()

        const options = {
            amount: amount * 100,
            currency: currency.toUpperCase(),
            receipt: newOrder._id.toString(),

        }

        await razorpayInstance.orders.create(options, (error, order) => {
            if (error) {
                console.log('error: ', error);
                return res.status(500).json({
                    success: false,
                    message: error.message
                })
            }
            else res.status(200).json({ success: true, order })
        })
        res.status(200).json({ success: true, message: 'ggwp' })

    } catch (error) {
        console.log('error: ', error);
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

const verifyRazorpay = async (req, res) => {
    try {
        const { userId, razorpay_order_id } = req.body;
        const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id);

        if (orderInfo.status === 'Paid') {
            const orderdata = await orderModel.findByIdAndUpdate(orderInfo.receipt, { payment: true })
            sendConfirmationEmail(orderdata)
            res.status(200).json({
                success: true,
                message: "payment Successfull"
            })
        } else {
            res.status(500).json({
                success: false,
                message: "payment Failed"
            })
        }

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
    try {
        const { orderId, status } = req.body;
        await orderModel.findByIdAndUpdate(orderId, { status })
        res.status(200).json({
            success: true,
            message: 'Status Updated Successfully'
        })
    } catch (error) {
        console.log('error: ', error);
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

export { sendEmail, verifyRazorpay, placeOrder, allOrders, updateOrderStatus }