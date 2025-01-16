import React from "react";
import Preferences from "@/components/HomePage/Preferences";
import HomeSidebar from "@/components/HomePage/HomeSidebar";
import Ads, { AdsItems } from "@/components/HomePage/Ads";
import RecipeCard from "@/components/HomePage/RecipeCard";

const Home = () => {
  return (
    <div className="mx-10  overflow-y-hidden">
      <Preferences />
      <div className="flex justify-center gap-4">
        <div className="md:w-3/12 hidden  md:flex  border-r-2    min-h-screen p-4 rounded-md">
          <div className=" ml-10 flex flex-col gap-8">
            <HomeSidebar />
          </div>
        </div>
        <div
          className="flex max-h-[78vh] pb-24 flex-col gap-4 mx-10 w-full md:w-6/12 
        overflow-y-scroll"
        >
          {Array.from({ length: 10 }, (_, index) => index).map((_, index) => (
            <div key={index}>
              <RecipeCard />
              <span className="">
                {index % 4 == 0 && AdsItems[Math.floor(Math.random() * 3)]}
              </span>
            </div>
          ))}
        </div>
        <div className="w-3/12 hidden md:block border-l-2 p-4 rounded-md">
          Ads
          <Ads />
        </div>
      </div>
    </div>
  );
};

export default Home;
