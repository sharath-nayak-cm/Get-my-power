import { Request,Response } from "express";
import jwt from 'jsonwebtoken'
import User from "../models/User";


export const userLogin = async (req:Request,res:Response) => {
    try {
        const {username,password} = req.body
        const user = await User.findOne({username})

        if(!user || !(await user.matchPassword(password))) {
            return res.status(401).json({msg:"Invalid credentials"})
        }

        const payload = { id: user._id,username: user.username};
        const token = jwt.sign(payload,process.env.JWT_SECRET!, { expiresIn: '1h' })

        res.json({token})
        
    } catch (error) {
        res.status(500).send('Server error')
        
    }
}

export const userRegister = async (req:Request,res:Response) => {
    try {
        const {username,password} = req.body
        const user = await User.create({username,password})

        if(!user) {
            return res.status(400).json({msg:"User registration failed"})
        }

        res.status(201).json({msg: "User registered successfully", user: { id: user._id, username: user.username } });

    } catch (error) {
        console.log(error)
        res.status(500).send('Server error')
        
    }
}

