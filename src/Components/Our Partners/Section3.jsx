import React, { useState, forwardRef, useEffect } from "react";
import SignupSuccessCard from "./Successcard.jsx";
import axios from "axios";

const Section3 = forwardRef(({ onSwitchToLogin, initialRole }, ref) => {
  const [role, setRole] = useState(initialRole || "partner");
  const [showSuccess, setShowSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const initialFormState = {
    firstname: "",
    lastname: "",
    email: "",
    dob: "",
    profession: "",
    pincode: "",
    phone: "",
    pan: "",
    contactNumber: "",
    location: "",
    contactSource: "",
    referenceName: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialRole) setRole(initialRole);
  }, [initialRole]);

  const handleRoleChange = (newRole) => {
    setRole(newRole);
    setFormData(initialFormState);
    setErrors({});
    setMessage("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstname) newErrors.firstname = "First name required";
    if (!formData.lastname) newErrors.lastname = "Last name required";
    if (!formData.email) newErrors.email = "Email required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email";
    if (!formData.dob) newErrors.dob = "Date of birth required";

    if (role === "partner") {
      if (!formData.phone || !/^\d{10}$/.test(formData.phone))
        newErrors.phone = "Valid phone required";
      if (!formData.pan || !/^[A-Z]{5}[0-9]{4}[A-Z]$/i.test(formData.pan))
        newErrors.pan = "Valid PAN required";
      if (!formData.profession) newErrors.profession = "Profession required";
      if (!formData.pincode || !/^\d{6}$/.test(formData.pincode))
        newErrors.pincode = "Valid pincode required";
    } else {
      if (!formData.contactNumber || !/^\d{10}$/.test(formData.contactNumber))
        newErrors.contactNumber = "Valid contact number required";
      if (!formData.location) newErrors.location = "Location required";
      if (!formData.contactSource) newErrors.contactSource = "Contact source required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (!validate()) return;

    try {
      const apiUrl =
        role === "partner"
          ? "/api/partners/signup"
          : "/api/customers/signup";

      const payload = { ...formData };
      const response = await axios.post(apiUrl, payload);
      setShowSuccess(true);
      setFormData(initialFormState);
      setErrors({});
    } catch (error) {
      setMessage(`❌ ${error.response?.data?.message || "Signup failed"}`);
    }
  };

  const inputClass = (field) =>
    `w-full p-2 border rounded-md ${
      errors[field] ? "border-red-500" : "border-gray-400"
    }`;

  return (
    <div
      ref={ref}
      className="min-h-screen flex flex-col justify-center items-center bg-white py-12"
    >
      <h2 className="text-3xl font-bold text-blue-900 mb-6">Signup Portal</h2>

      {/* Role selection */}
      <div className="flex items-center justify-center gap-6 mb-6">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            checked={role === "partner"}
            onChange={() => handleRoleChange("partner")}
          />
          <span>Partner</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            checked={role === "customer"}
            onChange={() => handleRoleChange("customer")}
          />
          <span>Customer</span>
        </label>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-8 rounded-lg shadow-md w-full max-w-md flex flex-col gap-4"
      >
        {/* Common fields */}
        <div className="flex gap-2">
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            value={formData.firstname}
            onChange={handleChange}
            className={inputClass("firstname")}
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={formData.lastname}
            onChange={handleChange}
            className={inputClass("lastname")}
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className={inputClass("email")}
        />

        {role === "partner" ? (
          <>
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className={inputClass("phone")}
            />
            <input
              type="text"
              name="pan"
              placeholder="PAN"
              value={formData.pan}
              onChange={handleChange}
              className={inputClass("pan")}
            />
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className={inputClass("dob")}
            />
            <input
              type="text"
              name="profession"
              placeholder="Profession"
              value={formData.profession}
              onChange={handleChange}
              className={inputClass("profession")}
            />
            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              value={formData.pincode}
              onChange={handleChange}
              className={inputClass("pincode")}
            />
          </>
        ) : (
          <>
            <input
              type="text"
              name="contactNumber"
              placeholder="Contact Number"
              value={formData.contactNumber}
              onChange={handleChange}
              className={inputClass("contactNumber")}
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
              className={inputClass("location")}
            />
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className={inputClass("dob")}
            />
            <input
              type="text"
              name="contactSource"
              placeholder="Contact Source"
              value={formData.contactSource}
              onChange={handleChange}
              className={inputClass("contactSource")}
            />
            <input
              type="text"
              name="referenceName"
              placeholder="Reference Name (Optional)"
              value={formData.referenceName}
              onChange={handleChange}
              className={inputClass("referenceName")}
            />
          </>
        )}

        <button className="bg-blue-900 hover:bg-blue-800 text-white py-2 rounded-md">
          Signup
        </button>

        <SignupSuccessCard
          visible={showSuccess}
          onClose={() => setShowSuccess(false)}
        />

        {message && (
          <p
            className={`text-center mt-2 ${
              message.startsWith("✅") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}

        <div className="text-center mt-4">
          <span
            className="text-blue-700 cursor-pointer underline"
            onClick={() => onSwitchToLogin(role)}
          >
            Already have an account? Login here
          </span>
        </div>
      </form>
    </div>
  );
});

export default Section3;
