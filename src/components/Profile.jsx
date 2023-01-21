import { Button } from "@mui/material";
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
}

export default Profile;
