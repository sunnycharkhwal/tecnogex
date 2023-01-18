import "../App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { MaxlenceRoutes } from "../modules/MaxMover/router/Index";
import Login from "../auth/Login";
function AllRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="max/*" element={<MaxlenceRoutes />} />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<main>NOT FOUND</main>} />
      </Routes>
    </Router>
  );
}

export default AllRoutes;
