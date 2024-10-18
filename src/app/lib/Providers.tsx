import { NextUIProvider } from "@nextui-org/react";
import React, { ReactNode, useRef } from "react";
import { AppStore, makeStore } from "../redux/store";
import { Provider } from "react-redux";

const Providers = ({ children }: { children: ReactNode }) => {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }
  return (
    <Provider store={storeRef.current}>
      <NextUIProvider>{children}</NextUIProvider>
    </Provider>
  );
};

export default Providers;
