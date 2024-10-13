import { ReactNode } from "react";
import Navbar from "../(components)/Shared/Navbar/Navbar";
import BottomMenu from "../(components)/Shared/BottomMenu/BottomMenu";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <BottomMenu />
    </div>
  );
};

export default CommonLayout;
