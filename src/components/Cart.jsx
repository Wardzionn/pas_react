import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";
import ProductRow from "components/ProductRow";
import React from "react";
import { Link } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "utils";

function Cart() {
  const { data, error, isLoading } = useSWR(
    `${process.env.REACT_APP_URL}/products`,
    fetcher
  );

  return (
    <>
      <Table sx={{ margin: 4 }} size="small">
        <TableHead>
          <TableRow>
            <TableCell>Type</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Producer</TableCell>
            <TableCell>ProductDescription</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((item) => (
            <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
              <TableCell>{item.type}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.producer}</TableCell>
              <TableCell>{item.productDescription}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>quantity</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link to="/checkout">
        <Button variant="contained" sx={{ mt: 3, mb: 2 }}>
          Checkout
        </Button>
      </Link>
    </>
  );
}

export default Cart;
