

import React from "react";
import { Typography, AppBar, Toolbar, Box } from "@mui/material";
import { connect } from "react-redux";
import "./Header.css"; // Import the CSS file

const Header = (props) => {
  return (
    <AppBar position="static" className="header"> {/* Use the 'header' class */}
      <Toolbar>
        <Typography variant="h6" className="store-name"> {/* Use the 'store-name' class */}
          ALAA'S STORE
        </Typography>
      </Toolbar>
      <Box className="cart"> {/* Use the 'cart' class */}
        <Typography variant="h6">🛒 Cart ({props.cart})</Typography>
      </Box>
    </AppBar>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cartReducer.count,
});

export default connect(mapStateToProps)(Header);
