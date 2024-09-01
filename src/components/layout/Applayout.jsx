import React from "react";
import Header from "../shared/Header";
import Title from "../shared/Title";
import Grid from "@mui/material/Grid";
import ChatList from "../specific/ChatList";
import { sampleChats } from "../../constants/samepleData";
import { useParams } from "react-router-dom";
import Profile from "../specific/Profile";

const Applayout = () => (WrappedComponent) => {
  return (props) => {
    const params = useParams();
    const chatId = parseFloat(params.chatId);

    const handleDeleteChat = (e, _id, groupChat) => {
      e.preventDefault();
      console.log(_id, groupChat);
    };
    return (
      <>
        <Title />
        <Header />
        <Grid container height={"calc(100vh - 4rem)"}>
          <Grid
            item
            sm={4}
            md={3}
            sx={{
              display: { xs: "none", sm: "block" },
              height: "100%",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            }}
          >
            <ChatList
              chats={sampleChats}
              chatId={chatId}
              // newMessagesAlert={[{ chatId, count: 4 }]}
              // onlineUsers={[1]}
              handleDeleteChat={handleDeleteChat}
            />
          </Grid>
          <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
            <WrappedComponent {...props} />
          </Grid>
          <Grid
            item
            md={4}
            lg={3}
            height={"100%"}
            sx={{
              display: { xs: "none", md: "block" },
              padding: "2rem",
              bgcolor: "rgba(0,0,0,0.85)",
              color: "#fff",
            }}
          >
            <Profile />
          </Grid>
        </Grid>
      </>
    );
  };
};

export default Applayout;
