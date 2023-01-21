import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import CartRow from "components/CartRow";
import React from "react";

function SimpleProductTable({ data }) {
  return (
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
          <CartRow item={item} />
        ))}
        <TableRow>
          <TableCell sx={{ fontWeight: 700, fontSize: "1.2rem" }}>
            Total
          </TableCell>
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell sx={{ fontWeight: 700, fontSize: "1.2rem" }}>
            {data?.reduce(
              (accumulator, currentValue) =>
                accumulator +
                currentValue.product.price * currentValue.quantity,
              0
            )}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export default SimpleProductTable;
