import React, { useState } from "react";
import GalleryCard from "./GalleryCard";
import { Gallery } from "./common/Helper2";

const Gallerys = () => {
  const [active, setActive] = useState(1);
  return (
    <>
      <div className="bg-neutral-bg-04 w-full Gallerys">
        <div className=" w-full mx-auto px-3 xl:px-0 pt-[40px]">
          <div className="flex justify-between md:flex-row flex-col gap-4 md:gap-0 items-center">
            <h2 className="text-white font-bebas-neue text-[32px] font-bold leading-[32px] uppercase">
              Esther’s <span className="text-pink">Gallery</span>
            </h2>
            <div className="flex gap-3 overflow-auto max-w-[380px] w-full">
              <button
                className={`text-[#9D99AD] group-hover:text-white font-satoshi-medium font-medium leading-[21px] p-[9px_20px] rounded-[20px] border hover:border-pink border-[gray] group ${
                  active == 1 && "active"
                }`}
                onClick={(e) => {
                  setActive(1);
                }}
              >
                All
              </button>
              <button
                className={`text-[#9D99AD] group-hover:text-white font-satoshi-medium font-medium leading-[21px] p-[9px_20px] rounded-[20px] border hover:border-pink border-[gray] group ${
                  active == 2 && "active"
                }`}
                onClick={(e) => {
                  setActive(2);
                }}
              >
                Photos
              </button>
              <button
                className={`text-[#9D99AD] group-hover:text-white font-satoshi-medium font-medium leading-[21px] p-[9px_20px] rounded-[20px] border hover:border-pink border-[gray] group ${
                  active == 3 && "active"
                }`}
                onClick={(e) => {
                  setActive(3);
                }}
              >
                Videos
              </button>
              <button
                className={`text-[#9D99AD] group-hover:text-white font-satoshi-medium font-medium leading-[21px] p-[9px_20px] rounded-[20px] border hover:border-pink border-[gray] group ${
                  active == 4 && "active"
                }`}
                onClick={(e) => {
                  setActive(4);
                }}
              >
                Streams
              </button>
            </div>
          </div>
          <div className="mt-[48px] grid grid-cols-1 md:grid-cols-2 gap-[24px]">
            {Gallery.map((items, index) => (
              <div key={index}>
                <GalleryCard items={items} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallerys;
