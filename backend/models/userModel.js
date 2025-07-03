import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        match: [/.+\@.+\..+/, "Please fill a valid email address"]
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
        match: [/^[0-9]{10}$/, "Please enter a valid 10-digit phone number"]
    },
    address: {
        type: String,
        required: true,
    },
    role: {
        type: Number,
        default: 0, // 0: User, 1: Admin

    },
}, { timestamps: true });



export default mongoose.model('User', userSchema);