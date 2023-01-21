import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function OrderCompleted() {
  return (
    <>
      <Typography>
        Order completed successfully, click to return to products.
      </Typography>
      <Link to="/products">
        <Button variant="contained" sx={{ mt: 3, mb: 2 }}>
          Return
        </Button>
      </Link>
    </>
  );
}

export default OrderCompleted;
