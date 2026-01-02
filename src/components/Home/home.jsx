import React, { useEffect, useState } from "react";
import Card from "../card/card";
import Cart from "../cart/cart";

function HomePage({ cartItems, setCartItems, showCart, setShowCart }) {
  const Api = "https://dummyjson.com/products";
  let [Post, setPost] = useState([]);

  useEffect(() => {
    fetch(Api)
      .then((response) => {
        if (!response) {
          throw new Error("An error was detected");
        }
        return response.json();
      })
      .then((data) => {
        setPost(data.products);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <>
      <div className="relative">
        <section className="w-full bg-red-100 h-130 px-20 py-6">
          <h1 className="text-2xl">Trending Items</h1>
          <div className="items-row grid gap-3 grid-cols-5 border h-full py-10">
            {Post.slice(0, 5).map((data) => (
              <Card key={data.id} Data={data} onAddToCart={addToCart} />
            ))}
          </div>
        </section>

        {showCart && (
          <section className="cart-box">
            <Cart
              items={cartItems}
              onClose={() => setShowCart(false)}
              setCartItems={setCartItems}
            />
          </section>
        )}
      </div>
    </>
  );
}

export default HomePage;
