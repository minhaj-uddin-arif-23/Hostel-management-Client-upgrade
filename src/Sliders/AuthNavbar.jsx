import React from "react";
import { HiBadgeCheck } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function AuthNavbar() {
  return (
    <div>
      <div className="navbar  fixed z-50 top-0 px-12 py-2">
        <Link
          to="/"
          className="text-2xl font-semibold flex items-center gap-3 lg:ml-2 md:mr-5"
        >
          <HiBadgeCheck />{" "}
          <span className="text-green-700 font-semibold">HOSTEL</span>{" "}
          <span className="text-amber-500 font-semibold">GRUB</span>
        </Link>
      </div>
    </div>
  );
}
