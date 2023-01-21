import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  function handleLogout(event) {
    localStorage.clear();
  }

  return (
    <>
    <Link to="/login">
      <Button color="inherit" onClick={handleLogout}>
        Log out
      </Button>
    </Link>
    </>
  );
}

export default Profile;
