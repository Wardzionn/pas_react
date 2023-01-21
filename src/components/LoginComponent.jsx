import { Copyright } from "@mui/icons-material";
import {
  Container,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  Alert,
  AlertTitle,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useSWR from "swr";
import { fetcher } from "utils";
import axios from "axios";
import { atom } from "recoil";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";


const theme = createTheme();

function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const credentials = {
      login,
      password,
    };    

    axios.post(`/auth/login`, credentials).then( res => {
      console.log(res.headers["authentication"]);
      axios.defaults.headers.common["Authorization"] = res.headers["authentication"];
      localStorage.setItem("jwtToken", res.headers["authentication"]);
      console.log(res.data.userData);
      localStorage.setItem("user", JSON.stringify(res.data.userData));
      navigate(`/profile`)
    }).catch(err => {
      setErrorMessage(err.response.data);
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="login"
              label="Login"
              name="login"
              autoComplete="login"
              autoFocus
              onChange={(event) => setLogin(event.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(event) => setPassword(event.target.value)}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Login;
