import express from 'express';
const passport = require('passport');
const bodyParser = require('body-parser');
import cors from 'cors';
import dotenv from 'dotenv';
import bookingRoutes from './routes/booking.routes';
import restaurantRoutes from './routes/restaurant.routes';
import authRoutes from './routes/auth.routes';
import connectDB from './config/db';
import morgan from 'morgan';

const PORT = process.env.PORT || 3000;

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/restaurants', restaurantRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/auth', authRoutes);



connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});