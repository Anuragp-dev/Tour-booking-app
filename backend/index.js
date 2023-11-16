import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import tourRoutes from './routes/tour.js';
import userRoutes from './routes/user.js';
import authRoutes from './routes/auth.js';
import reviewRoutes from './routes/reviews.js';
import bookingRoutes from './routes/booking.js';


dotenv.config()

const app = express()
const port = process.env.PORT || 8000;


   



//database connection

mongoose.set("strictQuery", false)


const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongodb Database connected");
    } catch (err) {
        console.log("Database connection failed");
    }
}




//middleware

app.get('/', (req,res) => {
    res.json("Tour Booking Server is Online")
});

app.use(express.json());
app.use(cors({
    origin:true,
    credentials:true,
}));
app.use(cookieParser());
app.use('/auth',authRoutes);
app.use('/tours',tourRoutes);
app.use('/users',userRoutes);
app.use('/review',reviewRoutes);
app.use('/booking',bookingRoutes);





app.listen(port, () => {
    connect();
    console.log("server running successfully on port", port);
})
