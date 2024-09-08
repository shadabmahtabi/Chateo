import { Stack, Typography } from "@mui/material";
import React from "react";
import GroupItem from "../shared/GroupItem";

const GroupList = ({ w = "100%", myGroups = [], chatId }) => {
  return (
    <Stack width={w} sx={{
      height: "100%",
      overflowX: "hidden",
      overflowY: "auto",
      scrollbarWidth: "thin"
    }}>
      {myGroups.length > 0 ? (
        myGroups.map((group, idx) => (
          <GroupItem key={idx} group={group} chatId={chatId} />
        ))
      ) : (
        <Typography textAlign={"center"} padding={"1rem"}>
          No Groups
        </Typography>
      )}
    </Stack>
  );
};

export default GroupList;
