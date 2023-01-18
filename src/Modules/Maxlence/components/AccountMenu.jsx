import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import RoomServiceOutlinedIcon from "@mui/icons-material/RoomServiceOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import Swal from "sweetalert2";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [user] = React.useState(JSON.parse(localStorage.getItem("user")));
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  
  return (
    <React.Fragment>
      <Box>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            {user ? <Avatar sx={{ width: 32, height: 32 }} src={user.pic}></Avatar> : <Avatar sx={{ width: 32, height: 32 }}></Avatar>}
            
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
        <ListItemIcon>
          <PersonOutlineIcon/> 
        </ListItemIcon>
          My Account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <RoomServiceOutlinedIcon fontSize="medium" />
          </ListItemIcon>
          My Service
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ReceiptOutlinedIcon fontSize="small" />
          </ListItemIcon>
          Payment
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <DashboardOutlinedIcon fontSize="small" />
          </ListItemIcon>
          Dashboard
        </MenuItem>
        <MenuItem
          onClick={() => {
            let token = localStorage.removeItem("token");
            let user = localStorage.removeItem("user");
            if (!user && ! token) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "success",
                text: "Logout Successfull",
                showConfirmButton: false,
                timer: 1500,
              });
              window.location.reload(false);
            }
          }}
        >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
