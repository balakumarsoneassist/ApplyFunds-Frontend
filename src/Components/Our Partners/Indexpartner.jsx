import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

export default function Indexpartner() {
  const sectionRef = useRef(null);
  const [showSignup, setShowSignup] = useState(false);
  const [currentRole, setCurrentRole] = useState("partner");

  const handleSwitchToSignup = (role) => {
    setCurrentRole(role);
    setShowSignup(true);
    setTimeout(() => sectionRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
  };

  const handleSwitchToLogin = (role) => {
    setCurrentRole(role);
    setShowSignup(false);
    setTimeout(() => sectionRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
  };

  // Animation variants for smooth transitions
  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, y: -30, transition: { duration: 0.4, ease: "easeIn" } },
  };

  return (
    <div className="bg-white">
      <Header />

      {/* Animated Login / Signup Container */}
      <div
        ref={sectionRef}
        className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
      >
        <AnimatePresence mode="wait">
          {!showSignup ? (
            <motion.div
              key="login"
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full"
            >
              <Section2 onSwitchToSignup={handleSwitchToSignup} />
            </motion.div>
          ) : (
            <motion.div
              key="signup"
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full"
            >
              <Section3
                onSwitchToLogin={handleSwitchToLogin}
                initialRole={currentRole}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Section1 />
      <Footer />
    </div>
  );
}
