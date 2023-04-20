import { NavLink } from "react-router-dom";
import { Tab, Nav } from "react-bootstrap";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import * as React from "react";
export const PackageCard = (props) => {
  const CardApp = (props) => {
    const BootstrapTooltip = styled(({ className, ...props }) => (
      <Tooltip {...props} arrow classes={{ popper: className }} />
    ))(({ theme }) => ({
      [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.black,
      },
      [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.black,
      },
    }));
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
            {/* <del>
              {props.PriceType}
              <label className="ms-1">{props.delPrice}</label>
            </del> */}
            <div>
              From
              <span style={{ color: props.cardColor }}>
                {props.PriceType}
                <label className="ms-1">{props.Price}</label>
              </span>
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
                  <BootstrapTooltip title={val.TooltipTitle} placement="right">
                    <p style={{ color: val.textColor || props.cardColor }}>
                      {val.text}
                    </p>
                  </BootstrapTooltip>
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
      </div>
      <div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <div className="package_card_tab_div">
            <Nav variant="pills" className="d-flex">
              <Nav.Item className="package_card_tab_one_div">
                <Nav.Link eventKey="first">Monthly</Nav.Link>
              </Nav.Item>
              <Nav.Item className="package_card_tab_second_div">
                <Nav.Link eventKey="second">Quarterly</Nav.Link>
              </Nav.Item>
              <Nav.Item className="package_card_tab_last_div">
                <Nav.Link eventKey="Yearly">Yearly</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <Tab.Content className="mt-5">
            <Tab.Pane eventKey="first">
              <div className="row package_card_row">
                {props.data.map((val, i) => {
                  return <CardApp key={i} {...val} />;
                })}
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <div className="row package_card_row">
                {props.data.map((val, i) => {
                  return <CardApp key={i} {...val} />;
                })}
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="Yearly">
              <div className="row package_card_row">
                {props.data.map((val, i) => {
                  return <CardApp key={i} {...val} />;
                })}
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </>
  );
};
