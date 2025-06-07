import userModel from '../models/userModel.js';
import { hashPassword } from '../helpers/authHelper.js';

// Register controller
export const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address } = req.body;

        // Individual field validation with clear messages
        if (!name) {
            return res.status(400).json({
                success: false,
                message: 'Name is required',
            });
        }
        if (!email) {
            return res.status(400).json({
                success: false,
                message: 'Email is required',
            });
        }
        if (!password) {
            return res.status(400).json({
                success: false,
                message: 'Password is required',
            });
        }
        if (!phone) {
            return res.status(400).json({
                success: false,
                message: 'Phone number is required',
            });
        }
        if (!address) {
            return res.status(400).json({
                success: false,
                message: 'Address is required',
            });
        }

        // Check for existing user
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'User already exists',
            });
        }

        // Register and save user
        const user = await userModel.create({
            name,
            email,
            password: await hashPassword(password),
            phone,
            address,
        });

        // Optional: remove password before sending back user object
        const userWithoutPassword = { ...user._doc };
        delete userWithoutPassword.password;

        res.status(201).json({
            success: true,
            message: 'User registered successfully',
            user: userWithoutPassword,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'An error occurred while registering the user',
            error: error.message,
        });
    }
};


// Login controller
export const loginController = async (req , res) => {
    try {
        const { email, password } = req.body;

        // validate fields
        if (!email || ! password) {
            return res.status(404).json({
                success: false,
                message: 'Email and password are required',

            })
        }
        const match = await userModel.findOne({ email }).select('+password');
        if (!match) {
            return res.status(400).json({
                success: false,
                message: 'Invalid credentials',
            });
        }
        const isMatch = await comparePasswords(password, match.password);
        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: 'Invalid credentials',
            });
        }
    } 
    catch(error) {
        console.log(error);
        res.staus(500).json({
            success: false,
            message: 'An error occurred while logging in',
            error
        })
    }

};