"use client";
import React from "react";
import HomeSidebar from "@/components/HomePage/HomeSidebar";
import Ads, { AdsItems } from "@/components/HomePage/Ads";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import RecipeCard from "@/components/HomePage/RecipeCard";

const Home = () => {
  return (
    <div className="mx-10 mt-4   overflow-y-hidden">
      <Tabs>
        <TabList className="text-center flex gap-4 mb-4 justify-center flex-wrap">
          <Tab className="px-2 py-1">Most Liked</Tab>
          <Tab className="px-2 py-1">Free</Tab>
          <Tab className="px-2 py-1">Premium</Tab>
        </TabList>

        <div className="flex justify-center gap-4">
          {/* Left side */}
          <div className="md:w-3/12 hidden  md:flex  border-r-2     p-4 rounded-md">
            <div className=" ml-10 flex flex-col gap-8">
              <HomeSidebar />
            </div>
          </div>
          {/* Middle */}
          <div
            className="flex max-h-[78vh]  flex-col gap-4 mx-10 w-full md:w-6/12 
        overflow-y-auto"
          >
            <TabPanel>
              {Array.from({ length: 10 }, (_, index) => index).map(
                (_, index) => (
                  <div key={index}>
                    <RecipeCard />
                    <span className="">
                      {index % 4 == 0 &&
                        AdsItems[Math.floor(Math.random() * 3)]}
                    </span>
                  </div>
                )
              )}
            </TabPanel>
            <TabPanel>
              <h2>Free Content asdfasdf</h2>
            </TabPanel>
            <TabPanel>
              <h2>Premium content</h2>
            </TabPanel>
          </div>
          {/* Right side */}
          <div className="w-3/12 hidden md:block border-l-2 p-4 rounded-md">
            Ads
            <Ads />
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default Home;
