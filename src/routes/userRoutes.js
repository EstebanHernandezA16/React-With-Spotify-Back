import express from 'express'
import { createUser, loginUser } from '../controllers/userController.js';


export const userRoutes = express.Router();

userRoutes.post('/', createUser);

userRoutes.post('/login', loginUser)

userRoutes.put('/')

userRoutes.delete('/')