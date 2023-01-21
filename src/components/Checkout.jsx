import {
  Typography,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import axios from "axios";
import AddressForm from "components/AddressForm";
import SimpleProductTable from "components/SimpleProductTable";
import React, { useState } from "react";
import useSWR from "swr";

const fetcher = (url) => axios.get(url).then((res) => res.data);

function Checkout() {
  const [user] = useState(JSON.parse(localStorage.getItem("user")));

  const { data, error, isLoading } = useSWR(
    `${process.env.REACT_APP_URL}/users/${user.id}/cart`,
    fetcher
  );

  return (
    <>
      <SimpleProductTable data={data?.["cartItems"]} />
      <AddressForm user={user} />
      
    </>
  );
}

export default Checkout;
