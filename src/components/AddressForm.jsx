import {
  Typography,
  Grid,
  TextField,
  Button,
  Alert,
  AlertTitle,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddressForm({ user }) {
  const [street, setStreet] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState();

  const handleCreateOrder = (event) => {
    const address = {
      country,
      city,
      street,
      houseNumber,
      zipCode,
    };

    axios
      .post(`/orders/create?userId=${user.id}`, address)
      .then((res) => {
        navigate(`/completed`);
      })
      .catch((err) => {
        setErrorMessage(err.response.data);
      });
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3} sx={{ pt: 3, pb: 5 }}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="street"
            name="street"
            label="Street"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            onChange={(event) => setStreet(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="houseNumber"
            name="houseNumber"
            label="House number"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            onChange={(event) => setHouseNumber(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            onChange={(event) => setCity(event.target.value)}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            onChange={(event) => setZipCode(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            onChange={(event) => setCountry(event.target.value)}
          />
        </Grid>
      </Grid>
         {errorMessage && (
          <Alert
            severity="error"
            onClose={() => {
              setErrorMessage(null);
            }}
          >
            <AlertTitle>Error</AlertTitle>
            <strong>{errorMessage}</strong>
          </Alert>)}
      <Button
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={handleCreateOrder}
      >
        Create order
      </Button>
    </React.Fragment>
  );
}

export default AddressForm;
