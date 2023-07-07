import express from 'express'
import { verifyToken } from '../token/verifyToken.js';
import { getLandingSongs } from '../controllers/spotiController.js';

export const spotiRoutes = express.Router();


spotiRoutes.get('/landing', verifyToken, getLandingSongs)