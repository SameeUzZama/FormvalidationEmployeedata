import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";
import { getUsers, deleteUser } from "../Service/Api";
import "./Home.css";

export const Home = ({ setSearch }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const response = await getUsers();
    console.log(response.data);
    setUser(response.data);
  };

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };
  return (
    <div>
      <div>
        <Link className="anchor" to="/Adduser">
          + Add Record
        </Link>
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="search"
          type="search"
          placeholder="Search"
        />
      </div>
      <div>
        <Table className="table">
          <TableHead>
            <TableRow
              style={{
                backgroundColor: "aqua",
              }}
            >
              <TableCell>#</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>State</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Pincode</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user.map((user) => {
              <TableRow>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.FirstName}</TableCell>
                <TableCell>{user.LastName}</TableCell>
                <TableCell>{user.Email}</TableCell>
                <TableCell>{user.State}</TableCell>
                <TableCell>{user.City}</TableCell>
                <TableCell>{user.Pincode}</TableCell>
                <TableCell>{user.Action}</TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginright: 10 }}
                  Component={Link}
                  to={`/edit/${user.id}`}
                >
                  Edit
                </Button>
                <Button
                  onClick={() => deleteUserData(user.id)}
                  variant="contained"
                  color="secondary"
                >
                  Delete
                </Button>
              </TableRow>;
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Home;
