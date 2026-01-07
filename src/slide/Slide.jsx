import Slider from "react-slick";
import productsData from "../productsdata/ProductsData";
import { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";

export default function Slide() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const taglineFilter = useCallback(()=>{
    return productsData.filter(item => item.tagline)
  },[]);

  const finalTagline = useMemo(()=> taglineFilter(),[taglineFilter])


  let navigate = useNavigate();

  const shopProduct = (id) =>{
    navigate(`/product/${id}`)
  }

  return (
    <>
      <Slider {...settings}>
        {finalTagline.map(item =>
         <div key={item.id}>
            <div className="flex flex-col-reverse lg:flex-row justify-evenly gap-10 px-4 sm:px-6 lg:px-20 mt-10">
              <div>
                <p className="text-2xl opacity-60">{item.title}</p>
                <p className="text-4xl font-bold">{item.tagline}</p>
                <div className="flex gap-3 mt-5">
                  <p className="text-xl">₹{item.finalPrice}</p>
                  <p className="line-through text-xl opacity-50">₹{item.originalPrice}</p>
                </div>
                <button className="mt-5 border border-red-700 bg-red-700 rounded h-10 w-30 cursor-pointer" onClick={()=>shopProduct(item.id)}>Shop Now</button>
              </div>
              <div>
                <img src={item.heroImage} alt="" className="w-full max-w-md"/>
              </div>
            </div>
         </div> 
        )}
      </Slider>
      
    </>
  );
}