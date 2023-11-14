import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const navLinks = (
    <>
      <li className="font-semibold list-none">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#EEFF25]" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="font-semibold list-none">
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#EEFF25]" : ""
          }
        >
          Contact Us
        </NavLink>
      </li>
      <li className="font-semibold list-none">
        <NavLink
          to="/dashboard"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#EEFF25]" : ""
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li className="font-semibold list-none">
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#EEFF25]" : ""
          }
        >
          Our Menu
        </NavLink>
      </li>
      <li className="font-semibold list-none">
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#EEFF25]" : ""
          }
        >
          Our Shop
        </NavLink>
      </li>
    </>
  );

  const navButton = (
    <Link className="py-2 px-3 bg-amber-600 rounded-md text-white" to="/signIn">
      Sign In
    </Link>
  );

  return (
    <nav className="bg-opacity-70 bg-black max-w-7xl mx-auto fixed z-20 p-4 w-full">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between">
          <div className="flex space-x-4 gap-10">
            {/* Logo */}
            <div className="flex justify-center items-center">
              <Link
                to="/"
                href="#"
                className="flex justify-center items-center gap-2 text-gray-700 hover:text-gray-900"
              >
                <img className="h-8 w-8" src={logo} alt="" />
                <span className="font-bold text-amber-600 text-xl">Bistro Boss</span>
              </Link>
            </div>

            {/* Primary Nav */}
            <div className="hidden md:flex items-center space-x-4">
              {navLinks}
            </div>
          </div>

          {/* Secondary Nav */}
          <div className="hidden md:flex items-center">{navButton}</div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              className="mobile-menu-button"
              onClick={handleMobileMenuToggle}
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
      </div>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu ${isMobileMenuOpen ? "" : "hidden"} md:hidden`}
      >
        <div className="p-4 text-center shadow-lg rounded-lg space-y-3">
          {navLinks}

          <div>{navButton}</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
