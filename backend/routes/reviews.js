import express from 'express';
import { createReview } from '../controllers/reviewController.js';
import { verifyUser } from '../Utils/verifyToken.js';



const router = express.Router();

router.post('/:tourId', verifyUser, createReview );


export default router;