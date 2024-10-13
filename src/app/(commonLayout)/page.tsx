import React from "react";
import Preferences from "../(components)/HomePage/Preferences";
import HomeSidebar from "../(components)/HomePage/HomeSidebar";

const Home = () => {
  return (
    <div className="mx-10">
      <Preferences />
      <div className="flex justify-center gap-4">
        <div className="w-3/12 hidden md:flex border-r-2  flex-col gap-8  min-h-screen p-4 rounded-md">
          <HomeSidebar />
        </div>
        <div className="w-full mx-10 md:w-6/12">asdfs</div>
        <div className="w-3/12 hidden md:flex border-l-2 p-4 rounded-md">
          Ads
        </div>
      </div>
    </div>
  );
};

export default Home;
