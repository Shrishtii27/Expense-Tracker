import express, { urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import dotenv from "dotenv";
import cors from "cors";
import connectDB from './database/db.js';
import userRoute from './routes/user.route.js';
import expenseRoute from './routes/expense.route.js';

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());

// CORS Configuration
const corsOptions = {
    origin: process.env.FRONTEND_ORIGIN || "http://localhost:5173", // Use env variable
    credentials: true,
};
app.use(cors(corsOptions));

// Ensure DB connection
let isConnected = false;
const connectToDatabase = async () => {
    if (!isConnected) {
        await connectDB();
        isConnected = true;
    }
};
app.use(async (req, res, next) => {
    await connectToDatabase();
    next();
});

// Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/expense", expenseRoute);

// Export app for Vercel
export default app;