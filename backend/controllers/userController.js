import userModel from "../models/userModel.js";
import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(500).json({
                success: false,
                message: "User does not exists"
            })
        }
        if (!user.isAdmin) {
            return res.status(500).json({
                success: false,
                message: "User is not an Admin"
            })
        }
        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(500).json({
                success: false,
                message: 'Invalid Credentails',
            })
        }
        const token = jwt.sign(email, process.env.JWT_SECRET)
        return res.status(200).json({
            success: true,
            token,
        })
    } catch (error) {
        console.log('error: ', error);
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

const register = async (req, res) => {
    try {
        const { email, password, isAdmin } = req.body;
        // check if already present
        const exists = await userModel.findOne({ email })
        if (exists) {
            return res.status(500).json({
                success: false,
                message: "User Already Exists"
            })
        }
        // Validate email and password
        if (!validator.isEmail(email)) {
            return res.status(500).json({
                success: false,
                message: "Please Enter a Valid Email"
            })
        }
        if (password.length < 8) {
            return res.status(500).json({
                success: false,
                message: "Please Enter a Strong Password with more than 8 characters"
            })
        }
        // hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new userModel({
            email,
            password: hashedPassword,
            isAdmin: isAdmin,
        })

        const user = await newUser.save()

        const token = createToken(user._id)

        res.status(200).json({
            success: true,
            token,
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

export { loginAdmin, register }