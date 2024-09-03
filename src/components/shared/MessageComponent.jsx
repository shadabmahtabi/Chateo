import { Box, Typography } from "@mui/material";
import React from "react";
import { orange } from "../../constants/color";
import moment from "moment";
import { fileFormat } from "../../lib/features";
import RenderAttachment from "./RenderAttachment";

const MessageComponent = ({ message, user }) => {
  const { content, attachments = [], sender, createdAt } = message;

  const sameSender = sender._id === user._id;
  const timeAgo = moment(createdAt).format("HH:MM");
  return (
    <div
      style={{
        alignSelf: sameSender ? "flex-end" : "flex-start",
        backgroundColor: "#fff",
        borderRadius: "1rem",
        padding: " 0.5rem 1rem",
        width: "fit-content",
        maxWidth: "80%",
      }}
    >
      {!sameSender && (
        <Typography variant="caption" color={orange} fontWeight={"600"}>
          {sender.name}
        </Typography>
      )}
      {content && (
        <Typography
          sx={{
            wordWrap: "break-word",
            whiteSpace: "normal",
          }}
        >
          {content}
        </Typography>
      )}

      {attachments.length > 0 &&
        attachments.map((attachment, idx) => {
          const url = attachment.url;
          const file = fileFormat(url);
          return (
            <Box key={idx}>
              <a
                href={url}
                target="_self"
                download
                style={{
                  color: "black",
                }}
              >
                {RenderAttachment(file, url)}
              </a>
            </Box>
          );
        })}

      {
        <Typography
          variant="caption"
          color={"text.secondary"}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          {timeAgo}
        </Typography>
      }
    </div>
  );
};

export default MessageComponent;
