import React, { useState, forwardRef } from "react";
import axios from "axios";

const Section2 = forwardRef(({ onSwitchToSignup }, ref) => {
  const [role, setRole] = useState("partner");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRoleChange = (newRole) => {
    setRole(newRole);
    setEmail("");
    setPassword("");
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const apiUrl =
        role === "partner"
          ? "/api/partners/login"
          : "/api/customers/login";
      const payload = { email, password };
      const response = await axios.post(apiUrl, payload);
      setMessage(`✅ ${response.data.message}`);
      console.log("Login success:", response.data);
    } catch (error) {
      console.error(error);
      setMessage(
        `❌ ${error.response?.data?.message || "Invalid email or password"}`
      );
    }
  };

  return (
    <div
      ref={ref}
      className="min-h-screen flex flex-col justify-center items-center bg-white py-12"
    >
      <h2 className="text-3xl font-bold text-blue-900 mb-6">Login Portal</h2>

      {/* Role selection */}
      <div className="flex items-center justify-center gap-6 mb-6">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="role"
            value="partner"
            checked={role === "partner"}
            onChange={() => handleRoleChange("partner")}
          />
          <span className="font-semibold text-gray-800">Partner</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="role"
            value="customer"
            checked={role === "customer"}
            onChange={() => handleRoleChange("customer")}
          />
          <span className="font-semibold text-gray-800">Customer</span>
        </label>
      </div>

      {/* Login form */}
      <div className="bg-gray-100 p-8 rounded-lg shadow-md w-full max-w-md">
        <h3 className="text-xl font-semibold text-blue-800 mb-4">
          {role === "partner" ? "Partner Login" : "Customer Login"}
        </h3>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-400 rounded-md"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-400 rounded-md"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-900 hover:bg-blue-800 text-white font-semibold py-2 rounded-md"
          >
            Login
          </button>

          {message && (
            <p
              className={`text-center mt-2 ${
                message.startsWith("✅") ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}
        </form>

        {/* Switch to Signup */}
        <div className="text-center mt-4">
          <p>
            {role === "partner"
              ? "Not a Partner yet?"
              : "Not a Customer yet?"}{" "}
            <span
              onClick={() => onSwitchToSignup(role)}
              className="text-blue-700 cursor-pointer underline"
            >
              Sign up here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
});

export default Section2;
