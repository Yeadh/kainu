import React from "react";
import styles from "../../styles/dashboard/index.module.css";
export const ChatSlider = ({ currentHeight, setmobiletouch }) => {
  return (
    <div className={`flex-1 relative ${styles.chatcontainerusers}`}>
      <div
        className={`${styles.chatsearchbarwrapper}  pt-8 absolute  z-20 w-full pb-3`}
      >
        <div
          className={`${styles.chatsearchbar}  flex h-10 rounded-full  items-center`}
        >
          <img src="/images/chat/search.svg" alt="" />
          <input
            type="text"
            placeholder="Search by name, chat etc."
            className="font-satoshi-regular h-full bg-transparent border-0 outline-none ml-2"
          />
        </div>
      </div>

      <ul
        className={`${styles.usersWrapper} pt-24`}
        style={{ height: `${currentHeight}px` }}
      >
        <li
          onClick={(e) => {
            setmobiletouch(true);
          }}
          className={`${styles.chatrow} relative mb-1 w-full flex items-center p-4`}
        >
          <img src="/images/chat/profil1.svg" alt="" className="mr-3" />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h1 className={`font-satoshi-bold`}>Courtney Henry</h1>
              <p className={`font-satoshi-medium`}>2m ago</p>
            </div>
            <p className={`${styles.messageshort} mt-1 font-satoshi-medium`}>
              Where are you buddy? 😒 They attacked us. We should more...
            </p>
          </div>
        </li>
        <li
          onClick={(e) => {
            setmobiletouch(true);
          }}
          className={`${styles.chatrow} ${styles.active} relative mb-1 w-full flex items-center p-4`}
        >
          <img src="/images/chat/profile2.svg" alt="" className="mr-3" />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h1 className={`font-satoshi-bold`}>Ronald Richards</h1>
              <p className={`font-satoshi-medium`}>2m ago</p>
            </div>
            <p className={`${styles.messageshort} mt-1 font-satoshi-medium`}>
              Where are you buddy? 😒 They attacked us. We should more...
            </p>
          </div>
        </li>
        <li
          onClick={(e) => {
            setmobiletouch(true);
          }}
          className={`${styles.chatrow} relative mb-1 w-full flex items-center p-4`}
        >
          <img src="/images/chat/profile3.svg" alt="" className="mr-3" />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h1 className={`font-satoshi-bold`}>Leslie Alexander</h1>
              <p className={`font-satoshi-medium`}>2m ago</p>
            </div>
            <p className={`${styles.messageshort} mt-1 font-satoshi-medium`}>
              Where are you buddy? 😒 They attacked us. We should more...
            </p>
          </div>
        </li>{" "}
      </ul>
    </div>
  );
};
