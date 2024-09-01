import { Avatar, Stack, Typography } from "@mui/material";
import {
  Face as FaceIcon,
  AlternateEmail as UsernameIcon,
  CalendarMonth as CalendarIcon,
} from "@mui/icons-material";
import moment from "moment";

const Profile = () => {
  return (
    <Stack direction={"column"} spacing={"2rem"} alignItems={"center"}>
      <Avatar
        sx={{
          width: 200,
          height: 200,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid #fff",
        }}
      />
      <ProfileCard heading={"Bio"} text={"fhkjfk fkajshfk kjafhkajh"} />
      <ProfileCard
        heading={"username"}
        text={"shadab_mahtabi"}
        Icon={<UsernameIcon />}
      />
      <ProfileCard heading={"Name"} text={"Shadab Alam"} Icon={<FaceIcon />} />
      <ProfileCard
        heading={"Joined"}
        text={moment("2000-02-18T00:00:01.980Z").fromNow()}
        Icon={<CalendarIcon />}
      />
    </Stack>
  );
};

const ProfileCard = ({ text, Icon, heading }) => (
  <Stack
    direction={"row"}
    alignItems={"center"}
    spacing={"1rem"}
    color={"white"}
    textAlign={"center"}
  >
    {Icon && Icon}
    <Stack>
      <Typography variant="body1">{text}</Typography>
      <Typography color={"gray"} variant="caption">
        {heading}
      </Typography>
    </Stack>
  </Stack>
);

export default Profile;
