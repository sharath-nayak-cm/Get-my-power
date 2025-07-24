import express from 'express';
import { bookRestaurant, getBookings } from '../controllers/bookingController';

const router = express.Router();

router.post('/', bookRestaurant);
router.get('/:userId/:restaurantId', getBookings);

export default router;