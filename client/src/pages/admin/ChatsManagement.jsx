import React, { useEffect, useState } from 'react';
import AdminLayout from '../../components/layout/AdminLayout';
import Table from '../../components/shared/Table';
import { Avatar, Stack } from '@mui/material';
import { dashboardData } from '../../constants/sampleData';
import { transformImage } from '../../libs/features';
import AvatarCard from '../../components/shared/AvatarCard';

const columns = [
    {
      field: "id",
      headerName: "ID",
      headerClassName: "table-header",
      width: 200,
    },
    {
      field: "avatar",
      headerName: "Avatar",
      headerClassName: "table-header",
      width: 150,
      renderCell: (params) => (
        <Avatar alt={params.row.name} src={params.row.avatar} />
      ),
    },
    {
      field: "name",
      headerName: "Name",
      headerClassName: "table-header",
      width: 200,
    },
    {
      field: "totalMembers",
      headerName: "Total Members",
      headerClassName: "table-header",
      width: 200,
    },
    {
      field: "members",
      headerName: "Members",
      headerClassName: "table-header",
      width: 200,
      renderCell: (params) => (
        <AvatarCard max={100} avatar={params.row.members} />
        //<Avatar alt={params.row.members._id} src={params.row.avatar} />
      ),
    },
    {
      field: "totalMessages",
      headerName: "Total Messages",
      headerClassName: "table-header",
      width: 200,
    },
    {
        field: "creator",
        headerName: "Created By",
        headerClassName: "table-header",
        width: 200,
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
          avatar: i.avatar.map((i) => transformImage(i, 50)),
          members: i.members.map((i) => transformImage(i.avatar, 50)),
          creator: {
            name: i.creator.name,
            avatar: transformImage(i.creator.avatar, 50),
          },
        })));
  }, []);

  return (
    <AdminLayout>
      <Table heading={"All Chats"} columns={columns} rows={rows} />
    </AdminLayout>
  );
}

export default ChatsManagement;
