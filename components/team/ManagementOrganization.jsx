/* eslint-disable @next/next/no-img-element */
import React from "react";
import TeamDetails from "./TeamDetails";
import PlayerDetailsBox from "./PlayerDetailsBox";
import MainTitle from "../common/MainTitle";

const ManagementOrganization = () => {
  const arr = [1, 2, 3];
  const teamArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="py-8">
      <TeamDetails />
      <div className="mt-10">
        <MainTitle firstWord="Management &" lastWord="Organization" />
        <div className="flex flex-wrap items-center justify-center sm:justify-between mt-8 ">
          {arr.map((obj, index) => (
            <PlayerDetailsBox key={index} />
          ))}
        </div>
      </div>
      <div className="mt-10">
        <MainTitle firstWord="Team" lastWord="Players" />
        <div className="flex flex-wrap items-center justify-center sm:justify-between mt-8 ">
          {teamArr.map((obj, index) => (
            <PlayerDetailsBox key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManagementOrganization;
