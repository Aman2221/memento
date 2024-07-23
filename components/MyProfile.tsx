"use client";
import React, { useState } from "react";
import Nav from "./Nav";
import data from "@/json/index.json";
import SmBgPurple from "@/Buttons/SmBgPurple";

const MyProfilePg = () => {
  const [isEdit, setIsEdit] = useState(true);
  const [profile, setProfile]: any = useState({
    full_name: "",
    mobile_name: "",
    email_address: "",
    gender: "",
    date_of_birth: "",
    batch_year: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let target: any = e.target;
    let key: any = target.name;
    setProfile({
      ...profile,
      [key]: target.value,
    });
  };

  return (
    <div>
      <Nav showBack={true} showRightSide={false} middleText="My Profile" />
      <div className="pt-20">
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <span className="font-bold text-gray-400">
              Personal Information
            </span>
            {isEdit ? (
              <button
                className="text-blue-400 text-sm font-semibold border-none outline-none"
                onClick={() => setIsEdit(false)}
              >
                Edit
              </button>
            ) : (
              <></>
            )}
          </div>

          {data.my_profile.map((item) => {
            let value = profile[item.keyName];
            return (
              <div
                key={item.keyName}
                className="flex flex-col w-full border-b mt-6"
              >
                <label className="capitalize" htmlFor="name">
                  {item.name}
                </label>
                <input
                  disabled={isEdit}
                  className="mt-2 p-1 bg-transparent"
                  type={item.type}
                  value={
                    profile[item.keyName] ? profile[item.keyName] : item.value
                  }
                  name={item.keyName}
                  onChange={handleChange}
                />
              </div>
            );
          })}
          {!isEdit ? (
            <div className="flex-center mt-4">
              <SmBgPurple
                buttonText="Submit"
                onClick={() => setIsEdit(true)}
                extraClasses="text-white bg-drk-pk"
              />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfilePg;
