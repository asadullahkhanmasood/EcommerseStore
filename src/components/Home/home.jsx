import React, { useEffect, useState } from "react";
import Card from "../card/card";
function HomePage() {
  const Api = "https://dummyjson.com/products";
  //  Fetching APi
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

  console.log(Post);

  //

  return (
    <>
      <section className="w-full bg-red-100 h-130 px-20 py-6">
        <h1 className="text-2xl">Trending Items</h1>
        <div className="items-row grid gap-3 grid-cols-5 border h-full py-10">
          {Post.slice(0,5).map((data) => (
            <Card key={data.id} Data={data} />
          ))}
        </div>
      </section>
    </>
  );
}

export default HomePage;
