import React from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import {
  AdminPanelSettings as AdminPanelSettingsIcon,
  Group as GroupIcon,
  Message as MessageIcon,
  Notifications as NotificationsIcon,
  Person as PersonIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import moment from "moment";
import {
  CurvedButton,
  SearchField,
} from "../../components/styles/StyledComponents";
import { mattBlack } from "../../constants/color";
import { DoughnutChart, LineChart } from "../../components/specific/Charts";

const Dashboard = () => {
  const Appbar = (
    <Paper
      elevation={3}
      sx={{
        padding: { xs: "1.5rem", sm: "2rem" },
        margin: "2rem 0",
        borderRadius: "1rem",
      }}
    >
      <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
        <AdminPanelSettingsIcon sx={{ fontSize: "2rem" }} />
        <SearchField placeholder="Search..." />
        <CurvedButton>
          <Typography display={{ xs: "block", sm: "none" }} padding={"1vmax 1.5vmax"}>
            <SearchIcon />
          </Typography>
          <Typography display={{ xs: "none", sm: "block" }} padding={"1rem 2rem"}>
            Search
          </Typography>
        </CurvedButton>
        <Box flexGrow={1} display={{ xs: "none", sm: "block" }}/>
        <Typography
          display={{
            xs: "none",
            lg: "block",
          }}
          color={"rgba(0,0,0,0.7)"}
          textAlign={"center"}
        >
          {moment().format("MMM Do YYYY")}
        </Typography>
        <NotificationsIcon/>
      </Stack>
    </Paper>
  );

  const Widgets = (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      justifyContent={"space-between"}
      spacing={"2rem"}
      alignItems={"center"}
      margin={"2rem 0"}
    >
      <Widget title={"Users"} value={30} icon={<PersonIcon />} />
      <Widget title={"Chats"} value={4} icon={<GroupIcon />} />
      <Widget title={"Messages"} value={324} icon={<MessageIcon />} />
    </Stack>
  );
  return (
    <AdminLayout>
      <Container>
        {Appbar}
        <Stack
          direction={{ lg: "row", xs: "column" }}
          justifyContent={"center"}
          alignItems={{
            xs: "center",
            lg: "stretch",
          }}
          sx={{ gap: "2rem" }}
        >
          <Paper
            elevation={3}
            sx={{
              padding: "2rem 3.5rem",
              borderRadius: "1rem",
              width: "100%",
              maxWidth: "45rem",
            }}
          >
            <Typography variant="h4" margin={"0 0 1rem 0"}>
              Last Messages
            </Typography>
            <LineChart value={[15, 20, 40, 10, 30]} />
          </Paper>
          <Paper
            elevation={3}
            sx={{
              padding: "1rem",
              borderRadius: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: { xs: "100%", sm: "50%" },
              position: "relative",
              maxWidth: "25rem",
            }}
          >
            <DoughnutChart
              labels={["Single Chats", "Group Chats"]}
              value={[25, 65]}
            />
            <Stack
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              position={"absolute"}
              spacing={"0.5rem"}
              width={"100%"}
              height={"100%"}
            >
              <GroupIcon /> <Typography>Vs </Typography>
              <PersonIcon />
            </Stack>
          </Paper>
        </Stack>
        {Widgets}
      </Container>
    </AdminLayout>
  );
};

const Widget = ({ title, value, icon }) => (
  <Paper
    sx={{
      padding: "2rem",
      borderRadius: "1rem",
      width: "20rem",
      // margin: "2rem 0"
    }}
  >
    <Stack alignItems={"center"} spacing={"1rem"}>
      <Typography
        sx={{
          color: "rgba(0,0,0,0.7)",
          borderRadius: "50%",
          border: `5px solid ${mattBlack}`,
          width: "5rem",
          height: "5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {value}
      </Typography>
      <Stack direction={"row"} spacing={"1rem"}>
        {icon}
        <Typography>{title}</Typography>
      </Stack>
    </Stack>
  </Paper>
);

export default Dashboard;
