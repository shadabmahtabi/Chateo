import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import Table from "../../components/shared/Table";
import { fileFormat, transformImage } from "../../lib/features";
import moment from "moment";
import RenderAttachment from "../../components/shared/RenderAttachment";
import { dashboardData } from "../../constants/samepleData";
import { Avatar, Box, Stack } from "@mui/material";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 100,
    headerClassName: "table-header",
  },
  {
    field: "attachments",
    headerName: "Attachments",
    width: 200,
    headerClassName: "table-header",
    renderCell: (params) => {
      const { attachments } = params.row;
      return attachments.length > 0
        ? attachments.map((img) => {
            const url = img.url;
            const file = fileFormat(url);

            return (
              <Box sx={{
                
              }}>
                <a
                  href={url}
                  download
                  target="_blank"
                  style={{ color: "black" }}
                >
                  {RenderAttachment(file, url)}
                </a>
              </Box>
            );
          })
        : "No Attachments";
    },
  },
  {
    field: "content",
    headerName: "Content",
    width: 400,
    headerClassName: "table-header",
  },
  {
    field: "sender",
    headerName: "Sent By",
    width: 200,
    headerClassName: "table-header",
    renderCell: (params) => (
      <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
        <Avatar alt={params.row.sender.name} src={params.row.sender.avatar} />
        <span>{params.row.sender.name}</span>
      </Stack>
    ),
  },
  {
    field: "chat",
    headerName: "Chat",
    width: 200,
    headerClassName: "table-header",
  },
  {
    field: "groupChat",
    headerName: "Group Chat",
    width: 200,
    headerClassName: "table-header",
  },
  {
    field: "createdAt",
    headerName: "Time",
    width: 250,
    headerClassName: "table-header",
  },
];
const MessagesManagement = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(
      dashboardData.messages.map((i) => ({
        ...i,
        id: i._id,
        sender: {
          name: i.sender.name,
          avatar: transformImage(i.sender.avatar, 50),
        },
        createdAt: moment(i.createdAt).format("MMMM Do YYYY, h:mm:ss a"),
      }))
    );
  }, []);

  return (
    <AdminLayout>
      <Table heading={"All Messages"} columns={columns} rows={rows} rowHeight={200} />
    </AdminLayout>
  );
};

export default MessagesManagement;
