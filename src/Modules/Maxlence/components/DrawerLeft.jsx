import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";
export const DrawerLeft = () => {
  const [state, setState] = React.useState(false);
  const LinkData = [
    {
      title: "google Ads",
      link: "/google_ads",
    },
    {
      title: "Social Media Marketing",
      link: "/",
    },
    {
      title: "SEO",
      link: "/",
    },
    {
      title: "Email Marketing",
      link: "/",
    },
  ];
  const LinkApp = (props) => {
    return (
      <>
        <div className="col-12">
          <NavLink to={props.link} className="creationsublink">
            {props.title}
          </NavLink>
        </div>
      </>
    );
  };
  return (
    <>
      <div onClick={() => setState(true)} className="rightmenuarrow ">
        <svg
          className="arrowanimate fontrale ml-n3"
          style={{ width: "5rem" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="m18.707 12.707-3 3a1 1 0 0 1-1.414-1.414L15.586 13H6a1 1 0 0 1 0-2h9.586l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414z"
            style={{ fill: "#000" }}
            data-name="Right"
          />
        </svg>
        &nbsp;
        <span
          style={{
            fontWeight: "600",
            fontSize: "18px",
            lineHeight: "21px",
            color: "#0a76e5",
          }}
        >
          Services
        </span>
      </div>
      <div className="Drawer_full_div">
        <Drawer anchor="left" open={state}>
          <Box className=" text-white" role="presentation">
            <div>
              <AiOutlineCloseCircle
                className="Drawer_full_div_close"
                onClick={() => setState(false)}
              />
            </div>
            <div className="row g-3 flex-column creationsublinks">
              {LinkData.map((val, i) => {
                return <LinkApp key={i} {...val} />;
              })}
            </div>
          </Box>
        </Drawer>
      </div>
    </>
  );
};
