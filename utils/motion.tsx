'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface MotionDivProps {
  className?: string; // Made optional since not all divs might need it
  style?: React.CSSProperties; // Use the correct type for inline styles
  initial?: object; // Made optional
  animate?: object; // Made optional
  transition?: any; // Made optional
  children?:any;
  whileHover?:any;
  whileInView?:any;
}

const MotionDiv: React.FC<MotionDivProps> = ({
  className = '',
  style = {},
  initial = {},
  animate = {},
  transition = {},
  children, // To allow child elements to be passed in
  whileHover,
  whileInView

}) => {
  return (
    <motion.div
      className={className}
      style={style}
      initial={initial}
      animate={animate}
      transition={transition}
      whileHover={whileHover}
      whileInView={whileInView}
      
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
