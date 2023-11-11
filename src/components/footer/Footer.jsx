import React from "react";
import "./footer.css";

// footer with current timestamp/YEAR
const Footer = () => {
  return <footer>&copy; Samson Githinji {new Date().getFullYear()}</footer>;
};

export default Footer;
