import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
export const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
  {
    id: "m5",
    name: "Ghee Roast Dosa",
    description: "Savoury South Indian Delicacy",
    price: 6.99,
  },
  {
    id: "m6",
    name: "Mutton Biriyani",
    description: "Savoury South Indian Delicacy",
    price: 20.99,
  },
  {
    id: "m7",
    name: "Hot dog",
    description: "American cooked Meaty",
    price: 7.99,
  },
  {
    id: "m8",
    name: "Schezwan Noodles",
    description: "Chineese Spicy Fast Food",
    price: 5.99,
  },
  {
    id: "m9",
    name: "Chicken Mayo Momos",
    description: "Chineese Spicy Fast Food",
    price: 4.99,
  },
  {
    id: "m10",
    name: "Velvet Pastry",
    description: "Finest Japanese Dessert",
    price: 16.99,
  },
  {
    id: "m11",
    name: "Maple Topped Pancakes",
    description: "Tasty Canadian Dessert",
    price: 14.99,
  },
  {
    id: "m12",
    name: "Cashew Pistachio Ice-cream",
    description: "Finest Nutty Ice-cream",
    price: 18.99,
  },
];
const AvailableMeals = (props) => {
  var size = Object.keys(props.searched).length;
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  const mealList2 = (
    <MealItem
      id={props.searched.id}
      key={props.searched.id}
      name={props.searched.name}
      description={props.searched.description}
      price={props.searched.price}
    />
  );
  if (size > 1) {
    console.log(mealList2);
  }
  return (
    <section className={classes.meals}>
      {size < 1 && (
        <Card>
          <ul>{mealList}</ul>
        </Card>
      )}
      {size > 1 && (
        <Card>
          <ul>{mealList2}</ul>
        </Card>
      )}
    </section>
  );
};
export default AvailableMeals;
