import { useState } from "react";
import { ProductType } from "./ProductType";
import { Overview } from "./Overview";
import { Review } from "../review/Review";

export const Details = () => {

    const [activeTab,setActiveTab] = useState("specifications")

  return (
    <>
      <div className="flex flex-wrap justify-center gap-20 mt-10 ">
        <button className="px-4 py-2 text-sm sm:text-base hover:bg-red-600 rounded" onClick={()=>setActiveTab("specifications")}>Specifications</button>
        <button className="px-4 py-2 text-sm sm:text-base hover:bg-red-600 rounded" onClick={()=>setActiveTab("overview")}>Overview</button>
        <button className="px-4 py-2 text-sm sm:text-base hover:bg-red-600 rounded" onClick={()=>setActiveTab("review")}>Reviews</button>
      </div>

      {activeTab == "specifications" && <ProductType />}
      {activeTab == "overview" && <Overview/>}
      {activeTab == "review" && <Review/>}

    </>
  );
};