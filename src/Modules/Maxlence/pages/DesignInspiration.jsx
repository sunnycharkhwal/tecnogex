import { NavLink } from "react-router-dom";
import Websitetemp1 from "../assests/websitetemp1.jpg";
import { BiShareAlt } from "react-icons/bi";
// mui
import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import WhatsappIcon from "../../../img/wh.svg";
import FaceboonIcon from "../../../img/fa.svg";
import TwitterIcon from "../../../img/tw.svg";
import GmailIcon from "../../../img/gm.svg";

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
export const DesignInspiration = () => {
  const CardData = [
    {
      MoreLinkPage: "/design_inspiration_detail",
      title: "Website",
      ImgList: [
        {
          imgLink: "/",
          img: Websitetemp1,
        },
      ],
    },
    {
      MoreLinkPage: "/design_inspiration_detail",
      title: "Logos",
      ImgList: [
        {
          imgLink: "/",
          img: "https://wewakedev.github.io/Maxlence-Official-Website/assests/logotemp1.jpg",
        },
        {
          imgLink: "/",
          img: "https://wewakedev.github.io/Maxlence-Official-Website/assests/logotemp2.jpg",
        },
        {
          imgLink: "/",
          img: "https://wewakedev.github.io/Maxlence-Official-Website/assests/logotemp3.jpg",
        },
      ],
    },
    {
      MoreLinkPage: "/design_inspiration_detail",
      title: "Social Media Creatives",
      ImgList: [
        {
          imgLink: "/",
          img: "https://wewakedev.github.io/Maxlence-Official-Website/assests/socialtemp1.jpg",
        },
        {
          imgLink: "/",
          img: "https://wewakedev.github.io/Maxlence-Official-Website/assests/socialtemp2.jpg",
        },
        {
          imgLink: "/",
          img: "https://wewakedev.github.io/Maxlence-Official-Website/assests/socialtemp3.jpg",
        },
      ],
    },
    {
      MoreLinkPage: "/design_inspiration_detail",
      title: "Landing Pages",
      ImgList: [
        {
          imgLink: "/",
          img: "https://wewakedev.github.io/Maxlence-Official-Website/assests/landingtemp1.jpg",
        },
        {
          imgLink: "/",
          img: "https://wewakedev.github.io/Maxlence-Official-Website/assests/landingtemp2.jpg",
        },
        {
          imgLink: "/",
          img: "https://wewakedev.github.io/Maxlence-Official-Website/assests/landingtemp3.jpg",
        },
      ],
    },
  ];
  const CardApp = (props) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const TransitionsModal = (props) => {
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
      const ShareApp = (props) => {
        return (
          <>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
              <div>
                <a href={props.link} target="_blank" className=" text-center">
                  <div className="design_inspiration_share_div_inner_top">
                    <div className="design_inspiration_share_div_inner">
                      <img src={props.icon} alt="icon" />
                    </div>
                  </div>
                  <p className="design_inspiration_share_div_inner_title">
                    {props.title}
                  </p>
                </a>
              </div>
            </div>
          </>
        );
      };
      return (
        <div>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
          >
            <Fade in={open}>
              <Box sx={style} className="design_inspiration_modal_div">
                <div>
                  <h3>Share</h3>
                  <div className="row g-1">
                    {ShareData.map((val, i) => {
                      return <ShareApp key={i} {...val} />;
                    })}
                    <div className="col-12">
                      <div>
                        <button
                          onClick={() =>
                            navigator.clipboard.writeText(
                              "Copy this text to clipboard"
                            )
                          }
                        >
                          Copy
                        </button>
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
        <div className="container websitetemp my-5">
          <TransitionsModal />
          <div className="row justify-content-between mb-3">
            <div className="col-4">
              <h5>
                <b>{props.title}</b>
              </h5>
            </div>
            <div className="col-2 text-end">
              <p className=" me-4">
                <b>
                  <NavLink to={props.MoreLinkPage}>More</NavLink>
                </b>
              </p>
            </div>
          </div>
          <div className="row g-4">
            {props.ImgList.map((val, i) => {
              return (
                <div
                  key={i}
                  className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12"
                >
                  <div className="design_inspiration_div">
                    <NavLink to={val.imgLink}>
                      <img
                        className="design_inspiration_img"
                        src={val.img}
                        alt="sd"
                      />
                    </NavLink>
                    <BiShareAlt onClick={handleOpen} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="container designinsp_title text-center border-bottom py-3 my-3">
        <h1>
          Lorem ipsum
          <span> dolor </span>
          sit amet consectetur
          <span> adipisicing </span> elit. Possimus.
        </h1>
      </div>

      {CardData.map((val, i) => {
        return <CardApp key={i} {...val} />;
      })}
    </>
  );
};
