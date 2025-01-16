import {
  HeartOutlined,
  HomeOutlined,
  UsergroupAddOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const BottomMenu = () => {
  return (
    <div className="w-full md:hidden bg-white absolute   border-t-2 mx-auto bottom-0 left-0    gap-8 p-4 rounded-md">
      <div className="flex justify-between items-center">
        <Link
          className="flex flex-wrap items-center justify-center gap-2"
          href="/"
        >
          <HomeOutlined /> Home
        </Link>

        <Link
          className="flex flex-wrap items-center justify-center gap-2"
          href="/followers"
        >
          <UsergroupAddOutlined /> Followers
        </Link>
        <Link
          className="flex flex-wrap items-center justify-center gap-2"
          href="/following"
        >
          <UserSwitchOutlined /> Following
        </Link>
        <Link
          className="flex flex-wrap items-center justify-center gap-2"
          href="/saved"
        >
          <HeartOutlined /> Saved
        </Link>
      </div>
    </div>
  );
};

export default BottomMenu;
