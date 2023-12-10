import React from "react";
import BannerCard from "../home/BannerCard";

const Banner = () => {
  return (
    <div className="px-4 lg:px-24 bg-cyan-200 flex items-center">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        {/* left side*/}
        <div className="md:w-1/2 space-y-8 h-full">
          <h2 className="text-5xl font-bold leading-snug text-black">
            Meet your next{" "}
            <span className="text-blue-700">Favorite Book⭐📘</span>
          </h2>
          <p className="md:w-4/5">
            "Books are, let's face it, better than everything else. If we played
            Cultural Fantasy Boxing League, and made books go fifteen rounds in
            the ring against the best that any other art form had to offer, then
            books would win pretty much every time."{" "}
            <span className="font-semibold">
              ~ Nick Hornby, The Polysyllabic Spree🌟
            </span>
          </p>
          {/* <div>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search a book"
              className="py-2 rounded-s-sm outline-none"
            />
            <button className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 ">
              Search
            </button>
          </div> */}
        </div>
        {/* right side*/}
        <div>
          <BannerCard />
        </div>
      </div>
    </div>
  );
};

export default Banner;
