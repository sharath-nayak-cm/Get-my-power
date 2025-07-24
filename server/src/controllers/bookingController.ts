import { Request, Response } from 'express';
import Booking from '../models/Booking';


export const bookRestaurant = async (req: Request, res: Response) => {
  try {
    const booking = await Booking.create(req.body);
    res.status(201).json(booking);
  } catch (error) {
    res.status(400).json({ message: 'Error creating booking', error });
  }
};

export const getBookings = async(req: Request, res: Response) => {
    try {
      const restaurantId = req.params.restaurantId;
      // const userId = req.params.userId;

        const booking = await Booking.findById(restaurantId);
        res.json(booking);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching bookings', error });
        
    }
}