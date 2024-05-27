import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
const ExploreMenu = ({ setCategory, category }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Shop by Menu Category</h1>
      <p className="explore-menu-text">
        Choose from a diverse range featuring from Clothes, Shoes to Laptops. Get upto 20% discount on shopping for more than ₹5000, Explore all your loved brands here on DzuoKart.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={ category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
