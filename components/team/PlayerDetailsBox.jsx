/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React from "react";

const PlayerDetailsBox = () => {
  const navigagte = useRouter();
  return (
    <div className="w-[90%] sm:w-[49%] md:w-[32%] mb-3 h-auto  bg-[radial-gradient(1199.24%_50%_at_50%_48.72%,rgba(209,54,246,0.04)_0%,rgba(108,93,211,0.04)_100%)] rounded-[4px] py-4">
      <div className="flex gap-4 items-center">
        <img
          className="w-[80px] "
          src="/images/management-card-img-1.png"
          alt=""
        />
        <h2 className="text-[20px] sm:text-[24px] font-bebas-neue uppercase">
          Ronald Richards
        </h2>
      </div>
      <div className="bg-[linear-gradient(0deg,_rgba(108,93,211,0.00)_0.16%,_rgba(209,54,246,0.04)_96.75%)] backdrop-blur-[12px] rounded-[4px] mt-6 ">
        <div className="border-b border-[#2C2142] py-3">
          <div
            className="flex justify-between cursor-pointer  items-center  px-5 "
            onClick={(e) => {
              navigagte.push("/");
            }}
          >
            <div className="w-[50%]">
              <h2 className="text-[14px] font-bebas-neue text-[#9D99AD] leading-[100%] uppercase">
                Age
              </h2>
            </div>
            <div className=" w-[50%] pl-3">
              <span className="text-[12px] text-start font-satoshi-medium leading-[100%] text-[#9D99AD] ">
                31 years
              </span>
            </div>
          </div>
        </div>
        <div className="border-b border-[#2C2142] py-3">
          <div className="flex justify-between  items-center  px-5 ">
            <div className="w-[50%]">
              <h2 className="text-[14px] text-[#9D99AD] font-bebas-neue leading-[100%] uppercase">
                City
              </h2>
            </div>
            <div className=" w-[50%] pl-3">
              <span className="text-[12px] text-start font-satoshi-medium leading-[100%] text-[#9D99AD] ">
                Kolkwitz
              </span>
            </div>
          </div>
        </div>
        <div className="border-b border-[#2C2142] py-3">
          <div className="flex justify-between  items-center  px-5 ">
            <div className="w-[50%]">
              <h2 className="text-[14px] text-[#9D99AD] font-bebas-neue leading-[100%] uppercase">
                Country
              </h2>
            </div>
            <div className=" w-[50%] pl-3">
              <span className="text-[12px] text-start font-satoshi-medium leading-[100%] text-[#9D99AD] ">
                England
              </span>
            </div>
          </div>
        </div>
        <div className="border-b border-[#2C2142] py-3">
          <div className="flex justify-between  items-center  px-5 ">
            <div className="w-[50%]">
              <h2 className="text-[14px] text-[#9D99AD] font-bebas-neue leading-[100%] uppercase">
                Member since
              </h2>
            </div>
            <div className=" w-[50%] pl-3">
              <span className="text-[12px] text-start font-satoshi-medium leading-[100%] text-[#9D99AD] ">
                04-Jun-21
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerDetailsBox;
