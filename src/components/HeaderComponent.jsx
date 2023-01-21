import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  Person as ProfileIcon,
  ShoppingCart as CartIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const profileIconButton = (
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2 }}
      onClick={handleClick}
    >
      <ProfileIcon />
    </IconButton>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Shop
          </Typography>

          <Link to="/products">
          <Button variant="contained" sx={{ mt: 3, mb: 2 }}>
        Products
      </Button>
          </Link>
          <Box sx={{ flex: 13 }} />
          <Link to="/cart">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleClick}
            >
              <CartIcon />
            </IconButton>{" "}
          </Link>
          <Box sx={{ flex: 1 }} />
          {localStorage.getItem("jwtToken") != undefined ? (
            <Link to="/profile">{profileIconButton}</Link>
          ) : (
            <Link to="/login">{profileIconButton}</Link>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
