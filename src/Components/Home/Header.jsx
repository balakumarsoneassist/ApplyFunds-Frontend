// import React, { useState } from "react";
// import { NavLink, useLocation } from "react-router-dom";
// import aplogo from "../images/aplogo.png";

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isServicesOpen, setIsServicesOpen] = useState(false);
//   const location = useLocation();

//   const activeLinkClass =
//     "font-medium tracking-wide text-green-600 border-b-2 border-green-500";
//   const defaultLinkClass =
//     "font-medium tracking-wide text-gray-700 transition duration-200 hover:text-green-600 hover:border-b-2 hover:border-green-500";

//   const isServicesActive = ["/home-loan", "/vehicle-loan", "/personal-loan"].some(
//     (path) => location.pathname.includes(path)
//   );

//   return (
//     <div className="relative z-50 bg-white px-6 py-4 mx-auto md:max-w-full lg:max-w-screen-xl md:px-10 lg:px-16">
//       <div className="flex items-center justify-between">
//         {/* Logo */}
//         <a href="/" aria-label="Company" title="Company" className="inline-flex items-center">
//           <img src={aplogo} alt="Logo" className="w-26 h-12" />
//         </a>

//         {/* Desktop Menu */}
//         <div className="hidden lg:flex flex-1 justify-center items-center space-x-8">
//           <NavLink to="/" className={({ isActive }) => (isActive ? activeLinkClass : defaultLinkClass)}>Home</NavLink>
//           <div className="relative">
//             <button
//               onClick={() => setIsServicesOpen(!isServicesOpen)}
//               className={`${isServicesActive ? activeLinkClass : defaultLinkClass} flex items-center`}
//             >
//               Services
//               <svg className={`w-4 h-4 ml-2 transition-transform ${isServicesOpen ? "rotate-180" : "rotate-0"}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//               </svg>
//             </button>
//             {isServicesOpen && (
//   <ul className="absolute left-0 lg:left-auto mt-2 w-64 bg-white border border-gray-300 rounded-lg shadow-xl p-2">
//     <li className="px-4 py-2 hover:bg-gray-100 rounded">
//       <NavLink
//         to="/home-loan"
//         className={({ isActive }) => (isActive ? activeLinkClass : defaultLinkClass)}
//         onClick={() => setIsMenuOpen(false)}
//       >
//         Home Loan
//       </NavLink>
//     </li>
//     <li className="px-4 py-2 hover:bg-gray-100 rounded">
//       <NavLink
//         to="/buisness-loan"
//         className={({ isActive }) => (isActive ? activeLinkClass : defaultLinkClass)}
//         onClick={() => setIsMenuOpen(false)}
//       >
//         Business Loan
//       </NavLink>
//     </li>
//     <li className="px-4 py-2 hover:bg-gray-100 rounded">
//       <NavLink
//         to="/loan-against"
//         className={({ isActive }) => (isActive ? activeLinkClass : defaultLinkClass)}
//         onClick={() => setIsMenuOpen(false)}
//       >
//         Loan Against Property
//       </NavLink>
//     </li>
//     <li className="px-4 py-2 hover:bg-gray-100 rounded">
//       <NavLink
//         to="/personal-loan"
//         className={({ isActive }) => (isActive ? activeLinkClass : defaultLinkClass)}
//         onClick={() => setIsMenuOpen(false)}
//       >
//         Personal Loan
//       </NavLink>
//     </li>
//   </ul>
// )}

//           </div>
//           <NavLink to="/our-partners" className={({ isActive }) => (isActive ? activeLinkClass : defaultLinkClass)}>Our Partners</NavLink>
//           <NavLink to="/about-us" className={({ isActive }) => (isActive ? activeLinkClass : defaultLinkClass)}>About Us</NavLink>
//           <NavLink to="/contact" className={({ isActive }) => (isActive ? activeLinkClass : defaultLinkClass)}>Contact Us</NavLink>

//         </div>
//         <div className="hidden lg:block">
//           <NavLink to="/login" className="px-6 py-2 border-2 border-green-500 text-green-500 rounded-md hover:bg-green-500 hover:text-white transition">Login</NavLink>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="lg:hidden">
//           <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7 text-gray-700">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
//           isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
//         }`}
//         onClick={() => setIsMenuOpen(false)}
//       ></div>

//       <div
//         className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
//           isMenuOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="flex justify-between items-center px-5 py-4 border-b">
//           <img src={aplogo} alt="Logo" className="w-20 h-10" />
//           <button onClick={() => setIsMenuOpen(false)} className="text-gray-700 focus:outline-none">
//             ✕
//           </button>
//         </div>

//         <nav className="flex flex-col space-y-4 p-5">
//           <NavLink to="/" className="text-gray-800 text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
//           <div className="relative">
//             <button
//               onClick={() => setIsServicesOpen(!isServicesOpen)}
//               className={`${isServicesActive ? activeLinkClass : defaultLinkClass} flex items-center`}
//             >
//               Services
//               <svg className={`w-4 h-4 ml-2 transition-transform ${isServicesOpen ? "rotate-180" : "rotate-0"}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//               </svg>
//             </button>
//             {isServicesOpen && (
//               <ul className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50">
//                <li>
//                                         <NavLink
//                                           to="/home-loan"
//                                           className={({ isActive }) =>
//                                             isActive ? activeLinkClass : defaultLinkClass
//                                           }
//                                           onClick={() => setIsMenuOpen(false)}
//                                         >
//                                           Home Loan
//                                         </NavLink>
//                                       </li>
//                  <li>
//                                         <NavLink
//                                           to="/buisness-loan"
//                                           className={({ isActive }) =>
//                                             isActive ? activeLinkClass : defaultLinkClass
//                                           }
//                                           onClick={() => setIsMenuOpen(false)}
//                                         >
//                                           Buisness Loan
//                                         </NavLink>
//                                       </li>
//                  <li>
//                                         <NavLink
//                                           to="/loan-against"
//                                           className={({ isActive }) =>
//                                             isActive ? activeLinkClass : defaultLinkClass
//                                           }
//                                           onClick={() => setIsMenuOpen(false)}
//                                         >
//                                           Loan against property
//                                         </NavLink>
//                                       </li>
//                 <li>
//                                        <NavLink
//                                          to="/personal-loan"
//                                          className={({ isActive }) =>
//                                            isActive ? activeLinkClass : defaultLinkClass
//                                          }
//                                          onClick={() => setIsMenuOpen(false)}
//                                        >
//                                          Personal Loan
//                                        </NavLink>
//                                      </li>

//               </ul>
//             )}
//           </div>
//           <NavLink to="/our-partners" className="text-gray-800 text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Our Partners</NavLink>
//           <NavLink to="/about-us" className="text-gray-800 text-lg font-medium" onClick={() => setIsMenuOpen(false)}>About Us</NavLink>
//           <NavLink to="/contact" className="text-gray-800 text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Contact Us</NavLink>
//           <NavLink to="/login" className="bg-green-500 text-white text-lg font-medium px-6 py-2 rounded-md text-center" onClick={() => setIsMenuOpen(false)}>Login</NavLink>
//         </nav>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import aplogo from "../images/aplogo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const activeLinkClass =
    "font-medium tracking-wide text-green-600 border-b-2 border-green-500";
  const defaultLinkClass =
    "font-medium tracking-wide text-gray-700 transition duration-200 hover:text-green-600 hover:border-b-2 hover:border-green-500";

  const isServicesActive = [
    "/home-loan",
    "/vehicle-loan",
    "/personal-loan",
  ].some((path) => location.pathname.includes(path));

  return (
    <div className="relative z-50 bg-white px-6 py-4 mx-auto md:max-w-full lg:max-w-screen-xl md:px-10 lg:px-16">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          aria-label="Company"
          title="Company"
          class
          Name="inline-flex items-center"
        >
          <img src={aplogo} alt="Logo" className="w-30 h-14 " />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-1 justify-center items-center space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeLinkClass : defaultLinkClass
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              isActive ? activeLinkClass : defaultLinkClass
            }
          >
            About Us
          </NavLink>

          <NavLink
            to="/our-partners"
            className={({ isActive }) =>
              isActive ? activeLinkClass : defaultLinkClass
            }
          >
            Our Partners
          </NavLink>
          <div className="relative">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className={`${
                isServicesActive ? activeLinkClass : defaultLinkClass
              } flex items-center`}
            >
              Services
              <svg
                className={`w-4 h-4 ml-2 transition-transform ${
                  isServicesOpen ? "rotate-180" : "rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isServicesOpen && (
              <ul className="absolute left-0 lg:left-auto mt-2 w-64 bg-white border border-gray-300 rounded-lg shadow-xl p-2">
                <li className="px-4 py-2 hover:bg-gray-100 rounded">
                  <NavLink
                    to="/home-loan"
                    className={({ isActive }) =>
                      isActive ? activeLinkClass : defaultLinkClass
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home Loan
                  </NavLink>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 rounded">
                  <NavLink
                    to="/buisness-loan"
                    className={({ isActive }) =>
                      isActive ? activeLinkClass : defaultLinkClass
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Business Loan
                  </NavLink>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 rounded">
                  <NavLink
                    to="/loan-against"
                    className={({ isActive }) =>
                      isActive ? activeLinkClass : defaultLinkClass
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Loan Against Property
                  </NavLink>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 rounded">
                  <NavLink
                    to="/personal-loan"
                    className={({ isActive }) =>
                      isActive ? activeLinkClass : defaultLinkClass
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Personal Loan
                  </NavLink>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 rounded">
                  <NavLink
                    to="/insurance"
                    className={({ isActive }) =>
                      isActive ? activeLinkClass : defaultLinkClass
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Investment & Insurance
                  </NavLink>
                </li>
              </ul>
            )}
          </div>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? activeLinkClass : defaultLinkClass
            }
          >
            Contact Us
          </NavLink>
        </div>

        <div className="hidden lg:block">
          <NavLink
            to="/our-partners"
            className="px-6 py-2 border-2 border-green-500 text-green-500 rounded-md hover:bg-green-500 hover:text-white transition"
          >
            Login
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-7 h-7 text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-5 py-4 border-b">
          <img src={aplogo} alt="Logo" className="w-20 h-10" />
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-700 focus:outline-none"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col space-y-4 p-5">
          <NavLink
            to="/"
            className="text-gray-800 text-lg font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about-us"
            className="text-gray-800 text-lg font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </NavLink>

          <NavLink
            to="/our-partners"
            className="text-gray-800 text-lg font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Our Partners
          </NavLink>
          <div>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="flex items-center justify-between w-full text-left text-gray-800 text-lg font-medium focus:outline-none"
            >
              <span>Services</span>
              <svg
                className={`w-4 h-4 ml-2 transition-transform ${
                  isServicesOpen ? "rotate-180" : "rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isServicesOpen && (
              <ul className="mt-2 ml-2 border-l-2 border-green-400 pl-4 space-y-2">
                <li>
                  <NavLink
                    to="/home-loan"
                    className="text-gray-700 text-base hover:text-green-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home Loan
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/buisness-loan"
                    className="text-gray-700 text-base hover:text-green-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Business Loan
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/loan-against"
                    className="text-gray-700 text-base hover:text-green-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Loan Against Property
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/personal-loan"
                    className="text-gray-700 text-base hover:text-green-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Personal Loan
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/insurance"
                    className="text-gray-700 text-base hover:text-green-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Investment & Insurance
                  </NavLink>
                </li>
              </ul>
            )}
          </div>

          <NavLink
            to="/contact"
            className="text-gray-800 text-lg font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/our-partners"
            className="bg-green-500 text-white text-lg font-medium px-6 py-2 rounded-md text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </NavLink>
        </nav>
      </div>
    </div>
  );
}
