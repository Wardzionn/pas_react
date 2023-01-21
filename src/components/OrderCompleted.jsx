import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

function OrderCompleted() {
  return (
    <Box sx={{margin : '0 auto'}}>
      <Typography>
        Order completed successfully, click to return to products.
      </Typography>
      <Link to="/products">
        <Button variant="contained" sx={{ mt: 3, mb: 2 }}>
          Return
        </Button>
      </Link>
    </Box>
  );
}

export default OrderCompleted;
