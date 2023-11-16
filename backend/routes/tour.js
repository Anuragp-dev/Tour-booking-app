import express from 'express';
import { createTour, UpdateTour, deleteTour, getAllTour, getFeaturedTour, getSingleTour, getTourBySearch, getTourCount } from '../controllers/tourController.js';
import { verifyAdmin, verifyUser } from '../Utils/verifyToken.js';



const router = express.Router();


router.post('/', verifyAdmin,  createTour);

router.delete('/:id', verifyAdmin,  deleteTour);

router.put('/:id', verifyAdmin,  UpdateTour);

router.get('/', getAllTour);

router.get('/:id', getSingleTour);

router.get('/search/getTourBySearch', getTourBySearch);

router.get('/search/getFeaturedTour', getFeaturedTour);

router.get('/search/getTourCount', getTourCount);



export default router;