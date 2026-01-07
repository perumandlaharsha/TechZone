import { ProductsList } from "../productsdata/ProductsList";
import { Header } from "./Header";

export const Products = () => {
  return (
    <>
      <Header />
      <ProductsList />
      <Header />
    </>
  );
};