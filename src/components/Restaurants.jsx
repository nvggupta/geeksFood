import React, { useState } from "react";
import data from "./Data.json";
import RestaurantCard from "./RestaurantCard";
import { MdKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

function Restaurants() {
  const [rest, setRest] = useState(data);
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(rest.length / 60);

  const searching = (e) => {
    const searchValue = e.target.value.toLowerCase();
    const updatedRestaurants = data.filter(
      (elem) =>
        elem.cuisine.toLowerCase().includes(searchValue) ||
        elem.name.toLowerCase().includes(searchValue)
    );
    setRest(updatedRestaurants);
    setPage(1); 
  };

  const handleRatingChange = (e) => {
    const ratingValue = Number(e.target.value);
    const updatedRestaurants = data.filter((elem) => elem.rating === ratingValue);
    setRest(updatedRestaurants);
    setPage(1); 
  };

  const handlePageChange = (e) => {
    const newPage = Number(e.target.value);
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const goToPreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const goToNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <>
      <div className="mt-32 ms-6 flex flex-wrap items-center justify-between">
        <input
          type="text"
          placeholder="Enter Cuisine or Name"
          className="p-3 border border-black"
          onChange={searching}
        />
        <input
          type="number"
          className="p-3 border border-black"
          min={0}
          max={5}
          onChange={handleRatingChange}
        />
      </div>
      <div className="grid grid-cols-3 place-items-center mt-16 gap-5">
        {rest.slice((page - 1) * 60, page * 60).map((elem, index) => (
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
      <div className="flex gap-5 items-center justify-center mt-5">
        <MdKeyboardArrowLeft onClick={goToPreviousPage} className="cursor-pointer" />
        <input
          type="number"
          min={1}
          max={totalPages}
          value={page}
          onChange={handlePageChange}
          className="w-12 text-center border border-black"
        />
        <MdOutlineKeyboardArrowRight onClick={goToNextPage} className="cursor-pointer" />
      </div>
    </>
  );
}

export default Restaurants;
