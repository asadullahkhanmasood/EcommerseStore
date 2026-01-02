import React, { useState } from "react";
import NavBar from "../../components/navbar/navBar";
import HomePage from "../../components/Home/home";

function RoutingFile() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <NavBar
        cartCount={cartItems.length}
        onCartClick={() => setShowCart(!showCart)}
      />
      <HomePage
        cartItems={cartItems}
        setCartItems={setCartItems}
        showCart={showCart}
        setShowCart={setShowCart}
      />
    </>
  );
}

export default RoutingFile;
