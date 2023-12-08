import React from "react";
import Banner from "../components/Banner";
import BestSellBooks from "./BestSellBooks";
import FavBook from "./FavBook";

const Home = () => {
  return (
    <div>
      <Banner />
      <BestSellBooks />
      <FavBook />
    </div>
  );
};

export default Home;

// <div className="">
//   <div className="h-screen">Home</div>
//   <div className="h-screen bg-red-600"></div>
// </div>
