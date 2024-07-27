"use client";
import React, { useState } from "react";
import Nav from "./Nav";
import ProfileCard from "./ProfileCard";
import data from "@/json/index.json";
import AlumniSearch from "./AlumniSearch";

const ClassAlumni = () => {
  const [alumniData, setAlumniData] = useState({
    fromClass: data.college_alumni,
    fromFaculty: data.college_alumni,
    fromClassYear: data.college_alumni,
  });

  const [searchYear, setSearchYear] = useState("");

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    let target: any = e.target;
    let value = target.value.toLowerCase();
    if (value.length > 3) {
      setAlumniData({
        fromClass: data.college_alumni.filter((i) =>
          i.name.toLowerCase().includes(value)
        ),
        fromFaculty: data.college_alumni.filter((i) =>
          i.name.toLowerCase().includes(value)
        ),
        fromClassYear: data.college_alumni.filter((i) =>
          i.name.toLowerCase().includes(value)
        ),
      });
    }
  };

  const handleSearchYear = (year: string) => {
    setSearchYear(year);
    setAlumniData({
      fromClass: data.college_alumni.filter((i) => i.batch.includes(year)),
      fromFaculty: data.college_alumni.filter((i) => i.batch.includes(year)),
      fromClassYear: data.college_alumni.filter((i) => i.batch.includes(year)),
    });
  };

  return (
    <>
      <Nav middleText="Alumni" />
      <div className="pb-20">
        <AlumniSearch
          searchYear={searchYear}
          handleInputChange={handleInputChange}
          handleSearchYear={handleSearchYear}
        />
        {alumniData.fromClass.length ||
        alumniData.fromFaculty.length ||
        alumniData.fromClassYear.length ? (
          <>
            <ProfileCard
              headerText="Alumni’s from your class"
              data={alumniData.fromClass}
            />
            <ProfileCard
              headerText="Alumni’s based on your faculty"
              data={alumniData.fromFaculty}
            />
            <ProfileCard
              headerText="Alumni’s based on your class year"
              data={alumniData.fromClassYear}
            />
          </>
        ) : (
          <div className="w-full flex-center my-10">
            <span className="text-center text-lg">No data found</span>
          </div>
        )}
      </div>
    </>
  );
};

export default ClassAlumni;
