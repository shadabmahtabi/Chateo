import React from "react";
import Applayout from "../components/layout/Applayout";
import { Box, Typography } from "@mui/material";
import { greyColor } from "../constants/color";

const Home = () => {
  return (
    <Box bgcolor={greyColor} height={"100%"}>
      <Typography p={"2rem"} variant="h5" textAlign={"center"}>
        Select a friend to chat
      </Typography>
    </Box>
  );
};

export default Applayout()(Home);
