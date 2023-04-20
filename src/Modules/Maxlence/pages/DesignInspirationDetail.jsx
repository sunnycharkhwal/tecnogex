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
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <TransitionsModal />
          <div className="design_inspiration_div">
            <NavLink to={props.imgLink}>
              <img
                className="design_inspiration_img"
                src={props.img}
                alt="sd"
              />
            </NavLink>
            <BiShareAlt onClick={handleOpen} />
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
