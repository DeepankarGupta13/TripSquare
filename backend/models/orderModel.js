import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
    userEmail: { type: String, required: true },
    userName: { type: String, required: true },
    phone: { type: String, required: true },
    tripId: { type: String, required: true },
    tripName: { type: String, required: true },
    amount: { type: Number, required: true },
    travellersCount: { type: Number, required: true },
    travelDate: { type: String, required: true },
    status: { type: String, required: true, default: 'ordered' },
    payment: { type: Boolean, required: true, default: false },
    date: { type: Number, required: true }
})

const orderModel = mongoose.models.Order || mongoose.model('Order', orderSchema);

export default orderModel;