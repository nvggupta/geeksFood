import React from "react";
import "../components/section1.css";
// import logo from "./../../public/download.jpg"
function Section1() {
  return (
    <>
      <div className="absolute top-16 custom flex flex-col ">
        <div className="flex justify-center items-center w-1/2 h-full flex-col">
          <p className="text-6xl font-[900] text-black-500">
            Let us find your<br></br>
            <span className="text-red-600 text-center"> Forever Food.</span>
          </p>
          <p className="text-2xl text-center font-[600]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
          </p>
          <div className="flex gap-14 mt-10 w-1/2">
          <button className="p-5 bg-red-800 w-1/2">Search Now</button>
          <button className="p-5 bg-white w-1/2">Know More</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section1;
