import React from "react";
import styles from "../../styles/dashboard/index.module.css";
export const ChatHeader = () => {
  return (
    <div
      className={`${styles.chatheader} absolute w-full top-0 flex items-center justify-between px-8`}
    >
      <div className="flex items-center">
        <img src="/images/chat/profile3.svg" alt="" />
        <div className={`ml-3`}>
          <h1 className={`font-bebas-neue`}>Alb ert Flores</h1>
          <p className={`flex items-center mt-1 font-satoshi-regular`}>
            <span className="block w-2 h-2 rounded-full mr-2"></span>
            Online
          </p>
        </div>
      </div>
      <img src="/images/chat/dots.svg" alt="" />
    </div>
  );
};
