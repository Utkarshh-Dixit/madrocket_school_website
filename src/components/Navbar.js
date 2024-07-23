import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-blue-600 p-4 text-white shadow-lg">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-2xl font-bold">Springdale Public School</div>
      <div className="space-x-6">
        <Link
          to="/"
          className="relative group inline-block px-3 py-2 transition-transform duration-300 ease-in-out"
        >
          Home
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </Link>
        <Link
          to="/about"
          className="relative group inline-block px-3 py-2 transition-transform duration-300 ease-in-out"
        >
          About Us
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </Link>
        <Link
          to="/academics"
          className="relative group inline-block px-3 py-2 transition-transform duration-300 ease-in-out"
        >
          Academics
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </Link>
        <Link
          to="/admissions"
          className="relative group inline-block px-3 py-2 transition-transform duration-300 ease-in-out"
        >
          Admissions
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </Link>
        <Link
          to="/faculty"
          className="relative group inline-block px-3 py-2 transition-transform duration-300 ease-in-out"
        >
          Faculty
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </Link>
        <Link
          to="/students"
          className="relative group inline-block px-3 py-2 transition-transform duration-300 ease-in-out"
        >
          Students
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </Link>
        <Link
          to="/gallery"
          className="relative group inline-block px-3 py-2 transition-transform duration-300 ease-in-out"
        >
          Gallery
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </Link>
        <Link
          to="/contact"
          className="relative group inline-block px-3 py-2 transition-transform duration-300 ease-in-out"
        >
          Contact Us
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
