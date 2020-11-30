import React, { useEffect, useCallback } from "react";
import { Route } from "react-router-dom";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";
import ShopHeader from "../../components/shop-header/shop-header.component";

import "./shop.styles.scss";

const ShopPage = ({ match }) => {
  const toggleStickyShopHeader = useCallback(() => {
    const shopHeader = document.querySelector(".shop-page-header");
    const stickyShopHeader = shopHeader.offsetTop;

    if (window.pageYOffset > stickyShopHeader) {
      shopHeader.classList.add("sticky-shop-header");
    } else {
      shopHeader.classList.remove("sticky-shop-header");
    }
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", toggleStickyShopHeader);

    return () => {
      document.removeEventListener("scroll", toggleStickyShopHeader);
    };
  }, [toggleStickyShopHeader]);

  return (
    <div className="shop-page">
      <ShopHeader className="shop-page-header" />
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
