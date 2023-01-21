import {
  Alert,
  AlertTitle,
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Profile() {
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [user] = useState(JSON.parse(localStorage.getItem("user")));
  const [isPasswordValid] = useState("Password invalid");
  const [errorMessage, setErrorMessage] = useState();

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
    </>
  );
}

export default Profile;
