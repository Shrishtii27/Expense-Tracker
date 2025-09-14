import React from "react";
import axios from "axios";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "./ui/avatar";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import ThemeToggle from "./ThemeToggle";
import { Sparkles, LogOut, User, Settings } from "lucide-react";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${process.env.VERCEL}/api/v1/user/logout`, {
        withCredentials: true,
      });

      if (res.data.success) {
        toast.success(res.data.message || "Logout successful!");
        navigate("/login");
      } else {
        toast.error(res.data.message || "Logout failed. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message || "An error occurred while logging out."
      );
    }
  };

  return (
    <>
      {/* Backdrop blur overlay */}
      <div className="fixed top-0 left-0 w-full h-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 z-50 transition-all duration-300">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-20 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 blur-2xl"></div>
          <div className="absolute top-0 right-1/4 w-96 h-20 bg-gradient-to-l from-blue-500/5 to-purple-500/5 blur-2xl"></div>
        </div>
        
        <div className="relative flex items-center justify-between max-w-7xl mx-auto h-20 px-6">
          {/* Enhanced CASHLY Logo */}
          <Link to="/" className="flex items-center group">
            <div className="flex items-center space-x-3 transition-all duration-300 group-hover:scale-105">
              {/* Logo Icon */}
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300 group-hover:rotate-6">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse"></div>
              </div>
              
              {/* CASHLY Text */}
              <div className="flex flex-col">
                <h1 className="text-2xl font-extrabold tracking-tight">
                  <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400 bg-clip-text text-transparent">
                    CASHLY
                  </span>
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium -mt-1">
                  Smart Finance
                </p>
              </div>
            </div>
          </Link>

          {/* Right Side Navigation */}
          <div className="flex items-center space-x-6">
            {/* Theme Toggle with enhanced styling */}
            <div className="transform transition-all duration-300 hover:scale-110">
              <ThemeToggle />
            </div>

            {user ? (
              <Popover>
                <PopoverTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="p-2 rounded-xl hover:bg-gray-100/80 dark:hover:bg-gray-800/80 transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-10 h-10 ring-2 ring-emerald-500/20 group-hover:ring-emerald-500/40 transition-all duration-300">
                        <AvatarImage src="https://github.com/shadcn.png" alt="User Avatar" />
                      </Avatar>
                      {user.fullname && (
                        <div className="hidden md:block text-left">
                          <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                            {user.fullname}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {user.email}
                          </p>
                        </div>
                      )}
                    </div>
                  </Button>
                </PopoverTrigger>
                <PopoverContent 
                  align="end" 
                  className="w-64 p-0 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl border-0 shadow-2xl rounded-2xl"
                >
                  <div className="p-4 border-b border-gray-200/50 dark:border-gray-700/50">
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src="https://github.com/shadcn.png" alt="User Avatar" />
                      </Avatar>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-gray-100">
                          {user.fullname || "User"}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {user.email || "user@example.com"}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-2 space-y-1">
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-300"
                    >
                      <User className="w-4 h-4 mr-3" />
                      Profile Settings
                    </Button>
                    
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
                    >
                      <Settings className="w-4 h-4 mr-3" />
                      Preferences
                    </Button>
                    
                    <div className="border-t border-gray-200/50 dark:border-gray-700/50 my-2"></div>
                    
                    <Button 
                      onClick={logoutHandler}
                      variant="ghost"
                      className="w-full justify-start rounded-xl text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-700 dark:hover:text-red-400 transition-all duration-300"
                    >
                      <LogOut className="w-4 h-4 mr-3" />
                      Logout
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            ) : (
              <div className="flex space-x-3">
                <Link to="/login">
                  <Button 
                    variant="ghost"
                    className="rounded-xl font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-700 dark:hover:text-emerald-400 transition-all duration-300 hover:scale-105"
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="rounded-xl font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-0">
                    Get Started
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from being hidden behind fixed navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;