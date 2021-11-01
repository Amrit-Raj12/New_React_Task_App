import React from "react";
import { CFooter, CLink } from "@coreui/react";

const Footer = () => {
  return (
    <div>
      <CFooter position="fixed"  className="footer bg-dark text-white">
        <div>
          <CLink href="#">Amrit Raj</CLink>
          <span>&copy; FrontEnd Developer.</span>
        </div>
        <div>
          <span>Powered by</span>
          <CLink href="#">React.JS</CLink>
        </div>
      </CFooter>
    </div>
  );
};

export default Footer;
