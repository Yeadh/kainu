import React, { useState } from "react";
import styles from "../../styles/dashboard/index.module.css";
import { HomeNewSlider } from "./HomeNewSlider";
export const HomeBasicInfo = () => {
  const [active, setActive] = useState(1);
  return (
    <div
      className={`${styles.HomeBasicInfowrapper} HomeBasicInfowrapper mt-20`}
    >
      <div className={`${styles.HomeBasicInfo}  flex items-center`}>
        <div>
          <img
            src="https://images.unsplash.com/photo-1624395213232-ea2bcd36b865?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2FkJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>
        <button className={`px-5 py-3 rounded ml-4 font-satoshi-medium`}>
          Stream
        </button>
        <button className={`px-5 py-3 rounded ml-4`}>To Donate</button>
        <div className={`flex items-center ml-4`}>
          <img src="/images/home/search-term.svg" alt="" />
          <p className={`mx-2 font-satoshi-medium`}>Search: Team</p>
          <img src="/images/home/pen.svg" alt="" />
        </div>
      </div>
      <ul className={`flex items-center mt-5`}>
        <li
          className={`py-2 mr-6 font-satoshi-medium cursor-pointer ${
            active == 1 && styles.active
          }`}
          onClick={(e) => {
            setActive(1);
          }}
        >
          Basic Information
        </li>
        <li
          className={`py-2 mr-6 font-satoshi-medium cursor-pointer ${
            active == 2 && styles.active
          }`}
          onClick={(e) => {
            setActive(2);
          }}
        >
          Statistics
        </li>
        <li
          className={`py-2 mr-6 font-satoshi-medium cursor-pointer ${
            active == 3 && styles.active
          }`}
          onClick={(e) => {
            setActive(3);
          }}
        >
          Team
        </li>
        <li
          className={`py-2 mr-6 font-satoshi-medium cursor-pointer ${
            active == 4 && styles.active
          }`}
          onClick={(e) => {
            setActive(4);
          }}
        >
          Achievement
        </li>
        <li
          className={`py-2 font-satoshi-medium cursor-pointer ${
            active == 5 && styles.active
          }`}
          onClick={(e) => {
            setActive(5);
          }}
        >
          Friends
        </li>
      </ul>

      <HomeNewSlider />
    </div>
  );
};
