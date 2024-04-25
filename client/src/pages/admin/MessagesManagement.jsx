import React, { useEffect, useState } from 'react';
import AdminLayout from '../../components/layout/AdminLayout';
import Table from '../../components/shared/Table';
import { Avatar, Box, Stack } from '@mui/material';
import { dashboardData } from '../../constants/sampleData';
import { fileFormat, transformImage } from '../../libs/features';
import moment from 'moment';
import RenderAttachement from '../../components/shared/RenderAttachement';

const columns = [
    {
      field: "id",
      headerName: "ID",
      headerClassName: "table-header",
      width: 200,
    },
    {
      field: "attachements",
      headerName: "Attachements",
      headerClassName: "table-header",
      width: 200,
      renderCell: (params) => {
        const { attachements } = params.row;

        return attachements?.length > 0
            ? attachements.map((i) => {
                const url = i.url;
                const file = fileFormat(url);

                return (
                    <Box>
                        <a
                            href={url}
                            download
                            target="_blank"
                            style={{
                                color: "black",
                            }}
                        >
                            {RenderAttachement(file,url)}
                        </a>
                    </Box>
                );
            })
            : "No Attachement";
        },
    },
    {
      field: "content",
      headerName: "Content",
      headerClassName: "table-header",
      width: 200,
    },
    {
      field: "sender",
      headerName: "Send By",
      headerClassName: "table-header",
      width: 200,
      renderCell: (params) => (
          <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
              <Avatar alt={params.row.sender.name} src={params.row.sender.avatar} />
              <span>{params.row.sender.name}</span>
          </Stack>
      ),
    },
    {
      field: "chat",
      headerName: "Chat",
      headerClassName: "table-header",
      width: 200,
    },
    {
      field: "groupsChat",
      headerName: "Groups Chat",
      headerClassName: "table-header",
      width: 200,
      renderCell: (params) => (
        <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
            <span>
                {(params.row.groupsChat) ? "True" : "Group is no longer exist" }
            </span>
        </Stack>
      ),
    },
    {
      field: "createdAt",
      headerName: "Time",
      headerClassName: "table-header",
      width: 200,
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
          })));
    }, []);
  
    return (
      <AdminLayout>
        <Table 
            heading={"All Messages"} 
            columns={columns} 
            rows={rows} 
            rowHeight={200}
        />
      </AdminLayout>
    );
  }
export default MessagesManagement;
