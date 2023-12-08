import { React, useState, useEffect } from "react";
import classes from "./FoodPage.module.css";
import { useParams } from "react-router-dom";
import { getById } from "../../Services/FoodServices";
import StarRating from "../../Components/StarRating/StarRating";
import Tags from "../../Components/Tags/Tags";
import Price from "../../Components/pRICE/Price";

export default function FoodPage() {
  const [food, setFood] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getById(id).then(setFood);
  }, [id]);

  return (
    <>
      {food && (
        <div className={classes.container}>
          <img
            className={classes.image}
            src={`/foods/${food.imageUrl}`}
            alt={food.name}
          />
          <div className={classes.details}>
            <div className={classes.header}>
              <span className={classes.name}>{food.name}</span>
              <span
                className={`${classes.favorite} ${
                  food.favorite ? "" : classes.not
                }`}
              >
                ❤
              </span>
            </div>
            <div className={classes.rating}>
              <StarRating stars={food.stars} size={25} />
            </div>

            <div className={classes.origins}>
              {food.origins?.map((origin) => (
                <span key={origin}>{origin}</span>
              ))}
            </div>
            <div className={classes.tags}>
              {food.tags && (
                <Tags
                  tags={food.tags.map((tag) => ({ name: tag }))}
                  forFoodPage={true}
                />
              )}
            </div>
            <div className={classes.cook_time}>
              <span>
                Time to cook <strong>{food.cookTime}</strong> minutes.
              </span>
            </div>
            <div className={classes.price}>
              <Price price={food.price} />
            </div>
            <button>Add to cart</button>
          </div>
        </div>
      )}
    </>
  );
}
