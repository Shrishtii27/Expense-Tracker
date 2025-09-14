import { user } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;

        if (!fullname || !email || !password) {
            return res.status(400).json({
                message: "All fields are required.",
                success: false
            });
        }

        const existingUser = await user.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: "User already exists with this email.",
                success: false
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new user({
            fullname,
            email,
            password: hashedPassword
        });

        await newUser.save();

        return res.status(201).json({
            message: "Account created successfully",
            success: true
        });
    } catch (error) {
        console.error("Register Error:", error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "All fields are required.",
                success: false
            });
        }

        const foundUser = await user.findOne({ email });
        if (!foundUser) {
            return res.status(400).json({
                message: "Incorrect email or password.",
                success: false
            });
        }

        const isPasswordMatch = await bcrypt.compare(password, foundUser.password);
        if (!isPasswordMatch) {
            return res.status(400).json({
                message: "Incorrect email or password.",
                success: false
            });
        }

        const token = jwt.sign({ userId: foundUser._id }, process.env.SECRET_KEY, { expiresIn: '1d' });

        return res
            .status(200)
            .cookie("token", token, {
                maxAge: 24 * 60 * 60 * 1000, // 1 day
                httpOnly: true,
                sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
                secure: process.env.NODE_ENV === 'production',
            })
            .json({
                message: `Welcome back, ${foundUser.fullname}`,
                user: {
                    _id: foundUser._id,
                    fullname: foundUser.fullname,
                    email: foundUser.email
                },
                success: true
            });
    } catch (error) {
        console.error("Login Error:", error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        });
    }
};

export const logout = async (req, res) => {
    try {
        return res
            .status(200)
            .cookie("token", "", {
                maxAge: 0,
                httpOnly: true,
                sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
                secure: process.env.NODE_ENV === 'production',
            })
            .json({
                message: "User logged out successfully",
                success: true
            });
    } catch (error) {
        console.error("Logout Error:", error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        });
    }
};
