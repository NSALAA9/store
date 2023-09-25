
import React from "react";
import { Typography, Container } from "@mui/material";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer"> {/* Use the 'footer' class */}
      <Container maxWidth="md">
        <Typography variant="h6" align="center">
          &copy; 2023 ALAA'S STORE
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;



