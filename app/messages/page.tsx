import Layout from "@/components/Layout";
import MessagesPg from "@/components/Messages";
import React from "react";

const Messages = () => {
  return (
    <Layout showFooter={true}>
      <MessagesPg />
    </Layout>
  );
};

export default Messages;
