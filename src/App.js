import React, { useState, useEffect } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";
import Login from "./Components/Login/Login";
import {
  BrowserRouter,
  Router,
  Routes,
  Navigate,
  Route,
  useNavigate,
} from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [cartIsShown, setCartIsShown] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  const logoutHandler = () => {
    sessionStorage.removeItem("data");
    setLoggedIn(false);
    navigate("/");
  };
  useEffect(() => {
    if (sessionStorage.getItem("data")) {
      setLoggedIn(true);
    }
  }, []);

  const loginHandler = () => {
    setLoggedIn(true);
  };
  console.log(loggedIn);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            !loggedIn ? (
              <Login login={loginHandler} />
            ) : (
              <CartProvider>
                {cartIsShown && <Cart onClose={hideCartHandler} />}
                <Header
                  onShowCart={showCartHandler}
                  logout={logoutHandler}
                ></Header>
                <main>
                  <Meals></Meals>
                </main>
              </CartProvider>
            )
          }
        ></Route>
        <Route
          path="/home"
          element={
            loggedIn ? (
              <CartProvider>
                {cartIsShown && <Cart onClose={hideCartHandler} />}
                <Header
                  onShowCart={showCartHandler}
                  logout={logoutHandler}
                ></Header>
                <main>
                  <Meals></Meals>
                </main>
              </CartProvider>
            ) : (
              <Login login={loginHandler} logout={logoutHandler} />
            )
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
