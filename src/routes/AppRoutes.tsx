import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Educational from "../pages/Educational";
import Report from "../pages/Report";
import MainLayout from "../layouts/MainLayout";
import Newsroom from "../pages/Newsroom";
import TopicDetail from "../components/EducationPage/TopicDetail";
import ArticleDetail from "../components/Newsroompage/ArticleDetail";
import Watchtower from "../pages/Watchtower";
import Contact from "../pages/Contact";
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
        <Route
          path="/watchtower"
          element={<Watchtower />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
      </Route>
      <Route
        path="/education/:topicSlug"
        element={<TopicDetail />}
      />
      <Route
        path="/newsroom/:articleSlug"
        element={<ArticleDetail />}
      />
    </Routes>
  );
};

export default AppRoutes;
