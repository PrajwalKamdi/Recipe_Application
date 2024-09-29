import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { itemsAction } from "../Store/ItemsSlice";
import { singleItemAction } from "../Store/SingleItem";
import { BiLoaderCircle, BiSearch } from "react-icons/bi";

function AllRecipe() {
  const value = useRef();
  const items = useSelector((store) => store.items);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const ok = () => {
    console.log(value.current.value)
  };
  useEffect(() => {
    async function getRecipes() {
      const url = `https://dummyjson.com/recipes/search?q=${value.current.value}`;
      const d1 = await fetch(url);
      setLoading(true);
      const d2 = await d1.json();
      dispatch(itemsAction.addInitialItems(d2.recipes));
    }
    getRecipes();
  }, [ok]);

  return (
    <>
      <main className="mt-[80px] p-5 md:px-16 font-serif">
        <div className="border  flex justify-between items-center">
          <input
            type="text"
            className="outline-none px-2"
            ref={value}
            placeholder="Search For Recipe"
            onChange={ok}
          />
          <button className="border p-2 bg-slate-200">
            <BiSearch />
          </button>
        </div>
        <h1 className="text-xl font-semibold py-2">
          Most Trending Recipe You Should Try
        </h1>

        {loading ? (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3  lg:grid-cols-5">
            {items.map((i) => (
              <div className="border p-4 shadow-md " key={i.id}>
                <img src={i.image} alt="" />
                <p className="line-clamp-1 font-semibold py-1">{i.name}</p>
                <button
                  className=" mt-1 p-1 border border-black rounded-md shadow-orange-100 hover:bg-slate-400 duration-300"
                  onClick={() => {
                    dispatch(singleItemAction.setSingleItem(i.id));
                  }}
                >
                  <Link to={`${i.id}`}>Read More</Link>
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className=" py-20 duration-75 flex h-[500px] items-center  justify-center font-semibold space-x-2 text-xl">
            Loading
            <BiLoaderCircle size={50} className="animate-spin" />
          </div>
        )}
      </main>
    </>
  );
}

export default AllRecipe;
