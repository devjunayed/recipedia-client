import { Button } from "@nextui-org/button";


const Preferences = () => {
  return (
    <div className=" py-4  w-full bg-white z-50">
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button>Most Liked</Button>
        <Button>Free</Button>
        <Button>Premium</Button>
      </div>
    </div>
  );
};

export default Preferences;