import { HashRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRoutes from "./routes/AppRoutes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <AppRoutes />
  </HashRouter>
);
