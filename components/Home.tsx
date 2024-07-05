"use client";
import React, { useState, useRef, useEffect } from "react";
import Nav from "./Nav";
import Stories from "./Stories";
import Footer from "./Footer";
import Post from "./Post";
import PostMenu from "./PostMenu";

const HomePage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const showPostMenu = () => {
    setShowMenu(!showMenu);
  };
  const sidebarRef = useRef<HTMLDivElement>(null);

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
      <Post showPostMenu={showPostMenu} />
      <PostMenu showMenu={showMenu} />
      <Footer />
    </div>
  );
};

export default HomePage;
