import { Link, useParams } from "react-router-dom";
import productsData from "../productsdata/ProductsData";

export const RelatedProducts = () => {
  const { id } = useParams();

  const currentProducts = productsData.find((item) => item.id === Number(id));

  const relativeProducts = productsData
    .filter(
      (item) =>
        item.category === currentProducts.category &&
        item.id != currentProducts.id
    )
    .slice(0, 4);

    const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 mb-20">
        {relativeProducts.map((item) => (
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

            <button className="mt-4 bg-red-600 hover:bg-red-700 text-white py-2 rounded-md text-sm font-medium">
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};