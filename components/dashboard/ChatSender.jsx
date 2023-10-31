import React from "react";
import styles from "../../styles/dashboard/index.module.css";
import { useRouter } from "next/router";
export const ChatSender = () => {
  const router = useRouter();
  return (
    <div
      className={`${styles.chatsender} absolute w-full bottom-0  h-20 flex items-center px-8`}
    >
      <img
        src="/images/chat/file.svg"
        className="mr-2 cursor-pointer"
        alt=""
        onClick={(e) => {
          router.push("/");
        }}
      />
      <img
        src="/images/chat/emoji.svg"
        className="mr-2 cursor-pointer"
        alt=""
        onClick={(e) => {
          router.push("/");
        }}
      />
      <input
        type="text"
        placeholder="Send your message"
        className="mx-6 flex-1 h-11 font-satoshi-medium px-5 rounded-lg outline-none"
      />
      <img
        src="/images/chat/send.svg"
        className="cursor-pointer"
        alt=""
        onClick={(e) => {
          router.push("/");
        }}
      />
    </div>
  );
};
