import { Fragment } from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";
import classes from "./MealsSummary.module.css";
import { DUMMY_MEALS } from "./AvailableMeals";
import { useRef, useState } from "react";
const Meals = () => {
  const enteredValue = useRef();
  const [searchedValue, setSearchedValue] = useState({});

  const clickHandler = () => {
    DUMMY_MEALS.map((item) => {
      if (enteredValue.current.value === item.name) {
        let updatedValue = {
          name: item.name,
          description: item.description,
          price: item.price,
          id: item.id,
        };
        setSearchedValue(updatedValue);
      }
    });
  };
  return (
    <Fragment>
      <MealsSummary />
      <div className={classes.searchDiv}>
        <input
          type="text"
          placeholder="Search"
          className={classes.search}
          ref={enteredValue}
        ></input>
        <button className={classes.searchBtn} onClick={clickHandler}>
          Search
        </button>
      </div>
      <AvailableMeals searched={searchedValue} />
    </Fragment>
  );
};
export default Meals;
