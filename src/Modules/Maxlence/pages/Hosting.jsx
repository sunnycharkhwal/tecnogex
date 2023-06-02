import { NavLink } from "react-router-dom";
//
import WebsiteDesignIcon from "../../../img/WebsiteDesignIcon.svg";
import WebsiteReDesignIcon from "../../../img/WebsiteReDesignIcon.svg";
import MaintenanceIcon from "../../../img/MaintenanceIcon.svg";
import Hosting from "../../../img/Hosting.svg";
const TopLinkData = [
  {
    linkName: "Website Design",
    linkIcon: WebsiteDesignIcon,
    link: "/website/6",
    activeNav: "none",
    linkNameColor: "",
  },
  {
    linkName: "Website Re-Design",
    linkIcon: WebsiteReDesignIcon,
    link: "/website_redesign",
    activeNav: "none",
    linkNameColor: "",
  },
  {
    linkName: "Maintenance",
    linkIcon: MaintenanceIcon,
    link: "/maintenance",
    activeNav: "none",
    linkNameColor: "",
  },
  {
    linkName: "Hosting",
    linkIcon: Hosting,
    link: "/hosting",
    activeNav: "block",
    linkNameColor: "black",
  },
];
export const HostingNew = () => {
  return (
    <>
      <div className="creation_and_growth_top_div">
        <div className=" container">
          <div className="row  g-3 justify-content-center">
            {TopLinkData.map((val, i) => (
              <div
                key={i}
                className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-4 col-4 creation_and_growth_col_div"
              >
                <NavLink to={val.link}>
                  <img src={val.linkIcon} alt="icon" />
                  <br />
                  <span style={{ color: val.linkNameColor }}>
                    {val.linkName}{" "}
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
      <h1>Hosting</h1>
    </>
  );
};
