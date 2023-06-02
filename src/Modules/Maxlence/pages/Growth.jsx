import { NavLink } from "react-router-dom";
import Seotoolwhamen from "../assests/seotoolwhamen.png";
import { FooterContact } from "../components/FooterContact";
//
import GoogleAdsIcon from "../../../img/GoogleAdsIcon.svg";
import EmailMarketingIcon from "../../../img/EmailMarketingIcon.svg";
import VideoMarketingIcon from "../../../img/VideoMarketingIcon.svg";
import GMBIcon from "../../../img/GMBIcon.svg";
import SEOIcon from "../../../img/SEOIcon.svg";
import SocialMediaIcon from "../../../img/SocialMediaIcon.svg";
import CROIcon from "../../../img/CROIcon.svg";

const TopLinkData = [
  {
    linkName: "Google Ads",
    linkIcon: GoogleAdsIcon,
    link: "/google_ads",
    activeNav: "none",
    linkNameColor: "",
  },
  {
    linkName: "CRO",
    linkIcon: CROIcon,
    link: "/cro",
    activeNav: "none",
    linkNameColor: "",
  },
  {
    linkName: "Social Media",
    linkIcon: SocialMediaIcon,
    link: "/social_media_marketing",
    activeNav: "none",
    linkNameColor: "",
  },
  {
    linkName: "SEO",
    linkIcon: SEOIcon,
    link: "/seo",
    activeNav: "none",
    linkNameColor: "",
  },
  {
    linkName: "GMB",
    linkIcon: GMBIcon,
    link: "/gmb",
    activeNav: "none",
    linkNameColor: "",
  },
  {
    linkName: "Video Marketing",
    linkIcon: VideoMarketingIcon,
    link: "/video_marketing",
    activeNav: "none",
    linkNameColor: "",
  },
  {
    linkName: "Email Marketing",
    linkIcon: EmailMarketingIcon,
    link: "/email_marketing",
    activeNav: "none",
    linkNameColor: "",
  },
];
export const Growth = () => {
  return (
    <>
      <div className=" creation_and_growth_top_div mb-2">
        <div className=" container">
          <div className="growth_top_div">
            {TopLinkData.map((val, i) => (
              <div key={i} className=" creation_and_growth_col_div">
                <NavLink to={val.link}>
                  <img src={val.linkIcon} alt="icon" />
                  <br />
                  <span style={{ color: val.linkNameColor }}>
                    {val.linkName}
                  </span>
                </NavLink>
                <div
                  style={{ display: val.activeNav }}
                  className="creation_and_growth_activ"
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container-fluid position-relative py-3 bgproperty growthhero">
        <div className="container py-0 my-0">
          <div className="row mt-n4 mb-4 justify-content-center align-items-center text-left">
            <div className="col-sm-6 col-12 my-5 ">
              <h1 className="font-weight-bold my-sm-4">
                Complete <span> SEO </span>Tools To Boost Your Ranking
              </h1>
              <p>
                A place to help a brand to grow up in <br />
                global environment
              </p>
              <NavLink to="/Questionare_Page" className="getstartbtn fontpop">
                Create Now
              </NavLink>
            </div>
            <div className="col-sm-6 wow animate__animated animate__fadeInUp">
              <img className="w-100" src={Seotoolwhamen} alt="img" />
            </div>
          </div>
        </div>
      </div>
      <FooterContact />
    </>
  );
};
