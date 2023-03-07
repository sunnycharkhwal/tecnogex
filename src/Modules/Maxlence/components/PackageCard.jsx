import { NavLink } from "react-router-dom";
import * as React from "react";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#50BFE6",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#DCECFF" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));
export const PackageCard = (props) => {
  const CardApp = (props) => {
    return (
      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 package_card_box_col">
        <div
          className="package_card_box"
          style={{ borderColor: props.cardColor }}
        >
          <div
            className="package_card_box_bage"
            style={{
              display: props.MostPopularDisplay,
              backgroundColor: props.cardColor,
            }}
          ></div>
          <div
            className="package_card_box_bage_text"
            style={{ display: props.MostPopularDisplay }}
          >
            Most <br /> Popular
          </div>
          <div className="package_card_box_header">
            <h3 style={{ color: props.cardColor }}>{props.packageName}</h3>
            <p>{props.packageBrif}</p>
          </div>
          <div className="package_card_box_price">
            <del>${props.delPrice}</del>
            <div>
              From<span style={{ color: props.cardColor }}>${props.Price}</span>
              / mo
            </div>
          </div>
          <div className="package_card_box_overview">
            <h3>Overview</h3>
            <p>{props.OverviewText}</p>
          </div>
          <div className="package_card_box_list_div">
            {props.PackagePointList.map((val, i) => {
              return (
                <div key={i} className="package_card_box_list">
                  <img
                    src={val.img || props.defaultPackagePointListIcon}
                    alt="list icon"
                  />
                  <p style={{ color: val.textColor || props.cardColor }}>
                    {val.text}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="package_card_box_btn_div">
            <div>
              <NavLink
                to={props.BtnBuyLink}
                className="full_btn2"
                style={{ backgroundColor: props.cardColor }}
              >
                BUY nOW
              </NavLink>
            </div>
            <div className="mt-2">
              <NavLink
                to={props.CustomeQuote}
                className="package_card_box_btn_bottom"
              >
                GET A cUSTOME QUOTE
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="package_card">
        <h3>
          Pick the perfect <span>pricing plan</span>
        </h3>
        <p>We have the right plans for you</p>
        <div class="IOSSwitch_top_div">
          <span class="text-secondary mx-2">
            <b>Monthly</b>
          </span>
          <div className="IOSSwitch_div">
            <FormGroup>
              <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
              />
            </FormGroup>
          </div>
          <span class="text-secondary mx-2">
            <b>Yearly</b>
          </span>
        </div>
      </div>

      <div className="row package_card_row">
        {props.data.map((val, i) => {
          return <CardApp key={i} {...val} />;
        })}
      </div>
    </>
  );
};
