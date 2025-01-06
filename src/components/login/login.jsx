import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';

function Login() {
  const [isSignUp, setIsSignUp] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const formVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { delay: 0.3, duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div 
        className="max-w-md w-full space-y-8 backdrop-blur-lg bg-white/10 p-8 rounded-xl shadow-2xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <div className="text-center">
          <motion.h2 
            className="text-3xl font-bold text-white mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {isSignUp ? 'Create Account' : 'Welcome Back'}
          </motion.h2>
          <p className="text-gray-300">
            {isSignUp 
              ? 'Sign up to start your journey' 
              : 'Please login to your account'}
          </p>
        </div>

        {/* Form */}
        <motion.form 
          className="mt-8 space-y-6"
          variants={formVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              required
              className="w-full bg-white/5 border border-gray-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
              placeholder="Email address"
            />
          </div>

          {/* Username (only for signup) */}
          {isSignUp && (
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                required
                className="w-full bg-white/5 border border-gray-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                placeholder="Username"
              />
            </div>
          )}

          {/* Password */}
          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="password"
              required
              className="w-full bg-white/5 border border-gray-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
              placeholder="Password"
            />
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg py-3 font-semibold transition-all hover:opacity-90"
            type="submit"
          >
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </motion.button>

          {/* Toggle Form */}
          <div className="text-center text-gray-300">
            <p>
              {isSignUp 
                ? 'Already have an account? ' 
                : "Don't have an account? "}
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-purple-400 hover:text-purple-300 font-semibold transition-colors"
              >
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </button>
            </p>
          </div>
        </motion.form>

        {/* Social Login */}
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-transparent text-gray-400">Or continue with</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center px-4 py-2 border border-gray-600 rounded-lg text-white bg-white/5 hover:bg-white/10 transition-all"
            >
              Google
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center px-4 py-2 border border-gray-600 rounded-lg text-white bg-white/5 hover:bg-white/10 transition-all"
            >
              GitHub
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;
