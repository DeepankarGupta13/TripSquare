import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';

const adminAuth = async (req, res, next) => {
    try {
        const token = req.headers.token;
        if (!token) {
            return res.status(500).json({
                success: false,
                message: 'User not Authorized'
            })
        }
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findOne({email: token_decode});
        if (user.isAdmin !== true) {
            return res.status(500).json({
                success: false,
                message: 'User not Authorized'
            })
        }
        next();
    } catch (error) {
        console.log('error: ', error);
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

export default adminAuth;