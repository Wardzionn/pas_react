import { Button } from "@mui/material";
<<<<<<< HEAD
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Profile() {
  const [user] = useState(JSON.parse(localStorage.getItem('user')))
function handleLogout(event) {
    localStorage.clear();
  }
  return (
  
  <div>  
  <p>{user.login}</p>
  <p>{user.id}</p>
  <p>{user.role}</p> 
  <Link to="/login">
  <Button color="inherit" onClick={handleLogout}>
    Log out
  </Button>
</Link></div>);
=======
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
>>>>>>> b5e6f50ae052de24ba4729be12542376bcff94a6
}

export default Profile;
