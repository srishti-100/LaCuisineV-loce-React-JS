import React, { createContext, useContext, useState } from "react";
import { sample_foods } from "../data";

const CartContext = createContext(null);

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(
    sample_foods
      .slice(1, 4)
      .map((food) => ({ food, uantity: 1, price: food.price }))
  );

  const [totalPrice, setTotalPrice] = useState(40);
  const [totalCount, setTotalCount] = useState(3);

  const removeFromCart = (foodId) => {
    const filterCartItems = cartItems.filter((item) => item.food.id !== foodId);
    setCartItems(filterCartItems);
  };

  const changeQuantity = (cartItem, newQuantity) => {
    const { food } = cartItem;

    const changedCartItem = {
      ...cartItem,
      quantity: newQuantity,
      price: food.price * newQuantity,
    };

    setCartItems(
      cartItems.map((item) =>
        item.food.id === food.id ? changedCartItem : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart: { items: cartItems, totalPrice, totalCount },
        removeFromCart,
        changeQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
