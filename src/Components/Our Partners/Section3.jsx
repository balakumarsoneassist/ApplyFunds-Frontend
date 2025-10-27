import React, { useState, forwardRef, useEffect } from "react";
import axios from "axios";

const Section3 = forwardRef(({ onSwitchToLogin, initialRole }, ref) => {
  const [role, setRole] = useState(initialRole || "partner");

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
  const [message, setMessage] = useState("");

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

    // Common validations
    if (!formData.firstname.trim()) newErrors.firstname = "First name required";
    if (!formData.lastname.trim()) newErrors.lastname = "Last name required";
    if (!formData.email.trim()) newErrors.email = "Email required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email";

    if (!formData.dob) newErrors.dob = "Date of birth required";

    if (role === "partner") {
      if (!formData.phone.trim()) newErrors.phone = "Phone required";
      else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Invalid phone number";

      if (!formData.pan.trim()) newErrors.pan = "PAN required";
      else if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/i.test(formData.pan)) newErrors.pan = "Invalid PAN";

      if (!formData.profession.trim()) newErrors.profession = "Profession required";
      if (!formData.pincode.trim()) newErrors.pincode = "Pincode required";
      else if (!/^\d{6}$/.test(formData.pincode)) newErrors.pincode = "Invalid pincode";
    } else {
      if (!formData.contactNumber.trim()) newErrors.contactNumber = "Contact number required";
      else if (!/^\d{10}$/.test(formData.contactNumber)) newErrors.contactNumber = "Invalid contact number";

      if (!formData.location.trim()) newErrors.location = "Location required";
      if (!formData.contactSource.trim()) newErrors.contactSource = "Contact source required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (!validate()) return;

    try {
      const apiUrl = role === "partner" ? "/api/partners/signup" : "/api/customers/signup";
      let payload = {
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
        dob: formData.dob,
      };

      if (role === "partner") {
        payload.phone = formData.phone;
        payload.pan = formData.pan;
        payload.profession = formData.profession;
        payload.pincode = formData.pincode;
      } else {
        payload.contactNumber = formData.contactNumber;
        payload.location = formData.location;
        payload.contactSource = formData.contactSource;
        if (formData.referenceName) payload.referenceName = formData.referenceName;
      }

      const response = await axios.post(apiUrl, payload);
      setMessage(`✅ ${response.data.message || "Signup successful!"}`);
      setFormData(initialFormState);
      setErrors({});
    } catch (error) {
      setMessage(`❌ ${error.response?.data?.message || "Signup failed"}`);
    }
  };

  const inputClass = (field) =>
    `w-full p-2 border rounded-md ${errors[field] ? "border-red-500" : "border-gray-400"}`;

  return (
    <div ref={ref} className="min-h-screen flex flex-col justify-center items-center bg-white py-12">
      <h2 className="text-3xl font-bold text-blue-900 mb-6">Signup Portal</h2>

      {/* Role Selection */}
      <div className="flex items-center justify-center gap-6 mb-6">
        <label className="flex items-center gap-2">
          <input type="radio" checked={role === "partner"} onChange={() => handleRoleChange("partner")} />
          <span>Partner</span>
        </label>
        <label className="flex items-center gap-2">
          <input type="radio" checked={role === "customer"} onChange={() => handleRoleChange("customer")} />
          <span>Customer</span>
        </label>
      </div>

      <form onSubmit={handleSubmit} className="bg-gray-100 p-8 rounded-lg shadow-md w-full max-w-md flex flex-col gap-4">
        {/* Common Fields */}
        <div className="flex gap-2">
          <div className="flex-1">
            <input type="text" name="firstname" placeholder="First Name" value={formData.firstname} onChange={handleChange} className={inputClass("firstname")} />
            {errors.firstname && <p className="text-red-500 text-sm">{errors.firstname}</p>}
          </div>
          <div className="flex-1">
            <input type="text" name="lastname" placeholder="Last Name" value={formData.lastname} onChange={handleChange} className={inputClass("lastname")} />
            {errors.lastname && <p className="text-red-500 text-sm">{errors.lastname}</p>}
          </div>
        </div>

        <div>
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className={inputClass("email")} />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        {role === "partner" ? (
          <>
            <div>
              <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className={inputClass("phone")} />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>
            <div>
              <input type="text" name="pan" placeholder="PAN" value={formData.pan} onChange={handleChange} className={inputClass("pan")} />
              {errors.pan && <p className="text-red-500 text-sm">{errors.pan}</p>}
            </div>
            <input type="date" name="dob" value={formData.dob} onChange={handleChange} className={inputClass("dob")} />
            {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
            <input type="text" name="profession" placeholder="Profession" value={formData.profession} onChange={handleChange} className={inputClass("profession")} />
            {errors.profession && <p className="text-red-500 text-sm">{errors.profession}</p>}
            <input type="text" name="pincode" placeholder="Pincode" value={formData.pincode} onChange={handleChange} className={inputClass("pincode")} />
            {errors.pincode && <p className="text-red-500 text-sm">{errors.pincode}</p>}
          </>
        ) : (
          <>
            <div>
              <input type="text" name="contactNumber" placeholder="Contact Number" value={formData.contactNumber} onChange={handleChange} className={inputClass("contactNumber")} />
              {errors.contactNumber && <p className="text-red-500 text-sm">{errors.contactNumber}</p>}
            </div>
            <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} className={inputClass("location")} />
            {errors.location && <p className="text-red-500 text-sm">{errors.location}</p>}
            <input type="date" name="dob" value={formData.dob} onChange={handleChange} className={inputClass("dob")} />
            {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
            <input type="text" name="contactSource" placeholder="Contact Source" value={formData.contactSource} onChange={handleChange} className={inputClass("contactSource")} />
            {errors.contactSource && <p className="text-red-500 text-sm">{errors.contactSource}</p>}
            <input type="text" name="referenceName" placeholder="Reference Name (Optional)" value={formData.referenceName} onChange={handleChange} className={inputClass("referenceName")} />
          </>
        )}

        <button className="bg-blue-900 hover:bg-blue-800 text-white py-2 rounded-md">Signup</button>

        {message && <p className={`text-center mt-2 ${message.startsWith("✅") ? "text-green-600" : "text-red-600"}`}>{message}</p>}

        <div className="text-center mt-4">
          <span className="text-blue-700 cursor-pointer underline" onClick={() => onSwitchToLogin(role)}>
            Already have an account? Login here
          </span>
        </div>
      </form>
    </div>
  );
});

export default Section3;
