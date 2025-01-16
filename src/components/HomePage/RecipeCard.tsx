import {
  StarOutlined,
} from "@ant-design/icons";
import { Image } from "antd";

const RecipeCard = () => {
  return (
    <div className="w-full border rounded-lg px-4 shadow-md pt-4">
      <div className="flex gap-2 items-center mb-2 ">
          
          <Image
            src="images.jpg"
            className="rounded-full "
            width={25}
            height={25}
            alt="user logo"
          />
          
        <h3 className="font-semibold">Md Junayed</h3>
      </div>
      <h1 className="mb-2 font-semibold text-xl">Title of the Recipe</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
        accusamus itaque suscipit dolorem debitis omnis quidem illum nemo dicta
        repellat enim ab aliquid sit quam mollitia, reiciendis, reprehenderit
        natus repellendus!{" "}
      </p>
      <button className="my-2 text-gray-600">Read More...</button>

      <div className="w-full relative">
        <Image
          width="100%"
          src="images.jpg"
          className="w-full h-auto rounded "
          alt="demo"
          preview={false}
          style={{ objectFit: "cover", display: "block" }}
        />
        {/* <span className="absolute top-0 right-0 px-2 py-1 m-1 bg-white rounded">Free</span> */}
        <span className="absolute top-0 right-0 px-2 py-1 m-1 text-white bg-orange-600 rounded"><StarOutlined /> Premium</span>
      </div>

      <h5 className="font-light text-sm my-1">500 vote scores, 5 comments</h5>
      {/* <div className=" py-4 flex border-t-2 justify-between items-center">
        <button className=" flex items-center gap-2">
          <UpCircleOutlined /> Upvote
        </button>
        <button className=" flex items-center gap-2">
          <DownCircleOutlined /> Downvote
        </button>
        <button className=" flex items-center gap-2">
          <CommentOutlined /> Comments
        </button>
        <button className="flex items-center gap-2 ">
          <HeartOutlined /> Save
        </button>
      </div> */}
    </div>
  );
};

export default RecipeCard;
