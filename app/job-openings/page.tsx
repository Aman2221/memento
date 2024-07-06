import JobOpeningsPg from "@/components/JobOpenings";
import Layout from "@/components/Layout";
import React from "react";

const JobOpenings = () => {
  return (
    <Layout showFooter={true}>
      <JobOpeningsPg />
    </Layout>
  );
};

export default JobOpenings;
