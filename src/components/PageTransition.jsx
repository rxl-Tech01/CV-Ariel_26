import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";

export default function PageTransition({ title, children }) {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (!params.get("case") && !params.get("section") && !params.get("print")) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [location.pathname, location.search]);

  return (
    <motion.main
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -6 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.24, ease: "easeOut" }}
    >
      {children}
    </motion.main>
  );
}
