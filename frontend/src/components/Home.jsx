import React from "react";
import Navbar from "./Navbar";
import CreateExpense from "./CreateExpense";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import "./style.css";
import { useDispatch } from "react-redux";
import { setCategory, setMarkAsDone } from "@/redux/expenseSlice";
import ExpenseTable from "./ExpenseTable";
import useGetExpenses from "@/hooks/useGetExpenses";


const Home = () => {
  useGetExpenses();
  const dispatch = useDispatch();

  const changeCategoryHandler = (value) => {
    dispatch(setCategory(value));
  };

  const changeDoneHandler = (value) => {
    dispatch(setMarkAsDone(value));
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-white to-gray-100 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800 transition-all duration-500 text-gray-900 dark:text-gray-100 font-inter">
      {/* Navbar */}
      <Navbar />

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main Container */}
      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-12 flex flex-col gap-8">
        {/* Header Section */}
        <div className="flex items-center justify-between animate-fadeInUp">
          {/* Enhanced title with gradient */}
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400 bg-clip-text text-transparent">
                Expense Dashboard
              </span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg font-medium">
              Track and manage your finances with style
            </p>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <CreateExpense />
          </div>
        </div>

        {/* Enhanced Filter Section */}
        <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 p-8 transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] animate-fadeInUp delay-100">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full"></div>
              <h2 className="text-xl font-bold text-gray-700 dark:text-gray-200 tracking-wide">
                Filter By:
              </h2>
            </div>

            <div className="flex gap-4 flex-wrap">
              <Select onValueChange={changeCategoryHandler}>
                <SelectTrigger className="w-[220px] h-12 border-2 border-gray-200 dark:border-gray-600 shadow-lg rounded-xl bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm transition-all duration-300 hover:border-emerald-300 dark:hover:border-emerald-500 hover:shadow-xl focus:ring-2 focus:ring-emerald-500/20">
                  <SelectValue placeholder="🏷️ Select Category" />
                </SelectTrigger>
                <SelectContent className="rounded-xl border-0 shadow-2xl bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl">
                  <SelectGroup>
                    <SelectItem value="rent" className="rounded-lg transition-all hover:bg-emerald-50 dark:hover:bg-emerald-900/20">🏠 Rent</SelectItem>
                    <SelectItem value="food" className="rounded-lg transition-all hover:bg-emerald-50 dark:hover:bg-emerald-900/20">🍽️ Food</SelectItem>
                    <SelectItem value="salary" className="rounded-lg transition-all hover:bg-emerald-50 dark:hover:bg-emerald-900/20">💰 Salary</SelectItem>
                    <SelectItem value="shopping" className="rounded-lg transition-all hover:bg-emerald-50 dark:hover:bg-emerald-900/20">🛍️ Shopping</SelectItem>
                    <SelectItem value="all" className="rounded-lg transition-all hover:bg-emerald-50 dark:hover:bg-emerald-900/20">📋 All</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Select onValueChange={changeDoneHandler}>
                <SelectTrigger className="w-[220px] h-12 border-2 border-gray-200 dark:border-gray-600 shadow-lg rounded-xl bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm transition-all duration-300 hover:border-teal-300 dark:hover:border-teal-500 hover:shadow-xl focus:ring-2 focus:ring-teal-500/20">
                  <SelectValue placeholder="✅ Mark Status" />
                </SelectTrigger>
                <SelectContent className="rounded-xl border-0 shadow-2xl bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl">
                  <SelectGroup>
                    <SelectItem value="done" className="rounded-lg transition-all hover:bg-teal-50 dark:hover:bg-teal-900/20">✅ Done</SelectItem>
                    <SelectItem value="undone" className="rounded-lg transition-all hover:bg-teal-50 dark:hover:bg-teal-900/20">⏳ Pending</SelectItem>
                    <SelectItem value="both" className="rounded-lg transition-all hover:bg-teal-50 dark:hover:bg-teal-900/20">📊 Both</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Enhanced Expense Table Container */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 p-8 transition-all duration-300 hover:shadow-2xl animate-fadeInUp delay-200">
          <ExpenseTable />
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .delay-100 {
          animation-delay: 0.1s;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  );
};

export default Home;