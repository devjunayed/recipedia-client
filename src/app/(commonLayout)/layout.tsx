import { ReactNode } from "react";
import Navbar from "../(components)/Shared/Navbar/Navbar";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default CommonLayout;
