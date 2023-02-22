import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "../src/Modules/Maxlence/components/Navbar";
import { Footer } from "../src/Modules/Maxlence/components/Footer";
import { Creation } from "../src/Modules/Maxlence/pages/creation";
import { Growth } from "../src/Modules/Maxlence/pages/growth";
import { Home } from "../src/Modules/Maxlence/pages/home";
import { Design } from "../src/Modules/Maxlence/pages/design";
import { Shop } from "../src/Modules/Maxlence/pages/shop";
import { Getintouch } from "../src/Modules/Maxlence/pages/getintouch";
import { Careersjd } from "../src/Modules/Maxlence/pages/careersjd";
import { Jobform } from "../src/Modules/Maxlence/pages/jobform";
import { Businessone } from "./Modules/Maxlence/pages/business1";
import { Website } from "./Modules/Maxlence/pages/website";
import Quest from "./Modules/Maxlence/pages/quest";
import QuesPlan from "./Modules/Maxlence/pages/quesPlan";
import Package from "./Modules/Maxlence/pages/package";
import store from "./Modules/Maxlence/redux/store";
import { Provider } from "react-redux";
import { YourAccount } from "./Modules/Maxlence/pages/YourAccount";
import { YourServices } from "./Modules/Maxlence/pages/YourServices";
import { Payment } from "./Modules/Maxlence/pages/Payment";

export const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/creation" element={<Creation />} />
            <Route path="/:name/:id" element={<Website />} />
            <Route path="/quest/:id" element={<Quest />} />
            <Route path="/buyplans/:id" element={<QuesPlan />} />
            <Route path="/package/:id" element={<Package />} />
            <Route path="/growth" element={<Growth />} />
            <Route path="/design" element={<Design />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/getintouch" element={<Getintouch />} />
            <Route path="/careersjd" element={<Careersjd />} />
            <Route path="/jobform" element={<Jobform />} />
            <Route path="/business1" element={<Businessone />} />
            <Route path="/your_account" element={<YourAccount />} />
            <Route path="/your_services" element={<YourServices />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
          <Footer />
        </Router>
      </Provider>
    </React.StrictMode>
  );
};
