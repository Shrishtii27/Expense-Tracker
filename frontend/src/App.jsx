import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import { Link } from 'react-router-dom';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from "@/components/ui/sonner";

// Full Featured Inline Landing Page Component
const FullLandingPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-100">
    {/* Navigation */}
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Matching other pages */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl shadow-lg flex items-center justify-center transform hover:rotate-6 transition-transform duration-300">
                <span className="text-white font-bold text-xl">✨</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-2xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                CASHLY
              </h1>
              <p className="text-xs text-gray-500 -mt-1">Smart Finance</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Features</a>
            <a href="#testimonials" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Reviews</a>
            <a href="#pricing" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Pricing</a>
            <Link to="/login" className="px-4 py-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors font-medium">
              Sign In
            </Link>
            <Link to="/signup" className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all transform hover:scale-105 shadow-lg">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Link to="/signup" className="px-4 py-2 bg-emerald-600 text-white rounded-lg font-semibold">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>

    {/* Hero Section */}
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Smart Finance
            </span>
            <br />
            <span className="text-gray-900">Made Simple</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            Take control of your finances with CASHLY's intelligent expense tracking, 
            beautiful analytics, and seamless user experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link to="/signup" className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-lg font-bold rounded-2xl hover:from-emerald-700 hover:to-teal-700 transition-all transform hover:scale-105 shadow-2xl flex items-center gap-3">
              Start Free Trial
              <span>→</span>
            </Link>
            <Link to="/dashboard" className="px-8 py-4 border-2 border-emerald-600 text-emerald-600 text-lg font-semibold rounded-2xl hover:bg-emerald-50 transition-all">
              View Dashboard
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">50K+</div>
              <div className="text-gray-600 font-medium">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">$2M+</div>
              <div className="text-gray-600 font-medium">Tracked</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">4.9★</div>
              <div className="text-gray-600 font-medium">Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">99.9%</div>
              <div className="text-gray-600 font-medium">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Features Section */}
    <section id="features" className="py-20 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to manage your finances efficiently, all in one beautiful platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group p-8 bg-white rounded-3xl shadow-lg border border-gray-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl font-bold">📊</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Smart Analytics</h3>
            <p className="text-gray-600 leading-relaxed">
              Get detailed insights into your spending patterns with beautiful charts and reports.
            </p>
          </div>

          <div className="group p-8 bg-white rounded-3xl shadow-lg border border-gray-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl font-bold">🔒</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Bank-Grade Security</h3>
            <p className="text-gray-600 leading-relaxed">
              Your financial data is protected with enterprise-level encryption and security.
            </p>
          </div>

          <div className="group p-8 bg-white rounded-3xl shadow-lg border border-gray-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl font-bold">📱</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Mobile Optimized</h3>
            <p className="text-gray-600 leading-relaxed">
              Track expenses on the go with our responsive design that works on any device.
            </p>
          </div>

          <div className="group p-8 bg-white rounded-3xl shadow-lg border border-gray-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl font-bold">🏷️</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Category Tracking</h3>
            <p className="text-gray-600 leading-relaxed">
              Organize expenses by categories and see where your money goes with visual breakdowns.
            </p>
          </div>

          <div className="group p-8 bg-white rounded-3xl shadow-lg border border-gray-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl font-bold">🎯</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Budget Goals</h3>
            <p className="text-gray-600 leading-relaxed">
              Set spending limits and get notifications when you're approaching your budget.
            </p>
          </div>

          <div className="group p-8 bg-white rounded-3xl shadow-lg border border-gray-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl font-bold">📈</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Real-time Reports</h3>
            <p className="text-gray-600 leading-relaxed">
              Generate instant reports and export your data whenever you need it.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Testimonials Section */}
    <section id="testimonials" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              What Users Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied users who've transformed their financial management with CASHLY.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-3xl shadow-lg border border-gray-200/50 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed italic">
              "CASHLY has transformed how I manage my business expenses. The insights are incredible!"
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                S
              </div>
              <div>
                <div className="font-semibold text-gray-900">Sarah Johnson</div>
                <div className="text-sm text-gray-500">Small Business Owner</div>
              </div>
            </div>
          </div>

          <div className="p-8 bg-white rounded-3xl shadow-lg border border-gray-200/50 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed italic">
              "Finally, an expense tracker that's both powerful and beautiful. I love the interface!"
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                M
              </div>
              <div>
                <div className="font-semibold text-gray-900">Mike Chen</div>
                <div className="text-sm text-gray-500">Freelance Designer</div>
              </div>
            </div>
          </div>

          <div className="p-8 bg-white rounded-3xl shadow-lg border border-gray-200/50 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed italic">
              "The analytics feature helped me identify spending patterns I never noticed before."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                E
              </div>
              <div>
                <div className="font-semibold text-gray-900">Emily Rodriguez</div>
                <div className="text-sm text-gray-500">Marketing Manager</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 relative overflow-hidden">
      <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Transform Your Finances?
        </h2>
        <p className="text-xl mb-8 opacity-90 leading-relaxed">
          Join thousands of users who've already taken control of their financial future with CASHLY.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/signup" className="px-8 py-4 bg-white text-emerald-600 text-lg font-bold rounded-2xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl">
            Start Your Free Trial
          </Link>
          <Link to="/dashboard" className="px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-2xl hover:bg-white/10 transition-all">
            View Dashboard
          </Link>
        </div>
        <p className="text-sm mt-4 opacity-75">
          No credit card required • 14-day free trial • Cancel anytime
        </p>
      </div>
    </section>

    {/* Footer */}
    <footer className="py-12 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">✨</span>
            </div>
            <div>
              <div className="text-xl font-bold">CASHLY</div>
              <div className="text-xs text-gray-400">Smart Finance</div>
            </div>
          </div>
          <div className="text-sm text-gray-400">
            © 2024 CASHLY. All rights reserved. Made with ❤️ Shrishti Srivastava
          </div>
        </div>
      </div>
    </footer>
  </div>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <FullLandingPage />
  },
  {
    path: "/dashboard",
    element: <Home />
  },
  {
    path: "/login", 
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={appRouter} />
      <Toaster />
    </div>
  );
}

export default App;