import * as React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

const pages = ["Home", "Companies", "Students"];
const settings = ["Logout"];

function ResponsiveAppBar() {
  const [isUser, setIsUser] = React.useState(false);
  const Navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [login, setLogin] = React.useState(false);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const navigateToRegister = () => {
    handleCloseUserMenu();
    Navigate("/login");
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const navigateToResumeDashboard=()=>{
    Navigate("/students_profile")
  }
  const navigateToCompaniesDashboard = () => {
    Navigate("/companies_dashboard");
    setAnchorElNav(null);
  };
  const navigateToStudentsDashboard = () => {
    Navigate("/students");
    setAnchorElNav(null);
  };
  const navigateToHomeDashboard = () => {
    Navigate("/");
    setAnchorElNav(null);
  };
  React.useEffect(() => {
    const isLoggedIn = localStorage.getItem("login");
    const actor = localStorage.getItem("actor");
    if(actor)
    {
      setIsUser(false);
    }
    else{
      setIsUser(true);
    }
    if (isLoggedIn) {
      setLogin(isLoggedIn);
    }
  }, []);
  return (
    <AppBar position="static">
   
      
          <div class="flex flex-row justify-between items-center">
            <div class="flex flex-row pl-[2rem] gap-10 items-center">
              <img class="h-[4rem]" src="./pp.png" alt="" />
              <Typography
                
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                CareerCatalyst
              </Typography>

              {login && (
                <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                  <Button
                    onClick={navigateToHomeDashboard}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    Home
                  </Button>
                  <Button
                    onClick={navigateToCompaniesDashboard}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    Companies
                  </Button>
                  {isUser ? <Button
                    onClick={navigateToStudentsDashboard}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    Students
                  </Button> : <Button
                    onClick={navigateToResumeDashboard}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    Fill Form
                  </Button>}
                </Box>
              )}
            </div>
            <div class="pr-[2rem]">
              <Box sx={{ flexGrow: 0 }}>
                {login ? <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip> : <Button onClick={()=>Navigate("/login")} variant="contained" color="success">Login</Button>}
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={navigateToRegister}>
                    <Typography sx={{ textAlign: "center" }}>Logout</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            </div>
          </div>
      
    </AppBar>
  );
}
export default ResponsiveAppBar;
