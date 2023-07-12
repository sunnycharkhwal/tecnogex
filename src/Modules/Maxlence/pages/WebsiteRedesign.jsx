import * as React from "react";
import { NavLink } from "react-router-dom";
import { BiShareAlt } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
import { Faqs } from "../components/Faqs";
import { FooterContact } from "../components/FooterContact";
import Img1 from "../../../img/wr.svg";
import Img2 from "../../../img/wr2.png";
import Img3 from "../../../img/wr3.png";
import WrIcon from "../../../img/wrIcon.svg";
import WrIcon1 from "../../../img/wrIcon1.svg";
import WrIcon2 from "../../../img/wrIcon2.svg";
import WhatsappIcon from "../../../img/wh.svg";
import FaceboonIcon from "../../../img/fa.svg";
import TwitterIcon from "../../../img/tw.svg";
import GmailIcon from "../../../img/gm.svg";
import CopyIcon from "../../../img/copy.svg";
import WebPage from "../../../img/web.png";
import Websitetemp1 from "../assests/websitetemp1.jpg";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
//
import WebsiteDesignIcon from "../../../img/WebsiteDesignIcon.svg";
import WebsiteReDesignIcon from "../../../img/wra.svg";
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
    activeNav: "block",
    linkNameColor: "black",
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
    activeNav: "none",
    linkNameColor: "",
  },
];
export const WebsiteRedesign = () => {
  const YouSlowData = [
    {
      title: "Guaranteed Enhancement",
      icon: WrIcon,
      text: "Our team conducts thorough UI/UX audits to uncover weak points and create a custom plan to achieve your redesign goals, such as faster page load times to minimize bounce rates, and more ",
    },
    {
      title: "Smooth Content Migration",
      icon: WrIcon1,
      text: "We carefully plan and execute content migration, combining automated and manual approaches to ensure a safe and seamless transition of your valuable content. ",
    },
    {
      title: "Preserved SEO Equity",
      icon: WrIcon2,
      text: "Our team works closely with stakeholders to develop an SEO migration strategy and conduct comprehensive audits, fix issues hindering ranking growth, and more to enhance organic traffic.  ",
    },
  ];
  const OurApproachData = [
    {
      title: "Evaluation and Assessment",
      text: "Our expert team analyzes your current website, identify pain points, and evaluate design trends and competitors' approaches. ",
    },
    {
      title: "Strategy Development ",
      text: "After this, they brainstorm, create wireframes, and collaborate to develop a winning website redesign strategy. ",
    },
    {
      title: "Implementation and Launch ",
      text: "Trust our team to bring your vision to life, transforming wireframes into visually stunning designs, and launch the redesigned website. ",
    },
  ];
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
      <div className="website_redesign_text_topmain">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="website_redesign_text_div">
                <h3 className="title_all_new">
                  Revitalize your online presence with a website redesign that
                  <span> delivers proven results</span>
                </h3>

                <NavLink
                  to="/Questionare_Page"
                  className="getstartbtn fontrale my-5"
                >
                  Create Now
                </NavLink>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="website_redesign_text_img_div">
                <img src={Img1} alt="s" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5 homepartners">
        <div className="row text-center align-items-center ">
          <div className="col-sm-3 col-6 my-sm-3 wow animate__animated animate__fadeInUp">
            <img
              src="https://wewakedev.github.io/Maxlence-Official-Website/assests/partners/melblogo.png"
              alt="d"
            />
          </div>
          <div className="col-sm-3 col-6 my-sm-3 wow animate__animated animate__fadeInUp">
            <img
              src="https://wewakedev.github.io/Maxlence-Official-Website/assests/plumbing_gas.png"
              alt="d"
            />
          </div>
          <div className="col-sm-3 col-6 my-sm-3 wow animate__animated animate__fadeInUp ">
            <img
              src="https://wewakedev.github.io/Maxlence-Official-Website/assests/partners/tylerlogo.png"
              alt="d"
            />
          </div>
          <div className="col-sm-3 col-6 my-sm-3 wow animate__animated animate__fadeInUp ">
            <img
              src="https://wewakedev.github.io/Maxlence-Official-Website/assests/partners/velaqualogo.png"
              alt="d"
            />
          </div>
        </div>
      </div>
      <section className="why_you_need">
        <div className="container">
          <div className="why_you_need_top_text">
            <p>
              Experience a website makeover like never before with Tecnogex's
              top-notch redesign services. Our skilled team conducts meticulous
              UI and UX audits, ensures lightning-fast loading speed, and
              seamlessly migrates your content. Witness longer visitor sessions
              and a remarkable boost in conversion rates.
            </p>
          </div>
          <div className="why_you_need_number">
            <h3>Why You Need Website Redesign</h3>
            <div className="row g-md-0 g-4">
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                <h4>34%</h4>
                <p>
                  increase in conversion rates after a website redesign, leading
                  to a significant growth in online sales and revenue.
                </p>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                <h4>88%</h4>
                <p>
                  of online consumers are less likely to return to a website
                  after a poor user experience.
                </p>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                <h4>76%</h4>
                <p>
                  of consumers judge a company's credibility based on its
                  website design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" container my-5">
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <img
              className="shadow your_slow_loading_img"
              src={Img2}
              alt="img"
            />
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="your_slow_loading">
              <h3 className=" title_all_new">
                Is Your Website Design Dragging Your Business Down?
                <span>It's Time for a Change.</span>
              </h3>
              <p className="title_all_new_p">
                Transform your digital presence with a striking website redesign
                that amplifies brand impact brand and boosts bottom-line
                results.
              </p>
            </div>
            {YouSlowData.map((val, i) => (
              <ul className="your_slow_loading_ul" key={i}>
                <li className="first_li">
                  <img src={val.icon} alt="icon" />
                  <p>{val.title}</p>
                </li>
                <li className="two_li">
                  <p>{val.text}</p>
                </li>
              </ul>
            ))}
            <div className="your_slow_loading_btn">
              <NavLink
                to="/Questionare_Page"
                className="getstartbtn fontrale my-5"
              >
                Create Now
              </NavLink>
            </div>
          </div>
        </div>
      </section>
      <div className="website_redesign_text_topmain2">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="website_redesign_text_div p-0">
                <h3 className=" title_all_new">
                  Optimizing Visual Hierarchy for
                  <span> Enhanced Experiences</span>
                </h3>
                <p className="title_all_new_p">
                  Our team makes important information stand out with colors,
                  size, and typography. We at Tecnogex also create a pleasant
                  and interactive experience for users, ensuring their
                  satisfaction and enjoyment.
                </p>
                <div className="website_redesign_text_div_btn">
                  <NavLink
                    to="/case_study"
                    className="getstartbtn fontrale my-5"
                  >
                    View Case studies
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="website_redesign_text_img_div ">
                <img className=" shadow rounded-3 m-0" src={Img3} alt="s" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="container my-5">
        <div className="our_approach_title_div">
          <h3 className="title_all_new">
            Comprehensive Website Redesign <br />
            <span>Process</span>
          </h3>
        </div>
        <div className="row  g-3">
          {OurApproachData.map((val, i) => (
            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12"
              key={i}
            >
              <div className="our_approach_col_div">
                <h3>{val.title}</h3>
                <p>{val.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="container my-5">
        <div className="our_approach_title_div">
          <h3>A few of our website design examples</h3>
          <p>
            Here's a small selection of our most recent website redesigns. Want
            to see more?
          </p>
          <NavLink to="/design_inspiration">
            View All Website Design Case Studies
          </NavLink>
        </div>
        <div>
          <DesignInspiration />
        </div>
      </section>
      <Faqs catId={2} />
      <FooterContact title="We’d love to be your partner" />
    </>
  );
};
const DesignInspiration = () => {
  const CardData = [
    {
      imgLink: "https://lunoelectrical.com.au/",
      img: WebPage,
    },
    {
      imgLink: "https://lunoelectrical.com.au/",
      img: Websitetemp1,
    },
    {
      imgLink: "/",
      img: Websitetemp1,
    },
  ];
  const CardApp = (props) => {
    const [openShare, setOpenShare] = React.useState(false);
    const [openImgView, setOpenImgView] = React.useState(false);
    const handleOpenShare = () => setOpenShare(true);
    const handleCloseShare = () => setOpenShare(false);
    const handleOpenImgView = () => setOpenImgView(true);
    const handleCloseImgView = () => setOpenImgView(false);
    const ImgViewModal = () => {
      const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        // width: 400,
        bgcolor: "background.paper",
        border: "none",
        boxShadow: 24,
        p: 4,
      };
      return (
        <div>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openImgView}
            onClose={handleCloseImgView}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
          >
            <Fade in={openImgView}>
              <Box sx={style} className="img_view_modal_div">
                <div className="img_view_modal_inner_div">
                  <img src={props.img} alt="sd" />
                </div>
                <span
                  onClick={handleCloseImgView}
                  className="close_img_view_btn_div"
                >
                  <MdOutlineClose />
                </span>
                <div className="delete_modal_btn_div">
                  <ul>
                    <li className="btn_one">
                      <button
                        onClick={handleCloseImgView}
                        className="outline_btn btn"
                      >
                        Cancel
                      </button>
                    </li>
                    <li className="btn_two">
                      <a
                        href={props.imgLink}
                        className="btn full_btn ms-1"
                        target="_blank"
                      >
                        website link
                      </a>
                    </li>
                  </ul>
                </div>
              </Box>
            </Fade>
          </Modal>
        </div>
      );
    };
    const TransitionsModal = (props) => {
      const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "none",
        boxShadow: 24,
        p: 4,
      };
      const ShareData = [
        {
          link: "https://www.google.com/",
          icon: WhatsappIcon,
          title: "Whatsapp",
        },
        {
          link: "https://www.google.com/",
          icon: FaceboonIcon,
          title: "Faceboon",
        },
        {
          link: "https://www.google.com/",
          icon: TwitterIcon,
          title: "Twitter",
        },
        {
          link: "https://www.google.com/",
          icon: GmailIcon,
          title: "Gmail",
        },
      ];
      return (
        <div>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={props.openShare}
            onClose={props.handleCloseShare}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
          >
            <Fade in={props.openShare}>
              <Box sx={style} className="design_inspiration_modal_div">
                <div>
                  <h3>Share</h3>
                  <div className="row g-1">
                    {ShareData.map((val, i) => {
                      return (
                        <div
                          key={i}
                          className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6"
                        >
                          <div>
                            <a
                              href={val.link}
                              target="_blank"
                              className=" text-center"
                            >
                              <div className="design_inspiration_share_div_inner_top">
                                <div className="design_inspiration_share_div_inner">
                                  <img src={val.icon} alt="icon" />
                                </div>
                              </div>
                              <p className="design_inspiration_share_div_inner_title">
                                {val.title}
                              </p>
                            </a>
                          </div>
                        </div>
                      );
                    })}
                    <div className="col-12">
                      <div className="design_inspiration_modal_copy">
                        {props.imgLink}
                        <span
                          onClick={() =>
                            navigator.clipboard.writeText(props.imgLink)
                          }
                        >
                          <img src={CopyIcon} alt="icon" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Box>
            </Fade>
          </Modal>
        </div>
      );
    };
    return (
      <>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <TransitionsModal
            {...props}
            openShare={openShare}
            handleCloseShare={handleCloseShare}
          />
          <ImgViewModal {...props} />
          <div className="design_inspiration_div">
            <NavLink onClick={handleOpenImgView}>
              <div
                className="design_inspiration_img"
                style={{
                  backgroundImage: `url(${props.img})`,
                }}
              ></div>
            </NavLink>
            <BiShareAlt onClick={handleOpenShare} />
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="row g-4">
        {CardData.map((val, i) => {
          return <CardApp key={i} {...val} />;
        })}
      </div>
      ;
    </>
  );
};
