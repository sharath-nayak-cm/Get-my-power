import express from 'express';
import { createRestaurant, displayRestaurants } from '../controllers/restaurantController';

const router = express.Router();

router.post('/', createRestaurant);
router.get('/', displayRestaurants);

export default router;