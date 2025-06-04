import express from 'express';
import { registerController } from '../controllers/authController.js';

const router = express.Router();

//routing
//register || lmethod post
router.post('/register', registerController);

export default router;