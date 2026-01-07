import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Search } from "../details/Search";
import { AllForms } from "../forms/AllForms";
import { useSelector } from "react-redux";

export const Header = () => {
  const name = "Tech-Zone";
  const [showSearch, setShowSearch] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const cartData = useSelector((state) => state.cart);

  return (
    <>
      <div className="flex items-center justify-between bg-black text-white px-4 sm:px-6 lg:px-12 py-3">
        <Link className="font-bold text-lg sm:text-xl lg:text-2xl" to={"/"}>
          {name}
        </Link>

        <div className="flex items-center gap-4 sm:gap-6">
          <div className="relative group">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="ext-lg sm:text-xl cursor-pointer"
              onClick={() => setShowSearch((prev) => !prev)}
            />
            <span
              className="absolute top-full left-1/2 -translate-x-1/2 mt-2
              scale-0 group-hover:scale-100
              bg-black text-white text-sm px-2 py-1 rounded transition"
            >
              Search
            </span>
          </div>

          <Link className="relative group" to={"/cart"}>
            <FontAwesomeIcon
              icon={faCartShopping}
              className="text-lg sm:text-xl cursor-pointer"
            />
            {cartData.length > 0 && (
              <span className="absolute -top-2 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartData.length}
              </span>
            )}
          </Link>

          <div className="relative">
            <FontAwesomeIcon
              icon={faUser}
              className="text-lg sm:text-xl cursor-pointer"
              onClick={() => setShowForm((prev) => !prev)}
            />
            {showForm && (
              <div className="absolute right-0 mt-2 z-50">
                <AllForms />
              </div>
            )}
          </div>
        </div>
      </div>

      {showSearch && (
        <div className="flex justify-center mt-4">
          <Search />
        </div>
      )}
    </>
  );
};