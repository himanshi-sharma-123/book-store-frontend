import React from "react";
import Banner from "../components/Banner";
import BestSellBooks from "./BestSellBooks";
import FavBook from "./FavBook";
import PromoBanner from "./PromoBanner";
import OtherBooks from "./OtherBooks";
import Review from "./Review";

const Home = () => {
  return (
    <div>
      <Banner />
      <BestSellBooks />
      <FavBook />
      {/* <PromoBanner /> */}
      <OtherBooks />
      <Review />
    </div>
  );
};

export default Home;

// <div className="">
//   <div className="h-screen">Home</div>
//   <div className="h-screen bg-red-600"></div>
// </div>
