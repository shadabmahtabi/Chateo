import React, { memo } from "react";
import { Link } from "../../components/styles/StyledComponents";
import AvatarCard from '../shared/AvatarCard'
import { Stack, Typography } from "@mui/material";

const GroupItem = ({ group, chatId }) => {
  const { name, avatar, _id } = group;

  return <Link to={`?group=${_id}`} onClick={(e) => {
    if(chatId === _id) {
        e.preventDefault();
    }
  }}>
    <Stack direction={"row"} spacing={"1rem"} alignItems={"center"} >
        <AvatarCard avatar={avatar}/>
        <Typography>{name}</Typography>
    </Stack>
  </Link>;
};

export default memo(GroupItem);
