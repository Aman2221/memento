import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      <div className="container m-auto">{children}</div>
      <ToastContainer />
    </>
  );
};

export default Layout;
