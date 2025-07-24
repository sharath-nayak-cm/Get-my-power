import { Request, Response } from 'express';
import Restaurant from '../models/Restaurant';


export const createRestaurant = async (req: Request, res: Response) => {
  try {
    const restaurant = await Restaurant.create(req.body);
    res.status(201).json(restaurant);
  } catch (error) {
    res.status(400).json({ message: 'Error creating restaurant', error });
  }
};

export const displayRestaurants = async(req: Request, res: Response) => {
    try {
        const restaurants = await Restaurant.find();
        res.json(restaurants);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching restaurants', error });
        
    }
}