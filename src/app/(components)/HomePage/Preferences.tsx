import { Button } from "antd";

const Preferences = () => {
  return (
    <div className="fixed top-[65px]  w-full bg-white z-50 -translate-x-1/2 left-1/2">
      <div className="flex flex-wrap items-center justify-center gap-4 my-4">
        <Button>Most Liked</Button>
        <Button>Free</Button>
        <Button>Premium</Button>
      </div>
    </div>
  );
};

export default Preferences;
