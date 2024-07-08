import React from "react";

function Header() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 flex justify-around items-center h-16 bg-white">
        <div className="flex justify-around items-center ">
          <img className="w-20 h-10 " src="src\assets\logo (1).svg"></img>
          <h1 className="text-4xl ">GeekFoods</h1>
        </div>
        <nav className="">
          <ul className="flex justify-around items-center gap-20">
            <li className="cursor-pointer text-blue-600">Home</li>
            <li className="cursor-pointer">Quote</li>
            <li className="cursor-pointer">Resturants</li>
            <li className="cursor-pointer">Foods</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </nav>
        <button className="p-1.5 bg-blue-500 rounded-lg text-white">GetStarted</button>
      </div>
    </>
  );
}

export default Header;
