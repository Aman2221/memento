import React from "react";
import Nav from "./Nav";
import SmBgPurple from "@/Buttons/SmBgPurple";

const SponsersPg = () => {
  return (
    <div>
      <Nav middleText="Sponsers" />
      <div className="py-20">
        <span className="text-sm">Contribute for a Social Causes</span>
        <h3 className="text-lg font-medium">Thank you dear Alumnus/Alumna</h3>
        <span className="text-sm">
          For expressing your interest in contribution towards the Alumni Fund
          for the Welfare of Economically challenged Students
        </span>
        <div className="mt-10">
          <span className="text-sm text-gray-500">
            Below are the details of the contribution from our Distinguished
            Alumni’s so for
          </span>
          <table className="table-auto text-base w-full mt-4">
            <thead className="border-b">
              <tr className="">
                <th className="text-start p-1">Alumni</th>
                <th className="text-start p-1">Dept</th>
                <th className="text-start p-1">Batch</th>
                <th className="text-start p-1">Amount</th>
              </tr>
            </thead>
            <tbody className="p-2">
              <tr className="">
                <td>The Sliding</td>
                <td>Malcolm </td>
                <td>1961</td>
                <td>1000</td>
              </tr>
              <tr className="">
                <td>Witchy Woman</td>
                <td>The Eagles</td>
                <td>1972</td>
                <td>2000</td>
              </tr>
              <tr>
                <td>Shining Star</td>
                <td>Earth, Wind</td>
                <td>1975</td>
                <td>3000</td>
              </tr>
              <tr>
                <td>Testing</td>
                <td>Earth, Wind</td>
                <td>1975</td>
                <td>4000</td>
              </tr>
            </tbody>
          </table>
          <div className="flex-center mt-10">
            <SmBgPurple
              buttonText="Contribute"
              extraClasses="text-white bg-drk-pk"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsersPg;
