import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "../src/Modules/Maxlence/components/Navbar";
import { Footer } from "../src/Modules/Maxlence/components/Footer";
import { Creation } from "./Modules/Maxlence/pages/Creation";
import { Growth } from "../src/Modules/Maxlence/pages/Growth";
import { Home } from "../src/Modules/Maxlence/pages/home";
import { Design } from "../src/Modules/Maxlence/pages/design";
import { Shop } from "../src/Modules/Maxlence/pages/shop";
import { Getintouch } from "../src/Modules/Maxlence/pages/getintouch";
import { Careersjd } from "../src/Modules/Maxlence/pages/careersjd";
import { Jobform } from "../src/Modules/Maxlence/pages/jobform";
import { Businessone } from "./Modules/Maxlence/pages/Business1";

import { Website } from "./Modules/Maxlence/pages/Website";
import Quest from "./Modules/Maxlence/pages/quest";
import QuesPlan from "./Modules/Maxlence/pages/quesPlan";
import store from "./Modules/Maxlence/redux/store";
import { Provider } from "react-redux";
import { YourAccount } from "./Modules/Maxlence/pages/YourAccount";
import { YourServices } from "./Modules/Maxlence/pages/YourServices";
import { Payment } from "./Modules/Maxlence/pages/Payment";
import { Cart } from "./Modules/Maxlence/pages/cart";
import { ActiveNav } from "./Modules/Maxlence/components/ActiveNav";
import { Checkout } from "./Modules/Maxlence/pages/Checkout";
import { VideoMarketing } from "./Modules/Maxlence/pages/VideoMarketing";
import { ProductDetails } from "./Modules/Maxlence/pages/ProductDetails";
import { QuestionarePage } from "./Modules/Maxlence/pages/QuestionarePage";
import { BuyPlans } from "./Modules/Maxlence/pages/BuyPlans";
import { GoogleAds } from "./Modules/Maxlence/pages/GoogleAds";
import { SocialMediaMarketing } from "./Modules/Maxlence/pages/SocialMediaMarketing";
import { Seo } from "./Modules/Maxlence/components/Seo";
import { EmailMarketing } from "./Modules/Maxlence/pages/EmailMarketing";
import { MobileApp } from "./Modules/Maxlence/pages/MobileApp";
import { Saas } from "./Modules/Maxlence/pages/Saas";
import { CreationWebhost } from "./Modules/Maxlence/pages/CreationWebhost";
import { Careers } from "./Modules/Maxlence/pages/Careers";
import { Business2 } from "./Modules/Maxlence/pages/Business2";
import { DesignInspiration } from "./Modules/Maxlence/pages/DesignInspiration";
import { Brochure } from "./Modules/Maxlence/pages/Brochure";
import { Blogs } from "./Modules/Maxlence/pages/Blogs";
import { CaseStudy } from "./Modules/Maxlence/pages/CaseStudy";
import { Bepeseo } from "./Modules/Maxlence/pages/Bepeseo";
import { Tpruiux } from "./Modules/Maxlence/pages/Tpruiux";
import { SeoService } from "./Modules/Maxlence/pages/SeoService";
import { GoogleAdsService } from "./Modules/Maxlence/pages/GoogleAdsService";
import { SocialMediaService } from "./Modules/Maxlence/pages/SocialMediaService";
import { APIIntegration } from "./Modules/Maxlence/pages/APIIntegration";
import { FormTracker } from "./Modules/Maxlence/pages/FormTracker";
import { ReviewTracker } from "./Modules/Maxlence/pages/ReviewTracker";
import { Agencies } from "./Modules/Maxlence/pages/Agencies";
import { Support } from "./Modules/Maxlence/pages/Support";
import { AboutUs } from "./Modules/Maxlence/pages/AboutUs";
import { YourServicesDetails } from "./Modules/Maxlence/pages/YourServicesDetails";
export const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <Header />
          <ActiveNav />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/creation" element={<Creation />} />
            <Route path="/:name/:id" element={<Website />} />
            <Route path="/quest/:id" element={<Quest />} />
            <Route path="/buyplans/:id" element={<QuesPlan />} />
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
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/video_marketing" element={<VideoMarketing />} />
            <Route path="/product_details" element={<ProductDetails />} />
            <Route path="/Questionare_Page" element={<QuestionarePage />} />
            <Route path="/buy_plans" element={<BuyPlans />} />
            <Route path="/google_ads" element={<GoogleAds />} />
            <Route
              path="/social_media_marketing"
              element={<SocialMediaMarketing />}
            />
            <Route path="/seo" element={<Seo />} />
            <Route path="/email_marketing" element={<EmailMarketing />} />
            <Route path="/mobile_app" element={<MobileApp />} />
            <Route path="/saas" element={<Saas />} />
            <Route path="/creation_webhost" element={<CreationWebhost />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/business2" element={<Business2 />} />
            <Route path="/design_inspiration" element={<DesignInspiration />} />
            <Route path="/brochure" element={<Brochure />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/case_study" element={<CaseStudy />} />
            <Route path="/bepeseo" element={<Bepeseo />} />
            <Route path="/tpruiux" element={<Tpruiux />} />
            <Route path="/Seo_service" element={<SeoService />} />
            <Route path="/google_ads_service" element={<GoogleAdsService />} />
            <Route
              path="/social_media_service"
              element={<SocialMediaService />}
            />
            <Route path="/api_integration" element={<APIIntegration />} />
            <Route path="/form_tracker" element={<FormTracker />} />
            <Route path="/review_tracker" element={<ReviewTracker />} />
            <Route path="/agencies" element={<Agencies />} />
            <Route path="/support" element={<Support />} />
            <Route path="/about_us" element={<AboutUs />} />
            <Route
              path="/your_services_details"
              element={<YourServicesDetails />}
            />
          </Routes>
          <Footer />
        </Router>
      </Provider>
    </React.StrictMode>
  );
};
