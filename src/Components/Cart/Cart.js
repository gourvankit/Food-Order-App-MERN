import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../../Store/Cart-context";
import CartItem from "../Layout/CartItem/CartItem";
import { useNavigate } from "react-router-dom";

const Cart = (props) => {
  const navigate = useNavigate();
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const addItemsHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={addItemsHandler.bind(null, item)}
          onRemove={removeItemHandler.bind(null, item.id)}
        ></CartItem>
      ))}
    </ul>
  );
  const orderHandler = () => {
    // cartCtx.items.map((item) => {
    //   console.log(item.name);
    //   console.log(item.amount);
    //   console.log(totalAmount);
    // });
    navigate("/order");
  };

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && (
          <button className={classes.button} onClick={orderHandler}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
