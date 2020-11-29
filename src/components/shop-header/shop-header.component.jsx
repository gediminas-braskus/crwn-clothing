import React from "react";
import { Link } from "react-router-dom";

import "./shop-header.styles.scss";

const ShopHeader = ({ className }) => (
  <div className={`shop-header ${className}`}>
    <Link className="shop-header-option" to="/shop/hats">
      HATS
    </Link>
    <Link className="shop-header-option" to="/shop/jackets">
      JACKETS
    </Link>
    <Link className="shop-header-option" to="/shop/sneakers">
      SNEAKERS
    </Link>
    <Link className="shop-header-option" to="/shop/womens">
      WOMENS
    </Link>
    <Link className="shop-header-option" to="/shop/mens">
      MENS
    </Link>
  </div>
);

export default ShopHeader;
