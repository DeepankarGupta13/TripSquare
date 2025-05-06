import express from 'express';
import { loginAdmin, register } from '../controllers/userController.js';

const userRoute = express.Router();

userRoute.post('/register', register);
userRoute.post('/admin', loginAdmin);

export default userRoute;