import DA1 from "../../../img/dA1.png";
import D2 from "../../../img/d2.svg";
import D3 from "../../../img/d3.svg";
import D4 from "../../../img/d4.svg";
import D5 from "../../../img/d5.svg";
import D6 from "../../../img/d6.svg";
import FilterIcon from "../../../img/filter.svg";
//
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Accordion from "react-bootstrap/Accordion";
import { IoCloseSharp } from "react-icons/io5";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { BiMinus, BiPlus } from "react-icons/bi";
//
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
    linkName: "Business Essentials",
    linkIcon: D2,
    link: "/",
    activeNav: "none",
    linkNameColor: "",
  },
  {
    linkName: "Marketing",
    linkIcon: D3,
    link: "/",
    activeNav: "none",
    linkNameColor: "",
  },
  {
    linkName: "Social Media",
    linkIcon: D4,
    link: "/",
    activeNav: "none",
    linkNameColor: "",
  },
  {
    linkName: "Landing Page",
    linkIcon: D5,
    link: "/",
    activeNav: "none",
    linkNameColor: "",
  },
  {
    linkName: "Website Templates",
    linkIcon: D6,
    link: "/",
    activeNav: "none",
    linkNameColor: "",
  },
];
export const Design = () => {
  return (
    <>
      <div className=" creation_and_growth_top_div mb-2 design_filter">
        <div className=" container">
          <div className="row g-3">
            <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12 order-lg-1 order-2  ">
              <div className="row  g-3 justify-content-center design_filter_inner">
                {TopLinkData.map((val, i) => (
                  <div
                    key={i}
                    className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-4 col-4 creation_and_growth_col_div design_filter_inner_itme"
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
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12  design_filter_btn_top_div  order-lg-2 order-1 ">
              <PageRightFilters />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const PageRightFilters = () => {
  const [showFilters, setShowFilters] = React.useState(false);
  const [showMore, setShowMore] = React.useState(false);
  const FiltersItemboxData = [
    {
      boxTitle: "Style",
      boxEventKey: "0",
      OptionListData: [
        {
          label: "Modern",
        },
        {
          label: "Minimalist",
        },
        {
          label: "Simple",
        },
        {
          label: "Elegant",
        },
        {
          label: "Creative",
        },
        {
          label: "Elegant",
        },
        {
          label: "Creative",
        },
      ],
    },
  ];
  return (
    <>
      <div className="design_filter_new_btn_div">
        <button
          className="design_filter_btn"
          onClick={() => setShowFilters(true)}
        >
          <img src={FilterIcon} alt="icon" /> Filters
        </button>
        <Drawer
          anchor="right"
          open={showFilters}
          onClose={() => setShowFilters(false)}
          className="filter_new_top_div_mobile"
        >
          <Box role="presentation" className="filter_new_top_div">
            <IoCloseSharp onClick={() => setShowFilters(false)} />
            <div className="row mt-3 mb-4">
              <div className="col-6">
                <p className="filter_title_1">All Filters</p>
              </div>
              <div className="col-6 text-end">
                <p className="filter_title_2">Clear All</p>
              </div>
            </div>
            <div className="filter_new_top_div_inner">
              <Accordion alwaysOpen>
                {FiltersItemboxData.map((val, i) => (
                  <Accordion.Item eventKey={val.boxEventKey} key={i}>
                    <Accordion.Header>{val.boxTitle}</Accordion.Header>
                    <Accordion.Body>
                      <div>
                        <FormGroup>
                          {val.OptionListData.slice(
                            0,
                            showMore ? undefined : 3
                          ).map((val, i) => (
                            <FormControlLabel
                              key={i}
                              control={<Checkbox />}
                              className="text-animation"
                              label={val.label}
                            />
                          ))}
                          <p
                            className="filter_aad_more_btn"
                            onClick={() => setShowMore(!showMore)}
                          >
                            <span>{showMore ? <BiMinus /> : <BiPlus />}</span>
                            View {showMore ? "Less" : "More"}
                          </p>
                        </FormGroup>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
            <div className=" mt-4 d-flex justify-content-center align-items-center">
              <div className=" me-3">
                <button className="filter_apply_btn">Apply</button>
              </div>
              <div className="add_project_modal_btn_one">
                <button
                  className="filter_close_btn"
                  onClick={() => setShowFilters(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </Box>
        </Drawer>
      </div>
    </>
  );
};
