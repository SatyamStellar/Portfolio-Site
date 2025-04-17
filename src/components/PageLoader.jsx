import { motion } from "framer-motion";
import PropTypes from "prop-types";

const PageLoader = ({ isLoading }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  const spinnerVariants = {
    animate: {
      rotate: 360,
      transition: {
        repeat: Infinity,
        duration: 1.5,
        ease: "linear",
      },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        repeat: Infinity,
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isLoading ? "visible" : "exit"}
      className="fixed inset-0 flex items-center justify-center bg-[#06060c]/80 backdrop-blur-sm -z-50"
    >
      <div className="relative flex items-center justify-center">
        <motion.div
          variants={pulseVariants}
          animate="animate"
          className="absolute w-24 h-24 rounded-full bg-[#231739]/20 border border-blue-500/50"
        />
        <motion.div
          variants={spinnerVariants}
          animate="animate"
          className="w-16 h-16 text-purple-900"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-full h-full"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          </svg>
        </motion.div>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } }}
        className="absolute top-[60%] text-white/70 font-mono text-xl tracking-wide"
      >
        Loading...
      </motion.p>
    </motion.div>
  );
};

PageLoader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default PageLoader;
