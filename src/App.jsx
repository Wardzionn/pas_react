import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter } from "react-router-dom";
import { Box } from "@mui/material";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    axios.defaults.baseURL = `${process.env.REACT_APP_URL}`;
    axios.defaults.headers.common['Authorization'] = localStorage.getItem("jwtToken");
  }, []);

  return (
    <RecoilRoot>
      <Layout />
    </RecoilRoot>
  );
}

export default App;
