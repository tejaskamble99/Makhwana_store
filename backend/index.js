import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoute from './routes/authRoute.js';
import productRoutes from './routes/productRoutes.js';
import cors from 'cors';

// Configure environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Create Express app
const app = express();

// Enable CORS
app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  credentials: true,
}));


// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/v1/auth', authRoute);
app.use("/api/v1/products", productRoutes);

// Optional custom middleware
app.use((req, res, next) => {
  console.log('chalu hai be mai');
  next();
});

// Test Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/tejas', (req, res) => {
  res.send('ahe mi jivanta');
});

// Start Server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`✅ Server running in ${process.env.DEV_MODE} mode on port ${port}`);
});
