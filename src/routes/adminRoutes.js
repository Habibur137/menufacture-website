import AddProduct from "../pages/Dashboard/AddProduct";
import MakeAdmin from "../pages/Dashboard/MakeAdmin";
import ManageOrders from "../pages/Dashboard/ManageOrders";
import ManageProducts from "../pages/Dashboard/ManageProducts";

export const adminRoutes = [
  { path: "admin", name: "MakeAdmin", Component: MakeAdmin },
  { path: "addproduct", name: "AddProduct", Component: AddProduct },
  { path: "manageproduct", name: "ManageProducts", Component: ManageProducts },
  { path: "manageorder", name: "ManageOrders", Component: ManageOrders },
];
