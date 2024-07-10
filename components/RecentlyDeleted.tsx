import React from "react";
import Nav from "./Nav";

const RecentlyDeletedPg = () => {
  return (
    <div>
      <Nav
        showBack={true}
        showRightSide={false}
        middleText="Recently Deleted"
      />

      <div className="flex-center h-dvh flex-col">
        <span className="font-semibold text-center">
          No Recently Deleted Content
        </span>
        <span className="font-normal w-72 text-center mt-2">
          When you delete posts,stories,viedos and reels they’ll show up
          here.Only you can see them
        </span>
      </div>
    </div>
  );
};

export default RecentlyDeletedPg;
