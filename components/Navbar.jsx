"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useSelector } from "react-redux";
const Navbar = () => {
  const authResp = useSelector((state) => state.auth.tokenResp);
  // console.log("Rendring");
  console.log(authResp);
  return (
    <div className="w-100 h-12 bg-gray-900 flex justify-between items-center px-4 sticky">
      <div className="logo text-lg font-bold uppercase text-gray-300">
        {" "}
        Logo
      </div>

      <div className="nav-items flex justify-between items-center  gap-8 text-lg font-bold cursor-pointer text-gray-300">
        {authResp?.baseResponse?.status !== 1 ? (
          <Link href="/login">
            <button className="bg-slate-200 text-black px-5 rounded-md">
              Login
            </button>
          </Link>
        ) : (
          <Link href="/">
            <button className="bg-slate-200 text-black px-5 rounded-md">
              Logout
            </button>
          </Link>
        )}
        <div className="">
          <FontAwesomeIcon
            icon={faCartShopping}
            style={{ fontSize: 22, color: "white", cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
