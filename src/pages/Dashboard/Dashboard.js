import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import { AnimatePresence, motion } from "framer-motion";
import { CgProfile, CgProductHunt } from "react-icons/cg";
import { FaFirstOrderAlt, FaBars } from "react-icons/fa";
import { MdReviews, MdProductionQuantityLimits } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import { GoListOrdered } from "react-icons/go";
import { useState } from "react";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const showAnimation = {
    hidden: {
      with: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      with: "auto",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <div class="drawer drawer-mobile gr">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        {/* <!-- Page content here --> */}
        <h1 className="text-success text-center font-bold text-3xl">
          Wlcome To DashBoard
        </h1>
        <Outlet />
        <label
          for="my-drawer-2"
          class="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <motion.ul
          animate={{
            width: isOpen ? "200px" : "45px",
          }}
          class="menu overflow-y-auto w-52  text-base-content  gradient"
        >
          <div className="flex justify-between mb-5">
            {isOpen && (
              <motion.span
                variants={showAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="text-white text-xl"
              >
                Dashboard
              </motion.span>
            )}
            <span className={`${isOpen ? "" : "pl-4"} text-white mt-1 text-xl`}>
              <FaBars onClick={toggle} />
            </span>
          </div>
          {/* <!-- Sidebar content here --> */}
          <AnimatePresence>
            <li className=" ease-in-out">
              <NavLink to="/dashboard/profile">
                <span className="text-white">
                  <CgProfile />
                </span>
                {isOpen && (
                  <motion.span
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="text-white"
                  >
                    Profile
                  </motion.span>
                )}
              </NavLink>
            </li>
          </AnimatePresence>
          {!admin && (
            <>
              <AnimatePresence>
                <li className=" ease-in-out">
                  <NavLink to="/dashboard/orders">
                    <span className="text-white">
                      <FaFirstOrderAlt />
                    </span>
                    {isOpen && (
                      <motion.span
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="text-white"
                      >
                        Orders
                      </motion.span>
                    )}
                  </NavLink>
                </li>
              </AnimatePresence>
              <AnimatePresence>
                <li className=" ease-in-out">
                  <NavLink to="/dashboard/reviews">
                    <span className="text-white">
                      <MdReviews />
                    </span>
                    {isOpen && (
                      <motion.span
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="text-white whitespace-nowrap"
                      >
                        Add Reviews
                      </motion.span>
                    )}
                  </NavLink>
                </li>
              </AnimatePresence>
            </>
          )}
          {admin && (
            <>
              <li className="hover:border-r-4 ease-in-out">
                <NavLink to="/dashboard/admin">
                  <span className="text-white">
                    <RiAdminLine />
                  </span>
                  <span className="text-white">Make Admin</span>
                </NavLink>
              </li>
              <li className="hover:border-r-4 ease-in-out">
                <NavLink to="/dashboard/addproduct">
                  <span className="text-white">
                    <CgProductHunt />
                  </span>
                  <span className="text-white">Add Product</span>
                </NavLink>
              </li>
              <li className="hover:border-r-4 ease-in-out">
                <NavLink to="/dashboard/manageproduct">
                  <span className="text-white">
                    <MdProductionQuantityLimits />
                  </span>{" "}
                  <span className="text-white">Manage Product </span>
                </NavLink>
              </li>
              <li className="hover:border-r-4 ease-in-out">
                <NavLink to="/dashboard/manageorder">
                  <span className="text-white">
                    <GoListOrdered />
                  </span>
                  <span className="text-white">Manage Order</span>{" "}
                </NavLink>
              </li>
            </>
          )}
        </motion.ul>
      </div>
    </div>
  );
};

export default Dashboard;
