import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="w-full h-12 flex items-center gap-4 text-white" dir="rtl">
      <Link
        href="/"
        className={` text-xl px-10 h-10 flex justify-center items-center cursor-pointer active:text-gray-300 ${
          pathname === "/" ? "line-through decoration-2" : ""
        }`}
      >
        Home
      </Link>
      <p className=""> | </p>
      <Link
        href="store"
        className={` text-xl px-10 h-10 flex justify-center items-center cursor-pointer active:text-gray-300 ${
          pathname === "/store" ? "line-through decoration-2" : ""
        }`}
      >
        Store
      </Link>
      <p className=""> | </p>
      <Link
        href="admin"
        className={` text-xl px-10 h-10 flex justify-center items-center cursor-pointer active:text-gray-300 ${
          pathname === "/admin" ? "line-through decoration-2" : ""
        }`}
      >
        Admin Panel
      </Link>
    </div>
  );
};

export default Navbar;
