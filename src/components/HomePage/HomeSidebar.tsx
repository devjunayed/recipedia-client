import Link from "next/link";
import React from "react";
import { FaUsers } from "react-icons/fa";
import { IoHeartOutline } from "react-icons/io5";
import { PiUserSwitch } from "react-icons/pi";



const HomeSidebar = () => {
  return (
    <>
      <Link href="/followers" className="flex items-center gap-1">
        <FaUsers /> Followers <span>0</span>
      </Link>
      <Link href="/following" className="flex items-center gap-1">
        <PiUserSwitch /> Following <span>0</span>
      </Link>
      <Link href="/saved" className="flex items-center gap-1">
        <IoHeartOutline /> Saved <span>0</span>
      </Link>
    </>
  );
};

export default HomeSidebar;
