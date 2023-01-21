import { KeyboardArrowUp, KeyboardArrowDown, DateRange } from "@mui/icons-material";
import { TableRow, TableCell, IconButton } from "@mui/material";
import React, { useState } from "react";

function OrderRow({ item }) {

    console.log(item.items);

    const [creationDate] = useState(new Date(item.creationDate).toJSON())
    const [deliveryDate] = useState(new Date(item.deliveryDate).toJSON())
    const [items] = useState(item.items.map(function(item) {
        return String(`${item.product.name}, `);
    }))

    console.log(creationDate);

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
        </TableCell>
        <TableCell>{item.id}</TableCell>
        <TableCell>{items}</TableCell>
        <TableCell>{Object.values(item.address).join(',')}</TableCell>
        <TableCell>{creationDate}</TableCell>
        <TableCell>{item.price}</TableCell>
        <TableCell>{item.isDelivered.toString()}</TableCell>
        <TableCell>{deliveryDate}</TableCell>
      </TableRow>
    </>
  );
}

export default OrderRow;
