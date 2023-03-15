import { NavLink } from "react-router-dom";
import Websitetemp1 from "../assests/websitetemp1.jpg";
import { BiShareAlt } from "react-icons/bi";

// mui
import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export const DesignInspiration = () => {
  const CardData = [
    {
      MoreLinkPage: "/",
      title: "Website",
      ImgList: [
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
      ],
    },
    {
      MoreLinkPage: "/",
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
      MoreLinkPage: "/",
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
      MoreLinkPage: "/",
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
    const TransitionsModal = () => {
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
              <Box sx={style}>
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                >
                  Text in a modal
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
                </Typography>
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
