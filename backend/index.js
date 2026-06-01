import express, { urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import dotenv from "dotenv";
dotenv.config();

import cors from "cors";

import userRoute from './routes/user.route.js';
import expenseRoute from './routes/expense.route.js';

const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
    origin: process.env.FRONTEND_ORIGIN || "http://localhost:5173",
    credentials: true,
};
app.use(cors(corsOptions));

console.log('🚀 Express server started');

app.use("/api/v1/user", userRoute);
app.use("/api/v1/expense", expenseRoute);

// Root route for API status
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "CASHLY API is running successfully! 🚀",
        version: "1.0.0"
    });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: "Something went wrong!"
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🌐 Server running at http://localhost:${PORT}`);
});
