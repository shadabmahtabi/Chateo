import { Avatar, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import AvatarCard from "../../components/shared/AvatarCard";
import Table from "../../components/shared/Table";
import { dashboardData } from "../../constants/samepleData";
import { transformImage } from "../../lib/features";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 100,
    headerClassName: "table-header",
  },
  {
    field: "avatar",
    headerName: "Avatar",
    width: 150,
    headerClassName: "table-header",
    renderCell: (params) => {
      // console.log(params.row.avatar);
      return <AvatarCard avatar={params.row.avatar} />;
    },
  },
  {
    field: "name",
    headerName: "Name",
    width: 300,
    headerClassName: "table-header",
  },
  {
    field: "totalMembers",
    headerName: "Total Members",
    width: 120,
    headerClassName: "table-header",
  },
  {
    field: "members",
    headerName: "Members",
    width: 400,
    headerClassName: "table-header",
    renderCell: (params) => (
      <AvatarCard max={100} avatar={params.row.members} />
    ),
  },
  {
    field: "totalMessages",
    headerName: "Total Messages",
    width: 120,
    headerClassName: "table-header",
  },
  {
    field: "creator",
    headerName: "Created By",
    width: 250,
    headerClassName: "table-header",
    renderCell: (params) => (
      <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
        <Avatar alt={params.row.creator.name} src={params.row.creator.avatar} />
        <span>{params.row.creator.name}</span>
      </Stack>
    ),
  },
];
const ChatsManagement = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(
      dashboardData.chats.map((i) => ({
        ...i,
        id: i._id,
        avatar: i.avatar.map((img) => transformImage(img, 50)),
        members: i.members.map((m) => transformImage(m.avatar, 50)),
        creator: {
          name: i.creator.name,
          avatar: transformImage(i.creator.avatar, 50),
        }
      }))
    );
  }, []);

  return (
    <AdminLayout>
      <Table heading={"All Chats"} columns={columns} rows={rows} />
    </AdminLayout>
  );
};

export default ChatsManagement;
