import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "../src/Modules/Maxlence/components/Navbar";
import { Footer } from "../src/Modules/Maxlence/components/Footer";

import store from "./Modules/Maxlence/redux/store";
import { Provider } from "react-redux";

import { ActiveNav } from "./Modules/Maxlence/components/ActiveNav";

import ScrollToTop from "react-scroll-to-top";
import { FaChevronUp } from "react-icons/fa";
import RoutesList from "./routes";
export const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <Header />
          <ActiveNav />
          <div className="scroll_to_top">
            <ScrollToTop component={<FaChevronUp />} smooth />
          </div>
          <Routes>
            {RoutesList.map((route) => (
              <Route {...route} />
            ))}
          </Routes>
          <Footer />
        </Router>
      </Provider>
    </React.StrictMode>
  );
};
