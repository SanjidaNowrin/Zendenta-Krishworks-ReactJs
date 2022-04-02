import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PatientList from "./PatientList";
import { Avatar } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import {
  faSliders,
  faCommentDots,
  faCalendarDays,
  faSackDollar,
  faPlusCircle,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import user from "../../img/user2.jpg";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  border: "1px solid gray",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const drawerWidth = 240;

function DashboardHome(props) {
  const [patient, setPatient] = useState([]);
  const [doctor, setDoctor] = useState([]);
  useEffect(() => {
    fetch("https://619f39821ac52a0017ba467e.mockapi.io/patientDetails")
      .then((res) => res.json())
      .then((data) => setPatient(data));
  }, []);
  useEffect(() => {
    fetch("https://619f39821ac52a0017ba467e.mockapi.io/DoctorDetails")
      .then((res) => res.json())
      .then((data) => setDoctor(data));
  }, []);
  console.log(doctor);

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "start",
          marginTop:"1.5rem",
          marginBottom:"1rem",
        }}
      >
        <img
          src="https://i.ibb.co/p2dgpCB/family-dentist-in-calgary-ab-thorncliffe-family-dental-plant-label-text-logo-transparent-png-2068738.png"
          width="100px"
          height="60px"
        ></img>
        <Box>
        <Typography>Zendenta</Typography>
        <Typography>Cobut gigi tanpa sakit</Typography>
        </Box>
      </Box>

      <List>
        <ListItem button>
          <ListItemIcon>
            <FontAwesomeIcon icon={faCalendarDays} />
          </ListItemIcon>
          <ListItemText primary="Overview" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FontAwesomeIcon icon={faCalendarDays} />
          </ListItemIcon>
          <ListItemText primary="Calender" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PersonOutlineOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Patient List" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <FontAwesomeIcon icon={faCommentDots} />
          </ListItemIcon>
          <ListItemText primary="Messages" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FontAwesomeIcon icon={faSackDollar} />
          </ListItemIcon>
          <ListItemText primary="Payment Information" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FontAwesomeIcon icon={faSliders} />
          </ListItemIcon>
          <ListItemText primary="Setting" />
        </ListItem>

        <Box sx={{ marginTop: "8rem !important" }}>
          <ListItem sx={{ borderBottom: "1px solid #d3ddea" }}>
            <ListItemIcon>
              <FontAwesomeIcon icon={faCircleInfo} />
            </ListItemIcon>
            Help ?
          </ListItem>
          {/* <hr sx={{color:"#d3ddea !important"}} /> */}
          <ListItem>
            <Box
              sx={{
                marginTop: "1rem",
                display: "flex",
                alignItems: "end",
                textAlign: "start",
              }}
            >
              <Avatar src={user} alt="" />
              <Box sx={{ marginLeft: "0.8rem !important" }}>
                {doctor[0]?.name}
                <br />
                <Typography>{doctor[0]?.specification}</Typography>
              </Box>
              <ExpandMoreIcon sx={{ marginLeft: "2rem !important" }} />
            </Box>
          </ListItem>
        </Box>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const useStyle = makeStyles({
    navContainer: {
      background: "#F2F5F9 !important",
      // borderBottom: "1px solid black !important",
      boxShadow: "0 0 0 0 !important",
    },
  });
  const { navContainer } = useStyle();
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        className={navContainer}
        position="fixed"
        sx={{
          width: { xl: `calc(100% - ${drawerWidth}px)` },
          ml: { xl: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ borderBottom: "1px solid #d3ddea" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { sm: "block", lg: "block", md: "block", xl: "none" },
            }}
          >
            <MenuIcon sx={{ color: "red !important" }} />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <PersonOutlineOutlinedIcon
              sx={{ color: "#0D53FC", fontSize: "2rem" }}
            />
            <Typography
              variant="h5"
              sx={{ color: "#2D3B4C", fontWeight: "600", marginLeft: "0.3rem" }}
            >
              Diane Cooper
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              marginLeft: "auto",
            }}
          >
            <Search>
              <SearchIconWrapper>
                <SearchIcon sx={{ color: "gray" }} />
              </SearchIconWrapper>
              <StyledInputBase
                sx={{ color: "gray", fontWeight: "bold" }}
                placeholder="Search"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>

            <AddCircleIcon
              sx={{
                color: "#0D53FC !important",
                fontSize: "2.5rem",
                marginLeft: "0.9rem",
              }}
            />
            <CircleNotificationsIcon
              sx={{
                color: "gray !important",
                fontSize: "2.5rem",
                marginLeft: "0.5rem",
              }}
            />
          </Box>
        </Toolbar>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            borderBottom: "1px solid #d3ddea",
            height: "60px",
            paddingLeft: "24px",
          }}
        >
          <Typography variant="h6" sx={{ color: "#0D53FC !important" }}>
            Patient List
          </Typography>{" "}
          <ArrowForwardIosIcon sx={{ color: "gray", marginLeft: "1rem" }} />{" "}
          <Typography
            variant="h6"
            sx={{ color: "gray !important", marginLeft: "0.6rem" }}
          >
            {patient[0]?.name}
          </Typography>
        </Box>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { xl: drawerWidth }, flexShrink: { xl: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "block", lg: "block", xl: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "none", lg: "none", xl: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Box sx={{ height: "100px", marginTop: "100px" }}>
          <PatientList patient={patient} />
        </Box>
      </Box>
    </Box>
  );
}

DashboardHome.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashboardHome;
