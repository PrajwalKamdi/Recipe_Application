import React, { useEffect, useState } from "react";
import { IoStar } from "react-icons/io5";
import { useSelector } from "react-redux";

function SingleItem() {
  const [item, setItem] = useState({});
  const single = useSelector((store) => store.SingleItemSlice);
  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${single}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  });
  return (
    <div className=" mt-[90px] md:px-16 font-serif">
      
      <div className="m-5 p-5 border border-black shadow-sm grid md:grid-cols-2 md:gap-10">
        
        <div>
          <img src={item.image} alt="" className=""/>
        </div>
        <div className="space-y-1">
        <h1 className="text-4xl text-center py-5">{item.name}</h1>
          <p> <span className="text-[17px] font-semibold">Ingredients : </span>{item.ingredients}.</p>
          <p><span className="text-[17px] font-semibold">Instructions : </span>{item.instructions}</p>
          <p><span className="text-[17px] font-semibold">MealType : </span>{item.mealType}.</p>
          <p><span className="text-[17px] font-semibold">Serving : </span>{item.servings}</p>
          <p><span className="text-[17px] font-semibold">Difficulty : </span>{item.difficulty}.</p>
          <p><span className="text-[17px] font-semibold">PrepTimeMinutes : </span>{item.prepTimeMinutes}</p>
          <p><span className="text-[17px] font-semibold">CaloriesPerServing : </span>{item.caloriesPerServing}</p>
          <p><span className="text-[17px] font-semibold">CookTimeMinutes : </span>{item.cookTimeMinutes}</p>
          <p className="flex items-center space-x-1 text-[17px] font-semibold"><span>Rating : </span> {item.rating}<IoStar color="gold"/></p>
        </div>
      </div>
    </div>
  );
}

export default SingleItem;
