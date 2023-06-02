import { NavLink } from "react-router-dom";
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
    activeNav: "block",
    linkNameColor: "black",
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
export const Cro = () => {
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
      <h1>CRO</h1>
    </>
  );
};
