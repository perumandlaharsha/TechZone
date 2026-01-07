import Slider from "react-slick";
import productsData from "../productsdata/ProductsData";
import { Link } from "react-router-dom";

export const SmallSlick = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <div className="bg-black text-white py-16 px-6">
      <h2 className="text-center text-3xl font-semibold mb-10 mt-20 opacity-80">
        Featured Products
      </h2>

      <Slider {...settings}>
        {productsData.map((item) => (
          <Link
            key={item.id}
            to={`/product/${item.id}`}
            className="mt-20 block cursor-pointer hover:bg-black"
          >
            <p className="opacity-60 ml-20">{item.title}</p>

            <img
              src={item.heroImage}
              alt={item.title}
              className="w-50 mx-auto"
            />

            <div className="flex gap-3 mt-5 justify-center">
              <p className="text-xl">₹{item.finalPrice}</p>
              <p className="line-through text-xl opacity-50">
                ₹{item.originalPrice}
              </p>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};