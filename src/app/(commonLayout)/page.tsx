import React from "react";
import Preferences from "../(components)/HomePage/Preferences";
import HomeSidebar from "../(components)/HomePage/HomeSidebar";
import Ads from "../(components)/HomePage/Ads";
import RecipeCard from "../(components)/HomePage/RecipeCard";

const Home = () => {
  return (
    <div className="mx-10 mt-32">
      <Preferences />
      <div className="flex justify-center gap-4">
        <div className="w-3/12    border-r-2    min-h-screen p-4 rounded-md">
          <div className="hidden fixed mt-4 left-0 ml-10 md:flex flex-col gap-8">
            <HomeSidebar />
          </div>
        </div>
        <div className="flex flex-col gap-4 mx-10 md:w-6/12 overflow-y-scroll">
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
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
