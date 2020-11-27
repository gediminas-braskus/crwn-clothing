import React, { useEffect, useRef } from "react";

import Swiper from "../../swiper/swiper";

import CollectionItem from "../collection-item/collection-item.component";

import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => {
  const swiperContainer = useRef();

  useEffect(() => {
    new Swiper(swiperContainer.current, {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      breakpoints: {
        320: {
          slidesPerView: 2
        },
        640: {
          slidesPerView: 3
        },
        1000: {
          slidesPerView: 4
        }
      },
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="swiper-container" ref={swiperContainer}>
        <div className="swiper-wrapper">
          {items.map((item) => (
            <CollectionItem
              key={item.id}
              item={item}
              className="swiper-slide"
            />
          ))}
        </div>
        <div className="swiper-pagination" />
        <div className="swiper-button-next" />
        <div className="swiper-button-prev" />
      </div>
    </div>
  );
};

export default CollectionPreview;
