"use client";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import RecipeCard from "./RecipeCard";
import { useEffect, useState } from "react";
import HomeSidebar from "./HomeSidebar";
import { AdsItems } from "./Ads";

const MainContent = () => {
  const [ads, setAds] = useState<(JSX.Element | null)[]>([]);

  useEffect(() => {
    // Randomly generate ads only on the client side
    const randomAds = Array.from({ length: 10 }, (_, index) =>
      index % 4 === 0 ? AdsItems[Math.floor(Math.random() * AdsItems.length)] : null
    );
    setAds(randomAds);
  }, []);

  return (
    <div className="mx-10 mt-4 overflow-y-hidden">
      <Tabs>
        <TabList className="text-center flex gap-4 mb-4 justify-center flex-wrap">
          <Tab className="px-2 py-1">Most Liked</Tab>
          <Tab className="px-2 py-1">Free</Tab>
          <Tab className="px-2 py-1">Premium</Tab>
        </TabList>

        <div className="flex justify-center gap-4">
          {/* Left side */}
          <div className="md:w-3/12 hidden md:flex border-r-2 p-4 rounded-md">
            <div className="ml-10 flex flex-col gap-8">
              <HomeSidebar />
            </div>
          </div>
          {/* Middle */}
          <div
            className="flex max-h-[78vh] flex-col gap-4 mx-10 w-full md:w-6/12 
        overflow-y-auto"
          >
            <TabPanel>
              {Array.from({ length: 10 }, (_, index) => (
                <div key={index}>
                  <RecipeCard />
                  <div>{ads[index]}</div>
                </div>
              ))}
            </TabPanel>
            <TabPanel>
              <h2>Free Content</h2>
            </TabPanel>
            <TabPanel>
              <h2>Premium content</h2>
            </TabPanel>
          </div>
          {/* Right side */}
          <div className="w-3/12 hidden md:block border-l-2 p-4 rounded-md">
            Here will be the options
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default MainContent;