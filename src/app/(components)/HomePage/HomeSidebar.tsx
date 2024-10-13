import Link from "next/link";
import React from "react";
import { HeartOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import { UserSwitchOutlined } from "@ant-design/icons";

const HomeSidebar = () => {
  return (
    <>
      <Link href="/followers">
        <UsergroupAddOutlined /> Followers
      </Link>
      <Link href="/following">
        <UserSwitchOutlined /> Following
      </Link>
      <Link href="/saved">
        <HeartOutlined /> Saved
      </Link>
    </>
  );
};

export default HomeSidebar;
