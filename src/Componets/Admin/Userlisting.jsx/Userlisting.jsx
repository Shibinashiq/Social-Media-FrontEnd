import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip } from "@nextui-org/react";
import { EditIcon } from "./EditIcon";
import { EyeIcon } from "./EyeIcon";
import DeleteIconSVG from "./DeleteIconSVG ";
import { useSelector } from "react-redux";
import useAxios from "../../../axios";
import { linkWithCredential } from "firebase/auth";


const columns = [
  { name: "ID", uid: "id" },
  { name: "NAME", uid: "username" },
  { name: "EMAIL", uid: "email" },
  { name: "STATUS", uid: "status" },
  { name: "ACTIONS", uid: "actions" },
];


const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};


export default function UserListing() {

  const axiosinstance=useAxios();

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
          
          const response = await axiosinstance.post(`/Admin/users/${userId}/block/`,{});
          console.log('resposnse',response);
          setUsers(users.map(user => {
              if (user.id === userId) {
                  return { ...user, blocked: true };
              }
              return user;
          }));
      } catch (error) {
          console.error("Error deleting user:", error);
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
        const status = user.status || "active";
        return (
          <Chip className="capitalize" color={statusColorMap[status]} size="sm" variant="flat">
            {status}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50" onClick={() => handleDelete(user.id)}>
                <DeleteIconSVG />
              </span>
            </Tooltip>
           
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
