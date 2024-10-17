import { Image } from "antd";

const RecipeCard = () => {
  return (
    <div className="w-full border rounded-lg px-4 shadow-md pt-4">
      <div className="flex gap-2 items-center mb-2 ">
        <Image
          src="images.jpg"
          className="rounded-full"
          width={25}
          height={25} 
          alt="user logo"
        />
        <h3 className="font-semibold">Md Junayed</h3>
      </div>
      <h1 className="mb-2">Title of the Recipe</h1>

      <div className="w-full">
        <Image
        width="100%"
          src="images.jpg"
          className="w-full h-auto rounded "
          alt="demo"
          preview={false} 
          style={{ objectFit: 'cover', display: 'block' }} 
        />
      </div>

      <div className=" my-4 mx-10 flex justify-between items-center">
        <button className="mr-2">Upvote</button>
        <button className="mr-2">Downvote</button>
        <button className="mr-2">Comments</button>
        <button>Saved</button>
      </div>
    </div>
  );
};

export default RecipeCard;
