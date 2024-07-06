"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Nav from "./Nav";
import { useRouter } from "next/navigation";
import SelectedImages from "./SelectedImages";
import SmBgPurple from "@/Buttons/SmBgPurple";
import SchedulePost from "./SchedulePost";
import hideOverlay from "@/HOC/hideOverlay";
import Attachments from "./Attachments";

const CreatePostPg = () => {
  const router = useRouter();
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [postText, setPostText] = useState("");
  const [showSchedule, setShowSchedule] = useState(false);
  const [showAttach, setShowAttach] = useState(false);
  const SchedulePostComp = hideOverlay(SchedulePost, setShowSchedule);
  const AttachmentsComp = hideOverlay(Attachments, setShowAttach);

  const handleButtonClick = () => {
    fileInputRef?.current?.click();
  };

  const handleSchedule = () => setShowSchedule(!showSchedule);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setFiles(files);
  };

  const handleInputChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    let target: any = e.target;
    setPostText(target.value);
  };

  const handleRemoveImg = (index: number) => {
    const updFiles = files.splice(index, 1);
    setFiles([...files]);
  };

  return (
    <div>
      <Nav
        middleText="Your Feed"
        isComp={true}
        PorpCom={
          <div className="flex items-center gap-3">
            <i
              onClick={() => router.push("/home")}
              className="bx bx-x text-4xl font-bold"
            ></i>
            <Image
              className="rounded-full shadow-md"
              src="/img/y-user.png"
              height={50}
              width={50}
              alt="user img"
            />
          </div>
        }
      />
      <div className="py-20">
        <textarea
          onChange={handleInputChange}
          className="w-full border-none outline-none bg-transparent"
          id="w3review"
          name="w3review"
          rows={4}
          placeholder="At w3schools.com you will learn how to make a website. They offer free
          tutorials in all web development technologies."
          value={postText}
        ></textarea>
        {files.length > 0 && (
          <div className="flex gap-3 items-center my-3">
            <SelectedImages
              files={files}
              handleRemoveImg={handleRemoveImg}
              imgHeight={0}
              imgExtrClass="w-full"
              divExtrClass="w-full"
              imgWidth={0}
              showClose={true}
            />
          </div>
        )}
      </div>
      <div className="flex flex-col w-full fixed left-0 bottom-0 py-4 px-3">
        {postText ? (
          <div className="flex w-full justify-end">
            <SmBgPurple buttonText="Post" extraClasses="bg-drk-pk text-white" />
          </div>
        ) : (
          <></>
        )}

        <div className="flex itex-center justify-between w-full mt-4 bg-white">
          <Image
            className="rounded-full shadow-md"
            src="/img/clock.svg"
            height={20}
            width={20}
            alt="clock img"
            onClick={handleSchedule}
          />
          <div className="flex items-center gap-6">
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileChange}
              multiple
              accept="image/*"
            />
            <Image
              className="rounded-full shadow-md"
              src="/img/image-plus.svg"
              height={20}
              width={20}
              alt="image plus"
              onClick={handleButtonClick}
            />
            <Image
              className="rounded-full shadow-md"
              src="/img/plus.svg"
              height={20}
              width={20}
              alt="plus img"
              onClick={() => setShowAttach(true)}
            />
          </div>
        </div>
      </div>
      <AttachmentsComp show={showAttach} hide={() => setShowAttach(false)} />
      <SchedulePostComp showSchedule={showSchedule} />
    </div>
  );
};

export default CreatePostPg;
