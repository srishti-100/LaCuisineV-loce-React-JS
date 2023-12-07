import React from "react";
import classes from "./Thumbnails.module.css";
import { Link } from "react-router-dom";
import StarRating from "../StarRating/StarRating";
import Price from "../pRICE/Price";

export default function Thumbnails({ foods }) {
  return (
    <ul className={classes.list}>
      {foods.map((food) => (
        <li key={food.id}>
          <Link to={`/food/${food.id}`}>
            <img
              className={classes.image}
              src={`/foods/${food.imageUrl}`}
              alt={food.name}
            />

            <div className={classes.content}>
              <div className={classes.name}>{food.name}</div>
              <span
                className={`${classes.favorite} ${
                  food.favorite ? "" : classes.not
                }`}
              >
                ❤
              </span>
              <div className={classes.star}>
                <StarRating stars={foods.stars} />
              </div>
              <div className={classes.product_item_footer}>
                <div className={classes.origins}>
                  {food.origins.map((origin) => (
                    <span key={origin}>{origin}</span>
                  ))}
                </div>
                <div className={classes.cook_time}>
                  <span>🕒</span>
                  {food.cookTime}mins
                </div>
              </div>
              <div className={classes.price}>
                <Price price={food.price} />;
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
