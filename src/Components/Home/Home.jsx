import React from "react";
import Recipe from "/src/assets/Recipe.jpg";
function Hoem() {
  return (
    <div className=" mt-[60px] p-3 md:px-14">
      <div className="grid grid-cols-1 md:grid-cols-2  md:gap-20 justify-center ">
        <div className="m-auto ">
          <div className=" font-serif font-semibold space-y-1 pb-2">
            <span className="text-orange-500  text-3xl ">Savour the Flavour, Share the Love </span>
            <h3 className="text-xl">Taste the World, One Recipe at a Time</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est unde
            aperiam fugit expedita quos delectus.
          </p>
        </div>
        <div className="">
          <img
            src={Recipe}
            alt=""
            className="p-5"
          />
        </div>
      </div>
    </div>
  );
}

export default Hoem;
