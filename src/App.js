import { Route, Routes } from "react-router-dom";
import PrivateAuth from "./authentication/PrivateAuth";
import AdminAuth from "./authentication/AdminAuth";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import { privateRoutes } from "./routes/privateRoutes";
import { publicRoutes } from "./routes/publicRoutes";
import { dashboardRoutes } from "./routes/dashboardRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { adminRoutes } from "./routes/adminRoutes";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {publicRoutes.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
        <Route element={<PrivateAuth />}>
          {privateRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
          {/* dashboard route =============================================================== */}
          <Route path="/dashboard" element={<Dashboard />}>
            {dashboardRoutes.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
            {/* dashboard and admin route ======================================================= */}
            <Route element={<AdminAuth />}>
              {adminRoutes.map(({ path, Component }, index) => (
                <Route key={index} path={path} element={<Component />} />
              ))}
            </Route>
          </Route>
        </Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
