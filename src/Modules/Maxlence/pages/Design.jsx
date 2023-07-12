import DA1 from "../../../img/dA1.png";
import MaintenanceIcon from "../../../img/MaintenanceIcon.svg";
import Hosting from "../../../img/Hosting.svg";
import Wa from "../../../img/wa.svg";
import { NavLink } from "react-router-dom";
//
const TopLinkData = [
  {
    linkName: "Logo",
    linkIcon: DA1,
    link: "/design",
    activeNav: "block",
    linkNameColor: "black",
  },
  {
    linkName: "Website Re-Design",
    linkIcon: DA1,
    link: "/",
    activeNav: "none",
    linkNameColor: "",
  },
  {
    linkName: "Maintenance",
    linkIcon: DA1,
    link: "/",
    activeNav: "none",
    linkNameColor: "",
  },
  {
    linkName: "Hosting",
    linkIcon: DA1,
    link: "/",
    activeNav: "none",
    linkNameColor: "",
  },
];
export const Design = () => {
  return (
    <>
      <div className=" creation_and_growth_top_div mb-2">
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
    </>
  );
};
