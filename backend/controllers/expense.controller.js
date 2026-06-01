import { prisma } from "../database/prisma.js";

const mapExpense = (expense) => ({
    ...expense,
    _id: expense.id
});

export const addExpense = async (req, res) => {
    try {
        const { description, amount, category } = req.body;
        const userId = req.userId; // Fixed bug from req.id

        if (!description || !amount || !category) {
            return res.status(400).json({
                message: "All fields are required.",
                success: false
            });
        }

        const expense = await prisma.expense.create({
            data: {
                description,
                amount: parseFloat(amount),
                category,
                userId,
            }
        });

        return res.status(201).json({
            message: "New expense added.",
            expense: mapExpense(expense),
            success: true,
        });
    } catch (error) {
        console.error("Add Expense Error:", error);
        res.status(500).json({
            message: "Server error while adding expense.",
            success: false,
        });
    }
};

export const getAllExpense = async (req, res) => {
    try {
        const userId = req.userId;
        const category = req.query.category || "";
        const done = req.query.done || "";

        const query = { userId };

        if (category.toLowerCase() !== "all" && category) {
            query.category = { contains: category, mode: 'insensitive' };
        }

        if (done.toLowerCase() === "done") {
            query.done = true;
        } else if (done.toLowerCase() === "undone") {
            query.done = false;
        }

        const expenses = await prisma.expense.findMany({
            where: query,
            orderBy: { createdAt: 'desc' }
        });

        return res.status(200).json({
            expenses: expenses.map(mapExpense),
            success: true,
        });
    } catch (error) {
        console.error("Get Expenses Error:", error);
        res.status(500).json({
            message: "Server error while fetching expenses.",
            success: false,
        });
    }
};

export const markAsDoneUndone = async (req, res) => {
    try {
        const expenseId = req.params.id;
        const { done } = req.body;

        const expense = await prisma.expense.update({
            where: { id: expenseId },
            data: { done }
        });

        return res.status(200).json({
            message: `Expense marked as ${expense.done ? "done" : "undone"}.`,
            success: true,
        });
    } catch (error) {
        console.error("Mark Done Error:", error);
        res.status(500).json({
            message: "Server error while updating expense status.",
            success: false,
        });
    }
};

export const removeExpense = async (req, res) => {
    try {
        const expenseId = req.params.id;

        await prisma.expense.delete({
            where: { id: expenseId }
        });

        return res.status(200).json({
            message: "Expense removed.",
            success: true,
        });
    } catch (error) {
        console.error("Remove Expense Error:", error);
        res.status(500).json({
            message: "Server error while removing expense.",
            success: false,
        });
    }
};

export const updateExpense = async (req, res) => {
    try {
        const { description, amount, category } = req.body;
        const expenseId = req.params.id;

        const expense = await prisma.expense.update({
            where: { id: expenseId },
            data: { 
                description, 
                amount: amount ? parseFloat(amount) : undefined, 
                category 
            }
        });

        return res.status(200).json({
            message: "Expense updated.",
            expense: mapExpense(expense),
            success: true
        });
    } catch (error) {
        console.error("Update Expense Error:", error);
        res.status(500).json({
            message: "Server error while updating expense.",
            success: false,
        });
    }
};
