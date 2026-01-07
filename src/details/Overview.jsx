import { useParams } from "react-router-dom";
import productsData from "../productsdata/ProductsData";

export const Overview = () => {
  const { id } = useParams();

  const product = productsData.find((item) => item.id === Number(id));

  return (
    <>
      <div className="mt-16 mb-16">
        <p className="mt-8 font-bold text-lg">
          The {product.title} {product.info} provides with fabulous sound
          quality
        </p>
        <ul className="list-disc ml-6 text-gray-300 space-y-2 mt-5">
          <li>Sound Tuned to Perfection</li>
          <li>Comfortable to Wear</li>
          <li>Long Hours Playback Time</li>
        </ul>

        <p className="mt-6 font-medium opacity-85">
          Buy the {product.title} {product.info} which offers you with fabulous
          music experience by providing you with awesome sound quality.
        </p>
      </div>
    </>
  );
};