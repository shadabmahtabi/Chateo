import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  InputAdornment,
  List,
  ListItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { sampleNotifications } from "../../constants/samepleData";
import { memo } from "react";
import { Done as AcceptIcon, Close as DeclineIcon } from "@mui/icons-material";
import { transformImage } from "../../lib/features";

const Notification = () => {
  const friendRequestHandler = ({ _id, accept }) => {
    console.log("Friend Request: ", accept);
  };
  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"30rem"}>
        <DialogTitle>Notifications</DialogTitle>
        <Stack
          sx={{
            maxHeight: "30rem",
            overflowY: "auto",
            scrollbarWidth: "none", // For Firefox
            "&::-webkit-scrollbar": {
              display: "none", // For Chrome, Safari, and Edge
            },
          }}
        >
          {sampleNotifications.length > 0 ? (
            sampleNotifications.map(({ sender, _id }) => (
              <NotificationItem
                sender={sender}
                _id={_id}
                handler={friendRequestHandler}
                key={_id}
              />
            ))
          ) : (
            <Typography textAlign={"center"}>0 Notification</Typography>
          )}
        </Stack>
      </Stack>
    </Dialog>
  );
};

const NotificationItem = memo(({ sender, _id, handler }) => {
  return (
    <ListItem>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
        width={"100%"}
      >
        <Avatar src={transformImage(sender.avatar)} />
        <Typography
          variant="body1"
          sx={{
            flexGrow: 1,
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {`${sender.name} sent you a friend request.`}
        </Typography>
        <Stack
          direction={{
            xs: "column",
            sm: "row",
          }}
        >
          <Button
            variant="text"
            color="primary"
            onClick={() => handler({ _id, accept: true })}
          >
            Accept
            {/* <AcceptIcon /> */}
          </Button>
          <Button
            variant="text"
            color="error"
            onClick={() => handler({ _id, accept: false })}
          >
            Decline
            {/* <DeclineIcon /> */}
          </Button>
        </Stack>
      </Stack>
    </ListItem>
  );
});

export default Notification;
