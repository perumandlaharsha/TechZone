import { useState } from "react";
import { AllCards } from "../cards/AllCards";

export const Categories = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <>
      <div className="text-5xl font-light text-center mt-25 opacity-80">
        Top Products
      </div>

      <div className="flex justify-evenly mt-20 mb-20 text-2xl opacity-75">
        <button onClick={() => setActiveCategory("All")} className="hover:bg-red-700 rounded">All</button>
        <button onClick={() => setActiveCategory("Headphones")} className="hover:bg-red-700 rounded">Headphones</button>
        <button onClick={() => setActiveCategory("Earbuds")} className="hover:bg-red-700 rounded">Earbuds</button>
        <button onClick={() => setActiveCategory("Earphones")} className="hover:bg-red-700 rounded">Earphones</button>
        <button onClick={() => setActiveCategory("Neckbands")} className="hover:bg-red-700 rounded">Neckbands</button>
      </div>

      <AllCards category={activeCategory} />
    </>
  );
};