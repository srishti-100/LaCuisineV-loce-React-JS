import React from "react";
import { useLoading } from "../../Hooks/useLoading";

import classes from "./Loading.modulo.css";

export default function Loading() {
  const { isLoading } = useLoading();
  if (!isLoading) return;

  return (
    <div className={classes.container}>
      <div className={classes.items}>
        <img src="/beanEater.svg" alt="Loading" />
        <h1>Loading...</h1>
      </div>
    </div>
  );
}
