import Link from "next/link";
import React from "react";


const HomeSidebar = () => {
  return (
    <>
      <Link href="/followers">
        {/* <UsergroupAddOutlined /> Followers <span>0</span> */}
      </Link>
      <Link href="/following">
        {/* <UserSwitchOutlined /> Following <span>0</span> */}
      </Link>
      <Link href="/saved">
        {/* <HeartOutlined /> Saved <span>0</span> */}
      </Link>
    </>
  );
};

export default HomeSidebar;
