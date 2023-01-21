import React from "react";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import withRouter from "../WithRouter";
import { Box } from "@mui/material";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Products from "./ProductComponent";
import UserDetails from "./UserDetailsComponent";
import Login from "./LoginComponent";
import Cart from "components/Cart";
import Profile from "components/Profile";
import Checkout from "components/Checkout";

function Layout() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/user" element={<UserDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/checkout" element={<Checkout />} />


        <Route path="*" element={<Navigate to="/products" replace />} />
      </Routes>
      </BrowserRouter>
  );
}

export default Layout;
