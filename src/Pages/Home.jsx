import { Banner } from "../banner/Banner";
import { SmallSlick } from "../slick/SmallSlick";
import { Categories } from "../categories/Categories";
import { Header } from "./Header";
import { Services } from "../services/Services";


export const Home = () => {

  return (
    <>
    <Header />
      <Banner />
      <div className="hidden md:block">
        <SmallSlick />
      </div>
      <Categories />
      <Header />
      <Services />
    </>
  );
};