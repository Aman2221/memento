import HomePage from "@/components/Home";
import Layout from "@/components/Layout";
import React from "react";

const Home = () => {
  return (
    <Layout showFooter={true}>
      <HomePage />
    </Layout>
  );
};

export default Home;
