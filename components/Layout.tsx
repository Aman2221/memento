import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "animate.css";
import Footer from "./Footer";

const Layout = ({
  children,
  showFooter = false,
}: {
  children?: React.ReactNode;
  showFooter?: boolean;
}) => {
  return (
    <>
      <div className="container m-auto">{children}</div>
      {showFooter ? <Footer /> : <></>}
      <ToastContainer />
    </>
  );
};

export default Layout;
