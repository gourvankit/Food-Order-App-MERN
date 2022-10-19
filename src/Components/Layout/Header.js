import React from "react";
import { useNavigate } from "react-router-dom";
import mealsImg from "../../Assets/meals.jpeg";
import classes from "./header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
        <button className={classes.logoutbtn} onClick={props.logout}>
          logout
        </button>
      </header>

      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="A table full of delicious food" />
      </div>
    </React.Fragment>
  );
};
export default header;
