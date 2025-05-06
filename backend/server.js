import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRoute from './routes/userRoute.js';
import tripRouter from './routes/tripRoute.js';

// app config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use('/api/user', userRoute);
app.use('/api/trip', tripRouter)

// api endpoint
app.get('/', (req, res) => {
    res.send("API Working")
})

app.listen(port, () => {
    console.log('Server started on port: ', port);
})