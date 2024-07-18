import React, { useState } from "react";
import data from "./Data.json";
import RestaurantCard from "./RestaurantCard";

function Restaurants() {
  const [rest, setRest] = useState([...data]);
  const [search, setSearch] = useState("");
  console.log('Data:', data);

  const searching = (e) => {
    console.log('====================================');
    console.log("Triggered");
    console.log('====================================');
    const value = e.target.value;
    setSearch(value);

    const searchResult =rest.filter((elem) =>
      elem.cuisine.toLowerCase().includes(value.toLowerCase())
    );
    
  };

  return (
    <>
      <div className="mt-32 ms-6 flex flex-wrap items-center justify-between">
        <input
          type="text"
          placeholder="Enter Cuisine"
          className="p-3 border border-black"
          onChange={searching}
          value={search}
        ></input>
        <input type="number" className="p-3 border border-black"></input>
      </div>
      <div className="grid grid-cols-3 place-items-center mt-16 gap-5">
        {rest.map((elem, index) => (
          <RestaurantCard
            key={`${elem.code}-${index}`}
            code={elem.code}
            name={elem.name}
            address={elem.address}
            rating={elem.rating}
            cuisine={elem.cuisine}
          />
        ))}
      </div>
    </>
  );
}

export default Restaurants;
