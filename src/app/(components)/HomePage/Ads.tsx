import { Button } from "antd";

export const AdsItems = [
  <>
  <div className="bg-blue-800 text-white py-4 px-2 text-center rounded-md mt-4 ">
        <h2>Buy 1 to get 1 free</h2>
        <Button className="mt-4">Buy Now</Button>
      </div>
  </>,
  <>
    <div className="bg-red-800 text-white py-4 px-2 text-center rounded-md mt-4 ">
        <h2>Upto 10% discount on Ithostbd</h2>
        <p className="mt-4">Coupon: Junayed10</p>
      </div>
  </>
  ,
  <>
   <div className="bg-blue-800 text-white py-4 px-2 text-center rounded-md mt-4 ">
        <h2>Buy 1 to get 1 free</h2>

        <Button className="mt-4">Buy Now</Button>
      </div>
  </>
]


const Ads = () => {
  return (
    <div className="my-2 ">
      
      {AdsItems[Math.floor(Math.random()*3)]}
      {AdsItems[Math.floor(Math.random()*3)]}
      {AdsItems[Math.floor(Math.random()*3)]}
     
    </div>
  );
};

export default Ads;
