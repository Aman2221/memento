"use client";
import React, { useState, useRef, useEffect } from "react";
import Nav from "./Nav";
import Stories from "./Stories";
import Footer from "./Footer";
import Post from "./Post";
import PostMenu from "./PostMenu";
import hideOverlay from "@/HOC/hideOverlay";

const HomePage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handlePostMenu = () => {
    setShowMenu(!showMenu);
  };

  const sidebarRef = useRef<HTMLDivElement>(null);
  const PostMenuComp = hideOverlay(PostMenu, setShowMenu);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="py-20 ">
      <Nav />
      <Post showPostMenu={handlePostMenu} />
      <PostMenuComp showMenu={showMenu} hideMenu={handlePostMenu} />
    </div>
  );
};

export default HomePage;
