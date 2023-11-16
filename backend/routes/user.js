import express from 'express';
import { createUser, UpdateUser, deleteUser, getAllUser, getSingleUser} from '../controllers/userController.js';
import { verifyAdmin, verifyUser } from '../Utils/verifyToken.js';


const router = express.Router();


router.post('/', createUser);

router.delete('/:id', verifyUser, deleteUser);

router.put('/:id', verifyUser, UpdateUser);

router.get('/:id', verifyUser, getSingleUser);

router.get('/', verifyAdmin , getAllUser);



export default router;