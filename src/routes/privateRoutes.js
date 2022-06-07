// import Dashboard from "../pages/Dashboard/Dashboard";
// import PayOrder from "../pages/Dashboard/PayOrder";
import ProductDetail from "../pages/Home/ProductDetail";

export const privateRoutes = [
  { path: "/detail/:productId", name: "Blogs", Component: ProductDetail },
  // { path: "/order/:orderId", name: "PayOrder", Component: PayOrder },
];
