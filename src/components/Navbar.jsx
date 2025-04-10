import React from "react";
import { Link } from "react-router";

export const Navbar = () => {
  return (
    <nav className="bg-black text-white fixed top-0 left-0 right-0 border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between h-16">
          {/* logo  */}
          <div className="">
            <Link to="/" className="text-xl font-bold">
              <span className="text-blue-500">CodeTutor</span> UI
            </Link>
          </div>

          {/* desktop menu  */}
          <div className="">desktop menu</div>

          {/* auto button  */}
          <div className="">button </div>

          {/* mobile menu  */}
          <div className="md:hidden">mobile menu</div>
        </div>
      </div>
    </nav>
  );
};
