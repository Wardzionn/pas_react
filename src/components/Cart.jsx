import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";
import axios from "axios";
import CartRow from "components/CartRow";
import ProductRow from "components/ProductRow";
import SimpleProductTable from "components/SimpleProductTable";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useSWR from "swr";

const fetcher = (url) => axios.get(url).then((res) => res.data);

function Cart() {
  const [user] = useState(JSON.parse(localStorage.getItem("user")));
  const { data, error, isLoading } = useSWR(
    `${process.env.REACT_APP_URL}/users/${user.id}/cart`,
    fetcher
  );

  return (
    <>
      <SimpleProductTable data={data?.["cartItems"]} />
      <Link to="/checkout">
        <Button variant="contained" sx={{ mt: 3, mb: 2 }}>
          Checkout
        </Button>
      </Link>
    </>
  );
}

export default Cart;
