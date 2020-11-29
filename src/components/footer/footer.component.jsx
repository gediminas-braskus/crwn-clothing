import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./footer.styles.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="logo">
        <Link to="/" className="logo-container">
          <Logo />
        </Link>
        <span className="name">CRWN Clothing</span>
      </div>
      <div className="shop-links">
        <Link className="link" to="/shop/hats">
          HATS
        </Link>
        <Link className="link" to="/shop/jackets">
          JACKETS
        </Link>
        <Link className="link" to="/shop/sneakers">
          SNEAKERS
        </Link>
        <Link className="link" to="/shop/womens">
          WOMENS
        </Link>
        <Link className="link" to="/shop/mens">
          MENS
        </Link>
      </div>
      <div className="copyrights">
        <time>{currentYear}</time>&nbsp;©&nbsp;CRWN Clothing
      </div>
    </div>
  );
};

export default Footer;
