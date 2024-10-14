import { Button } from "antd";

const Ads = () => {
  return (
    <div>
      <div className="bg-blue-800 text-white p-2 text-center rounded-md mt-4 ">
        <h2>Buy 1 to get 1 free</h2>
        <Button className="mt-4">Buy Now</Button>
      </div>
      <div className="bg-red-800 text-white p-1 text-center rounded-md mt-4 ">
        <h2>Upto 10% discount on Ithostbd</h2>
        <p className="mt-4">Coupon: Junayed10</p>
      </div>
      <div className="bg-blue-800 text-white p-2 text-center rounded-md mt-4 ">
        <h2>Buy 1 to get 1 free</h2>
        <Button className="mt-4">Buy Now</Button>
        <Button className="mt-4">Buy Now</Button>
      </div>
    </div>
  );
};

export default Ads;
