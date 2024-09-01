import { Avatar, AvatarGroup, Box, Stack } from "@mui/material";
import React from "react";

const AvatarCard = ({ avatar = [], max = 4 }) => {
  return (
    <Stack direction="row" spacing={2}>
      <AvatarGroup max={max}>
        <Box sx={{
            position: "relative",
            height: "2rem",
            width: "5rem",
        }}>
          {avatar.map((item, index) => (
            <Avatar key={Math.random() * 100} src={item} alt={`Avatar ${index}`} sx={{
                width: "2rem",
                height: "2rem",
                position: "absolute",
                left: {
                    xs: `${0.5 + index}rem`,
                    sm: `${index}rem`,
                },
                display: index >= max ? "none" : "initial"
            }} />
          ))}
        </Box>
      </AvatarGroup>
    </Stack>
  );
};

export default AvatarCard;
