import React from "react";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import withRouter from "../WithRouter";
import { Box } from "@mui/material";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Products from "./ProductComponent";
import UserDetails from "./UserDetailsComponent";
import Login from "./LoginComponent";

function Layout() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/user" element={<UserDetails />} />
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<Navigate to="/products" replace />} />
      </Routes>
      </BrowserRouter>
  );
}

export default Layout;
