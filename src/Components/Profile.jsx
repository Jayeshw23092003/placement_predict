import React from "react";
import Sidebar from "./ProfilePage/Sidebar";
import Navbar from "./ProfilePage/Navbar";
import DataTable from "./ProfilePage/Table";
import Header from "./Header";
import Footer from "./Footer";
import { Box } from "@mui/material";
import ResponsiveAppBar from "./AppBar";
const Profile = () => {
  const user = {
    name: "Taniya",
    gender: "female",
    photo: "",
  };
  return (
    <div>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Box>
        <Navbar />
        <Box sx={{ display: "flex" }}>
          <Sidebar user={user} />
          <Box
            sx={{
              flexGrow: 1,
              width: "800px",
              height: "500px",
              paddingLeft: "20px",
              paddingTop: "54px",
              paddingBottom: "20px",
            }}
          >
            <DataTable />
          </Box>
        </Box>
      </Box>
      <Footer></Footer>
    </div>
  );
};

export default Profile;
