/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Coins } from "./Icons";

const UserBlock = () => {
  return (
    <button className="coins flex items-center text-sm font-source-code font-medium leading-5 text-neutral-primary gap-1 rounded-[20px] w-[114px] py-2 relative">
      <span className="p-1">
        <Coins />
      </span>
      <span className="ml-[2px] font-satoshi-regular">784</span>
      <img
        className="w-12 absolute right-0"
        src="/images/coins.png"
        alt="coin"
      />
    </button>
  );
};

export default UserBlock;
