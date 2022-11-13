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
          Logout
        </button>
      </header>

      <div className={classes["main-image"]}>
        <img
          src="https://images.unsplash.com/photo-1547573854-74d2a71d0826?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="A table full of delicious food"
        />
      </div>
    </React.Fragment>
  );
};
export default header;
