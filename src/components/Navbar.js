import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../firebase.init";
import { motion } from "framer-motion";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const logOut = () => {
    localStorage.removeItem("accessToken");
    signOut(auth);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, type: "spring", stiffness: 150 }}
      className="navbar nav"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
            {user ? (
              <>
                <li className="px-4 py-1">
                  <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
                <button onClick={logOut}>Log Out</button>
              </>
            ) : (
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            )}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost text-primary normal-case text-4xl"
        >
          CARPENCO
        </Link>
      </div>
      <div className="navbar-end pr-8 hidden lg:flex">
        <ul className="menu gap-x-3 menu-horizontal p-0">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
          <li>
            <NavLink to="/myprotfolio">My Protfolio</NavLink>
          </li>
          {user ? (
            <>
              <li>
                <NavLink className="pad" to="/dashboard">
                  Dashboard
                </NavLink>
              </li>
              <button onClick={logOut}>Log Out</button>
            </>
          ) : (
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          )}
        </ul>
      </div>
    </motion.div>
  );
};

export default Navbar;
