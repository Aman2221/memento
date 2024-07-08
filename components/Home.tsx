"use client";
import React, { useState, useRef, useEffect } from "react";
import Nav from "./Nav";
import Stories from "./Stories";
import Footer from "./Footer";
import Post from "./Post";
import PostMenu from "./PostMenu";
import hideOverlay from "@/HOC/hideOverlay";
import SidebarComp from "./Sidebar";

const HomePage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const handlePostMenu = () => {
    setShowMenu(!showMenu);
  };

  const PostMenuComp = hideOverlay(PostMenu, setShowMenu);
  const SidebarCompPg = hideOverlay(SidebarComp, setShowSidebar);

  return (
    <div className="py-20 ">
      <Nav />
      <Post showPostMenu={handlePostMenu} />
      <PostMenuComp showMenu={showMenu} hideMenu={handlePostMenu} />
      <SidebarCompPg showSidebar={showSidebar} />
    </div>
  );
};

export default HomePage;
