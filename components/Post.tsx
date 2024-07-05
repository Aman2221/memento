"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import data from "@/json/index.json";

const Post = ({
  showPostMenu,
  classes = "post-bg",
}: {
  showPostMenu: () => void;
  classes?: string;
}) => {
  const router = useRouter();

  return (
    <>
      {data.user_posts.map((item) => (
        <div className={`border p-3 rounded-md ${classes} mt-6`}>
          <div className="post_header flex justify-between items-start">
            <div className="flex  gap-4 ">
              <div>
                <Image src="/img/y-user.png" alt="" height={50} width={50} />
              </div>
              <div className="flex flex-col">
                <h1 className="text-md font-semibold">{item.name}</h1>
                <span className="text-sm">{item.department})</span>
                <span className="text-xs">{item.date_time}</span>
              </div>
            </div>
            <Image
              onClick={showPostMenu}
              src="/img/menu-dots.svg"
              alt=""
              height={20}
              width={20}
            />
          </div>
          <div className="my-2 flex">
            <span className="text-sm">
              {item.description}{" "}
              <span onClick={() => router.push("/post-details")}>see more</span>
            </span>
          </div>
          <Image
            className="w-full my-4 rounded"
            src="/img/post-img.jpg"
            width={0}
            height={0}
            sizes="100vw"
            alt="post image"
          />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image src="img/like.svg" alt="" height={20} width={20} />
              <span>Like</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src="img/comment.svg" alt="" height={20} width={20} />
              <span>Comment</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src="img/share.svg" alt="" height={20} width={20} />
              <span>Share</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Post;
