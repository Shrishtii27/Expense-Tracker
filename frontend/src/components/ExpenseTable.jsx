import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useSelector } from "react-redux";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { Trash, Pencil } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import UpdateExpense from "./UpdateExpense";
import emptyImg from "@/assets/empty-expenses.svg";

const ExpenseTable = () => {
  const { expense } = useSelector((store) => store.expense);
  const { user } = useSelector((store) => store.auth);
  const [localExpense, setLocalExpense] = useState([]);

  useEffect(() => {
    setLocalExpense(expense);
  }, [expense]);

  const totalAmount = localExpense.reduce((acc, exp) => acc + (exp.done ? 0 : exp.amount), 0);

  const handleCheckboxChange = async (expenseId) => {
    try {
      const exp = localExpense.find((e) => e._id === expenseId);
      const newStatus = !exp.done;

      const res = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/expense/${expenseId}/done`,
        { done: newStatus },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.token}`,
          },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        toast.success(res.data.message || "Status updated!");
        setLocalExpense((prev) =>
          prev.map((e) => (e._id === expenseId ? { ...e, done: newStatus } : e))
        );
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to update status.");
    }
  };

  const removeExpenseHandler = async (expenseId) => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/expense/remove/${expenseId}`,
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        toast.success(res.data.message || "Expense removed!");
        setLocalExpense((prev) => prev.filter((e) => e._id !== expenseId));
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to remove expense.");
    }
  };

  return (
    <div className="mt-8">
      <Table className="rounded-xl border shadow-sm overflow-hidden">
        <TableCaption>
          {localExpense.length === 0
            ? "No expenses yet. Add your first one to get started!"
            : "A list of your recent expenses."}
        </TableCaption>

        <TableHeader>
          <TableRow className="bg-gray-100 dark:bg-gray-800">
            <TableHead className="w-[150px] font-semibold">Mark As Done</TableHead>
            <TableHead className="font-semibold">Description</TableHead>
            <TableHead className="font-semibold text-right">Amount</TableHead>
            <TableHead className="font-semibold">Category</TableHead>
            <TableHead className="font-semibold">Date</TableHead>
            <TableHead className="text-right font-semibold">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {localExpense.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6}>
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <img src={emptyImg} alt="Empty expenses" className="w-40 h-40 mb-4 opacity-80" />
                  <p className="text-gray-500 dark:text-gray-400">
                    You haven’t added any expenses yet.
                  </p>
                </div>
              </TableCell>
            </TableRow>
          ) : (
            localExpense.map((exp) => (
              <TableRow
                key={exp._id}
                className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <TableCell>
                  <Checkbox checked={exp.done} onCheckedChange={() => handleCheckboxChange(exp._id)} />
                </TableCell>
                <TableCell className={exp.done ? "line-through text-gray-400" : ""}>{exp.description}</TableCell>
                <TableCell
                  className={`text-right font-semibold ${
                    exp.done ? "line-through text-gray-400" : "text-green-600 dark:text-green-400"
                  }`}
                >
                  ₹{exp.amount}
                </TableCell>
                <TableCell className={exp.done ? "line-through text-gray-400" : ""}>{exp.category}</TableCell>
                <TableCell className={exp.done ? "line-through text-gray-400" : ""}>
                  {exp.createdAt?.split("T")[0]}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button
                      onClick={() => removeExpenseHandler(exp._id)}
                      size="icon"
                      className="rounded-full border text-red-600 border-red-600 hover:bg-red-600 hover:text-white transition-colors"
                      variant="outline"
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                    <UpdateExpense expense={exp}>
                      <Button
                        size="icon"
                        className="rounded-full border text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                        variant="outline"
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                    </UpdateExpense>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>

        {localExpense.length > 0 && (
          <TableFooter>
            <TableRow className="bg-gray-100 dark:bg-gray-800">
              <TableCell colSpan={5} className="font-bold text-lg">
                Total
              </TableCell>
              <TableCell className="text-right font-bold text-lg text-green-700 dark:text-green-300">
                ₹{totalAmount}
              </TableCell>
            </TableRow>
          </TableFooter>
        )}
      </Table>
    </div>
  );
};

export default ExpenseTable;
