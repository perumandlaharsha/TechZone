import { useParams } from "react-router-dom";
import productsData from "../productsdata/ProductsData";

export const ProductType = () => {
  const { id } = useParams();

  const product = productsData.find(
    (item) => item.id === Number(id)
  );

  return (
    <div className="mt-16 px-20 text-gray-300 mb-16">
      <div className="grid grid-cols-2 gap-y-6 text-sm">

        <div className="opacity-80 font-bold">Brand</div>
        <div className="font-medium text-gray-200">
          {product.brand}
        </div>

        <div className="opacity-80 font-bold">Model</div>
        <div className="font-medium text-gray-200">
          {product.title}
        </div>

        <div className="opacity-80 font-bold">Generic Name</div>
        <div className="font-medium text-gray-200">
          {product.category}
        </div>

        <div className="opacity-80 font-bold">Headphone Type</div>
        <div className="font-medium text-gray-200">
          {product.type}
        </div>

        <div className="opacity-80 font-bold">Connectivity</div>
        <div className="font-medium text-gray-200">
          {product.connectivity}
        </div>

      </div>
    </div>
  );
};