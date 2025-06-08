import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Educational from "../pages/Educational";
import Report from "../pages/Report";
import MainLayout from "../layouts/MainLayout";
import Newsroom from "../pages/Newsroom";
const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/educational"
          element={<Educational />}
        />
        <Route
          path="/report"
          element={<Report />}
        />
        <Route
          path="/newsroom"
          element={<Newsroom />}
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
