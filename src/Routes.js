import React from "react";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/404" element={<Page404 />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
