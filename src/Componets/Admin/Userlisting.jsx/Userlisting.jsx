import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip } from "@nextui-org/react";
import { EditIcon } from "./EditIcon";
import { EyeIcon } from "./EyeIcon";
import DeleteIconSVG from "./DeleteIconSVG ";
import useAxios from "../../../axios";
import { Toaster, toast } from "react-hot-toast";
import { RotateCcw } from 'lucide-react';
const columns = [
  { name: "ID", uid: "id" },
  { name: "NAME", uid: "username" },
  { name: "EMAIL", uid: "email" },
  { name: "STATUS", uid: "status" },
  { name: "ACTIONS", uid: "actions" },
];

const statusColorMap = {
  active: "success",
 
  blocked: "blocked"
};

export default function UserListing() {
  const axiosinstance = useAxios();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get("http://localhost:8000/Admin/users/");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }
    fetchUsers();
  }, []);
  const handleDelete = async (userId) => {
    try {
      const response = await axiosinstance.post(`/Admin/users/${userId}/block/`, {});
      setUsers(prevUsers => prevUsers.map(user => {
        if (user.id === userId) {
          return { ...user, blocked: true, status: "blocked" };
        }
        return user;
      }));
      if (response.data.blocked) {
        toast.success(` ${response.data.username} is now blocked`);
      } else {
        toast.success(` ${response.data.username} is now unblocked`);
      }
    } catch (error) {
      console.error("Error blocking user:", error);
    }
  };
  
  const handleUnDelete = async (userId) => {
    try {
      const response = await axiosinstance.post(`/Admin/users/${userId}/unblock/`, {});
      setUsers(prevUsers => prevUsers.map(user => {
        if (user.id === userId) {
          return { ...user, blocked: false, status: "Active" };
        }
        return user;
      }));
      toast.success(` ${response.data.username} is now unblocked`);
    } catch (error) {
      console.error("Error unblocking user:", error);
    }
  };
  
  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: user.avatar }}
            description={user.email}
            name={cellValue}
          >
            {user.username}
          </User>
        );
        case "status":
  const status = user.blocked ? "Blocked" : "Active";
  const color = user.blocked ? "warning" : "success";
  return (
    <Chip className="capitalize" color={color} size="sm" variant="flat">
      {status}
    </Chip>
  );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
              <span className="text-lg text-danger cursor-pointer active:opacity-50"onClick={() => user.blocked ? handleUnDelete(user.id) : handleDelete(user.id)}>
              {user.blocked ? <RotateCcw style={{ color: 'green' }}/> : <DeleteIconSVG />}
              </span>
            <Toaster position="top-right" reverseOrder={false} />
          </div>
        );
      default:
        return cellValue;
    }
  }, [handleDelete]);

  return (
    <Table aria-label="Example table with custom cells" className="min-h-screen">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={users}>
        {(user) => (
          <TableRow key={user.id}>
            {columns.map(column => (
              <TableCell key={column.uid}>{renderCell(user, column.uid)}</TableCell>
            ))}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
