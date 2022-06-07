import AddReview from "../pages/Dashboard/AddReview";
import MyOrders from "../pages/Dashboard/MyOrders";
import MyProfile from "../pages/Dashboard/MyProfile";
import PayOrder from "../pages/Dashboard/PayOrder";
export const dashboardRoutes = [
  { path: "orders", name: "MyOrders", Component: MyOrders },
  { path: "reviews", name: "AddReview", Component: AddReview },
  { path: "profile", name: "MyProfile", Component: MyProfile },
  { path: "payment/:orderId", name: "PayOrder", Component: PayOrder },
];
