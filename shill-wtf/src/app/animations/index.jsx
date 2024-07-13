import { motion, useAnimation } from "framer-motion";
import React, { ReactNode, useEffect, useState } from "react";

export const SlideInOut = ({ children }) => {
  const variants = {
    hidden: { x: "-2vw", opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: "2vw", opacity: 0 },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ type: "spring", stiffness: 200, damping: 30 }}
    >
      {children}
    </motion.div>
  );
};

export const Wiggle = ({ children }) => {
  const controls = useAnimation();

  return (
    <motion.div
      onHoverStart={() => {
        controls.start({
          rotate: [0, 20, -20, 20, -20, 10, -10, 5, -5, 0],
          transition: { duration: 0.5 },
        });
      }}
      onHoverEnd={() => {
        controls.stop();
      }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export const FadeIn = ({ children }) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};
