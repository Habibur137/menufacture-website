import Blogs from "../pages/Blogs";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import MyProtfolio from "../pages/MyProtfolio";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";

export const publicRoutes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/blogs", name: "Blogs", Component: Blogs },
  { path: "/myprotfolio", name: "MyProtfolio", Component: MyProtfolio },
  { path: "/login", name: "Login", Component: Login },
  { path: "/register", name: "Login", Component: Register },
  { path: "*", name: "NotFound", Component: NotFound },
];
