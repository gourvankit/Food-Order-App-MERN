import "./Order.css";
import CartContext from "../../Store/Cart-context";
import classes from "./Cart.module.css";
import CartItem from "../Layout/CartItem/CartItem";
import Alert from "@mui/material/Alert";

import { useRef, useContext, useState } from "react";
const Order = () => {
  const cartCtx = useContext(CartContext);
  const [clicked, setIsClicked] = useState(false);
  const nameRef = useRef();
  const phoneRef = useRef();
  const landmarkRef = useRef();
  const pinRef = useRef();
  const addressRef = useRef();
  console.log(cartCtx);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:8800/api/users/", {
      method: "POST",
      body: JSON.stringify({
        name: nameRef.current.value,
        phone: phoneRef.current.value,
        landmark: landmarkRef.current.value,
        pincode: pinRef.current.value,
        address: addressRef.current.value,
        totalAmount: totalAmount,
        orderDetails: cartCtx.items,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => setIsClicked((prev) => !prev));
    console.log(nameRef.current.value);
  };

  return (
    <>
      {clicked && (
        <Alert severity="success">Success, Your Order has been Placed!</Alert>
      )}
      <div className="orderBg">
        <img
          src="https://images.unsplash.com/photo-1553025934-296397db4010?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80"
          className="order-background"
        ></img>
      </div>
      <div className="order">
        <form onSubmit={formSubmitHandler}>
          <input
            type="text"
            placeholder="Enter your name"
            className="inputText"
            ref={nameRef}
            required
          ></input>
          <input
            type="tel"
            placeholder="Phone no."
            className="inputText"
            ref={phoneRef}
            required
          ></input>
          <input
            type="text"
            placeholder="landmark"
            className="inputText"
            ref={landmarkRef}
            required
          ></input>

          <input
            type="tel"
            placeholder="Pincode"
            className="inputText"
            ref={pinRef}
            required
          ></input>

          <textarea
            className="address"
            placeholder="Enter the address"
            ref={addressRef}
            required
          ></textarea>

          <div className="orderDetails">
            <ul className={classes["cart-items"]}>
              {cartCtx.items.map((item) => (
                <li className={classes["cart-item"]}>
                  <div className="finalOrder">
                    <h2>{item.name}</h2>
                    <div className="orderSummary">
                      <span className="orderPrice">${item.price} </span>
                      <span className="orderAmount">x {item.amount}</span>
                    </div>
                  </div>
                </li>
                // <CartItem
                //   key={item.id}
                //   name={item.name}
                //   amount={item.amount}
                //   price={item.price}
                //   onAdd={addItemsHandler.bind(null, item)}
                //   onRemove={removeItemHandler.bind(null, item.id)}
                // ></CartItem>
              ))}
              <div className="orderTotal">
                <span>Total Amount</span>
                <span>{totalAmount}</span>
              </div>
            </ul>
          </div>
          <button className="orderBtn">Confirm</button>
        </form>
      </div>
    </>
  );
};
export default Order;
