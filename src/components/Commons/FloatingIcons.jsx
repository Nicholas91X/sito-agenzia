import { motion } from 'framer-motion';

const FloatingIcon = ({ children, style }) => {
  return (
    <motion.div
      style={{ position: 'absolute', ...style }}
      animate={{ y: [0, -10, 0] }} // L'icona fluttua 10px verso l'alto
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default FloatingIcon;