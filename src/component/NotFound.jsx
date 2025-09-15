import { Link } from "react-router";
import { motion } from "framer-motion";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center   text-center px-4 relative z-0">
      {/* 404 with scale + bounce */}
      <motion.h1
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="relative text-[80px] sm:text-[120px] font-extrabold text-blue-600 dark:text-white select-none">
        <span className="absolute left-0 top-0 text-blue-600 blur-sm opacity-70">
          404
        </span>
        404
      </motion.h1>

      {/* Subtitle */}
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-lg sm:text-2xl font-semibold text-gray-300 mb-3">
        Page not found
      </motion.h2>

      {/* Message */}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-gray-400 max-w-md mb-6">
        The page you’re looking for doesn’t exist or has been moved.
      </motion.p>

      {/* Back Home Button with hover/tap animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/"
            className="sm:w-[284px] w-fit sm:px-0 px-[30px] h-[40px] bg-gradient-to-b bg-[#56565653] dark:bg-gray-300   flex  items-center justify-center rounded-[13px] cursor-pointer">
            Go To Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default NotFound;
