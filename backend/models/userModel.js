import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
})

const userModel = mongoose.models.User || mongoose.model('User', userSchema);

export default userModel;