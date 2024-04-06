import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  // Mobile menu display logic
  const [displayMenu, setDisplayMenu] = useState(false);

  const handleMenu = () => {
    setDisplayMenu((prev) => !prev);
  };

  return (
    <nav className="relative flex items-center p-4 md:justify-around">
      <h1 className="mr-auto text-2xl font-serif font-medium text-teal-500 md:mr-0">
        SrMedical
      </h1>

      <div className="hidden sm:flex gap-x-4 text-lg font-medium text-indigo-900">
        <NavLink className="hover:text-indigo-700" to="/about">
          About
        </NavLink>
        <NavLink className="hover:text-indigo-700" to="/services">
          Services
        </NavLink>
        <NavLink className="hover:text-indigo-700" to="/doctors">
          Doctors
        </NavLink>
        <NavLink className="hover:text-indigo-700" to="/blog">
          Blog
        </NavLink>
        <NavLink className="hover:text-indigo-700" to="/contact">
          Contact
        </NavLink>
      </div>

      <button className="hidden md:block py-2 px-4 bg-teal-500 text-white rounded-2xl hover:bg-teal-600 ease-in-out duration-200">
        Schedule Appointment
      </button>

      {/* Mobile menu */}
      <div className="text-3xl sm:hidden" onClick={handleMenu}>
        {displayMenu ? <IoClose /> : <IoMenu />}
      </div>

      {displayMenu && (
        <div className="absolute top-full left-0 w-full flex flex-col gap-y-4 bg-white text-lg font-medium text-indigo-900 z-10 [&>*]:pt-4 [&>*]:pl-4 [&>*]:border-t md:hidden">
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/doctors">Doctors</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact" className="pb-4">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
