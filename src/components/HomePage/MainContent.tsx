"use client";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import RecipeCard from "./RecipeCard";
import { AdsItems } from "./Ads";

const MainContent = () => {
  return (
    <div className=" py-4  w-full bg-white z-50">
      {/* <div className="flex flex-wrap items-center justify-center gap-4">
        <button className="border px-2 py-1 rounded-sm">Most Liked</button>
        <button>Free</button>
        <button>Premium</button>
      </div> */}

      <Tabs>
        <TabList className="text-center">
          <Tab>Free</Tab>
          <Tab>Title 2</Tab>
        </TabList>

        <TabPanel>
           {Array.from({ length: 10 }, (_, index) => index).map((_, index) => (
            <div key={index}>
              <RecipeCard />
              <span className="">
                {index % 4 == 0 && AdsItems[Math.floor(Math.random() * 3)]}
              </span>
            </div>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default MainContent;
