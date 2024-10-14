import { Image } from "antd";

const RecipeCard = () => {
  return (
    <div className="w-full border p-2">
      <div className="flex gap-2 items-center mb-2 ">
        <Image
          src="images.jpg"
          className="rounded-full"
          width={25}
          height={25}
          alt="user logo"
        />
        {/* Name of poster */}
        <h3 className="font-semibold">Md Junayed</h3>
      </div>
      <Image src="images.jpg"  className="w-full -z-10" alt="demo" />
      <h1>Title of the Recipe</h1>
      <div className="border-t-2">
        <button>Like</button>
        <button>Comments</button>
        <button>Saved</button>
      </div>
    </div>
  );
};

export default RecipeCard;
