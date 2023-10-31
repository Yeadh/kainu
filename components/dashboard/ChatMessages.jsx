import React from "react";
import styles from "../../styles/dashboard/index.module.css";
import { useRouter } from "next/router";
export const ChatMessages = ({ currentHeight }) => {
  const router = useRouter();
  return (
    <div
      className={`${styles.chatmessage} px-8  flex py-28 flex-col items-start`}
      style={{ height: `${currentHeight}px` }}
    >
      <div className="flex items-start w-full  mb-8">
        <img
          src="/images/chat/chatprofile.svg"
          alt=""
          className="mr-3 w-8 h-8"
        />
        <div
          className={`px-4 py-3 ${styles.message} ${styles.user} rounded-xl rounded-tl-none`}
        >
          <p className={`font-manrope`}>
            Hello Riley, don’t forget to attend meeting tomorrow.
          </p>
          <div className="flex items-center justify-end mt-2">
            <p>Today 11:54</p>
          </div>
        </div>
      </div>
      <div
        className={`px-4 py-3 ${styles.message}  mb-8 ml-auto rounded-xl rounded-br-none`}
      >
        <p className={`font-manrope`}>
          Hello! I’m sorry to hear this. Could you show me a screenshot of the
          footer?
        </p>

        <div className="flex items-center justify-end mt-2">
          <p>Today 11:54</p>
          <img src="/images/chat/tick.svg" className="ml-2" alt="" />
        </div>
      </div>

      <div className="flex items-start w-full">
        <img
          src="/images/chat/chatprofile.svg"
          alt=""
          className="mr-3 w-8 h-8"
        />
        <div
          className={`px-4 py-3 ${styles.message} ${styles.user} mb-8 rounded-xl rounded-tl-none`}
        >
          <p className={`font-manrope`}>
            Hello Riley, don’t forget to attend meeting tomorrow.
          </p>
          <img
            src="/images/chat/pic-chat.png"
            onClick={(e) => {
              router.push("/");
            }}
            className={`${styles.profilechatImg} mt-2 cursor-pointer`}
            alt=""
          />
          <div className="flex items-center justify-end mt-2">
            <p>Today 11:54</p>
          </div>
        </div>
      </div>

      <div
        className={`px-4 py-3 ${styles.message}  mb-8 ml-auto rounded-xl rounded-br-none`}
      >
        <p className={`font-manrope`}>
          Oh man ! Can not wait to see it live. Super excited
        </p>

        <div className="flex items-center justify-end mt-2">
          <p>Today 11:54</p>
          <img src="/images/chat/tick.svg" className="ml-2" alt="" />
        </div>
      </div>
      <div
        className={`px-4 py-3 ${styles.message}  mb-8 ml-auto rounded-xl rounded-br-none`}
      >
        <p className={`font-manrope`}>
          Hey Bryan, it’s Nadim from Cuboid. Following back on what we said
          early, we have made some improvements so please update your
          application to get fix the problem. Thanks
        </p>

        <div className="flex items-center justify-end mt-2">
          <p>Today 11:54</p>
          <img src="/images/chat/tick.svg" className="ml-2" alt="" />
        </div>
      </div>
    </div>
  );
};
