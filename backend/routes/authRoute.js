import express from 'express';
import  { registerController, loginController, testController }  from '../controllers/authController.js';
import { requireSignIn, isAdmin } from '../middleware/authMiddleware.js'; // include .js


const router = express.Router();

//routing
//register || method post
router.post('/register', registerController);

// Login || method post
router.post('/login', loginController);

//test route
router.get('/test', requireSignIn, testController);

// admin route
router.get('/admin-dashboard', requireSignIn, isAdmin, (req, res) => {
    res.json({ success: true, message: "Welcome, Admin!" });
});
export default router;