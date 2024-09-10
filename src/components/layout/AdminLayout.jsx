import {
    Close as CloseIcon,
    Dashboard as DashboardIcon,
    ExitToApp as ExitToAppIcon,
    Groups as GroupsIcon,
    ManageAccounts as ManageAccountsIcon,
    Menu as MenuIcon,
    Message as MessageIcon,
} from "@mui/icons-material";
import {
    Box,
    Drawer,
    IconButton,
    Stack,
    styled,
    Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import { Link as LinkComponent, Navigate, useLocation } from "react-router-dom";
import {
    greyColor,
    hoverMattBlack,
    mattBlack
} from "../../constants/color";

const Link = styled(LinkComponent)({
  textDecoration: "none",
  borderRadius: "2rem",
  color: "black",
  padding: "1rem 2rem",
  "&:hover": {
    color: "white",
    backgroundColor: "rgba(0,0,0,0.54)",
  },
});

const isAdmin = true

const AdminLayout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  const HandleMobile = () => {
    setIsMobile(!isMobile);
  };

  const HandleClose = () => {
    setIsMobile(false);
  };

  if(!isAdmin) return <Navigate to={"/admin"} />
  return (
    <Grid container minHeight={"100vh"}>
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          position: "fixed",
          right: "1rem",
          top: "1rem",
        }}
      >
        <IconButton onClick={HandleMobile}>
          {isMobile ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Box>
      <Grid
        item
        md={4}
        lg={3}
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        <Sidebar />
      </Grid>
      <Grid
        item
        xs={12}
        md={8}
        lg={9}
        sx={{
          bgcolor: greyColor,
        }}
      >
        {children}
      </Grid>

      <Drawer open={isMobile} onClose={HandleClose}>
        <Sidebar w={"80vw"}></Sidebar>
      </Drawer>
    </Grid>
  );
};

const Sidebar = ({ w = "100%" }) => {
  const location = useLocation();

  const logoutHandler = () => {
    console.log("logout");
  };
  return (
    <Stack width={w} direction={"column"} spacing={"3rem"} padding={"3rem"}>
      <Typography variant="h5">Chateo</Typography>
      <Stack spacing={"1rem"}>
        {adminTabs.map((tab) => (
          <Link
            key={tab.path}
            to={tab.path}
            sx={
              location.pathname === tab.path && {
                bgcolor: mattBlack,
                color: "white",
                ":hover": {
                  color: "white",
                  bgcolor: hoverMattBlack,
                },
              }
            }
          >
            <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
              {tab.icon}
              <Typography variant="h6">{tab.name}</Typography>
            </Stack>
          </Link>
        ))}

        <Link
          onClick={logoutHandler}
        >
          <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
            <ExitToAppIcon />
            <Typography variant="h6">Logout</Typography>
          </Stack>
        </Link>
      </Stack>
    </Stack>
  );
};

const adminTabs = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: <DashboardIcon />,
  },
  {
    name: "Users",
    path: "/admin/users",
    icon: <ManageAccountsIcon />,
  },
  {
    name: "Chats",
    path: "/admin/chats",
    icon: <GroupsIcon />,
  },
  {
    name: "Messages",
    path: "/admin/messages",
    icon: <MessageIcon />,
  },
];

export default AdminLayout;
