import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div class="drawer drawer-mobile">
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
        <ul class="menu p-4 overflow-y-auto w-52 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink to="/dashboard/profile">My Profile</NavLink>
          </li>
          {!admin && (
            <>
              <li>
                <NavLink to="/dashboard/orders">My Orders</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reviews">Add Reviews</NavLink>
              </li>
            </>
          )}
          {admin && (
            <>
              <li>
                <NavLink to="/dashboard/admin">Make Admin</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addproduct">Add Product</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageproduct">Manage Product</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageorder">Manage Order</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
