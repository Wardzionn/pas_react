import { TabUnselected } from "@mui/icons-material";
import {
  Table,
  TableBody,
  TableHead,
  TableCell,
  Box,
  TableRow,
} from "@mui/material";
import ProductRow from "components/ProductRow";
import React from "react";
import useSWR from "swr";
import { fetcher } from "utils";

function Products() {
  const { data, error, isLoading } = useSWR(
    `${process.env.REACT_APP_URL}/products`,
    fetcher
  );

  return (
    <Box>
      <Table sx={{ margin: 4 }} size="small">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Type</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Producer</TableCell>
            <TableCell>ProductDescription</TableCell>
            <TableCell>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((item) => (
            <ProductRow key={item.id} item={item} />
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}

export default Products;
