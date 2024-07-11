"use client";
import React, { useState } from "react";
import Nav from "./Nav";
import Stories from "./Stories";
import Post from "./Post";
import PostMenu from "./PostMenu";
import hideOverlay from "@/HOC/hideOverlay";
import SidebarComp from "./Sidebar";
import { useSwipeable } from "react-swipeable";

const HomePage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const handlePostMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleSidebar = () => setShowSidebar(!showSidebar);

  const handlers = useSwipeable({
    onSwipedRight: () => setShowSidebar(true),
    onSwipedLeft: () => setShowSidebar(false),
  });

  const PostMenuComp = hideOverlay(PostMenu, setShowMenu);
  const SidebarCompPg = hideOverlay(SidebarComp, setShowSidebar);

  return (
    <div className="py-20 ">
      <Nav />
      <Post showPostMenu={handlePostMenu} />
      <PostMenuComp showMenu={showMenu} hideMenu={handlePostMenu} />
      <div {...handlers}>
        <SidebarCompPg
          showSidebar={showSidebar}
          handleSidebar={handleSidebar}
        />
      </div>
    </div>
  );
};

export default HomePage;
