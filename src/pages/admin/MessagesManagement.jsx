import React from 'react'

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 100,
    headerClassName: "table-header"
  },
  {
    field: "attachments",
    headerName: "Attachments",
    width: 150,
    headerClassName: "table-header",
    renderCell: (params) => (
      <Avatar alt={params.row.name} src={params.row.avatar}/>
    )
  },
  {
    field: "content",
    headerName: "Content",
    width: 400,
    headerClassName: "table-header"
  },
  {
    field: "sender",
    headerName: "Sent By",
    width: 150,
    headerClassName: "table-header",
    renderCell: (params) => (
      <Stack>
        <Avatar alt={params.row.sender.name} src={params.row.sender.avatar}/>
        <span>{params.row.sender.name}</span>
      </Stack>
    )
  },
  {
    field: "chat",
    headerName: "Chat",
    width: 200,
    headerClassName: "table-header"
  },
  {
    field: "groupChat",
    headerName: "Group Chat",
    width: 200,
    headerClassName: "table-header"
  },
  {
    field: "createdAt",
    headerName: "Time",
    width: 250,
    headerClassName: "table-header"
  },
]
const MessagesManagement = () => {
  return (
    <div>MessagesManagement</div>
  )
}

export default MessagesManagement