import { Avatar, AvatarGroup, Box, Stack } from "@mui/material";
import {transformImage} from "../../lib/features";

const AvatarCard = ({ avatar = [], max = 4 }) => {
  return (
    <Stack direction="row" spacing={2}>
      <AvatarGroup max={max}>
        <Box
          sx={{
            position: "relative",
            height: "2rem",
            width: "5rem",
          }}
        >
          {avatar.map((item, index) => (
            <Avatar
              key={Math.random() * 100}
              src={transformImage(item)}
              alt={`Avatar ${index}`}
              sx={{
                width: "2.5rem",
                height: "2.5rem",
                position: "absolute",
                left: {
                  xs: `${0.5 + index}rem`,
                  sm: `${index}rem`,
                },
                display: index >= max ? "none" : "initial",
                bgcolor: "red"
              }}
            />
          ))}
        </Box>
      </AvatarGroup>
    </Stack>
  );
};

export default AvatarCard;
