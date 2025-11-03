import React from "react";

export default function SignupSuccessCard({ visible, onClose }) {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* Card */}
      <div className="relative bg-white rounded-2xl shadow-2xl ring-1 ring-black/5 p-6 w-full max-w-sm text-center">
        <div className="flex flex-col items-center space-y-4">
          {/* Success Icon */}
          <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
            <svg
              className="h-6 w-6 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>

          {/* Message */}
          <h3 className="text-lg font-semibold text-gray-800">
            Registration Successful
          </h3>
          <p className="text-sm text-gray-600">
            Username and password will be sent to your email after confirmation.
          </p>

          {/* Dismiss Button */}
          <button
            onClick={onClose}
            className="mt-4 px-6 py-2 bg-green-600 text-white rounded-md text-sm font-medium hover:bg-green-700 transition"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
