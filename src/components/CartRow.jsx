import { TableCell, TableRow } from "@mui/material";
import React from "react";

function CartRow({ item }) {
  return (
    <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
      <TableCell>{item.product.type}</TableCell>
      <TableCell>{item.product.name}</TableCell>
      <TableCell>{item.product.producer}</TableCell>
      <TableCell>{item.product.productDescription}</TableCell>
      <TableCell>{item.product.price}</TableCell>
      <TableCell>{item.quantity}</TableCell>
    </TableRow>
  );
}

export default CartRow;
