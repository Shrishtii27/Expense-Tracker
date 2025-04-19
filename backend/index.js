import express, { urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import dotenv from "dotenv";
import cors from "cors";
import mongoose from 'mongoose'; // MongoDB ODM
import userRoute from './routes/user.route.js';
import expenseRoute from './routes/expense.route.js';

dotenv.config(); // Load environment variables

const app = express();
const PORT = 8000;

// Middleware
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());

// CORS Configuration
const corsOptions = {
    origin: "http://localhost:5173", // Frontend origin
    credentials: true,              // Allow credentials (cookies, headers)
};
app.use(cors(corsOptions));

// Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/expense", expenseRoute);

// MongoDB connection function
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Exit if connection fails
    }
};

// Start Server
app.listen(PORT, () => {
    connectDB();
    console.log(`Server is listening on port ${PORT}`);
    console.log("Server is running...");
});
