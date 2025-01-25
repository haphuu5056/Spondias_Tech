import { motion } from 'framer-motion';

const BackgroundShapes = () => (
  <>
    {/* Geometric background elements */}
    <div className="absolute inset-0 overflow-hidden">
      {/* Small dots pattern */}
      <div className="absolute top-20 left-10 grid grid-cols-3 gap-4 opacity-10">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-gray-500" />
        ))}
      </div>

      {/* Animated squares */}
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-4 right-1/4 w-24 h-24 border border-gray-200"
      />
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-1/3 w-16 h-16 border border-gray-200"
      />

      {/* Floating circles */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-32 left-1/4 w-4 h-4 rounded-full border border-blue-200"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-1/3 w-6 h-6 rounded-full border border-blue-200"
      />

      {/* Star shapes */}
      <div className="absolute top-40 right-20 text-gray-200 text-2xl">✦</div>
      <div className="absolute bottom-32 left-1/4 text-gray-200 text-xl">✦</div>
      <div className="absolute top-1/3 left-20 text-gray-200 text-lg">✧</div>

      {/* Large decorative square */}
      <div className="absolute -bottom-20 -left-20 w-64 h-64 border border-gray-200 rotate-12" />
      <div className="absolute -top-20 -right-20 w-64 h-64 border border-gray-100 -rotate-12" />
    </div>
  </>
);

export default BackgroundShapes;
