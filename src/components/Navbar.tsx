import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-12 flex items-center gap-4" dir="rtl">
      <Link
        href="/"
        className="text-white text-xl px-10 h-10 flex justify-center items-center cursor-pointer active:text-gray-300"
      >
        Home
      </Link>
      <p className="text-white"> | </p>
      <Link
        href="store"
        className="text-white text-xl px-10 h-10 flex justify-center items-center cursor-pointer active:text-gray-300"
      >
        Store
      </Link>
      <p className="text-white"> | </p>
      <Link
        href="admin"
        className="text-white text-xl px-10 h-10 flex justify-center items-center cursor-pointer active:text-gray-300"
      >
        Admin Panel
      </Link>
    </div>
  );
};

export default Navbar;
