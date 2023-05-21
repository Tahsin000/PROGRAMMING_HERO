import React from "react";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-red-600 mb-4"
        >
          404
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl text-gray-700 mb-6"
        >
          Oops! Page not found.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-gray-600 mb-8"
        >
          The page you are looking for might have been removed or doesn't exist.
        </motion.p>
        <Link to="/">
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="px-4 py-2 bg-[#DB2458] text-white rounded-lg shadow-lg hover:bg-[#c41446] focus:outline-none"
          >
            Go back
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
