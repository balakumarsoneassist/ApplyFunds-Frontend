import React, { useRef, useState } from "react";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

export default function Indexpartner() {
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const [showSignup, setShowSignup] = useState(false);
  const [currentRole, setCurrentRole] = useState("partner");

  const handleSwitchToSignup = (role) => {
    setCurrentRole(role);
    setShowSignup(true);
    setTimeout(() => section3Ref.current?.scrollIntoView({ behavior: "smooth" }), 100);
  };

  const handleSwitchToLogin = (role) => {
    setCurrentRole(role);
    setShowSignup(false);
    setTimeout(() => section2Ref.current?.scrollIntoView({ behavior: "smooth" }), 100);
  };

  return (
    <div>
      <Header />

      <Section2 ref={section2Ref} onSwitchToSignup={handleSwitchToSignup} />

      <Section1 />

      {/* Animated Signup Section */}
      <div
        className={`transition-transform duration-500 ease-in-out ${
          showSignup ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        {showSignup && (
          <Section3
            ref={section3Ref}
            onSwitchToLogin={handleSwitchToLogin}
            initialRole={currentRole}
          />
        )}
      </div>

      <Footer />
    </div>
  );
}
