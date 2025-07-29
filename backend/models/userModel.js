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
        match: [/.+\@.+\..+/, "Please enter a valid email address"]
    },
    password: {
        type: String,
        required: true,
        // Consider adding `minlength` if you're not hashing immediately
    },
    phone: {
        type: String,
        required: true,
        match: [/^[0-9]{10}$/, "Please enter a valid 10-digit phone number"]
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: Number,
        default: 0, // 0 = User, 1 = Admin
        enum: [0, 1] // Prevent invalid values
    }
}, { timestamps: true });

export default mongoose.model('User', userSchema);
