import { useDispatch, useSelector } from "react-redux";
import { DEC, INC, REMOVE } from "./CartSlice";
import { Header } from "../Pages/Header";

export const Cart = () => {
  const data = useSelector((state) => state.cart);
  let dispatch = useDispatch();

  return (
    <>
    <Header />
    <div className="min-h-screen py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Cart</h1>

      {data.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          Your cart is empty
        </p>
      ) : (
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">

          <div className="lg:w-2/3">
            {data.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row gap-6 items-center shadow-md p-5 mb-5 rounded-xl bg-gray-500"
              >
                <img
                  src={item.heroImage}
                  alt={item.title}
                  className="w-24 h-24 object-contain"
                />

                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-lg font-semibold text-black">{item.title}</h3>
                  <p>${item.finalPrice}</p>
                  <p className="text-sm text-black">
                    Quantity: {item.quantity}
                  </p>
                </div>

                <div className="font-bold text-lg text-black">
                  ${item.finalPrice * item.quantity}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => dispatch(DEC(item.id))}
                    className="px-3 py-1 rounded bg-red-500 hover:bg-red-600 font-bold"
                  >
                    −
                  </button>

                  <button
                    onClick={() => dispatch(INC(item.id))}
                    className="px-3 py-1 rounded bg-green-500 text-white hover:bg-green-600 font-bold"
                  >
                    +
                  </button>

                  <button
                    onClick={() => dispatch(REMOVE(item.id))}
                    className="px-4 py-1 rounded bg-red-500 text-white hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT HALF → SUMMARY */}
          <div className="lg:w-1/3 bg-gray-900 p-6 rounded-xl shadow-md h-fit">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

            <div className="flex justify-between mb-2">
              <span>Total Products</span>
              <span>
                {data.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            </div>

            <div className="flex justify-between mb-4">
              <span>Total Amount</span>
              <span className="font-bold">
                $
                {data.reduce(
                  (sum, item) =>
                    sum + item.finalPrice * item.quantity,
                  0
                )}
              </span>
            </div>

            <button className="w-full py-3 rounded bg-green-500 text-white font-semibold hover:bg-green-600">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
    </>
  );
};