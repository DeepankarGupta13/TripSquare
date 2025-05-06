import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';

const adminAuth = async (req, res, next) => {
    try {
        const token = req.headers.token;
        console.log('token: ', token);
        if (!token) {
            return res.status(500).json({
                success: false,
                message: 'User not Authorized'
            })
        }
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        console.log('token_decode: ', token_decode);
        const user = await userModel.findOne({email: token_decode});
        console.log('user: ', user);
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