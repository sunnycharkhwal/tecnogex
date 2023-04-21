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
import CopyIcon from "../../../img/copy.svg";
export const DesignInspirationDetail = () => {
  const CardData = [
    {
      imgLink: "/",
      img: Websitetemp1,
    },
    {
      imgLink: "/",
      img: "https://wewakedev.github.io/Maxlence-Official-Website/assests/websitetemp2.jpg",
    },
    {
      imgLink: "/",
      img: "https://wewakedev.github.io/Maxlence-Official-Website/assests/websitetemp3.jpg",
    },
  ];
  const CardApp = (props) => {
    const [openShare, setOpenShare] = React.useState(false);
    const handleOpenShare = () => setOpenShare(true);
    const handleCloseShare = () => setOpenShare(false);
    const TransitionsModal = () => {
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
            open={openShare}
            onClose={handleCloseShare}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
          >
            <Fade in={openShare}>
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
          <TransitionsModal />
          <div className="design_inspiration_div">
            <NavLink to={props.imgLink}>
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
      <div className="container designinsp_title text-center border-bottom py-3 my-3">
        <h1>Website</h1>
      </div>
      <div className="container websitetemp my-5">
        <div className="row g-4">
          {CardData.map((val, i) => {
            return <CardApp key={i} {...val} />;
          })}
        </div>
      </div>
    </>
  );
};
