import React from "react";
import Nav from "./Nav";
import ProfileCard from "./ProfileCard";
import data from "@/json/index.json";
import Footer from "./Footer";
import AlumniSearch from "./AlumniSearch";

const ClassAlumni = () => {
  return (
    <>
      <Nav middleText="Alumni" />
      <div className="pb-20">
        <AlumniSearch />
        <ProfileCard
          headerText="Alumni’s from your class"
          data={data.college_alumni}
        />
        <ProfileCard
          headerText="Alumni’s based on your faculty"
          data={data.college_alumni}
        />
        <ProfileCard
          headerText="Alumni’s based on your class year"
          data={data.college_alumni}
        />
      </div>

      <Footer />
    </>
  );
};

export default ClassAlumni;
