import { useParams } from "react-router-dom";
import productsData from "./ProductsData";
import { Details } from "../details/Details";
import { RelatedProducts } from "../related/RelatedProducts";
import { Header } from "../Pages/Header";
import { ADDTOCART } from "../cart/CartSlice";
import { useDispatch } from "react-redux";
import { Services } from "../services/Services";

export const ProductData = () => {
  const { id } = useParams();

  let dispatch = useDispatch();

  const product = productsData.find((item) => item.id === Number(id));

  if (!product) {
    return <p className="text-center mt-20 text-xl">Product not found</p>;
  }

  return (
    <>
      <Header />
      <div className="flex flex-col lg:flex-row gap-6 px-4 sm:px-6 lg:px-16">
        <div>
          {product.images.map((item, index) => (
            <img
              key={index}
              src={item}
              alt="product"
              className="w-40 h-40 m-5 border rounded opacity-60 hover:opacity-95"
            />
          ))}
        </div>
        <div>
          <img src={product.heroImage} alt="" className="h-190" />
        </div>
        <div>
          <div>
            <p className="text-3xl font-bold opacity-70">{product.title}</p>
            <p className="font-bold opacity-60 mt-2">{product.info}</p>
            <div className="flex mt-4">
              {Array(product.rateCount)
                .fill(0)
                .map((_, i) => (
                  <span key={i} className="text-red-500 text-sm">
                    ★
                  </span>
                ))}
              <div className="border ml-2 mr-2 opacity-60"></div>
              <p className="opacity-80 font-light">{product.ratings} Ratings</p>
            </div>
            <div className="border mt-8 opacity-20 w-md font-extralight"></div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 mt-6">
              <div>
                <div className="flex gap-3">
                  <p className="font-extrabold text-3xl mt-4 opacity-85">
                    ₹{product.finalPrice}
                  </p>
                  <p className="line-through font-extrabold text-xl mt-5 opacity-65">
                    ₹{product.originalPrice}
                  </p>
                </div>
                <p className="text-green-700 mt-3 text-xl">
                  You save: ₹{product.originalPrice - product.finalPrice}
                </p>
                <p className="font-light opacity-60">
                  (Inclusive of all taxes)
                </p>
              </div>
              <div className="my-12 ml-20">
                <span className="inline-block px-5 py-2 font-medium bg-green-700 text-white rounded">
                  In Stock
                </span>
              </div>
            </div>
          </div>
          <div className="border mt-8 opacity-20 w-md font-extralight"></div>
          <div>
            <p className="mt-10 font-bold opacity-75">Offers and Discount</p>
            <div className="flex gap-5 mt-8">
              <div className="border w-50 h-15 rounded  p-2 text-gray-300">
                No Cost EMI on Credit Card
              </div>
              <div className="border w-50 h-15 rounded  p-2 text-gray-300">
                Pay Later & Avail Cashback
              </div>
            </div>
          </div>
          <div className="border mt-8 opacity-20 w-md font-extralight"></div>
          <div className="my-10">
            <button
              className="w-50 h-10 bg-red-700 rounded cursor-pointer"
              onClick={() => dispatch(ADDTOCART({ ...product, quantity: 1 }))}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Details />

      <RelatedProducts />
      <Services />
    </>
  );
};