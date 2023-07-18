import { PageRightFilters } from "../components/Design/PageRightFilters";
import { SearchBar } from "../components/Design/SearchBar";
import { NavLink } from "react-router-dom";
import DA1 from "../../../img/dA1.png";
import D2 from "../../../img/d2.svg";
import D3 from "../../../img/d3.svg";
import D4 from "../../../img/d4.svg";
import D5 from "../../../img/d5.svg";
import D6 from "../../../img/d6.svg";
//
import LogoTemplateImg from "../../../img/dt1.svg";
import LogoTemplateImg2 from "../../../img/dt2.svg";
import LogoTemplateImg3 from "../../../img/dt3.svg";
import LogoTemplateImg4 from "../../../img/dt4.svg";
import B1 from "../../../img/dd1.png";
import B2 from "../../../img/dd2.png";
import B3 from "../../../img/dd3.png";
import { LogoTemplateApp } from "../components/Design/LogoTemplateApp";
import { DesignPackage } from "../components/Design/DesignPackage";
import { LogoBrand } from "../components/Design/LogoBrand";
import { DesignBlogsList } from "../components/Design/DesignBlogsList";
import { Faqs } from "../components/Faqs";
import { FooterContact } from "../components/FooterContact";
//

const BlogCardData = [
  {
    img: B1,
    title: "Lorem ipsum dolor sit amet.",
    category: "Maxlence",
    date: "Oct 19, 2021",
    time: "5 min",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate modi consequuntur porro deleniti. Commodi aut animi in doloribus vel sapiente ipsa, ipsam saepe? Ut, esse provident adipisci iure illo enim!",
    link: "/",
  },
  {
    img: B2,
    title: "Lorem ipsum dolor sit amet.",
    category: "Maxlence",
    date: "Oct 19, 2021",
    time: "5 min",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate modi consequuntur porro deleniti. Commodi aut animi in doloribus vel sapiente ipsa, ipsam saepe? Ut, esse provident adipisci iure illo enim!",
    link: "/",
  },
  {
    img: B3,
    title: "Lorem ipsum dolor sit amet.",
    category: "Maxlence",
    date: "Oct 19, 2021",
    time: "5 min",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate modi consequuntur porro deleniti. Commodi aut animi in doloribus vel sapiente ipsa, ipsam saepe? Ut, esse provident adipisci iure illo enim!",
    link: "/",
  },
];
const LogoBrandData = [
  {
    number: "1",
    title: "Discovery and Research",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo lacus ornare in habitant dui augue in lectus. Non ultricies diam egestas suspendisse viverra commodo ut feugiat. Maecenas cursus dictum diam sapien nunc. In.",
  },
  {
    number: "2",
    title: "Concept Development",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo lacus ornare in habitant dui augue in lectus. Non ultricies diam egestas suspendisse viverra commodo ut feugiat. Maecenas cursus dictum diam sapien nunc. In.",
  },
  {
    number: "3",
    title: "Design Refinement and Revisions",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo lacus ornare in habitant dui augue in lectus. Non ultricies diam egestas suspendisse viverra commodo ut feugiat. Maecenas cursus dictum diam sapien nunc. In.",
  },
  {
    number: "4",
    title: "Finalization and Delivery",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo lacus ornare in habitant dui augue in lectus. Non ultricies diam egestas suspendisse viverra commodo ut feugiat. Maecenas cursus dictum diam sapien nunc. In.",
  },
];
const DesignPackageData = [
  {
    packageName: "Basic Package",
    packageNameColor: "#DA9E2E",
    recommended: "none",
    recommendedText: "Recommended For You",
    price: "₹2000",
    overviewtext:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ut dapibus pulvinar lacus amet",
    link: "/",
    boxData: [
      {
        boxHeight: "18",
        boxPointData: [
          {
            points: "1 initial logo concept",
            boxPointTooltipText: "new",
            TooltipShow: "block",
          },
          {
            points: "2 rounds of revisions",
            boxPointTooltipText: "new",
            TooltipShow: "none",
          },
          {
            points: "High-resolution PNG and JPEG files",
            boxPointTooltipText: "new",
            TooltipShow: "none",
          },
          {
            points: "Delivery time: 3-5 business days",
            boxPointTooltipText: "new",
            TooltipShow: "none",
          },
        ],
      },
    ],
  },
  {
    packageName: "Standard Package",
    packageNameColor: "#439DD3",
    recommended: "block",
    recommendedText: "Recommended For You",
    price: "₹2000",
    overviewtext:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ut dapibus pulvinar lacus amet",
    link: "/",
    boxData: [
      {
        boxHeight: "18",
        boxPointData: [
          {
            points: "1 initial logo concept",
            boxPointTooltipText: "new",
            TooltipShow: "block",
          },
          {
            points: "2 rounds of revisions",
            boxPointTooltipText: "new",
            TooltipShow: "none",
          },
          {
            points:
              "High-resolution PNG, JPEG, and vector files (AI, EPS, PDF)",
            boxPointTooltipText: "new",
            TooltipShow: "none",
          },
          {
            points: "Brand style guide with color palette and font selection",
            boxPointTooltipText: "new",
            TooltipShow: "none",
          },
          {
            points: "Delivery time: 5-7 business days",
            boxPointTooltipText: "new",
            TooltipShow: "none",
          },
        ],
      },
    ],
  },
  {
    packageName: "Premium Package",
    packageNameColor: "#D86161",
    recommended: "none",
    recommendedText: "Recommended For You",
    price: "₹2000",
    overviewtext:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ut dapibus pulvinar lacus amet",
    link: "/",
    boxData: [
      {
        boxHeight: "18",
        boxPointData: [
          {
            points: "5 initial logo concepts",
            boxPointTooltipText: "new",
            TooltipShow: "block",
          },
          {
            points: "Unlimited revisions",
            boxPointTooltipText: "new",
            TooltipShow: "none",
          },
          {
            points:
              "High-resolution PNG, JPEG, and vector files (AI, EPS, PDF)",
            boxPointTooltipText: "new",
            TooltipShow: "none",
          },
          {
            points: "Brand style guide with color palette, font selection",
            boxPointTooltipText: "new",
            TooltipShow: "none",
          },
          {
            points: "Stationery design (business card, letterhead, envelope)",
            boxPointTooltipText: "new",
            TooltipShow: "none",
          },
          {
            points: "Delivery time: 7-10 business days",
            boxPointTooltipText: "new",
            TooltipShow: "none",
          },
        ],
      },
    ],
  },
];
const LogoTemplateData = [
  {
    title: "Select Logo Template",
    LogoData: [
      {
        logoImg: LogoTemplateImg,
        logoTitle: "Food Logo",
        link: "/logo_inner_page",
      },
      {
        logoImg: LogoTemplateImg2,
        logoTitle: "Fitness Logo",
        link: "/logo_inner_page",
      },
      {
        logoImg: LogoTemplateImg3,
        logoTitle: "Construction Logo",
        link: "/logo_inner_page",
      },
      {
        logoImg: LogoTemplateImg4,
        logoTitle: "Fashion Logo",
        link: "/logo_inner_page",
      },
    ],
  },
];
//
const PageRightFiltersData = [
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
const SearchResultiIemsData = [
  {
    title: "Fitness Logo",
  },
  {
    title: "Fitness Logo",
  },
  {
    title: "Fitness Logo",
  },
  {
    title: "Fitness Logo",
  },
  {
    title: "Fitness Logo",
  },
  {
    title: "Fitness Logo",
  },
  {
    title: "Fitness Logo",
  },
  {
    title: "Fitness Logo",
  },
  {
    title: "Fitness Logo",
  },
  {
    title: "Fitness Logo",
  },
  {
    title: "Fitness Logo",
  },
];
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
    link: "/business-essentials",
    activeNav: "none",
    linkNameColor: "",
  },
  {
    linkName: "Marketing",
    linkIcon: D3,
    link: "/marketing",
    activeNav: "none",
    linkNameColor: "",
  },
  {
    linkName: "Social Media",
    linkIcon: D4,
    link: "/Social_Media_Design",
    activeNav: "none",
    linkNameColor: "",
  },
  {
    linkName: "Landing Page",
    linkIcon: D5,
    link: "/landing_page",
    activeNav: "none",
    linkNameColor: "",
  },
  {
    linkName: "Website Templates",
    linkIcon: D6,
    link: "/website_templates",
    activeNav: "none",
    linkNameColor: "",
  },
];
export const Design = () => {
  return (
    <>
      <div className="creation_and_growth_top_div mb-2 design_filter">
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
              <PageRightFilters Data={PageRightFiltersData} />
            </div>
          </div>
        </div>
      </div>
      <SearchBar Data={SearchResultiIemsData} />
      <LogoTemplateApp Data={LogoTemplateData} />
      <DesignPackage
        Data={DesignPackageData}
        PackageTitle="Flexi Plans For Your Custom Logo"
      />
      <LogoBrand
        Data={LogoBrandData}
        LogoBrandTitle="How We Create a Logo for Your Brand"
        LogoBrandTitle2="To make your customized logo, we follow these 4 simple steps"
      />
      <DesignBlogsList
        Data={BlogCardData}
        blogTitle="Design the best logo for your brand"
      />
      <Faqs catId={2} />
      <FooterContact
        title="Not finding what you are looking for?"
        title2="Let Us Find It For You"
      />
    </>
  );
};
