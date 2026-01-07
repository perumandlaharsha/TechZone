import { Link, useNavigate } from "react-router-dom";
import productsData from "../productsdata/ProductsData";
import { ADDTOCART } from "../cart/CartSlice";
import { useDispatch } from "react-redux";

export const AllCards = ({ category }) => {
  const filteredProducts =
    category === "All"
      ? productsData.slice(0, 11)
      : productsData.filter((item) => item.category === category);

  let navigate = useNavigate();
  let dispatch = useDispatch();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    navigate("/products");
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="bg-gray-900 border border-gray-800 rounded-lg p-4 flex flex-col justify-between hover:border-red-600 transition"
          >
            <Link to={`/product/${item.id}`} onClick={scrollToTop}>
              <div className="flex justify-center">
                <img
                  src={item.heroImage}
                  alt={item.title}
                  className="h-36 object-contain"
                />
              </div>

              <div className="flex items-center gap-1 mt-3">
                {Array(item.rateCount)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i} className="text-red-500 text-sm">
                      ★
                    </span>
                  ))}
              </div>
            </Link>

            <h2 className="text-white font-semibold mt-2">{item.title}</h2>

            <p className="text-gray-400 text-sm mt-1">{item.info}</p>

            <div className="flex items-center gap-3 mt-3">
              <span className="text-white font-bold text-lg">
                ₹{item.finalPrice}
              </span>
              <span className="text-gray-500 line-through text-sm">
                ₹{item.originalPrice}
              </span>
            </div>

            <button
              className="mt-4 bg-red-600 hover:bg-red-700 text-white py-2 rounded-md text-sm font-medium"
              onClick={() =>
                dispatch(
                  ADDTOCART({
                    ...item,
                    price: item.finalPrice,
                  })
                )
              }
            >
              Add to cart
            </button>
          </div>
        ))}

        <button
          className="bg-[#111] border border-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:border-red-600 transition cursor-pointer"
          onClick={scrollToTop}
        >
          <p className="text-lg">Browse All Products →</p>
        </button>
      </div>
    </>
  );
};