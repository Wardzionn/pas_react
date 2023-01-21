import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetcher } from "utils";
import useSWR from "swr";
import OrderRow from "./OrderRow";

function Profile() {

  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [user] = useState(JSON.parse(localStorage.getItem("user")));
  const [isPasswordValid] = useState("Password invalid");
  const [errorMessage, setErrorMessage] = useState();

  const { data, error, isLoading } = useSWR(
    `${process.env.REACT_APP_URL}/users/${user.id}/orders`,
    fetcher
  );

  function handleLogout(event) {
    localStorage.clear();
  }

  function handlePasswordChange(event) {
    const passwordChangeData = {
      currentPassword: oldPassword,
      newPassword: password,
    };
    axios
      .put(`/users/${user.id}/changePassword`, passwordChangeData)
      .then((res) => window.location.reload())
      .catch((err) => {
        setErrorMessage(err.response.data);
      });
  }

  return (
    <>
      <Box sx={{ margin: "0 auto", width: "30%", paddingTop: 2 }}>
        {errorMessage && (
          <Alert
            severity="error"
            onClose={() => {
              setErrorMessage(null);
            }}
          >
            <AlertTitle>Error</AlertTitle>
            <strong>{errorMessage}</strong>
          </Alert>
        )}
        <Box sx={{ padding: "auto" }}>
          <Typography variant="h6">
            <b>Login:</b> {user.login}
          </Typography>
          <Typography variant="h6">
            <b>Role:</b> {user.role}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h6" sx={{ padding: 2 }}>
            <b>Change password</b>
          </Typography>
          <TextField
            error={!isPasswordValid}
            type="password"
            label="Old password"
            required
            variant="outlined"
            onChange={(e) => setOldPassword(e.target.value)}
          ></TextField>
          <TextField
            sx={{ marginTop: "15px" }}
            type="password"
            error={!isPasswordValid}
            helperText={!isPasswordValid ? "Password is not valid" : " "}
            label="New password"
            required
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
          ></TextField>
          <TextField
            sx={{ marginBottom: "15px" }}
            type="password"
            error={!isPasswordValid}
            helperText={!isPasswordValid ? "Password is not valid" : " "}
            label="Repeat new password"
            required
            variant="outlined"
            onChange={(e) => setRepeatedPassword(e.target.value)}
          ></TextField>
          <Button
            variant="contained"
            color="primary"
            onClick={handlePasswordChange}
          >
            Change password
          </Button>
        </Box>
        <Link to="/login">
          <Button color="inherit" onClick={handleLogout}>
            Log out
          </Button>
        </Link>
      </Box>

      <Paper sx={{ width: '80%', overflow: 'hidden', margin:'0 auto' }}>
      <Box>
      <Table sx={{ margin: 4 }} size="small">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>ID</TableCell>
            <TableCell>Items</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Creation Date</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Delivered</TableCell>
            <TableCell>DeliveryDate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((item) => (
            <OrderRow key={item.id} item={item} />
          ))}
        </TableBody>
      </Table>
    </Box>
    </Paper>
    </>
  );
}

export default Profile;
