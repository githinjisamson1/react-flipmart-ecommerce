import React from "react";
import "./footer.css";

// footer with current time
const Footer = () => {
  return <footer>&copy; Samson Githinji {new Date().getFullYear()}</footer>;
};

export default Footer;
