import { ReactNode } from "react";
import Navbar from "../../components/Shared/Navbar/Navbar";
import BottomMenu from "../../components/Shared/BottomMenu/BottomMenu";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="overflow-y-hidden max-h-screen">
      <Navbar />
      <div className="overflow-y-hidden">{children}</div>
      <BottomMenu />
    </div>
  );
};

export default CommonLayout;
