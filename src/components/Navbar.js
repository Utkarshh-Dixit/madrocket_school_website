import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className=" bg-blue-500 p-4 text-white">
    <div className="container mx-auto flex justify-between">
      <div className="font-bold">Springdale Public School</div>
      <div>
        <Link to="/" className="mr-4">
          Home
        </Link>
        <Link to="/about" className="mr-4">
          About Us
        </Link>
        <Link to="/academics" className="mr-4">
          Academics
        </Link>
        <Link to="/admissions" className="mr-4">
          Admissions
        </Link>
        <Link to="/faculty" className="mr-4">
          Faculty
        </Link>
        <Link to="/students" className="mr-4">
          Students
        </Link>
        <Link to="/gallery" className="mr-4">
          Gallery
        </Link>
        <Link to="/contact" className="mr-4">
          Contact Us
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
