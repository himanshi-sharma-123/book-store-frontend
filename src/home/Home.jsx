import React from "react";
import Banner from "../components/Banner";
import FavoriteBooks from "./FavoriteBooks";

const Home = () => {
  return (
    <div>
      <Banner />
      <FavoriteBooks />
    </div>
  );
};

export default Home;

// <div className="">
//   <div className="h-screen">Home</div>
//   <div className="h-screen bg-red-600"></div>
// </div>
