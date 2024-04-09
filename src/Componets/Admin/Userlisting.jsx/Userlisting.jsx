import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip } from "@nextui-org/react";
import { EditIcon } from "./EditIcon";
import { EyeIcon } from "./EyeIcon";

const columns = [
  {name: "ID", uid: "id"},
  {name: "NAME", uid: "username"},
  {name: "EMAIL", uid: "email"},
  {name: "STATUS", uid: "status"},
  {name: "ACTIONS", uid: "actions"},
];

const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};


const DeleteIcon = (props) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 20 20"
    width="1em"
    {...props}
  >
    <path
      d="M17.5 4.98332C14.725 4.70832 11.9333 4.56665 9.15 4.56665C7.5 4.56665 5.85 4.64998 4.2 4.81665L2.5 4.98332"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <path
      d="M7.08331 4.14169L7.26665 3.05002C7.39998 2.25835 7.49998 1.66669 8.90831 1.66669H11.0916C12.5 1.66669 12.6083 2.29169 12.7333 3.05835L12.9166 4.14169"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <path
      d="M15.7084 7.61664L15.1667 16.0083C15.075 17.3166 15 18.3333 12.675 18.3333H7.32502C5.00002 18.3333 4.92502 17.3166 4.83335 16.0083L4.29169 7.61664"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <path
      d="M8.60834 13.75H11.3833"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <path
      d="M7.91669 10.4167H12.0834"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);

export default function UserListing() {
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

  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{radius: "lg", src: user.avatar}}
            description={user.email}
            name={cellValue}
          >
            {user.username} 
          </User>
        );
      case "status":
        const status = user.status || "active"; // Default to "active" if status is not provided
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
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

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
